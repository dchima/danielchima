$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('div.bg2').offset().top }, 'slow');
     return false;
   });
 });
