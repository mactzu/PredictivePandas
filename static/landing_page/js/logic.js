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
output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}




var countries = [
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Belgium",
    "Bosnia and Herzegovina",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Cayman Islands",
    "China",
    "Columbia",
    "Costa Rica",
    "Czech Republic",
    "Denmark",
    "Ethopia", 
    "Finland",
    "France",
    "Georgia",
    "Germany", 
    "Greece",
    "Hong Kong",
    "India",
    "Indian Ocean",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Jammu and Kashmir",
    "Japan",
    "Kenya",
    "Latvia",
    "Lebanon",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Maihama",
    "Malaysia",
    "Mexico",
    "Monaco",
    "Myanmar",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Palestine",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Romania",
    "Russia",
    "Singapore",
    "Slovakia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "St Lucia",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Tagus",
    "Tanzania",
    "The Bahamas",
    "Trinidad and Tobago",
    "Turks and Caicos Islands",
    "UK",
    "Ukraine",
    "USA",
    "USVI"
];

var beer_style = [
    "pilsener",
    "lager",
    "ale",
    "kolsch",
    "barleywine",
    "bitter",
    "exotic",
    "ipa",
    "porter",
    "stout",
    "trappist"
];

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

    var data = words;

    $(".tags_input").tagComplete({

                keylimit: 1,
                hide: false,
                autocomplete: {
                    data: data
                }
        });
});




// country autocomplete
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete(document.getElementById("countryInput"), countries);


