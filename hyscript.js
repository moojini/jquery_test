var over = function(){
        $(this).css({'background-color':'#ff69b4','color':'#fff'})
    }
var out = function(){
        $(this).css({'background-color':'','color':''})
    }

var interSlide; 

      
var interFade;

var idx = 0;

var slide = {

   
    event:function(){
        $('.slidebanner .next').click(function(){
          var move = $('.slidebanner').width()
         
          $('.slidebanner ul li').eq(idx).find('img')
          .animate({'left' :-move
              
          },500)
          .parent().removeClass().next().addClass('on').find('img')
          .css({'display':'block','left':move})
          .stop()
          .animate({left:0},500)
            
              idx++
            
            
            if(idx == $('.slidebanner ul li').length){
              idx = 0;
              $('.slidebanner ul li').eq(idx).addClass('on').find('img')
              .css({
                  'left':move
                  })
                  .stop().animate({
                      left:0
                  },500)
            }
            
        })
        $('.slidebanner .prev').click(function() {
            var move = $('.slidebanner').width()
            idx = $('.slidebanner li.on').index()
            $('.slidebanner ul li').eq(idx).find('img')
            .animate({left:move},500)
            .parent().removeClass().prev().addClass('on').find('img')
            .css({'display':'block', 'left':-move})
            .stop().animate({left:0},500)
                      
                      idx--
             if(idx<0){
                 idx = $('.slidebanner ul li').length-1
                
                 $('.slidebanner ul li').eq(idx).addClass('on').find('img')
                 .css({
                     'left':-move,
                     'display':'block'
                 })
                 .stop()
                 .animate({left:0},500)
                 
             }            

        })
        $('.slidebanner li a').click(function() {
            var move = $('.slidebanner').width()
            var hinum = $('.slidebanner li.on').index()
            idx = $(this).parent().index()
            if(hinum > idx){
                $('.slidebanner ul li').eq(hinum)
                .find('img')
                .css({'left':0,'display':'block'})
                .animate({'left':move},500)
                
                $('.slidebanner ul li').eq(idx)
                .addClass('on').find('img')
                .css({'left':-move,'display':'block'})
                .animate({left:0},500)
                .parent().siblings().removeClass()
            }else if(hinum < idx){
                $('.slidebanner ul li').eq(hinum)
                .find('img')
                .css({'left':0,'display':'block'})
                .animate({'left':-move},500)
                $('.slidebanner ul li').eq(idx)
                .addClass('on').find('img')
                .css({'left':move,'display':'block'})
                .animate({left:0},500)
                .parent().siblings().removeClass()
                    }
        })
   } 

}
  
 
        
        
$(function(){
    $('nav li a').hover(over,out).click(function(){
        var idx = $(this).parent().index();
        
        var move = $('.content section:eq('+idx+')').offset().top
        $('html,body').stop().animate({scrollTop:move},1000)
        
        
    })
    
interSlide = setInterval(function() {
    $('.slidebanner .next').trigger('click')
    
},3000)       
 
   $('.slidebanner').mouseenter(function(){
                 
                 clearInterval(interSlide)
                 
             }).mouseleave(function(){
                 
                interSlide = setInterval(function(){
                 $('.slidebanner .next').click();
                 },3000);
                 
             }) 
  
  
  
  
   slide.event()
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  $('.fadebanner li a').click(function(){
      var idxo = $(this).parent().index()
      $('.fadebanner li.on ').removeClass().find('img')
      .fadeOut()
      $('.fadebanner li').eq(idxo).addClass('on').find('img').fadeIn()
       
      return false
   
  }) 
   
    
interFade = setInterval(function(){
    var idxo = $('.fadebanner li.on').index()

    $('.fadebanner li').eq(idxo).removeClass().find('img').fadeOut()
    .parent().next().addClass('on').find('img').fadeIn()
    if($('.fadebanner li.on').html() == undefined){
            $('.fadebanner li:first').addClass('on').find('img').fadeIn() 
        }
    },4800)




$('.fadebanner li').mouseenter(function(){

        
    clearInterval(interFade)

}).mouseleave(function(){
    interFade = setInterval(function(){
    idxo = $('.fadebanner li.on').index()

    $('.fadebanner li').eq(idxo).removeClass().find('img').fadeOut()
    .parent().next().addClass('on').find('img').fadeIn()
    if($('.fadebanner li.on').html() == undefined){
            $('.fadebanner li:first').addClass('on').find('img').fadeIn() 
        }
    },4800)
    
})

 $('.movie-view li a').click(function(){
        
        var movecode = $(this).attr('href');
        var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
        $('.movie-view iframe').attr('src',url)
        $(this).find('img').css('opacity',0.5).parents('li')
        .siblings().find('img').css('opacity','')           
        
        //   $(this).children('img').fadeTo(500,0.5).parents('li').siblings().find('img').fadeIn()
        return false
    })
    
    
})
 

//   var tt = false;
    
//     $('.movie-view li a').click(function(){
        
//         var movecode = $(this).attr('href');
//         var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
//         $('.movie-view iframe').attr('src',url)
        
        
        
//         if(!tt){
//             $(this).fadeTo(500,0.5)
//             tt = true
//         }else if(tt){
//             $(this).fadeTo(500,1)
//             tt=false
//         }
        
        
        
//         return false
//     })


        