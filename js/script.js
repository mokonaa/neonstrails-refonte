'use strict';

/**
 * Enable scroll only when the loading of the website is done 
 */

const loadingScreen = document.querySelector('.loading-screen');
document.body.style.overflow = 'hidden';

window.addEventListener('load', function() {
    console.log('loaded !');
    document.body.style.overflow = 'auto';
    loadingScreen.classList.add('loading-screen--hide');
});

/**
 * Init WOW js for the animation on scroll
 */


new WOW().init();


// disable the scroll event for the time the loading is done


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