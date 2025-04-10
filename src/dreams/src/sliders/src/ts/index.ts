import '../css/sliders.css';
import OneSideSlider from "./oneSideSlider";

function initializeSliders() {
    document.querySelectorAll('.one-side-slider').forEach((element) => {
        const oneSideSlider = element as HTMLDivElement;

        if (!(oneSideSlider as any)._initialized) {
            try {
                const sliderInstance = new OneSideSlider(oneSideSlider);
                (oneSideSlider as any)._initialized = true;
                (oneSideSlider as any)._slider = sliderInstance;

                // 👇 Observe all ancestors for visibility changes
                let parent = oneSideSlider.parentElement;
                const observedAncestors = new Set<HTMLElement>();

                while (parent) {
                    if (!observedAncestors.has(parent)) {
                        const observer = new MutationObserver(() => {
                            if (oneSideSlider.offsetParent !== null) {
                                sliderInstance.updateTooltip();
                            }
                        });

                        observer.observe(parent, {
                            attributes: true,
                            attributeFilter: ['class', 'style']
                        });

                        observedAncestors.add(parent);
                    }
                    parent = parent.parentElement;
                }

            } catch (error) {
                console.error("Slider initialization error:", error);
            }
        }
    });
}

// Run on initial load
document.addEventListener("DOMContentLoaded", initializeSliders);

// Observe dynamically added sliders (e.g., Angular routing)
const observer = new MutationObserver(() => initializeSliders());
observer.observe(document.body, { childList: true, subtree: true });
