/**
 * Created by lenovo on 17/12/6 006.
 */
//Swiper3.x、Swiper2.x
//    var mySwiper = new Swiper ('.swiper-container', {
//        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
//            swiperAnimateCache(swiper); //隐藏动画元素
//            swiperAnimate(swiper); //初始化完成开始动画
//        },
//        onSlideChangeEnd: function(swiper){
//            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//        }
//    });

//Swiper4.x
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    mousewheel: true,
    setWrapperSize :true,
    effect: 'coverflow',
    grabCursor: true,

    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },

    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});

//音乐图标效果
var music = document.getElementById("music");
var musicIg = document.querySelectorAll(".musicIg")[0];
var musicImg = document.querySelectorAll(".musicImg")[0];
var audio = document.querySelector("audio");
var flag = 1;
music.onclick = function () {
    if (flag == 1) {
        musicImg.style.display = "none";
        musicIg.style.animation = "none";
        audio.pause();
        flag = 0;
    }
    else {
        musicImg.style.display = "block";
        musicIg.style.animation = " turn 6s infinite linear";
        audio.play();
        flag = 1;
    }
};