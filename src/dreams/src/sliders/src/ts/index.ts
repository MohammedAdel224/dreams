import '../css/sliders.css'

import OneSideSlider from "./oneSideSlider";

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.one-side-slider').forEach((oneSideSlider) => {
        try{
            const slider: HTMLDivElement = oneSideSlider as HTMLDivElement;
            new OneSideSlider(slider);
        }
        catch(error){
            console.error(error);
        }
    });
});
