$(document).ready(function() {
    $('#fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'left',
    	continuousVertical: true,
        touchSensitivity: 5,
    	css3: false,
        onLeave: function(index, nextIndex, direction){
            var colors = ['#29363c', '#1c161f', '#4d1e2f', '#7019e2' ,'#115f9a', '#29363c'];
            var maxSection = $('.section').length;

            if ( index == 5 ){
                $('.go-down').attr('href', '#slide1' );
            } else if ( index != 5 ){
                $('.go-down').attr('href', '#slide' + (nextIndex + 1) );
            }

            $('.menu').css('background-color', colors[nextIndex -1]);    
        
            $wiwi = $(window).width();
            if ( $wiwi >= 500 ){

                if ( index == 1 && nextIndex == maxSection){
                    $('.menu').css('background-color', colors[maxSection - 1]);
                    $('#project-1').find('.color-tab').css('background-color', colors[nextIndex - 1]);
                    $('#project-' + nextIndex).find('.color-tab').css('background-color', colors[nextIndex - 1]);
                } 

                if ( direction == 'down'){
                    if ( $('#project-' + index).hasClass('active') ){
                        $(this).find('.color-tab').css('background-color', colors[nextIndex - 1]);
                        $('#project-' + nextIndex).find('.color-tab').css('background-color', colors[nextIndex - 1]);
                        $(this).find('h2').textillate('out');
                        $('#project-' + nextIndex).find('h2').textillate('start');
                        $('.menu').css('background-color', colors[nextIndex -1]);
                    } 

                } else if ( direction == 'up'){
                    if ( $('#project-' + index).hasClass('active') && $('#project-' + index != '#project-1') ){
                        $(this).find('.color-tab').css('background-color', colors[nextIndex - 1]);
                        $('#project-' + nextIndex).find('.color-tab').css('background-color', colors[nextIndex - 1]);
                        $(this).find('h2').textillate('out');
                        $('#project-' + nextIndex).find('h2').textillate('start');
                        $('.menu').css('background-color', colors[nextIndex - 1]);
                    } 
                }

            }
        },
    });

});


$(function () {

    $wiki = $(window).width();

    if ( $wiki >= 500 ){
        $('.demo').textillate({
            in: {
                delayScale: 1.5,
                delay: 50
            },
            out: {
                effect: 'fadeOutRight',
                delayScale: 0.8,
                delay: 30
            }
        });
    }
})   


$(function(index){

    window.setTimeout(function(){
        $('.loader').addClass('no-visible');
        $('.section.active').find('h2').textillate('start');
        $('#fullpage').addClass('visible');
        $('#fp-nav').addClass('visible');
    }, 4000);

    window.setTimeout(function(){
        $('.gradient.first').removeClass('active');
        $('.gradient.second').addClass('active');
    }, 2000);

    $('.color-tab a').mouseover(function(){
        $(this).closest('.row').find('.bg-section').addClass('hover');
    });

    $('.color-tab a').mouseleave(function(){
        $(this).closest('.row').find('.bg-section').removeClass('hover');
    });

    var projectNames = [ 'CSS | ФИЧИ', 'Портфолио', 'Bootstrap4', 'Roxy-Bootstrap', 'Fogafín', 'Блог', 'New']
    
    $('#fp-nav li').each(function(index){
        $(this).find('a').append('<h6>' + projectNames[index] + '</h6>');
    });

    $('.contact').mouseover(function(){
        var color = $('.section.active .color-tab').css('background-color');
        $(this).css('color', color);
    });

    $('.contact').mouseleave(function(){
        $(this).css('color', 'white');
    });

    var $windowHeight = $(window).outerHeight();

    $('.bg-section').closest('.large-6').css('height', $windowHeight);

    $('.delay-link').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    $('.loader').addClass('exit');

	    // do something while timeOut ticks ... 

	    setTimeout(function(){
	         window.location = goTo;
	    },800);       
	}); 

    $('.menu a').on('click', function(event){
        event.preventDefault();
        if ( $('.menu').hasClass('open') ){
            $('.menu').removeClass('open');
        } else {
            $('.menu').addClass('open');
        }

        var $windowHeight = $(window).outerHeight();
        var $hmenu = $('.open .hidden-menu').outerHeight();

        $('.open .hidden-menu').css('margin-top', ( $windowHeight - $hmenu ) / 2 );
                 
    });
});