/*global console, setTimeout */
var $, document;

$(document).ready(function () {// to start write code jquery when page is loaded
    
    "use strict";
    
    $("body").fadeTo(2000, 1);
    
    $("#learn").click(function () {
        $("#heading").fadeOut();
        setTimeout(function () {
            $("#heading").slideDown();
        }, 4000);
    });
    
    setTimeout(function () {
        $("[xxxx]").each(function () {
            var width = $(this).attr("xxxx");
            $(this).animate({ width : width + "%" }, 4000);
        });
    }, 8000);
    
    
    //add class active to links and remove class active from others
    $('.navbar ul li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    
    
    $("#www li").click(function () {
        var numX = $(this).attr("h");
        $("#www li").removeClass("active");
        $(".testoo").removeClass("active");
        $(this).addClass("active");
        $('[g=' + numX + ']').addClass("active");
    });
    
    // Button with effects
    
    $('.from-left').hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 300);
    }, function () {
        $(this).find('span').eq(0).animate({
            width: '0%'
        }, 300);
    });
    
    // Scroll Smoothly To The Element
    $('.navbar ul li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#" + $(this).data('class')).offset().top
        }, 1500);
    });
    
    $(window).scroll(function () {
        
        var wScrollTop = $(this).scrollTop(),
            divBtn = $('.scroll-to-top');
        
        
    //Scroll to top Button
        if (wScrollTop >= 2000) {
            if (divBtn.is(':hidden')) {
                $(divBtn).fadeIn(500);
            }
        } else {
            divBtn.fadeOut(500);
        }
    });
    //click button to scroll to top 
    
    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    
    
    
});
