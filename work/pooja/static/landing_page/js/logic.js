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


// document.getElementById("saveForm").onclick = function() {
//     location.href = "/predict"
// }



var words = [

    "malty",
    "grainy",
    "sweet",
    "corn-like",
    'hay',
    'straw',
    'cracker',
    'bicuity',
    'caramel',
    'toast',
    'roast',
    'coffee',
    'espresso',
    'burnt',
    'alcohol',
    'tobacco',
    'gunpowder',
    'leather',
    'pine',
    'grass',
    'raisins',
    'currant',
    'plum',
    'dates',
    'prunes',
    'figs',
    'blackberry',
    'blueberry',
    'banana',
    'pineapple',
    'apricot',
    'pear',
    'apple',
    'nectarine',
    'peach',
    'mango',
    'lemon',
    'lime',
    'orange',
    'tangerine',
    'clementine',
    'grapefruit',
    'zest',
    'metallic',
    'vinegar',
    'copper',
    'cidery',
    'astringent',
    'chlorine',
    'phenolic',
    'pepper',
    'clove',
    'anise',
    'licorice',
    'bacon',
    'fatty',
    'nutty',
    'butterscotch',
    'vanilla',
    'earthy',
    'woody',
    'bread',
    'saddle',
    'musty',
    'barnyard',
    'honey',
    'caramel',
    'chestnut',
    'apricot',
    'orange',
    'black',
    'burnt',
    'garnet',
    'ruby',
    'copper',
    'brilliant',
   'hazy',
    'cloudy',
    'turbid',
    'opaque',
    'clear',
    'crystal',
    'bright',
    'dull',
    'persistent',
    'rocky',
    'large',
    'fluffy',
    'dissipating',
    'lingering',
    'white',
    'tan',
   'frothy',
    'delicate',
    'roasted',
    'bready',
    'bitter',
    'sweet',
    'spicy',
    'fruity',
    'chocolate',
    'caramel',
    'toffee',
    'coffee',
    'malty',
    'tart',
    'subtle',
    'woodsy',
    'earthy',
    'sulfuric',
    'assertive',
    'mild',
    'bold',
    'balanced',
    'robust',
    'intense',
    'metallic',
    'harsh',
    'complex',
    'delicate',
   'refined',
    'hearty',
    'smooth',
    'silky',
    'velvety',
    'prickly',
    'tingly',
    'creamy',
    'warming',
    'viscous',
    'astringent',
    'oily',
   'Malty',
   'biscuity',
   'breadlike',
    'grainy',
    'rich',
    'deep',
    'roasty',
   'cereal',
    'cookie',
    'coffeeish',
   'caramelly',
    'toffee',
    'molasses',
    'complexity',
    'smoky',
    'sweet',
    'autumnal',
    'cream',
    'milk',
    'oatmeal',
    'rustic',
    'layered',
    'piney',
   ' citrusy',
    'grapefruity',
    'earthy',
    'musty',
    'spicy',
    'sharp',
   'bright',
   'fresh',
   'herbal',
    'zippy',
    'lemony',
    'aromatic',
   'floral',
    'springlike',
    'brilliant',
    'sprucelike',
    'juniper',
    'minty',
    'pungent',
    'elegant',
    'grassy',
    'baked',
    'bubblegum',
    'yeasty',
    'belgian',
    'aromatic',
    'tropical',
    'subtle',
    'fruity',
    'clean',
    'banana',
    'earthy',
    'musty',
    'soft',
    'effervescent',
    'spritzy',
    'sparkling',
    'zippy',
    'pinpoint',
    'bubbly',
    'gentle',
    'carbonation',
    'rich',
    'full',
    'light',
    'slick',
    'creamy',
    'oily',
    'heavy',
    'velvety',
    'sweet',
    'dry',
    'thick',
    'thin',
];





$(function(){
    var feature_words = words;

    $(".tags_input").tagComplete({

                keylimit: 1,
                hide: false,
                autocomplete: {
                    data: feature_words
                }
        });
});
