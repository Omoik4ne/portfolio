$(document).ready(function(){ 
    $('<div></div>')
    .attr('id', 'navbar')
    .css('opacity', 0.65)
    .hover(function(){
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
        setTimeout(function(){
            $('#navbar:not(.active)').slideUp(function(){
                $('a.icon-hover').removeClass('icon-hover');
            });
        }, 800);
    }).appendTo('body');

$('icon a').mouseover(function(){
    $(this).addClass('icon-hover');
    $('#overlay:not(:animated)')
    .addClass('active')
    .html('<a href="#">Homepage</a>&nbsp;<a href="#about-contenu">About</a>;<a href="#skills-contenu">Skills & Projects</a>&nbsp;<a href="#career-contenu">Career</a>&nbsp;')
    .slideDown();
    });
 });