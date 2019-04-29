$(document).ready(function(){
    $('.bhc').click(function() {
      $('.menu').slideToggle("slow");$('.menu2').fadeOut("slow");
      $('.menu3').fadeOut("slow");$('.menu4').fadeOut("slow");
    });
    $('.essex').click(function() {
      $('.menu').fadeOut("slow");$('.menu2').slideToggle("slow");
      $('.menu3').fadeOut("slow");$('.menu4').fadeOut("slow");
    });
    $('.nottingham').click(function() {
      $('.menu').fadeOut("slow");$('.menu2').fadeOut("slow");
      $('.menu3').slideToggle("slow");$('.menu4').fadeOut("slow");
    });

    $('.leeds').click(function() {
      $('.menu').fadeOut("slow");$('.menu2').fadeOut("slow");
      $('.menu3').fadeOut("slow");$('.menu4').slideToggle("slow");
    });

});
