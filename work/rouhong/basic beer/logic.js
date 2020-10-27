// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var beerIcon = L.icon ({
  iconUrl: 'http://feedus.media/wp/wp-content/uploads/leaflet-maps-marker-icons/beer_pin-2.png',
  iconSize: [75, 75]
})
var myMap = L.map("map").setView([45, -5], 2);
var myFeatureGroup = L.featureGroup().addTo(myMap);
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
  myFeatureGroup.clearLayers();

  for (var i = 0; i < 5; i += 1) {
    test = "test " + i;
    marker = L.marker(getRandomLatLng(),{icon: beerIcon}).addTo(myFeatureGroup).bindPopup("Marker " + test);
    marker.test = test;
  }

  function getRandomLatLng() {
    return [
      45 + 60 * Math.random() - 25,
      -30 + 100 * Math.random() - 50
    ]
  }  

  myMap.fitBounds(myFeatureGroup.getBounds());

}

