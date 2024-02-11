"use strict";



const div2 = document.getElementById("actor-box1");

function Getuser() {
  const reqsuit = new XMLHttpRequest();
  reqsuit.open("GET", "https://reqres.in/api/unknown");
  reqsuit.addEventListener("load", function () {
    const MosuliInfo = this.responseText;
    const mosuliInfo2 = JSON.parse(MosuliInfo);
    console.log(mosuliInfo2);
    const Ul = document.createElement("ul");
    Ul.style.fontSize = "16px";
    Ul.style.color = "#660033";
    Ul.style.backgroundColor = "#ff732e";

    mosuliInfo2.data.forEach((element) => {
      const Li = document.createElement("Li");
      // const Li = document.getElementById("Li");
      Li.textContent = element.name + element.color;
      Ul.appendChild(Li);
    });
    div2.appendChild(Ul);
  });
  reqsuit.send();
}

Getuser();
const Div = document.querySelectorAll(".actor-box");

Div.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("actor");
  });
});