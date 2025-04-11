import OneSideTrack from "./oneSideTrack";
import Slider from "./slider";
import Tooltip from "./tooltip";

class OneSideSlider{
    private slider: Slider;
    private track: OneSideTrack;
    private tooltip: Tooltip | null;

    constructor(element: HTMLDivElement){
        const track = element.querySelector(".track") as HTMLDivElement;
        const slider = element.querySelector("input.slider[type=range]") as HTMLInputElement;
        const tooltip = element.querySelector(".slider-tooltip") as HTMLLIElement | null;

        this.track = new OneSideTrack(track);
        this.slider = new Slider(slider);
        this.tooltip = tooltip? new Tooltip(tooltip) : null;

        this.init();
    }

    private init(){
        this.slider.addEventListener("input", ()=>{this.updateSlider();});
        window.addEventListener("resize", ()=>{this.updateSlider();});
        this.updateSlider();
    }

    private updateSlider(){
        this.fillTrack();
        this.updateTooltip();
    }

    private fillTrack(){
        const trackLength = this.track.width;
        if(trackLength === 0) throw new Error('track lingth is 0');
        const thumbTrackLength = trackLength - this.slider.thumbWidth;
        const percent = (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min);
        const offset = (trackLength - thumbTrackLength) / (2 * trackLength);
        const adjustedPercent = thumbTrackLength / trackLength * percent + offset;

        this.track.fill(adjustedPercent * 100);
    }

    updateTooltip(){
        if(this.tooltip){
            this.tooltip.setValue(this.slider.value);

            const trackLength = this.track.width;
            const thumbWidth = this.slider.thumbWidth;
            const tooltipTrackLength = trackLength - thumbWidth;
            const percent = (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min);
            const newLeft = thumbWidth/2 + percent*tooltipTrackLength;

            this.tooltip.setLeft(newLeft);
        }
    }
}

export default OneSideSlider;
