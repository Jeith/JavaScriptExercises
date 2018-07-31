(function() {
    var $searchbutton = $('#searchbutton');
    $searchbutton.click( function(e) {
        e.preventDefault();
        var $searchbar = $('#searchbar')
        var $city = $searchbar.val()
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $city;
        var apiKey = "30fa254e2d140ee81d2080ec01551e2b";
    
    $.get(url + $city + '&appid=' + apiKey)
    .done(function(response) {

        console.log(response);
    updateUISuccess(response)
    })

    .fail(function(error){
        console.log(error);

        updateUIError()
    });

    function updateUISuccess(response){

        var condition = response.weather[0].main;
        console.log(condition);

        var humidity = response.main.humidity;
        console.log(humidity);

        var degC = response.main.temp - 273.15;
        console.log(degC);

        var degCInt = Math.floor(degC);
        console.log(degCInt);

        var degF = degC * 1.8 + 32;
        console.log(degF);

        var name = response.name;

        var img = document.createElement('img')
        var imgarea = document.getElementById("imgarea");

        var degFInt = Math.floor(degF);
        console.log(degFInt);
            var cityName = document.getElementById('cityname');
            cityName.innerHTML = "<h4>" + name + "</h4>"
            var weatherBox = document.getElementById('weather');
            weatherBox.innerHTML = "<p>" + degCInt + '&#176; C / ' + degFInt + '&#176; F</p><p>' + humidity + "%</p><p>" + condition + "</p>";
            if (condition == "Thunderstorm"){
                imgarea.innerHTML = "<img src=images/storm.jpg>";
            } else if (condition == "Clouds"){
                imgarea.innerHTML = "<img src=images/cloud.jpg>";
            } else if (condition == "Rain"){
                imgarea.innerHTML = "<img src=images/rain.jpg>";
            } else if (condition == "Drizzle"){
                imgarea.innerHTML = "<img src=images/drizzle.jpg>";
            } else if (condition == "Mist" || condition == "Fog"){
                imgarea.innerHTML = "<img src=images/mist.jpg>";
            } else if (condition == "Clear"){
                imgarea.innerHTML = "<img src=images/clear.jpg>";
            }
    }
    function updateUIError(){
        var $weatherBox = $('#weather');
        $weatherBox.addClass('hidden');
    }
});
})();