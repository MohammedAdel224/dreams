import '../css/sliders.css';
import OneSideSlider from "./oneSideSlider";

function initializeSliders() {
    document.querySelectorAll('.one-side-slider').forEach((oneSideSlider) => {
        if (!(oneSideSlider as any)._initialized) {  // Prevent duplicate initialization
            try {
                new OneSideSlider(oneSideSlider as HTMLDivElement);
                (oneSideSlider as any)._initialized = true; // Mark as initialized
            } catch (error) {
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
