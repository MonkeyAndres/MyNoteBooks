"use strict";

//Acordeon de categorias
let accordion = document.querySelectorAll("aside>p");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function(){
    let elem = this.nextElementSibling;
    if (elem.style.display == "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  }
}

//Animacion del sidebar
let menu = document.querySelector(".material-icons");

menu.onclick = function(){
  if(window.innerWidth <= 865){
    let elem = document.querySelector("aside");
    let left = window.getComputedStyle(elem).left;

    console.log(left)

    if (left == "-300px"){elem.style.left = 0}
    else {elem.style.left = "-300px"}
  }
}

//Inicio highlight.pack.js
window.onload = startHighlight();
window.onhaschange = startHighlight();

function startHighlight() {
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
}
