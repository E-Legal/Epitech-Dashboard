function listener() {

    $('#steamids').on('keyup', function (e) {
        if (e.keyCode == 13) {
            getNameFromID($('#steamids').val());
            getSteamID($('#steamids').val());
        }
    });
}

function getSteamuser(){

    $(document).ready( function() {
        getNameFromID();
        getSteamID();
        listener();
    });
}

getSteamuser();
