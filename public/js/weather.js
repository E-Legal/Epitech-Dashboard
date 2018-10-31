function clearWindow() {
    $('#error_city').delay(5000).fadeOut(400);
    $('#success_city').delay(5000).fadeOut(400);
}

function getWeather(param) {
    var cityName = "Marseille";
    var ApiKey = '271d1234d3f497eed5b1d80a07b3fcd1';

    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + ApiKey;
    if (param)
        apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + param + '&units=metric&appid=' + ApiKey;
    console.log(apiCall);
    jQuery.getJSON(apiCall, function (data) {
        console.log(data);
        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        cityName = data.name;
        $('#city').html("Weather of " +cityName);
        $(".desc").html("<p>" +"Description: " +data.weather[0].description +"<img src='" + iconUrl + "'>" +" " +
            "| Temp min: " +data.main.temp_min +"°C" +" |" +
            " Temp max: " +data.main.temp_max  +"°C" +" |" +
            " Humidity: " +data.main.humidity + "%" + "</p>");
        $("#zipcode").on('keyup', function (e) {
            if (e.keyCode == 13) {
                var value = $('#zipcode').val();
                var zipreg = new RegExp("[a-zA-Z]");
                if (zipreg.test(value))
                    getWeather($('#zipcode').val());
            }
        });
    })
        .done(function () {
            $('#error_city').hide();
            $('#success_city').show();
            console.log('Done');
        })
        .fail(function () {
            $('#success_city').hide();
            $('#error_city').show();
            console.log('Failed');
        })
        .always(function () {
            console.log('Always');
            clearWindow();
        });
}

    clearWindow();
    getWeather();