var apiKey = "945207e9ffc2bc2d91952c86c2a2bba4"
var strLon;
var strLat;
function getWeather(latitude,longitude){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude+ '&&appid='+ apiKey)
  .then(function(response) {
    return response.json()
    })
  .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
        console.log(error)
    })
}

function getLocation(location){
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid='+ apiKey)
    .then(function(response) {
      return response.json()
      })
    .then(function(data) {
        console.log(data[0].lat, data[0].lon);
        var lon = data[0].lon;
        var lat = data[0].lat;
        strLat = lat.toString();
        strLon = lon.toString();
        console.log(strLat, strLon)
      })
      .then(function(){
        getWeather(strLat, strLon)
})
    
      .catch(function(error) {
          console.log(error)
      })
}

getLocation('new york');
