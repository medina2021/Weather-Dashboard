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
  fetch(queryUrl)
  .then(handleErrors)
  .then((response)=>{
    return response.json();
  })

  .then((response)=> {
      // save to local storage
      saveCity(city);
      $('#search-error').text("");

      let currentWeatherIcon="https://openweathermap.org/img/w/" +response.weather[0].icon + ".png";
      
      let currentTimeUTC = response.dt;
      let currentTimeZoneOffset = response.timezone;
      let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60/ 60;
      let currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
      
      // Render the cities
      renderCities();

      getFiveDayForecast(event);
      $('#header-text').text(response.name);
      // Search Results
      let currentWeatherHTML=`
      <h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<img src="${currentWeatherIcon}"></h3>
      <ul class="list-unstyled">
      <li>Temperature: ${response.main.temp}&#8457;</li>
      <li>Humidity: ${response.main.humidity}%</li>
      <li>Wind Speed: ${response.wind.speed} mph</li>
      <li id="uvindex"> UV Index:</li>
      </ul>`;
      // append results
      $('#current-weather').html(currentWeatherHTML);

      let latitude = response.coord.lat;
      let longitude = response.coord.lon;
      let uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude+ "&units=imperial&&appid="+ apiKey;

      uvQueryURL ="https://cors-anywhere.herokuapp.com/" + uvQueryURL;

      fetch(uvQueryURL)
      .then(handleErrors)
      .then((response) =>{
        return response.json();
      })
      .then((response) =>{
        let uvIndex = response.value;
        $('#uvIndex').html(`UV Index: <span id="uvVal"> ${uvIndex}</span>`);
        if (uvIndex >= 0 && uvIndex<3){
          $('#uvVal').attr("class", "uv-favorable");
        } else if (uvIndex>=3 && uvIndex<8){
          $('#uvVal').attr("class", "uv-moderate");
        } else if (uvIndex>=8){
          $('#uvVal').attr("class", "uv-severe");
        }
      });
  })
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
