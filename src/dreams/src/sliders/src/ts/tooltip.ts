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
}

export default Tooltip;
