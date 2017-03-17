var lat;
var lng;
var locationCity;
var temperature;
var windSpeed;
var tempSwitch = 1;
var corsProxy="http://crossorigin.me/";


var coord = navigator.geolocation.getCurrentPosition(posSuccess, posFail);

function posSuccess(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    $(document).ready(function() {
        document.getElementById("location").innerHTML = "Please Wait...";

        $.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/48d28f1a525d1601b06803c361032145/"+lat+","+lng, function(weatherData) {

            locationCity = weatherData.timezone;
            temperature = weatherData.currently.apparentTemperature.toFixed();
            windSpeed = weatherData.currently.windSpeed;
            document.getElementById("location").innerHTML = "Timezone:" + locationCity;
            document.getElementById("temperature").innerHTML = temperature + " Degrees Farenheit";
            document.getElementById("windSpeed").innerHTML = "Wind Speed:" + windSpeed + " MPH";
            $("#temperature").click(function() {
                if (tempSwitch === 0) {
                    document.getElementById("temperature").innerHTML = temperature + " Degrees Farenheit";
                    tempSwitch = 1;
                } else {
                    document.getElementById("temperature").innerHTML = temperature - 49 + " Degrees Celsius";
                    tempSwitch = 0;
                }

            });
            if (temperature < 12) {
                document.body.style.backgroundImage = "url('http://cdn.wallpapersafari.com/62/91/XGkMeN.jpg')";
            }
            if (temperature >= 12 && temperature < 25) {
                document.body.style.backgroundImage = "url('https://newevolutiondesigns.com/images/freebies/city-wallpaper-46.jpg')";
            }
            if (temperature > 25) {
                document.body.style.backgroundImage = "url('http://www.wallpapers-web.com/data/out/65/4293984-desert-wallpapers.jpg')";
            }
        });
    });
}

function posFail() {
    document.getElementById("location").innerHTML = "Geolocation Data Not Available...";

}
