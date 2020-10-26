(function ($) {

    "use strict";

    // Smooth scrolling using jQuery easing 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);target = target.length? target: $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                $("html, body").animate({scrollTop: target.offset().top - 72,},1000,"easeInOutExpo");

                return false;
            }
        }
    });
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    }

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
    }

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
    }

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

document.getElementById("saveForm").onclick = function() {
    location.href = "/predict"
}
