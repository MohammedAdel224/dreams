import { Clipboard } from '@angular/cdk/clipboard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(
        private clipboard: Clipboard,
        private http: HttpClient,
    ) { }

    copyText(text: string){
        this.clipboard.copy(text);
    }

    readFile(path: string): Observable<string>{
        return this.http.get(path, {responseType: 'text'});
    }

    private version = "1.1.3";
    cdn = {
        css: `https://cdn.jsdelivr.net/gh/MohammedAdel224/dreams@v${this.version}/src/dreams/dist/css/dreams.min.css`,
        js: `https://cdn.jsdelivr.net/gh/MohammedAdel224/dreams@v${this.version}/src/dreams/dist/js/dreams.min.js`,
    }

    download ={
        dist:`https://github.com/MohammedAdel224/dreams/releases/download/v${this.version}/dreams-${this.version}-dist.zip`,
        src:`https://github.com/MohammedAdel224/dreams/releases/download/v${this.version}/dreams-${this.version}.zip`
    }

    convertHTMLTextToHTML(text: string){
        text = text.replaceAll('<', '&lt;');
        text = text.replaceAll('>', '&gt;');
        return text;
    }

    highlightCssColors(css: string): string {
        return css.replace(/(#(?:[0-9a-fA-F]{3}){1,2}|rgba?\(.*?\)|hsla?\(.*?\))/g, (color) => {
            return `<span class="color" style="background-color: ${color};"></span> ${color}`;
        });
    }

    scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
