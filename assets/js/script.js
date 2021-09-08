$(function(){
 
    var s = skrollr.init();     
        
    //scroll 숫자
     $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $(".scroll").text(parseInt(scroll));
        
  
//text blink effect
         if( scroll > $("#section3").offset().top ){
                $(".event1").addClass("blink");
                $(".event2").addClass("blink2");
                $(".event3").addClass("blink3");
                $(".event4").addClass("blink4");
                $(".event5").addClass("blink5");
                $(".event6").addClass("blink6");


         } else {
                $(".text-conts span div").removeClass("blink");
                $(".text-conts span div").removeClass("blink2");
                $(".text-conts span div").removeClass("blink3");
                $(".text-conts span div").removeClass("blink4");
                $(".text-conts span div").removeClass("blink5");
                $(".text-conts span div").removeClass("blink6");
            }
           
  //sec3= text, bg-color&color   
            if( scroll > $(".bg-change").offset().top ){
                $(".sec3").css("background-color","#fa5117");
                $(".works-text").css("color","#fff");
                $(".pf").css("color","#fff");
                $(".bottom-logo").css("color","#fff");
                $(".txt").css("background-color","#000");
                $(".bar").css("background-color","#000");
                $(".header-right nav ul li a").css("color","#fff");
                $(".time").css("color","#fff");
                   
            } else {
                $(".sec3").css("background-color","#000");
                $(".works-text").css("color","#fa5117");
                $(".pf").css("color","#fa5117");
                $(".bottom-logo").css("color","#fa5117");
                $(".txt").css("background-color","#fa5117");
                $(".bar").css("background-color","#fa5117");
                $(".header-right nav ul li a").css("color","#fa5117");
                $(".time").css("color","#fa5117");
            }
         
// section 4 - animation page text effect
       if( scroll > $("#section4").offset().top ){
                    $(".event1").addClass("blink");
                    $(".event2").addClass("blink2");
                    $(".event3").addClass("blink3");
                    $(".event4").addClass("blink4");
                    $(".bar").css("background-color","#fa5117");

         } else {
                $(".text-conts-ani span div").removeClass("blink");
                $(".text-conts-ani span div").removeClass("blink2");
                $(".text-conts-ani span div").removeClass("blink3");
                $(".text-conts-ani span div").removeClass("blink4");
        }

            //section 5= bar background-color
    if( scroll > $(".port-wrap").offset().top){
      
        $(".bar").css("background-color","#fa5117");
    }
      
        //section 5= bar background-color
        if( scroll > $("#section5").offset().top ){
        
            $(".bar").css("background-color","#000");
        
        }



// section 2 scroll 가로 스크롤

let Hscroll = scroll - $("#section2").offset().top

if(scroll > $("#section2").offset().top + 100){

    $(".opacityBox").fadeOut(1200);
    $(".horizontalTxt").css({left:-Hscroll+"px"});
 
}




// section 5 - tit-wrap
if( scroll > $("#section5").offset().top + 100 ){
    $(".sec5").css("visibility","visible");
    $(".ani-txt").fadeIn(2000);

} else {
    $(".ani-txt").fadeOut(2000);

}
    
// section 5 scroll 가로 스크롤

    let pagescroll = scroll - $("#section5").offset().top

    if(scroll > $("#section5").offset().top + 200){
        $(".Ho-scroll").css({left:-pagescroll+"px"})
    }

//section 6 - text Effect
if( scroll > $("#section6").offset().top){
  
    $(".txt").css("background-color","#fa5117");
    $(".bar").css("background-color","#fa5117");
 
}
    
// section 3 - portfolio view site button
          $('.pf-link li').hide();
         
          if( scroll > $(".port-conts > div:nth-child(1)").offset().top-100 ){
              $('.pf-link li').hide();
                $('.pf1-link').show();                
                
          }
         if( scroll > $(".port-conts > div:nth-child(2)").offset().top-100 ){
                $('.pf-link li').hide();
                $('.pf2-link').show();                
                
          }
         if( scroll > $(".port-conts > div:nth-child(3)").offset().top-100 ){
             $('.pf-link li').hide();
                $('.pf3-link').show();                
                
          }
         if( scroll > $(".port-conts > div:nth-child(4)").offset().top-100 ){
             $('.pf-link li').hide();
                $('.pf4-link').show();                
                
          }
          if( scroll > $(".port-conts > div:nth-child(5)").offset().top-100 ){
            $('.pf-link li').hide();
               $('.pf5-link').show();                
               
         }

        // 상단 스크롤 바
          var scrollY = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(3);
            $(".bar").css({"width" : scrollY + "%"});
            // $(".time").text(parseInt(scroll)+"%");

      
            //상단 스크롤 퍼센트  
        var percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
        $(".time").text(parseInt(percent)+"%");

 
  });
    
//     $(window).scroll(function(){
//        let time = $(window).scrollTop();
//        
//    return Math.floor(($(window).scrollTop() / ($(document).height();
//        $(window).scroll(time);
//                                                
//    });

});

