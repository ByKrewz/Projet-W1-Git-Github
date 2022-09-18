"use strict"

function getScrollPercent() {
    var h = document.querySelector('main'), 
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]) / ((h[sh]) - h.clientHeight) * 100;
}

document.querySelector("main").addEventListener("scroll", (e) => {
    document.querySelector(".scene").style.transform = `rotateY(${getScrollPercent() / 100 * 240}deg)`
})