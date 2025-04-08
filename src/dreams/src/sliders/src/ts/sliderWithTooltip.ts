import Tooltip from "./tooltip";
import Slider from "./slider";

class SliderWithTooltip extends Slider{
    private tooltip;

    constructor(sliderElement: HTMLInputElement, tooltipElement: HTMLElement){
        super(sliderElement);
        this.tooltip = new Tooltip(tooltipElement);
        this.init();
    }

    private init(){
        const slider = this.toElement();
        slider.addEventListener("input", ()=>{this.updateTooltip();});
        window.addEventListener("resize", ()=>{this.updateTooltip();});
        this.updateTooltip();
    }

    override setValue(value: number){
        super.setValue(value);
        this.updateTooltip();
    }

    private updateTooltip(){
        this.tooltip.setValue(this.value);
        this.updateTooltipLeft();
    }

    private updateTooltipLeft(){
        const thumbWidth = this.thumbWidth;
        const percentage = (this.value - this.min) / (this.max - this.min);
        const newLeft = percentage * (this.width - thumbWidth) + thumbWidth / 2;
        this.tooltip.setLeft(newLeft);
    }
}

export default SliderWithTooltip;
