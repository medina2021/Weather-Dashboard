// var apiKey = "945207e9ffc2bc2d91952c86c2a2bba4";
// var strLon;
// var strLat;
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

var apiKey="945207e9ffc2bc2d91952c86c2a2bba4";

function currentWeather(){
  navigator.geolocation.getCurrentPosition(function(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    var queryURL ="http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid='+ apiKey";

    $.ajax ({
      url: queryURL,
      method:"GET"
    })
    .then(function(response) {
     var icons = response.weather[0].icon;

    var urlIcon="http://openweathermap.org/img/w/" + icons + ".png";
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".temp").text("temperature:" + ((response.main.temp - 273.15) * 1.8 +32).toFixed(0)+ "°F");
    $(".humidity").text("Humidity:" + response.main.humidity + "%");
    $(".wind").text("Wind Speed:" + response.wind.speed + "MPH");
    $("#wicon").attr("src", urlIcon);

  });
});
};

currentWeather();

function fiveDayForecast(){

  var fiveDayLink = "https://api.openweathermap.org/data/2.5/forecast?q=fontana&appid=" + apiKey;

  $.ajax({
    url: fiveDayLink,
    method:"GET"
  }).then(function(resopnseTwo){

    var day1 = responseTwo.list[4].dt_txt;
    
    var day2 = responseTwo.list[12].dt_txt;
    
    var day3 = responseTwo.list[20].dt_txt;
    
    var day4 = responseTwo.list[28].dt_txt;
    
    var day5 = responseTwo.list[36].dt_txt;

  $("#day1").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day1").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day1").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day1").html("<h4>" + day1.substr(0,10) + "</h4>")

  $("#day2").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day2").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day2").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day2").html("<h4>" + day1.substr(0,10) + "</h4>")

  $("#day3").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day3").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day3").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day3").html("<h4>" + day1.substr(0,10) + "</h4>")

  $("#day4").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day4").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day4").html("<h4>" + day1.substr(0,10) + "</h4>")
  $("#day4").html("<h4>" + day1.substr(0,10) + "</h4>")














  })




}