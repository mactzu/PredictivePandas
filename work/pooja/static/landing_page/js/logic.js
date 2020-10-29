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



// Drop down 
var beer_strength = ["light", "mild", "full", "strong", "heavy"];





// document.getElementById("saveForm").onclick = function() {
//     location.href = "/predict"
// }

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
    "kölsch",
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

    var data = beer_style.concat(countries, words);

    $(".tags_input").tagComplete({

                keylimit: 1,
                hide: false,
                autocomplete: {
                    data: data
                }
        });
});


// Map Section 
var API_KEY = "pk.eyJ1IjoicG1hbGxhcmQiLCJhIjoiY2tnc3B5eWc1MDI3NzJ4cHQ5anIwbnpoeCJ9.2LB0cYAMj8pOZ-QgyecGxA";


// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var beerIcon = L.icon ({
  iconUrl: 'http://feedus.media/wp/wp-content/uploads/leaflet-maps-marker-icons/beer_pin-2.png',
  iconSize: [75, 75]
})
var myMap = L.map("map").setView([45, -5], 2);
var myFeatureBeers = L.featureGroup().addTo(myMap);
var marker, test;


// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  }).addTo(myMap);

function getBeer() {
  myFeatureBeers.clearLayers();

  for (var i = 0; i < 5; i += 1) {
    test = "test " + i;
    marker = L.marker(getRandomLatLng(),{icon: beerIcon}).addTo(myFeatureBeers).bindPopup("Marker " + test);
    marker.test = test;
  }

  function getRandomLatLng() {
    return [
      45 + 60 * Math.random() - 25,
      -30 + 100 * Math.random() - 50
    ]
  }  

  myMap.fitBounds(myFeatureBeers.getBounds());

}


var mapmargin = 50;
$('#map').css("height", ($(window).height() - mapmargin));
$(window).on("resize", resize);
resize();
function resize(){

    if($(window).width()>=980){
        $('#map').css("height", ($(window).height() - mapmargin));    
        $('#map').css("margin-top",50);
    }else{
        $('#map').css("height", ($(window).height() - (mapmargin+12)));    
        $('#map').css("margin-top",-10);
    }

}