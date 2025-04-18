
;// ./src/dreams/src/helpers/util.ts
function toPixel(value, context = document.documentElement) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.visibility = "hidden";
    div.style.width = value;
    context.appendChild(div);
    let pixels = div.offsetWidth;
    context.removeChild(div);
    return `${pixels}px`;
}
function assertBetween0And100(number) {
    if (typeof number !== "number" || isNaN(number)) {
        throw new Error("Invalid input: Value must be a number.");
    }
    if (number < 0 || 100 < number) {
        throw new Error("Invalid input: Number must be between 0 and 100.");
    }
}

;// ./src/dreams/src/sliders/src/ts/track.ts
class Track {
    track;
    constructor(element) {
        this.track = element;
    }
    get width() {
        const style = getComputedStyle(this.track);
        const width = style.getPropertyValue('width');
        return width ? parseFloat(width) : this.track.clientWidth;
    }
    toElement() {
        return this.track;
    }
}
/* harmony default export */ const track = (Track);

;// ./src/dreams/src/sliders/src/ts/oneSideTrack.ts


class OneSideTrack extends track {
    fill(percent) {
        assertBetween0And100(percent);
        const track = this.toElement();
        track.style.setProperty('--fill-percent', `${percent}%`);
    }
}
/* harmony default export */ const oneSideTrack = (OneSideTrack);

;// ./src/dreams/src/sliders/src/ts/thumb.ts

class Thumb {
    slider;
    constructor(slider) {
        this.slider = slider;
    }
    get width() {
        const style = getComputedStyle(this.slider.toElement());
        const thumbWidth = style.getPropertyValue('--thumb-width');
        const thumbBorderWidth = style.getPropertyValue('--thumb-border-width');
        return parseFloat(toPixel(thumbWidth)) + 2 * parseFloat(toPixel(thumbBorderWidth));
    }
}
/* harmony default export */ const thumb = (Thumb);

;// ./src/dreams/src/sliders/src/ts/slider.ts

class Slider {
    slider;
    thumb;
    constructor(element) {
        this.slider = element;
        this.thumb = new thumb(this);
    }
    toElement() {
        return this.slider;
    }
    addEventListener(type, listener) {
        this.slider.addEventListener(type, listener);
    }
    setValue(value) {
        this.slider.value = value.toString();
    }
    get value() {
        return Number(this.slider.value);
    }
    get min() {
        return Number(this.slider.min) | 0;
    }
    get max() {
        return Number(this.slider.max) | 100;
    }
    get width() {
        const style = getComputedStyle(this.slider);
        const width = style.getPropertyValue('width');
        return width ? parseFloat(width) : this.slider.clientWidth;
    }
    get thumbWidth() {
        return this.thumb.width;
    }
}
/* harmony default export */ const ts_slider = (Slider);

;// ./src/dreams/src/sliders/src/ts/tooltip.ts

class Tooltip {
    tooltip;
    constructor(element) {
        this.tooltip = element;
    }
    setValue(value) {
        this.tooltip.textContent = value.toString();
    }
    setLeft(value) {
        this.tooltip.style.left = `${value}px`;
    }
    get width() {
        const style = getComputedStyle(this.tooltip);
        const thumbWidth = style.getPropertyValue('width');
        return parseFloat(toPixel(thumbWidth));
    }
}
/* harmony default export */ const ts_tooltip = (Tooltip);

;// ./src/dreams/src/sliders/src/ts/oneSideSlider.ts



class OneSideSlider {
    slider;
    track;
    tooltip;
    constructor(element) {
        const track = element.querySelector(".track");
        const slider = element.querySelector("input.slider[type=range]");
        const tooltip = element.querySelector(".slider-tooltip");
        this.track = new oneSideTrack(track);
        this.slider = new ts_slider(slider);
        this.tooltip = tooltip ? new ts_tooltip(tooltip) : null;
        this.init();
    }
    init() {
        this.slider.addEventListener("input", () => { this.updateSlider(); });
        const resizeObserver = new ResizeObserver(() => { this.updateSlider(); });
        resizeObserver.observe(this.slider.toElement().parentElement);
        this.updateSlider();
    }
    updateSlider() {
        this.fillTrack();
        this.updateTooltip();
    }
    fillTrack() {
        const trackLength = this.track.width;
        if (trackLength === 0)
            throw new Error('track lingth is 0');
        const thumbTrackLength = trackLength - this.slider.thumbWidth;
        const percent = (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min);
        const offset = (trackLength - thumbTrackLength) / (2 * trackLength);
        const adjustedPercent = thumbTrackLength / trackLength * percent + offset;
        this.track.fill(adjustedPercent * 100);
    }
    updateTooltip() {
        if (this.tooltip) {
            this.tooltip.setValue(this.slider.value);
            const trackLength = this.track.width;
            const thumbWidth = this.slider.thumbWidth;
            const tooltipTrackLength = trackLength - thumbWidth;
            const percent = (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min);
            const newLeft = thumbWidth / 2 + percent * tooltipTrackLength;
            this.tooltip.setLeft(newLeft);
        }
    }
}
/* harmony default export */ const ts_oneSideSlider = (OneSideSlider);

;// ./src/dreams/src/sliders/src/ts/index.ts


function initializeSliders() {
    document.querySelectorAll('.one-side-slider').forEach((oneSideSlider) => {
        if (!oneSideSlider._initialized) { // Prevent duplicate initialization
            try {
                new ts_oneSideSlider(oneSideSlider);
                oneSideSlider._initialized = true; // Mark as initialized
            }
            catch (error) {
                console.error("Slider initialization error:", error);
            }
        }
    });
}
// Run on initial load
document.addEventListener("DOMContentLoaded", initializeSliders);
// Observe the DOM for dynamically added sliders (for Angular support)
const observer = new MutationObserver(() => initializeSliders());
observer.observe(document.body, { childList: true, subtree: true });

