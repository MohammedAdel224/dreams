import OneSideTrack from "./oneSideTrack";
import Slider from "./slider";

class OneSideSlider{
    private slider: Slider;
    private track: OneSideTrack;

    constructor(element: HTMLDivElement){
        const track = element.querySelector(".track") as HTMLDivElement;
        const slider = element.querySelector("input.slider[type=range]") as HTMLInputElement;

        this.track = new OneSideTrack(track);
        this.slider = new Slider(slider);

        this.#init(track, slider);
    }

    #init(track: HTMLDivElement, slider: HTMLInputElement){
        this.slider.addEventListener("input", ()=>{this.#fillTrack();});
        this.#fillTrack();
    }

    #fillTrack(){
        const trackLength = this.track.width;
        if(trackLength === 0) throw new Error('track lingth is 0');
        const thumbTrackLength = this.track.width - this.slider.thumbWidth;
        const percent = (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min);
        const offset = (trackLength - thumbTrackLength) / (2 * trackLength);
        const adjustedPercent = thumbTrackLength / trackLength * percent + offset;
        this.track.fill(adjustedPercent * 100);
    }
}

export default OneSideSlider;
