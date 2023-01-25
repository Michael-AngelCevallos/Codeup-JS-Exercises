
const WEATHER_TOKEN = '9e436e22d5b3d5970cbfaca81c003ea7';
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5nZWw0MTM1IiwiYSI6ImNsZDg0ZXZ0MzByd2Uzb3JpdmE0eHo4NWsifQ.ChU6OuMIqZBpFdtlzVk6wA';



//<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Cevallos Weather</title>
//     <link rel='stylesheet'
//           href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'
//           type='text/css'/>
//     <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
//     <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet'/>
//
// <style>
//     @import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
//
//     body{text-align:center;margin:1em;font:1.4em "Press start 2P";font-weight:700;background-repeat:no-repeat;background-size:100vw 100vh;background-color: rgb(37,90,97)}
//
//     *{box-sizing:border-box}
//
//     div{text-align:center}
//
//     hr{height:10px;visibility:hidden}
//
//     #first{margin-left:10px;margin-top:60px;margin-bottom:10px;font-size: 100px;}
//
//     #second{margin-left:10px;margin-top:0;margin-bottom:20px;font-size: 80px;}
//
//     #firAndSec{  text-transform: uppercase;
//         background-image: linear-gradient(
//                 -225deg,
//                 #231557 0%,
//                 #44107a 29%,
//                 #ff1361 67%,
//                 #fff800 100%
//         );
//         color: #fff;
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         animation: textclip 2s linear infinite;
//         display: inline-block;
//         font-size: 20px;
//     }
//
//     @keyframes textclip {
//         to {
//             background-position: 200% center;
//         }
//     }
//
//     #local{margin-top:10px;margin-left:10px}
//
//     #head{background-image:url("../icons/undefined - Imgur.gif");background-size:110% 100%;background-repeat:no-repeat;height:150px;width:100%;;margin:10px auto; display:flex;flex-direction:column;text-align:left}
//
//     #cards{display:flex; justify-content: space-evenly; }
//
//     #card{border: 10px solid black; background-size:100% 100%;width:200px;height:200px;overflow:scroll;}
//
//     #card2{border: 10px solid black; background-size:100% 100%;width:200px;height:200px;overflow:scroll;}
//
//     #card3{border: 10px solid black; background-size:100% 100%;width:200px;height:200px;overflow:scroll;}
//
//     #card4{border: 10px solid black; background-size:100% 100%;width:200px;height:200px;overflow:scroll;}
//
//     #card5{border: 10px solid black; background-size:100% 100%;width:200px;height:200px;overflow:scroll;}
//
//
//     #map{box-shadow:8px 0 #fff,8px 0 #fff,0 -8px #fff,0 8px #fff,2px 0 0 4px #fff,-2px 0 0 4px #fff,0 -2px 0 4px #fff,0 2px 0 4px #fff,10px 0 #fff,-10px 0 #fff,0 -10px #fff,0 10px #fff,0 0 0 6px #fff,0 4px 0 4px #fff,0 -4px 0 4px #fff,4px 0 0 4px #fff,-4px 0 0 4px #fff;margin:10px auto;width:100%;height:400px}
//
//     /*canvas{position:relative}*/
//
//     .search-form{--searchButtonWidth: 100px;height:50px;max-width:500px;margin:0 auto;  overflow:hidden;position:relative}
//
//     .search-input{border:0;margin:0;padding:0.5rem calc(var(--searchButtonWidth) + 0.5rem) 0.5rem 0.5rem;border-radius:8px;width:100%;background:#ddd;-webkit-appearance:none;font:20px "Press start 2P"}
//
//     .search-input:focus{outline:0;background:white}
//
//     .search-input:not(:placeholder-shown) ~
//
//     .search-button{transform:translateX(calc(-1 * var(--searchButtonWidth)))}
//
//     .search-button{border:0;padding:0.5rem;border-radius:8px;position:absolute;top:0;left:100%;width:var(--searchButtonWidth);transition:0.2s;background:blue;color:black;font:13px "Press start 2P";height:75%}
//
//     .search-button:focus{outline:0;background:#222}
//
//     .screen-reader-text{position:absolute;top:-9999px;left:-9999px}
//
// </style>
// </head>
// <body>
// <div id="head"></div>
//
// <div id="firAndSec">
//     <h1 id="first">Cevallos</h1>
//     <h1 id="second">Weather</h1>
//
// </div>
//
//
// <form onsubmit=preventDefault(); class="search-form">
//     <label for="search" class="screen-reader-text">Search</label>
//     <input id="search"
//            type="search" class="search-input" placeholder="City, State or Zip Code">
//     <button class="search-button">Search</button>
// </form>
//
//
//
// <div id="cards">
//     <div id="card"></div>
//     <div id="card2"></div>
//     <div id="card3"></div>
//     <div id="card4"></div>
//     <div id="card5"></div>
// </div>
// <br>
//
//
// <div>
//     <h5 id="local"></h5>
// </div>
//
// <div id='map'></div>
// <pre id='coordinates' class='coordinates'></pre>
//
//
//
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
// <script src="js/keys.js"></script>
// <script src="mapbox-geocoder-utils.js"></script>
// <script>
//


// /** New shit
//  mapboxgl.accessToken = mapboxToken;
//
//  var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         zoom: 10,
//         center: [-98.4916, 29.4252]
//     });
//
//  var geocoder = new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     });
//
//  var locationName = "San Antonio";
//  $("#location").html(locationName);
//  geocoder.on('result', function(ev) {
//         console.log(ev);
//
//         locationName= ev.result.place_name;
//         $("#location").html(locationName);
//         getWeather(ev.result.center[1], ev.result.center[0])
//     });
//
//  map.addControl(geocoder);
//
//  //makes marker draggable and set to san antonio
//  var marker = new mapboxgl.Marker({
//         draggable: true
//     })
//  .setLngLat([-98.4916, 29.4252])
//  .addTo(map);
//
//  function onDragEnd() {
//         var lngLat = marker.getLngLat();
//
//         console.log(lngLat);
//         getWeather(lngLat.lat, lngLat.lng);
//         reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(results) {
//             //address for The Alamo-------------------------------
//             console.log(results);
//             $("#location").html(results);
//
//         });
//     }
//
//
//  marker.on('dragend', onDragEnd);
//
//
//
//  map.on("click",function(e){
//
//         //updates the maps weather when clicking the map
//         // JSON.stringify(e.point)+"<br/>"+ JSON.stringify(e.lnglat); //idk wtf this is used for????
//         getWeather(e.lngLat.lat, e.lngLat.lng);
//
//
//         //need below line cause it'll add new markers eveytime the map is clicked if not
//         if(marker !== undefined) marker.remove();
//
//
//         //adds the marker when the mapped is clicked
//         marker = new mapboxgl.Marker()
//             .setLngLat([e.lngLat.lng, e.lngLat.lat])
//             .addTo(map);
//
//         $("#location").html(e);
//     });
//
//
//
//  var icons = [{name:"clear-day",image:"SVG/Sun.svg"}, {name:"clear-night",image:"SVG/Moon.svg"}, {name:"rain",image:"SVG/Cloud-Rain.svg"}, {name:"snow",image:"SVG/Cloud-Snow.svg"}, {name:"sleet",image:"SVG/Cloud-Hail.svg"}, {name:"wind",image:"SVG/Cloud-Wind.svg"},
//  {name:"fog",image:"SVG/Cloud-Fog.svg"}, {name:"cloudy",image:"SVG/Cloud.svg"}, {name:"partly-cloudy-day",image:"SVG/Cloud-Sun.svg"}, {name:"partly-cloudy-night",image:"SVG/Cloud-Fog-Moon.svg"}];
//  var userLat= 29.4241;
//  var userLon=-98.4936;
//  getWeather(userLat,userLon);
//
//  //gets the weather from the api
//  function getWeather(userLat, userLon) {
//
//         console.log(userLat, userLon);
//         $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/"+ userLat+","+userLon).done(function (data) {
//             console.log(data);
//
//             //how to get only three days to show up
//             var reports = data.daily.data.slice(0, 3);
//             console.log(reports);
//
//             var weather = '';
// //dont take in the entire report array, say one report one forcast, one forcast object, tak in a report and look and icon then do foreach loop
//             //then put that in the html
//
//             reports.forEach(function (report) {
//                 icons.forEach(function (icon) {
//                     if (report.icon === icon.name) {
//                         report.url = icon.image
//                     }
//                 });
//                 // to get the correct time and day below--------------------------
//                 var dateObject = new Date(report.time * 1000);
//
//
//                 weather += "<div class='col-4 weather-item'>";
//                 weather +=  "<div class='day bg-secondary text-white font-weight-bold'>"+dateObject.toDateString() + "</div>" ;
//                 weather += "<div class='tempHigh'>Hightest: " + "<span class='temp'>"+ report.temperatureHigh +" &#8457 </span>"+ "</div>" ;
//                 weather += "<div class='tempLow'>Lowest: "  + "<span class='temp'>"+ report.temperatureLow +" &#8457 </span>" + "</div>" ;
//                 weather += "<img src='icon/" + report.url + "'/>";
//                 weather += "<div class='clouds bg-secondary text-white font-weight-bold'> SUMMARY </div>";
//                 weather += "<div class=' summary'>"+ report.summary +"</div>";
//                 weather += "</div>"
//             });
//             $("#date").html(weather);
// //three day forcast to show up on the html
//         })
//     }
//
//  //icons to show up function
//  // function weatherIcon(icon, apiIcon){
//     //     for (var i = 0; i < iconArray.length; i++){
//     //         if (icons[i].name === apiIcon) {
//     //             return icons[i].url
//     //         }
//     //     }
//     // }
//  // "<div class='logo'><img src='icon/" + report.url + "'/></div>";
//
//
//
// */









