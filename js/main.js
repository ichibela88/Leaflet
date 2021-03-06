(function(){
	var map = L.map('map').setView([40.8075, -73.9619], 17);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
var marker = L.marker([40.8075, -73.9633]).addTo(map);
marker.bindPopup("<b>Columbia University</b><br>Journalism School").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var marker = L.marker([40.8069, -73.9603]).addTo(map);
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
}).call(this);