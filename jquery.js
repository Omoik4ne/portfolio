$('#menu').hide();
$('.logo-overlay').hide();

$(document).ready(function(){

    $('#career').hover(
        function(){$('.logo-overlay').show();},
        function(){$('.logo-overlay').hide();
    });

});

