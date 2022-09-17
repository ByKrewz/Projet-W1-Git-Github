"use strict"

var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByClassName("btn").classList.add(className);
  } else {
    document.getElementsByClassName("btn").classList.remove(className);
  }
};