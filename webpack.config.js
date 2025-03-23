const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// Function to get all package names in my-framework/src
const getPackages = () => {
    const packagesDir = path.resolve(__dirname, 'src/dreams/src');
    return fs.readdirSync(packagesDir)
        .filter(pkg => fs.statSync(path.join(packagesDir, pkg)).isDirectory() && pkg !== 'helpers');
};

const packages = getPackages();

// Create a dummy.js file if it doesn't exist
const dummyFilePaht = path.resolve(__dirname, 'src/dreams/src');
const dummyFile = path.resolve(__dirname, `${dummyFilePaht}/dummy.js`);
if (!fs.existsSync(dummyFile)) {
    fs.writeFileSync(dummyFile, '');
}

const cleanDistConfig = (pkgPath) => ({
    entry: dummyFile, // Correctly placed outside `output`
    output: {
        path: pkgPath,
        filename: 'dummy.js' // Prevent Webpack from complaining about missing filename
    },
    mode: 'none',
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!css/**', '!js/**'],
        }),
        {
            apply: (compiler) => {
                compiler.hooks.done.tap('RemoveDummyFile', () => {
                    if (fs.existsSync(dummyFile)) {
                        fs.unlinkSync(dummyFile); // 🚀 Delete dummy.js after cleaning
                    }
                    if (fs.existsSync(path.resolve(__dirname, `${pkgPath}/dummy.js`))) {
                        fs.unlinkSync(path.resolve(__dirname, `${pkgPath}/dummy.js`)); // 🚀 Delete dummy.js after cleaning
                    }
                });
            },
        },
    ],
})

const createPackageConfig = (pkg, minify) => ({
    entry: {
        [`${pkg}`]: `./src/dreams/src/${pkg}/src/ts/index.ts`
    },
    output: {
        filename: minify ? '[name].min.js' : '[name].js',
        path: path.resolve(__dirname, `src/dreams/src/${pkg}/dist/js`),
        pathinfo: false, // Disable file path comments
    },
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: minify ? '../css/[name].min.css' : '../css/[name].css' })
    ],
    optimization: minify
    ?   {
            minimize: true,
            minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
        }
    :   {
            minimize: false,
        },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            helpers: path.resolve(__dirname, 'src/dreams/src/helpers/')
        }
    },
    mode: 'production',
});

const myFrameworkConfig = (minify) => ({
    entry: Object.fromEntries(packages.map(pkg => [pkg, `./src/dreams/src/${pkg}/src/ts/index.ts`])),
    output: {
        filename: minify ? 'dreams.min.js' : 'dreams.js',
        path: path.resolve(__dirname, 'src/dreams/dist/js'),
        pathinfo: false, // Disable file path comments
    },
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: minify ? '../css/dreams.min.css' : '../css/dreams.css' })
    ],
    optimization: minify
    ?   {
            minimize: true,
            minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
        }
    :   {
            minimize: false,
        },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            helpers: path.resolve(__dirname, 'src/dreams/src/helpers/')
        }
    },
    mode: 'production',
});

module.exports = [
    ...packages.map(pkg => cleanDistConfig(path.resolve(__dirname, `src/dreams/src/${pkg}/dist`))),
    cleanDistConfig(path.resolve(__dirname, `src/dreams/dist`)),
    ...packages.map(pkg => createPackageConfig(pkg, true)),
    ...packages.map(pkg => createPackageConfig(pkg, false)),
    myFrameworkConfig(true),
    myFrameworkConfig(false),
    // cleanDistConfig(dummyFilePaht),
];

// Delete dummy.js file if it exist
// if (fs.existsSync(dummyFile)) {
//     fs.unlinkSync(dummyFile); // 🚀 Delete dummy.js after cleaning
// }
