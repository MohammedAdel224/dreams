abstract class Track{
    #track: HTMLDivElement;

    constructor(element: HTMLDivElement){
        this.#track = element;
    }

    get width(): number{
        const style = getComputedStyle(this.#track);
        const width = style.getPropertyValue('width');
        return width ? parseFloat(width) : this.#track.clientWidth;
    }

    toElement(): HTMLDivElement{
        return this.#track;
    }

    abstract fill(...args: any[]): void;
}

export default Track;
