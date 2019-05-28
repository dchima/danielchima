var pop1= false;
var pop2= false;
var pop3= false;
var pop4= false;

$(function(){
  $('.leeds').click(function(){
    if(pop1==false){
        if ($(window).width() < 361){
          $('.menu').css({"opacity":"1","width":"96%","background":"#000"});
          $('.menu2').css("width","0px"); pop2=false;
          $('.menu3').css("width","0px"); pop3=false;
          $('.menu4').css("width","0px"); pop4=false;
          pop1 = true;
        }else{
          $('.menu').css({"opacity":"1","width":"66.66%","background":"#000"});
          $('.menu2').css("width","0px"); pop2=false;
          $('.menu3').css("width","0px"); pop3=false;
          $('.menu4').css("width","0px"); pop4=false;
          pop1 = true;
        }
    }else if(pop1==true){
      $('.menu').css("width","0px");
      pop1 = false;
    }
  });
});

$(function(){
  $('.nottingham').click(function() {
    if(pop2==false){
      if ($(window).width() < 361){
        $('.menu2').css({"opacity":"1","width":"96%","background":"#289ac1"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu3').css("width","0px"); pop3=false;
        $('.menu4').css("width","0px"); pop4=false;
        pop2 = true;
      }else{
        $('.menu2').css({"opacity":"1","width":"66.66%","background":"#289ac1"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu3').css("width","0px"); pop3=false;
        $('.menu4').css("width","0px"); pop4=false;
        pop2 = true;
      }
    }else if(pop2==true){
      $('.menu2').css("width","0px");
      pop2 = false;
    }
  });
});

$(function(){
  $('.essex').click(function() {
    if(pop3==false){
      if ($(window).width() < 361){
        $('.menu3').css({"opacity":"1","width":"96%","background":"#46ed09"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu2').css("width","0px"); pop2=false;
        $('.menu4').css("width","0px"); pop4=false;
        pop3 = true;
      }else{
        $('.menu3').css({"opacity":"1","width":"66.66%","background":"#46ed09"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu2').css("width","0px"); pop2=false;
        $('.menu4').css("width","0px"); pop4=false;
        pop3 = true;
      }
    }else if(pop3==true){
      $('.menu3').css("width","0px");
      pop3 = false;
    }
  });
});

$(function(){
  $('.bhc').click(function() {
    if(pop4==false){
      if ($(window).width() < 361){
        $('.menu4').css({"opacity":"1","width":"96%","background":"#912"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu2').css("width","0px"); pop2=false;
        $('.menu3').css("width","0px"); pop3=false;
        pop4 = true;
      }else{
        $('.menu4').css({"opacity":"1","width":"66.66%","background":"#912"});
        $('.menu').css("width","0px"); pop1=false;
        $('.menu2').css("width","0px"); pop2=false;
        $('.menu3').css("width","0px"); pop3=false;
        pop4 = true;
      }
    }else if(pop4==true){
      $('.menu4').css("width","0px");
      pop4 = false;
    }
  });
});

$(function(){
  $(window).resize(function(){
    if(pop1==true){
      if ($(window).width() < 362){
        $('.menu').css({"opacity":"1","width":"96%","background":"#000"});
      }else if($(window).width() > 362){
        $('.menu').css({"opacity":"1","width":"66.66%","background":"#000"});
      }
    }else if(pop2==true){
      if ($(window).width() < 362){
        $('.menu2').css({"opacity":"1","width":"96%","background":"#289ac1"});
      }else if($(window).width() > 362){
        $('.menu2').css({"opacity":"1","width":"66.66","background":"#289ac1"});
      }
    }else if(pop3==true){
      if ($(window).width() < 362){
        $('.menu3').css({"opacity":"1","width":"96%","background":"#46ed09"});
      }else if($(window).width() > 362){
        $('.menu3').css({"opacity":"1","width":"66.66%","background":"#46ed09"});
      }
    }else if(pop4==true){
      if ($(window).width() < 362){
        $('.menu4').css({"opacity":"1","width":"96%","background":"#912"});
      }else if($(window).width() > 362){
        $('.menu4').css({"opacity":"1","width":"66.66%","background":"#912"});
      }
    }
    console.log(pop1,pop2,pop3,pop4);
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
