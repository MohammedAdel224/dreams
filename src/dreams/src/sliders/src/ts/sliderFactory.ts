import Slider from "./slider";
import SliderWithTooltip from "./sliderWithTooltip";

class SliderFactory{
    static createSlider(slider: HTMLInputElement, tooltip: HTMLElement){
        if(tooltip){
            return new SliderWithTooltip(slider, tooltip);
        }
        else{
            return new Slider(slider);
        }
    }
}

export default SliderFactory;
