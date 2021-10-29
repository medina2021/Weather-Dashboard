var apiKey = "945207e9ffc2bc2d91952c86c2a2bba4";
var currentCity="";
var lastCity="";

var handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// Display current conditions
var getCurrentConditions = (event) => {

  let city=$('#search-city').val();
  currentCity=$('#search-city').val();

  // fetch from weather API
  let queryUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&&appid" + apiKey;
}

// var weather = document.querySelector(".current");
// var humidity = document.querySelector("fiveDay");
// function getWeather(latitude,longitude){
//     fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude+ '&units=imperial&&appid='+ apiKey)
//   .then(function(response) {
//     return response.json()
//     })
//   .then(function(data) {
//       console.log(data);
//       return data;
//     })
//     .then(function(temp){
//       currentWeather(temp)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
// }

// function getLocation(location){
//     fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid='+ apiKey)
//     .then(function(response) {
//       return response.json()
//       })
//     .then(function(data) {
//         console.log(data[0].lat, data[0].lon);
//         var lon = data[0].lon;
//         var lat = data[0].lat;
//         strLat = lat.toString();
//         strLon = lon.toString();
//         console.log(strLat, strLon)
//       })
//       .then(function(){
//         getWeather(strLat, strLon)
// })
    
//       .catch(function(error) {
//           console.log(error)
//       })
// }

// getLocation('fontana')

// function currentWeather(object) {
//   var pTemp = document.createElement("p")
//   pTemp.textContent = object.current.temp
//   document.querySelector(".current").appendChild(pTemp)
//   console.log(object.current.temp);
//   console.log(object.current.humidity);
//   console.log(object.current.wind_speed);
//   console.log(object.current.uvi);
//   console.log(object.current.weather[0].description);
// }

// function currentHumidity(object) {
//   var pHumid = document.createElement("p")
//   pHumid.textContent = object.current.humidity
//   document.querySelector("fiveDay").appendChild(pHumid);
// }
