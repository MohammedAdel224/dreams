import Thumb from "./thumb";

class Slider{
    protected slider: HTMLInputElement;
    private thumb;

    constructor(element: HTMLInputElement){
        this.slider = element;
        this.thumb = new Thumb(this);
    }

    toElement(): HTMLInputElement{
        return this.slider;
    }

    addEventListener(type: any, listener: (this: HTMLInputElement, ev: any) => any){
        this.slider.addEventListener(type, listener);
    }

    setValue(value: number){
        this.slider.value = value.toString();
    }

    get value(): number{
        return Number(this.slider.value);
    }

    get min(): number{
        return Number(this.slider.min) | 0;
    }

    get max(): number{
        return  Number(this.slider.max) | 100;
    }

    get width(): number{
        const style = getComputedStyle(this.slider);
        const width = style.getPropertyValue('width');
        return width ? parseFloat(width) : this.slider.clientWidth;
    }

    get thumbWidth(): number{
        return this.thumb.width;
    }
}

export default Slider;
