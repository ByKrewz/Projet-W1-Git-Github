"use strict"

var className = "inverted";
var scrollTrigger = 720;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByTagName("button")[0].classList.add(className);
  } else {
    document.getElementsByTagName("button")[0].classList.remove(className);
  }
};
