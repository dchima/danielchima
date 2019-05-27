var pop1= false;
var pop2= false;
var pop3= false;
var pop4= false;

$(function(){
  $('.leeds').click(function(){
    if(pop1==false){
        if ($(window).width() < 800){
          $('.menu').css({"opacity":"1","width":"500px","background":"#000"});
          $('.menu2').css("width","0px"); pop2=false;
          $('.menu3').css("width","0px"); pop3=false;
          $('.menu4').css("width","0px"); pop4=false;
          pop1 = true;
        }else{
          $('.menu').css({"opacity":"1","width":"900px","background":"#000"});
          $('.menu2').css("width","0px"); pop2=false;
          $('.menu3').css("width","0px"); pop3=false;
          $('.menu4').css("width","0px"); pop4=false;
          pop1 = true;
        }
      /*$('.menu').css({"opacity":"1","width":"900px","background":"#000"});
      $('.menu2').css("width","0px"); pop2=false;
      $('.menu3').css("width","0px"); pop3=false;
      $('.menu4').css("width","0px"); pop4=false;*/

    }else if(pop1==true){
      $('.menu').css("width","0px");
      pop1 = false;
    }
  });
});

$(function(){
  $('.nottingham').click(function() {
    if(pop2==false){
      $('.menu2').css({"opacity":"1","width":"900px","background":"#cadcf9"});
      $('.menu').css("width","0px"); pop1=false;
      $('.menu3').css("width","0px"); pop3=false;
      $('.menu4').css("width","0px"); pop4=false;
      pop2 = true;
    }else if(pop2==true){
      $('.menu2').css("width","0px");
      pop2 = false;
    }
  });
});

$(function(){
  $('.essex').click(function() {
    if(pop3==false){
      $('.menu3').css({"opacity":"1","width":"900px","background":"#46ed09"});
      $('.menu').css("width","0px"); pop1=false;
      $('.menu2').css("width","0px"); pop2=false;
      $('.menu4').css("width","0px"); pop4=false;
      pop3 = true;
    }else if(pop3==true){
      $('.menu3').css("width","0px");
      pop3 = false;
    }
  });
});

$(function(){
  $('.bhc').click(function() {
    if(pop4==false){
      $('.menu4').css({"opacity":"1","width":"900px","background":"#912"});
      $('.menu').css("width","0px"); pop1=false;
      $('.menu2').css("width","0px"); pop2=false;
      $('.menu3').css("width","0px"); pop3=false;
      pop4 = true;
    }else if(pop4==true){
      $('.menu4').css("width","0px");
      pop4 = false;
    }
  });
});



$(function(){
  $('.about').click(function() {
    $('.about-page').fadeIn("slow");
    $('.wrapper').fadeOut(0); $('.nav').fadeOut(0);
  });
});

$(function(){
  $('.exit').click(function() {
    $('.wrapper').fadeIn("slow"); $('.nav').fadeIn("slow");
    $('.about-page').hide(0);
  });
});

$(function(){
  $('.proj-logo').click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
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
