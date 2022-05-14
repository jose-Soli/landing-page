/* ******************
 *      #menu       *
 ********************/

const NAV = document.getElementById("nav");
const NAV__MENU = document.getElementById("nav__menu");
const NAV__LINK = document.querySelectorAll(".nav__link");
const NAV__CLOSE = document.getElementById("nav__close");
const NAV_MENU_OPEN = document.getElementById("nav-menu__open");
const OVERLY = document.getElementById("overlay");
const GO__TOP = document.getElementById("go__top");

const arrayMenu = [NAV_MENU_OPEN, NAV__CLOSE];


menu(arrayMenu);
menu(NAV__LINK);

function menu(elem) {
    for (let i = 0; i < elem.length; i++) {

        elem[i].addEventListener("click", () => {
            NAV__MENU.classList.toggle("active");
            OVERLY.classList.toggle("active");
        });

    }
}

window.addEventListener("scroll", () => {
    if (scrollY >= 200) {
        NAV.classList.add("active");
        NAV__MENU.classList.remove("active");
        OVERLY.classList.remove("active");
        GO__TOP.classList.add("active");
    } else {
        NAV.classList.remove("active")
        GO__TOP.classList.remove("active");
    }
});




