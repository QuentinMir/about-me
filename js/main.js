"use strict";

/************************
 * Variables
 * ********************/
const NAVLINKS = document.querySelectorAll(".nav-link");
const SVGS = document.querySelectorAll(".icon-shape");

/************************
 * Fonctions
 * ********************/
//Highlight page actuelle
function activateNav() {
  NAVLINKS.forEach((navlink) => {
    navlink.classList.remove("active");
  });
  this.classList.add("active");
}

function popOver() {
  this.insertAdjacentHTML(
    "beforeend",
    `<div class="popover-body">${this.id} </div>`
  );
}

function removePopOver() {
  let popover = document.querySelector(".popover-body");
  if (popover !== null) {
    popover.remove();
  }
}
/************************
 * Core
 * ********************/

document.addEventListener("DOMContentLoaded", function () {
  // nav active
  NAVLINKS.forEach((navlink) => navlink.addEventListener("click", activateNav));

  // faire apparaitre popover
  SVGS.forEach((svg) => svg.addEventListener("mouseover", popOver));

  // supprimer popover
  SVGS.forEach((svg) => svg.addEventListener("mouseout", removePopOver));

  // init animate in scroll
  AOS.init();
});
