"use strict";

const Div = document.querySelectorAll(".actor-box");

Div.forEach(function (item) {
 item.addEventListener("click",function(){
    this.classList.toggle("actor");
 })
});
