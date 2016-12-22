
    var over = function(){
        $(this).css("background","pink").children('a').css("color","#fff");
    }
    
    var out = function(){
        $(this).css("background","initial").children('a').css("color","#000");
    }
    
    var idx = 0
    
    $(function(){
        
        // 1번문제
        $("nav li").mouseenter(over).mouseleave(out);
       
        // 2번문제답
        $("nav li").click(function(){
        idx = $(this).index();
        var move = $('.content section').eq(idx).offset().top;
        
        $('html,body').stop().animate({
            scrollTop: move
        });
        
        return false;
        })
    
        
        $(".slidebanner .next").click(function(){
            
            $(".slidebanner ul li").eq(idx).find('img').animate({
                'display':'block',
                left:"-100%"
            })
            .parent().removeClass().next().addClass('on')
            .find('img')
            .css({
                'display':'block',
                'left':'100%'
            })
            .stop()
            .animate({
                'left':0
            })
            
            idx ++
            
            if(idx == $(".slidebanner ul li").length){
                idx = 0;
                $(".slidebanner ul li").eq(idx).addClass('on').find('img').css({
                    left:"100%"
                }).stop().animate({
                    'left':0
                })
            }
            
        })
        
        $('.slidebanner .prev').click(function(){
            
            $('.slidebanner ul li').eq(idx).find('img')
            .animate({
                'left':"100%"
            })
            .parent().removeClass().prev().addClass('on').find('img').css({
                'display':'block',
                'left':"-100%"
            })
            .stop()
            .animate({
                'left':0
            })
            
            idx --
            
            if(idx < 0){
                idx = $(".slidebanner ul li").length-1
                $(".slidebanner ul li").eq(idx).addClass('on').find('img').css({
                    'display':'block',
                    'left':"-100%"
                }).stop().animate({
                    'left':0
                })
            }
        })
        
//         var interSlide = setInterval(function() {
//     $('.slidebanner .next').trigger('click')
    
//     },3000)       
 
//   $('.slidebanner').mouseenter(function(){
                 
//                  clearInterval(interSlide)
                 
//              }).mouseleave(function(){
                 
//                 interSlide = setInterval(function(){
//                  $('.slidebanner .next').click();
//                  },3000);
                 
//              })

        var inters = setInterval(function(){
                 $('.slidebanner .next').trigger('click')
             },4500)
             
             $('.slidebanner').mouseenter(function(){
                 
                 clearInterval(inters)
                 
             }).mouseleave(function(){
                 
                inters = setInterval(function(){
                 $('.slidebanner .next').click();
                 },4500);
                 
             })
        
        //  var god = setInterval(function(){
        //     // next를 클릭한 효과를 내라
        //         $('.slidebanner .next').trigger('click') 
        //      },4500)
             
        //     $('.sildebanner').mouseenter(function(){
                
        //         clearInterval(god)
                
        //     }).mouseleave(function(){
                
        //         god = setInterval(function(){
        //         $('.slidebanner .next').click();
        //         },4500);
                
        //     })
             
        // 4번 문제
        
    $('.fadebanner li a').click(function(){
        
         var aa = $(this).parent().index();
         $('.fadebanner li.on').removeClass().find('img').fadeOut();
         $('.fadebanner li').eq(aa).addClass('on').find('img').fadeIn();
        
        return false;
        
        
    })
    
    // 5번 문제
    
    $('.movie-view li a').click(function(){
        var cc = $(this).attr('href')
        var url = "https://www.youtube.com/embed/"+cc+"?rel=0&amp;controls=0&amp;showinfo=0"
        $('.movie-view iframe').attr('src',url);
        
        $(this).children('img').css({opacity:0.5}).parents('li').siblings().find('img').css({opacity:1});
        
        // $(this).children('img').fadeTo(500,0.5).parents().siblings().children('img').fadeIn()
        
        return false;
        
        })
        
        
    
    })
    