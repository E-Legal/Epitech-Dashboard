    function getBourse(param) {
    if (!param)
        param = "FB";
    var apiCall = "https://api.iextrading.com/1.0/stock/" +param +"/quote";

    console.log(param);
    jQuery.getJSON(apiCall, function (data) {
        $("#bourse").on('keyup', function (e) {
            if (e.keyCode == 13) {
                    getBourse($('#bourse').val());
                    console.log('WTFFF');
                }
            });
        $('#success_bourse').show();
        $('#error_bourse').hide();
        $('#success_bourse').delay(5000).fadeOut(400);
        $('.BourseApi').html("<p> Company: " +data.companyName +" [" +data.symbol +"] at " +data.latestPrice  +"$<br>Yearly Max "  +data.week52High +"$ | Yearly Low: " +data.week52Low +"$ | <a id='boursevol'>24h Evolution: " +data.change +"$</a></p>");
        if (data.change > 0)
            $('#boursevol').css('color', 'green');
        else if (data.change < 0)
            $('#boursevol').css('color', 'red');
        else
            $('#boursevol').css('color', 'yellow');
        console.log(data);
    })
        .fail(function(){
            $('#bourserr').html("Bourse symbol \"" +param +"\" is invalid...");
            console.log('FAILED');
            $('#success_bourse').hide();
            $('#error_bourse').show();
            $('#error_bourse').delay(5000).fadeOut(400);

        });
}

getBourse();