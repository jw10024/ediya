$(document).ready(function(){

    $('nav > ul').mouseenter(function(){
        $('nav').stop().animate({
            height: '300px'
        },100)
    })
    
    $('nav').mouseleave(function(){
        $('nav').stop().animate({
            height : '50px'
        },100)
    })
    $(window).scroll(function(){
        $('.top-nav').css({
            top : '-50px'
        })
        if($(window).scrollTop() == 0){
            $('.top-nav').css({
                top : '0px'
            })  
        }
    })
})