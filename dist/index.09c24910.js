"use strict";
/**
 * Enable scroll only when the loading of the website is done 
 */ const loadingScreen = document.querySelector(".loading-screen");
document.body.style.overflow = "hidden";
window.addEventListener("load", ()=>{
    console.log("loaded !");
    document.body.style.overflow = "auto";
    loadingScreen.classList.add("loading-screen--hide");
});
/**
 * Handle clicks on the navbar only on mobile, to hide the navbar
 */ // getting all the links and foreach link, if it's clicked the navbar is unchecked
const allLinksNavbar = document.querySelectorAll(".burger-menu__link");
const navChecked = document.querySelector("#burger-toggle");
const navDisplay = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".burger-wrapper");
const closeButton = document.querySelector(".close-icon");
burgerButton.addEventListener("click", ()=>{
    document.body.style.overflow = "hidden";
    navChecked.checked = true;
    navDisplay.classList.add("checked");
    navDisplay.style.opacity = "1";
    closeButton.style.display = "flex";
});
fadeOut(closeButton);
allLinksNavbar.forEach((link)=>{
    fadeOut(link);
});
function fadeOut(elementClicked) {
    elementClicked.addEventListener("click", ()=>{
        if (navDisplay.classList.contains("checked")) {
            document.body.style.overflow = "auto";
            navChecked.checked = false;
            navDisplay.style.opacity = "0";
            setTimeout(()=>{
                navDisplay.classList.remove("checked");
                closeButton.style.display = "none";
            }, 250);
        }
    });
} // disable the scroll event for the time the loading is done
 // $(window).on("load", function () {
 //     $(".modal").hide();
 //     $("#neon-text").click(showTrailer);
 //     $("#play-teaser1").click(showTeaser1);
 //     $("#play-teaser2").click(showTeaser2);
 //     $("#play-teaser3").click(showTeaser3);
 //     function showTrailer(evt) {
 //         $("#trailer").show();
 //         $(".close").click(function () {
 //             $("#trailer").hide();
 //         });
 //     }
 //     function showTeaser1(evt) {
 //         $("#modal-teaser1").show();
 //         $(".close").click(function () {
 //             $("#modal-teaser1").hide();
 //         });
 //     }
 //     function showTeaser2(evt) {
 //         $("#modal-teaser2").show();
 //         $(".close").click(function () {
 //             $("#modal-teaser2").hide();
 //         });
 //     }
 //     function showTeaser3(evt) {
 //         $("#modal-teaser3").show();
 //         $(".close").click(function () {
 //             $("#modal-teaser3").hide();
 //         });
 //     }
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

//# sourceMappingURL=index.09c24910.js.map
