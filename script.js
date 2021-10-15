const backgroundcolor = document.querySelector("body");
const backgroundWhite = document.querySelector(".background-color");
const redList = document.querySelector(".redli");
const orangeList = document.querySelector(".orangeli");
const purpleList = document.querySelector(".purpleli");
const greenList = document.querySelector(".greenli");

backgroundWhite.addEventListener("click", function (x) {
    backgroundcolor.classList.add("background-color");
    backgroundcolor.classList.remove("redli");
    backgroundcolor.classList.remove("orangeli");
    backgroundcolor.classList.remove("purpleli");
    backgroundcolor.classList.remove("greenli");
    document.getElementById("html").innerHTML = "HOME";
});
redList.addEventListener("click", function (x) {
    backgroundcolor.classList.add("redli");
    backgroundcolor.classList.remove("background-color");
    backgroundcolor.classList.remove("orangeli");
    backgroundcolor.classList.remove("purpleli");
    backgroundcolor.classList.remove("greenli");
    document.getElementById("html").innerHTML = "RED";
});
orangeList.addEventListener("click", function (x) {
    backgroundcolor.classList.add("orangeli");
    backgroundcolor.classList.remove("background-color");
    backgroundcolor.classList.remove("redli");
    backgroundcolor.classList.remove("purpleli");
    backgroundcolor.classList.remove("greenli");
    document.getElementById("html").innerHTML = "ORANGE";
});
purpleList.addEventListener("click", function (x) {
    backgroundcolor.classList.add("purpleli");
    backgroundcolor.classList.remove("background-color");
    backgroundcolor.classList.remove("orangeli");
    backgroundcolor.classList.remove("redli");
    backgroundcolor.classList.remove("greenli");
    document.getElementById("html").innerHTML = "PURPLE";
});
greenList.addEventListener("click", function (x) {
    backgroundcolor.classList.add("greenli");
    backgroundcolor.classList.remove("background-color");
    backgroundcolor.classList.remove("orangeli");
    backgroundcolor.classList.remove("purpleli");
    backgroundcolor.classList.remove("redli");
    document.getElementById("html").innerHTML = "GREEN";
});