function findGame(data, name){
    console.log(name);
    for (var i = 0; i < 69402; i++) {
        if (data.applist.apps[i].name == name) {
            console.log('FOUND: ' +data.applist.apps[i].appid);
            return (data.applist.apps[i].appid)
        }
    }
    return false;
}

function showPlayers(appId, name) {
    if (!appId)
        appId = 17460;
    if (!name)
        name = "Mass Effect";
    var apiCall = "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=" +appId;
    jQuery.getJSON(apiCall ,function (data) {
        console.log(data);
        $('#SteamApi').html("<p>"+numberWithDots(data.response.player_count) +" people(s) are playing " +name +" right now!</p>")
    })
        .fail(function(){
            showError();
        })
        .always(function(){
            $('.loading').hide();
        });

}

function showError(name) {
    $('#error_steam').show();
    $('#steamerr').html(name +" is not a valid Steam Game");
    if (!name)
        $('#steamerr').html("Uknown Error...");
    $('#success_steam').hide();
    $('.loading').hide();
}

function timeConverter(timestamp){
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

function getNameFromID(param) {
    const apiKEY = "1677EFA6B60AF60AECDB77E54835767B";
    if (!param)
        param = "76561197964361596";
    var apiCall = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + apiKEY + "&steamids=" + param;
    jQuery.getJSON(apiCall, function (data) {
        console.log(data);
        if (data.response.players.length == 0) {
            $('#success_steamid').hide();
            $('#error_steamid').show();
        }
        if (data.response.players[0].realname)
            $('#SteamUserApi').html("<p>" +data.response.players[0].realname +" alias: " +data.response.players[0].personaname +" | Last seen: " +timeConverter(data.response.players[0].lastlogoff) +"    <img src='" +data.response.players[0].avatarmedium+"'></p>");
        else
            $('#SteamUserApi').html("<p>" +data.response.players[0].personaname +" | Last seen: " +timeConverter(data.response.players[0].lastlogoff) +"    <img src='" +data.response.players[0].avatarmedium+"'></p>");
    })
        .fail(function(){
            $('#success_steamid').hide();
            $('#error_steamid').show();
        });
}

function getSteamID(param) {
    console.log(param);
    const apiKEY = "1677EFA6B60AF60AECDB77E54835767B";
    if (!param)
        param = "76561197964361596";
    var apiCall = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" +apiKEY +"&steamid=" +param +"&count=2&format=json";
    jQuery.getJSON(apiCall, function (data) {
        console.log(data);
        if (!data.response.hasOwnProperty("games")) {
            $('#SteamUserApi2').html("<p>User didn't play any Games Recently</p>");
            $('#SteamUserApi3').html("");
            return;
        }
        var appId = data.response.games[0].appid;
        var hashimg = data.response.games[0].img_icon_url;
        var logoUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/" +appId +"/" +hashimg +".jpg";
        $('#SteamUserApi2').html("<p><img src='" +logoUrl +"'> " +data.response.games[0].name +" | Total played: "+(data.response.games[0].playtime_forever / 60).toFixed(1) +" hours | Last 2 weeks: " +(data.response.games[0].playtime_2weeks / 60).toFixed(1) +" hours</p>");
        appId = data.response.games[1].appid;
        hashimg = data.response.games[1].img_icon_url;
        logoUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/" +appId +"/" +hashimg +".jpg";
        console.log(logoUrl);
        $('#SteamUserApi3').html("<p><img src='" +logoUrl +"'> " +data.response.games[1].name +" | Total played: "+(data.response.games[1].playtime_forever / 60).toFixed(1) +" hours | Last 2 weeks: " +(data.response.games[1].playtime_2weeks / 60).toFixed(1) +" hours</p>");
        $('#success_steamid').delay(5000).fadeOut(400);
        $('#error_steamid').hide();
        $('#success_steamid').show();
    })
        .fail(function(){
            $('#success_steamid').hide();
            $('#error_steamid').show();
        });
}


function getSteam(param) {
    $('#loader').show();
    var apiCall = "http://api.steampowered.com/ISteamApps/GetAppList/v0002/";
    console.log(param);
    jQuery.getJSON(apiCall, function (data) {
        $('#loader').hide();
        showPlayers();
        console.log(data);
        $("#steam").on('keyup', function (e) {
            if (e.keyCode == 13) {
                $('.loading').show();
                var appId = findGame(data, $('#steam').val());
                if (!appId)
                    showError($('#steam').val());
                else {
                    showPlayers(appId, $('#steam').val());
                    $('#success_steam').delay(5000).fadeOut(400);
                    $('#success_steam').show();
                    $('#error_steam').hide();
                }
            }
        });
    }).done(function(){
    })
        .fail(function(){
            showError()
        });
}



$('#loader').show();

getSteam();
getNameFromID();
getSteamID();
