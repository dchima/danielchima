$(function(){

    $('.leeds').hover(function() {
      $('.menu').css("width", "1050px");
    }, function (){
      $('.menu').css("width", "0px");
    });
});

$(function(){

});

$(function(){
  $('.nottingham').hover(function() {
    $('.menu2').css("width", "1050px");
  }, function (){
    $('.menu2').css("width", "0px");
  });
});

$(function(){
  $('.essex').hover(function() {
    $('.menu3').css("width", "1050px");
  }, function (){
    $('.menu3').css("width", "0px");
  });
});

$(function(){
  $('.bhc').hover(function() {
    $('.menu4').css("width", "1050px");
  }, function (){
    $('.menu4').css("width", "0px");
  });
});

$(function(){
  $('.about').click(function() {
    $('.about-page').fadeIn("slow");
    $('.wrapper').fadeOut(0);
  });
});

$(function(){
  $('.exit').click(function() {
    $('.wrapper').fadeIn("slow");
    $('.about-page').hide(0);
  });
});



















//old code for click of logos
/*$('.bhc').click(function() {
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
});*/
