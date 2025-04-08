import { toPixel } from "../../../helpers/util";

class Tooltip{
    private tooltip;

    constructor(element: HTMLElement){
        this.tooltip = element;
    }

    setValue(value: number){
        this.tooltip.textContent = value.toString();
    }

    setLeft(value: number){
        this.tooltip.style.left = `${value}px`;
    }

    get width(): number{
        const style = getComputedStyle(this.tooltip);
        const thumbWidth = style.getPropertyValue('width');
        return parseFloat(toPixel(thumbWidth));
    }
}

export default Tooltip;
