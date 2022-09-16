"use strict"

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener("scroll", (e) => {
    console.log(getScrollPercent())
    document.querySelector(".scene").style.transform = `rotateY(${getScrollPercent() / 100 * 270}deg) translateY(${getScrollPercent() / 100 * 900}px)`
    // console.log(`-${getScrollPercent() * 2}px`)
    // document.querySelector(".scene").style.top = `-${getScrollPercent() / 100 * 300}px`

    // n2 : top -80px 
    // n3 : top 160px 
})