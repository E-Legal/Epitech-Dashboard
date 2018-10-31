function fadeout() {
    $('#success_crypto').delay(5000).fadeOut(400)
}

function dynamicColor(evolution) {
    if (evolution > 0)
        $('#evolution').css("color", "green");
    else if (evolution < 0)
        $('#evolution').css("color", "red");
    else
        $('#evolution').css("color", "yellow");
}
function showValues(data, index) {
    var from = '24 hours '
    var evolution = data.data[index].quotes.USD.percent_change_24h;
    $("#1h, #24h, #7d").change(function() {
        if ($(this).val() == "1h") {
            from = '1 hour';
            evolution = data.data[index].quotes.USD.percent_change_1h;
        }
        else if ($(this).val() == "24h") {
            from = '24 hours';
            evolution = data.data[index].quotes.USD.percent_change_24h;
        }
        else if ($(this).val() == "7d") {
            from = '7 days';
            evolution = data.data[index].quotes.USD.percent_change_7d;
        }
        $('.MarketCap').html("<p>Crypto Name: " +data.data[index].name +" | Symbol: " +data.data[index].symbol +" | Price: " +data.data[index].quotes.USD.price +" $ " + "<br><a id='evolution'>Evolution last " +from +": " +evolution +" %</a>" +"</p>");
        dynamicColor(evolution);
    });

    $('.MarketCap').html("<p>Crypto Name: " +data.data[index].name +" | Symbol: " +data.data[index].symbol +" | Price: " +data.data[index].quotes.USD.price +" $ " + "<br><a id='evolution'>Evolution last " +from +": " +evolution +" %</a>" +"</p>");
    dynamicColor(evolution);
}

function getCrypto(){
    const apiCall = "https://api.coinmarketcap.com/v2/ticker/?structure=array";
    jQuery.getJSON(apiCall, function (data) {
        console.log(data);
        showValues(data, 0);
        $("#crypto").on('keyup', function (e) {
            if (e.keyCode == 13) {
                var found = false;
                for (var i = 0; i < 100; i++) {
                    if (data.data[i].name == $('#crypto').val() || data.data[i].symbol == $('#crypto').val() || data.data[i].website_slug == $('#crypto').val()) {
                        found = true;
                        showValues(data, i);
                    }
                }
                console.log(found);
                if (found) {
                    fadeout();
                    $('#error_crypto').hide();
                    $('#success_crypto').show();
                }
                else {
                    $('#crypterr').html("Crypto " +$('#crypto').val() +" is an invalid crypto...");
                    $('#error_crypto').show();
                    $('#success_crypto').hide();
                }
            }
        });
    }).done(function(){
        fadeout();
        $('#success_crypto').show();
    });
}

    getCrypto();


