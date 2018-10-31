function Weatherwid() {
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.id = "stop";
    btn.onclick = function () {
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para3);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(para5);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("P");
    var para2 = document.createElement("DIV");
    var para3 = document.createElement("INPUT");
    var para4 = document.createElement("DIV");
    var para5 = document.createElement("DIV");

    para4.id = "error_city";
    para4.className = "isa_error";
    para5.id = "success_city";
    para5.className = "isa_success";

    para3.id = "zipcode";
    para3._type = "text";
    para3.placeholder = "City name";
    para3.title = "Enter your city name !";
    para.id = "city";
    para2.className = "desc";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("WeatherArea").appendChild(para);
    document.getElementById("WeatherArea").appendChild(para2);
    document.getElementById("WeatherArea").appendChild(para3);
    document.getElementById("WeatherArea").appendChild(para4);
    var h = document.getElementById("error_city");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "Invalid cityname, please fix...");
    document.getElementById("WeatherArea").appendChild(para5);
    var h2 = document.getElementById("success_city");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Weather have been successsfully updated !");
    document.getElementById("WeatherArea").appendChild(btn);
    getWeather();
    $('#WeatherArea').show();
}

function Cryptowid() {
    var hr = document.createElement("HR");
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.onclick = function () {
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para3);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(para5);
        this.parentElement.removeChild(hr);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("P");
    var para2 = document.createElement("DIV");
    var para3 = document.createElement("INPUT");
    var para4 = document.createElement("DIV");
    var para5 = document.createElement("DIV");

    para4.id = "error_crypto";
    para4.className = "isa_error";
    para5.id = "success_crypto";
    para5.className = "isa_success";

    para3.id = "crypto";
    para3._type = "text";
    para3.placeholder = "Crypto name";
    para3.title = "Enter your favorite crypto name !";
    para.id = "result";
    para2.className = "MarketCap";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("CryptoArea").appendChild(hr);
    document.getElementById("CryptoArea").appendChild(para2);
    document.getElementById("CryptoArea").appendChild(para);
    document.getElementById("CryptoArea").appendChild(para3);
    document.getElementById("CryptoArea").appendChild(para4);
    var h = document.getElementById("error_crypto");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "<span id=\"crypterr\">Crypto error...</span>");
    document.getElementById("CryptoArea").appendChild(para5);
    var h2 = document.getElementById("success_crypto");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Crypto have been successfully updated !");
    document.getElementById("CryptoArea").appendChild(btn);
    getCrypto();
    $('#CryptoArea').show();
}

function Stock_marketwid() {
    var hr = document.createElement("HR");
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.onclick = function () {
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para3);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(hr);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("DIV");
    var para2 = document.createElement("INPUT");
    var para3 = document.createElement("DIV");
    var para4 = document.createElement("DIV");

    para3.id = "error_bourse";
    para3.className = "isa_error";
    para4.id = "success_bourse";
    para4.className = "isa_success";

    para2.id = "bourse";
    para2._type = "text";
    para2.placeholder = "Company Symbol";
    para2.title = "Enter company's symbol !";
    para.className = "BourseApi";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("BourseArea").appendChild(hr);
    document.getElementById("BourseArea").appendChild(para);
    document.getElementById("BourseArea").appendChild(para2);
    document.getElementById("BourseArea").appendChild(para3);
    var h = document.getElementById("error_bourse");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "<span id=\"bourserr\"> Bourse symbol error... </span>");
    document.getElementById("BourseArea").appendChild(para4);
    var h2 = document.getElementById("success_bourse");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Bourse widget have been successfully updated !");
    document.getElementById("BourseArea").appendChild(btn);
    getBourse();
    $('#BourseArea').show();
}

function Youtubewid() {
    var hr = document.createElement("HR");
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.onclick = function () {
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para3);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(hr);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("DIV");
    var para2 = document.createElement("INPUT");
    var para3 = document.createElement("DIV");
    var para4 = document.createElement("DIV");

    para3.id = "error_yt";
    para3.className = "isa_error";
    para4.id = "success_yt";
    para4.className = "isa_success";

    para2.id = "ytber";
    para2._type = "text";
    para2.placeholder = "Channel Name";
    para2.title = "Enter Channel Name!";
    para.className = "YtApi";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("YoutubeArea").appendChild(hr);
    document.getElementById("YoutubeArea").appendChild(para);
    document.getElementById("YoutubeArea").appendChild(para2);
    document.getElementById("YoutubeArea").appendChild(para3);
    var h = document.getElementById("error_yt");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "<span id=\"yterr\"> Channel name error... </span>");
    document.getElementById("YoutubeArea").appendChild(para4);
    var h2 = document.getElementById("success_yt");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Channel infos successfully updated !");
    document.getElementById("YoutubeArea").appendChild(btn);
    getYoutube();
    $('#YoutubeArea').show();
}

function Steamgamewid() {
    var hr = document.createElement("HR");
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.onclick = function () {
        this.parentElement.removeChild(hr);
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para3);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(para5);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("DIV");
    var para2 = document.createElement("INPUT");
    var para3 = document.createElement("IMG");
    var para4 = document.createElement("DIV");
    var para5 = document.createElement("DIV");

    para4.id = "error_steam";
    para4.className = "isa_error";
    para5.id = "success_steam";
    para5.className = "isa_success";

    para3.id = "loader";
    para3.className = "loading";
    para3.src = "https://i.imgur.com/Jw7T4q9.gif";
    para2.id = "steam";
    para2._type = "text";
    para2.placeholder = "Steam Game";
    para2.title = "Enter a Steam game name!";
    para.id = "SteamApi";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("SteamgameArea").appendChild(hr);
    document.getElementById("SteamgameArea").appendChild(para);
    document.getElementById("SteamgameArea").appendChild(para2);
    document.getElementById("SteamgameArea").appendChild(para3);
    document.getElementById("SteamgameArea").appendChild(para4);
    var h = document.getElementById("error_steam");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "<span id=\"steamerr\"> Steam Api Error... </span>");
    document.getElementById("SteamgameArea").appendChild(para5);
    var h2 = document.getElementById("success_steam");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Steam infos successfully updated !");
    document.getElementById("SteamgameArea").appendChild(btn);
    getSteam();
    $('#SteamgameArea').show();
}

function Steamuserwid() {
    var hr = document.createElement("HR");
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.onclick = function () {
        this.parentElement.removeChild(hr);
        this.parentElement.removeChild(para);
        this.parentElement.removeChild(para_1);
        this.parentElement.removeChild(para_2);
        this.parentElement.removeChild(para2);
        this.parentElement.removeChild(para4);
        this.parentElement.removeChild(para5);
        this.parentElement.removeChild(this);
    };
    var para = document.createElement("DIV");
    var para_1  = document.createElement("DIV");
    var para_2 = document.createElement("DIV");
    var para2 = document.createElement("INPUT");
    var para4 = document.createElement("DIV");
    var para5 = document.createElement("DIV");

    para4.id = "error_steamid";
    para4.className = "isa_error";
    para5.id = "success_steamid";
    para5.className = "isa_success";

    para2.id = "steamids";
    para2._type = "text";
    para2.placeholder = "SteamID";
    para2.title = "Enter a Steam ID!";
    para.id = "SteamUserApi";
    para_1.id = "SteamUserApi2";
    para_2.id = "SteamUserApi3";
    var btn_t = document.createTextNode("Remove widget");
    btn.appendChild(btn_t);
    document.getElementById("SteamidArea").appendChild(hr);
    document.getElementById("SteamidArea").appendChild(para);
    document.getElementById("SteamidArea").appendChild(para_1);
    document.getElementById("SteamidArea").appendChild(para_2);
    document.getElementById("SteamidArea").appendChild(para2);
    document.getElementById("SteamidArea").appendChild(para4);
    var h = document.getElementById("error_steamid");
    h.insertAdjacentHTML("beforeend", "<i class=\"fa fa-times-circle\"></i>\n" +
        "<span id=\"steamiderr\"> Steam Api Error... </span>");
    document.getElementById("SteamidArea").appendChild(para5);
    var h2 = document.getElementById("success_steamid");
    h2.insertAdjacentHTML("beforeend", "<i class=\"fa fa-check\"></i>\n" +
        "Steam infos successfully updated !");
    document.getElementById("SteamidArea").appendChild(btn);
    getSteamuser();
    $('#SteamidArea').show();
}