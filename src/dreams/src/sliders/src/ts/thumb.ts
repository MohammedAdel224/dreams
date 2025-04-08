import { toPixel } from "../../../helpers/util";
import Slider from "./slider";

export class Thumb{
    private slider

    constructor(slider: Slider){
        this.slider = slider;
    }

    get width(): number{
        const style = getComputedStyle(this.slider.toElement());
        const thumbWidth = style.getPropertyValue('--thumb-width');
        const thumbBorderWidth = style.getPropertyValue('--thumb-border-width');
        return parseFloat(toPixel(thumbWidth)) + 2 * parseFloat(toPixel(thumbBorderWidth));
    }
}

export default Thumb;
