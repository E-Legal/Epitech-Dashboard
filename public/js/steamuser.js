function getSteamuser(param) {
    if (!param)
    $('.loading').show();
    var apiCall = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=1677EFA6B60AF60AECDB77E54835767B&steamid="+ param +"&count=2&format=json";

    console.log(param);
    jQuery.getJSON(apiCall, function (data) {
        $("#steamuserid").on('keyup', function (e) {
            if (e.keyCode == 13) {
                getSteamuser($('#bourse').val());
            }
        });
        $('#success_bourse').show();
        $('#error_bourse').hide();
        $('#success_bourse').delay(5000).fadeOut(400);
        $('.BourseApi').html("<p> Company: " +data.companyName +" [" +data.symbol +"] at " +data.latestPrice  +"$<br>Yearly Max "  +data.week52High +"$ | Yearly Low: " +data.week52Low +"$ | <a id='boursevol'>24h Evolution: " +data.change +"$</a></p>");

}