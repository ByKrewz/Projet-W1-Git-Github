"use strict"

function getScrollPercent() {
    var h = document.querySelector('main'), 
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]) / ((h[sh]) - h.clientHeight) * 100;
}

document.querySelector("main").addEventListener("scroll", (e) => {
    console.log(getScrollPercent())
    document.querySelector(".scene").style.transform = `rotateY(${getScrollPercent() / 100 * 240}deg)`
    // document.querySelector(".scene").style.transform = `rotateY(${getScrollPercent() / 100 * 240}deg) translateY(${getScrollPercent() / 100 * 900}px)`
    // console.log(`-${getScrollPercent() * 2}px`)
    // document.querySelector(".scene").style.top = `-${getScrollPercent() / 100 * 300}px`

    // n2 : top -80px 
    // n3 : top 160px 
})