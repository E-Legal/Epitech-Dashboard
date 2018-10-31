const numberWithDots = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

function getYoutube(param) {
    if (!param)
        param = "PewDiePie";
    var apiCall = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyBVOO7NG9asGlNUnqWUK2CW5ouv0Y5jxtg&forUsername=" + param + "&part=id";

    console.log(param);
    jQuery.getJSON(apiCall, function (data) {
        if (data.items.length == 0) {
            $('#yterr').html("Channel name " +param +" is an invalid channel...");
            $('#error_yt').show();
            $('#success_yt').hide();
            return;
        }
        else {
            $('#success_yt').delay(5000).fadeOut(400);
            $('#success_yt').show();
            $('#error_yt').hide();
        }
        console.log(data);
        $('.YtApi').html("<a>Channel info for Youtuber <a id='ytname'>" +param +"</a><br>Nb of Videos: " +numberWithDots(data.items[0].statistics.videoCount) +" | Subscribers: " +numberWithDots(data.items[0].statistics.subscriberCount) +" | Total Views: " +numberWithDots(data.items[0].statistics.viewCount)  +"</p>");
        $('#ytname').css('color', 'red');
        $("#ytber").on('keyup', function (e) {
            if (e.keyCode == 13) {
                getYoutube($('#ytber').val());
            }
        });
    })
        .fail(function(){
            console.log('FAILED');
           $('#error_yt').show();
           $('#success_yt').hide();
        });
}

    getYoutube();