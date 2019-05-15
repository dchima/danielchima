var tog = [false,false,false,false,false];
var title_size = "25vh";
$(document).ready(function(){

  //first prject
  $('.content1').click(function(){
    if(tog[0]==false){
      $('.content1').css({"opacity":"1","height":"100vh"});
      $('#content1-wrapper').css({"display":"block"});
      $('.content2').css({"height":"0vh"});
      $('.content3').css({"height":"0vh"});
      $('.content4').css({"height":"0vh"});
      $('.content5').css({"height":"0vh"});
      for(var x=0;x<5;x++){
        tog[x]=false;
      }
      tog[0]=true;
    }
    else if(tog[0]==true){
      $('.content1').css({"opacity":"1","height":title_size});
      $('.content2').css({"height":title_size});
      $('.content3').css({"height":title_size});
      $('.content4').css({"height":title_size});
      $('.content5').css({"height":title_size});
      tog[0]=false;
    }
  });
//second project
  $('.content2').click(function(){
    if(tog[1]==false){
      $('.content2').css({"opacity":"1","height":"100vh"});
      $('#content2-wrapper').css({"display":"block"});
      $('.content1').css({"height":"0vh"});
      $('.content3').css({"height":"0vh"});
      $('.content4').css({"height":"0vh"});
      $('.content5').css({"height":"0vh"});

      for(var x=0;x<5;x++){
        tog[x]=false;
      }
      tog[1]=true;
    }
    else if(tog[1]==true){
      $('.content2').css({"opacity":"1","height":title_size});
      $('.content1').css({"height":title_size});
      $('.content3').css({"height":title_size});
      $('.content4').css({"height":title_size});
      $('.content5').css({"height":title_size});
      tog[1]=false;
    }
  });
  //third project
  $('.content3').click(function(){
    if(tog[2]==false){
      $('.content3').css({"opacity":"1","height":"100vh"});
      $('#content3-wrapper').css({"display":"block"});
      $('.content1').css({"height":"0vh"});
      $('.content2').css({"height":"0vh"});
      $('.content4').css({"height":"0vh"});
      $('.content5').css({"height":"0vh"});
      for(var x=0;x<5;x++){
        tog[x]=false;
      }
      tog[2]=true;
    }
    else if(tog[2]==true){
      $('.content3').css({"opacity":"1","height":title_size});
      $('.content1').css({"height":title_size});
      $('.content2').css({"height":title_size});
      $('.content4').css({"height":title_size});
      $('.content5').css({"height":title_size});
      tog[2]=false;
    }
  });
  //forth project
  $('.content4').click(function(){
    if(tog[3]==false){
      $('.content4').css({"opacity":"1","height":"100vh"});
      $('#content4-wrapper').css({"display":"block"});
      $('.content1').css({"height":"0vh"});
      $('.content2').css({"height":"0vh"});
      $('.content3').css({"height":"0vh"});
      $('.content5').css({"height":"0vh"});
      for(var x=0;x<5;x++){
        tog[x]=false;
      }
      tog[3]=true;
    }
    else if(tog[3]==true){
      $('.content4').css({"opacity":"1","height":title_size});
      $('.content1').css({"height":title_size});
      $('.content2').css({"height":title_size});
      $('.content3').css({"height":title_size});
      $('.content5').css({"height":title_size});
      tog[3]=false;
    }
  });
  //fifth project
  $('.content5').click(function(){
    if(tog[4]==false){
      $('.content5').css({"opacity":"1","height":"100vh"});
      $('#content5-wrapper').css({"display":"block"});
      $('.content1').css({"height":"0vh"});
      $('.content2').css({"height":"0vh"});
      $('.content3').css({"height":"0vh"});
      $('.content4').css({"height":"0vh"});
      for(var x=0;x<5;x++){
        tog[x]=false;
      }
      tog[4]=true;
    }
    else if(tog[4]==true){
      $('.content5').css({"opacity":"1","height":title_size});
      $('.content1').css({"height":title_size});
      $('.content2').css({"height":title_size});
      $('.content3').css({"height":title_size});
      $('.content4').css({"height":title_size});
      tog[4]=false;
    }
  });
});
