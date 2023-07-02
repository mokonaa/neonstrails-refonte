'use strict';

/**
 * Enable scroll only when the loading of the website is done 
 */

const burgerButton = document.querySelector('.burger-icon');
const loadingScreen = document.querySelector('.loading-screen');
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
    loadingScreen.classList.add('loading-screen--hide');
    burgerButton.style.position = 'fixed';

});

/**
 * Burger animation fadeIn and fadeOut when burger icon is clicked
 */

// getting all the links and foreach link, if it's clicked the navbar is unchecked
const allLinksNavbar = document.querySelectorAll('.burger-menu__link');
const navChecked = document.querySelector('#burger-toggle');
const navDisplay = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.close-icon');

burgerButton.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    navChecked.checked = true;
    navDisplay.classList.add('checked');
    navDisplay.style.opacity = '1';
    closeButton.style.display = 'flex';
})
fadeOut(closeButton);
allLinksNavbar.forEach((link) => {
    fadeOut(link);
})

function fadeOut(elementClicked) {
    elementClicked.addEventListener('click', () => {
        if (navDisplay.classList.contains('checked')) {
            document.body.style.overflow = 'auto';
            navChecked.checked = false;
            navDisplay.style.opacity = '0';
            setTimeout(() => {
                navDisplay.classList.remove('checked');
                closeButton.style.display = 'none';
            }, 250)

        }
    })
}

/**
 * Function that handle modals
 */

// document.querySelector('.welcome__button').addEventListener('click', () => {
//     document.querySelector('.welcome__modal').showModal();
// })
// document.querySelector('.welcome__button--close').addEventListener('click', () => {
//     document.querySelector('.welcome__modal').close();
// })
openModal('.welcome__modal', '.welcome__button', '.welcome__button--close');

function openModal(modalOpened, openButton, closeButton) {
    document.querySelector(openButton).addEventListener('click', () => {
        document.querySelector(modalOpened).showModal();
    })
    document.querySelector(closeButton).addEventListener('click', () => {
        document.querySelector(modalOpened).close();
    })
}


// $(window).on("load", function () {


//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 400) {
//             $("#navbar").css("background", "rgb(10, 10, 10)");
//             $("#logo-medusa").css("width", "70px");
//             $("#navbar").css("padding", "0 0 5px 0");
//             $(".box-nav").css("background", "rgb(10, 10, 10)");
//         }

//         else {
//             $("#navbar").css("background", "none");
//             $(".box-nav").css("background", "none");
//             $("#logo-medusa").css("width", "100px");
//         }
//     })

// });