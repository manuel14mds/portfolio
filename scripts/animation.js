import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTraceker = document.querySelector(".scroll-tracker")

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets:[CSS.percent(0), CSS.percent(98)]
})

scrollTraceker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)