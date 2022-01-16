$(function(){    
    let i=0;
    $(window).on("load resize",function(){
        var width_size = $(window).width();
        if(width_size <=767){
            $(window).off('wheel');
            $("[class*='windo']").show();
            $("[class*='windo']").removeClass('off');
        }else if(width_size <=1024){
            $(window).off('wheel');
            $("[class*='windo']").show();
            $("[class*='windo']").removeClass('off');
        }
    else {
    
    $(window).on('wheel', function(event){ 
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        i--;
        if(i<0){
            i=0;
        }
       else{            
        $("#silder").css({
        "position":"absolute",
        "top": "-50%"
        });
        $(".windo"+i+"").removeClass('off');
        $("#silder").stop().animate({top:0},1000);
    
        setTimeout(function(){
            $(".windo"+i+"").siblings("div").addClass('off');
        }, 1001);  
    } 
    }
    else {
    // scroll down
    i++;
    if(i>3){
            i=3;
        }
        else{
           
        $("#silder").css({
        "position":"absolute",
        "top": "0"
        });
        $(".windo"+i+"").removeClass('off');
        $("#silder").stop().animate({top:"-100%"},1000);
        
        setTimeout(function(){
            $(".windo"+i+"").siblings("div").addClass('off');
            $("#silder").css({
        "position":"absolute",
        "top": "0"
        });
        }, 1001);
        }
        
      
     }
    });
    $(".windo0>[class*='slid_']>li").hover(function(){
        let idx1 =$(this).index()+1;
        $(".slid_"+idx1+"").removeClass('off').siblings('ul').addClass("off");
    
    });
    }
});
    $('.title').hover(function(){
        $('.sub_list').stop().fadeIn(300);
    });
    $('.title').mouseleave(function(){
        $('.sub_list').stop().fadeOut(300);
    });
  



});