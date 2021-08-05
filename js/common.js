// $(document).ready(function (){
//     // var $loading = $('.loading');
//     // window.onload = function(){
//     //     $loading.removeClass('on');
//     // }
    
// });
var mySwiper1 = new Swiper('.swiper-container1', {
        initialSlide:0,
        observer:true,
        observeParents:true,
        effect: 'slide',
        slidesPerView: 4.5,
        spaceBetween:40,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        pagination: {
            el: '.swiper-pagination1',
        },
        on: {
            resize: function () {
                    setTimeout(() => {
                    mySwiper1.update()
                    }, 500) 
                    }
            },
        breakpoints:{
            1281:{
                slidesPerView: 3.5,
                spaceBetween:20,
            },
            735:{
                slidesPerView: 2.5,
                spaceBetween:20,
            },
            414:{
                slidesPerView: 1,
                spaceBetween:0,
            }

        },
        speed: 600,
        preloadImages: true,
        
}); 
var mySwiper2 = new Swiper('.swiper-container2', {
    initialSlide:0,
    observer:true,
    observeParents:true,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:20,
    centeredSlides: true,
    // loop: true,
    initialSlide: 0,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
    },
    
    speed: 400,
    preloadImages: true,

}); 


$(document).ready(function(){
    function addRemoveClass() {
        var delay = 2250;
        setTimeout(function() {
            $('.img_animate .img').removeClass('on');
            addRemoveClass();
        }, delay);
    };
    function imgAnimate(){
        var $imgAnimation = $('.img_animate .img'), counter = 0;
        setTimeout(function(){
            setInterval(function(){
                if ($imgAnimation) clearInterval($imgAnimation);
                $imgAnimation.eq(counter++ % $imgAnimation.length).addClass('on');
            },250);
            addRemoveClass();
            
        });
    }
    imgAnimate();
    var popOn = $('.header,.main,.popup,.contBox');
    $('.xBtn').click(function(){
        if($(popOn).hasClass('on')){
            $(popOn).removeClass('on');
            $('html,body').animate({
                scrollTop: $('.page5').offset().top + 120
            }, 500);
        } else{
            $(popOn).addClass('on');
        }
    });
    // $.each(Array(4), function(i){
    //     var clickPop = $('.clickPop' + (+i));
    //     $(clickPop).click(function(){
    //         var index = mySwiper2.realIndex[i];
    //         mySwiper2.slideTo(index+ (+i),500,true);
    //         $(popOn).addClass('on');
            
    //     });
    // });
    // $('.clickPop').click(function(){
    //     var cBtn = $(this).data('click');
    //     $(popOn).addClass('on');
        
    //     if ( cBtn == "2"){
    //         mySwiper2.slideTo(2,500,true);
    //         console.log(mySwiper2.realIndex);
    //     }
    // });
    $('.clickPop').click(function(){
        var index = $(this).index();
        mySwiper2.slideTo(index);
        $(popOn).addClass('on');
        
    });
    
    
    // myTimer();
    // $(function(){
    //     $.each(Array(6),function(i){
    //         $(window).scroll(function () {
    //             var pageShow = $('.page' + i);
    //             var pageShow1 = $('.page1,.page2');
    //             var pageShow2 = $('.page3,.page4,.page5');
    //             var part1 = pageShow1.height() * 1;
    //             var part2 = pageShow2.height() * 1.8;
    //             if (getScrollTop() > part1) {
    //                 pageShow.addClass('animated');
    //             } else {
    //                 pageShow.removeClass('animated');
    //             }
    //         });
    //     }); 
    // });
    var $loading = $('.loading')
    window.onload = function() {
        $loading.removeClass('on');
    }
    window.onresize = function(){
        $loading.removeClass('on');
        document.location.reload(true);
    }
    $(window).scroll(function () {
        var page5 = $('.page4').height() * .5;
        if (getScrollTop() > page5) {
            $('.page5 .img_block').addClass('animated');
        } else {
            $('.page5 .img_block').removeClass('animated');
        }
    });
    function getScrollTop() {
        var bodyTop = 0;
        if (typeof window.pageY0ffset != "undefined") {
            bodyTop = window.pageY0ffset;
        } else if (typeof document.compatMode != "undefined" &&
            document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        } else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop;
    }
    $(window).resize(function () { });
    // html塞入img
    // var page4_num= 0;
    // var page4image = ["page4_img1_air1.png","page4_img1_air2.png","page4_img1_air3.png","page4_img1_air4.png","page4_img1_air5.png","page4_img1_air6.png","page4_img1_air7.png","page4_img1_air8.png"];
    // page4 = setInterval(function(){
    //     page4_num++;
    //     if (page4_num == page4image.length){
    //         page4_num = 0;
    //     }
    //     $('.img_animate').html('<img src="img/' + page4image[page4_num]+ '" alt="" style="width:100%;">');
    // },1500);

    // function page4_animate(){
    //     page4 = setInterval(function(){
    //         page4_num++;
    //         if (page4_num == page4image.length){
    //             page4_num = 0;
    //         }
    //         $('.img_animate').html('<img src="img/' + page4image[page4_num]+ '" alt="" style="width:100%;">');
    //     },1500);
    // };
    // page4_animate();
});  
