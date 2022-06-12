
/*===========加载静态资源==========*/
var mainfest = [
    {
        src: "../images/bg1.png",
    },
    {
        src: "../images/bg2.png",
    },
    {
        src: "../images/bg3.png",
    },
    {
        src: "../images/bg4.png",
    },
    {
        src: "../images/bg5.png",
    },
    {
        src: "../images/btn-draw-log.png",
    },
    {
        src: "../images/pv.jpg",
    },
    {
        src: "../images/robot.png",
    },
    {
        src: "../images/page1/ani-db.png",
    },
    {
        src: "../images/page1/ani-tl.png",
    },
    {
        src: "../images/page1/ani-zj.png",
    },
    {
        src: "../images/p2/maps.png",
    },
    {
        src: "../images/p4/1.png",
    },
    {
        src: "../images/p4/2.png",
    },
    {
        src: "../images/p4/3.png",
    },
    {
        src: "../images/p4/4.png",
    },
    {
        src: "../images/p4/5.png",
    },
];


let length = mainfest.length;
let images = new Array(); // 定义一个数组容器，用来存储预加载完成的图片
let loadEl = document.querySelector('.loading');

function preloadImg() {
    let count = 0; // 计算器，计算加载了多少图片
    for (let i = 0; i < length; i++) {
        images[i] = new Image();
        images[i].src = `${mainfest[i].src}`;
        // 谷歌浏览器高版本支持大部分ES6，所以这里就不用字符串拼接了。
        // console.log(i)
        images[i].onload = function () {
            count++;
            if (count === length) {
                console.log('加载完成');
                // shuangjie.$pageLoad.addClass('hide').next().removeClass('hide')
                $('.loading').hide();
                $('body').removeClass('noloading');


            } else {
                // console.log(images[i].src);
            }
        }
    }
}

preloadImg();
/*==============资源加载完毕===========*/

var parallaxScroll;
var granimInstance;
$(function () {
    $(document).on("click", "#alertInfo .close", dialog.closeDiv);

    // 下拉动画方案
    $('.rem-box .glb-ani').addClass('hide');

    AOS.init();


    // 全局视差
    // parallaxScroll = skrollr.init();
    parallaxScroll = skrollr.init({
        // forceHeight: false,
        smoothScrolling: true,
        smoothScrollingDuration: 500,
        easing: {
            vibrate: function (p) {
                return Math.sin(p * 10 * Math.PI);
            }
        }
    });
    // maps
    const myAtropos = Atropos({
        el: '.my-atropos',
        activeOffset: 5,
        shadow: false,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: false
        // rest of parameters
    });

    // 轮播图 视差
    const gameAtropos = Atropos({
        el: '.game-atropos',
        activeOffset: 5,
        shadow: false,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: false
        // rest of parameters
    });

    // 机器人 视差
    const robotAtropos = Atropos({
        el: '.robot-atropos',
        activeOffset: 5,
        shadow: false,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: false
        // rest of parameters
    });

    // 划过四角动画


    var mySwiper = new Swiper('#game-pic .swiper', {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '#game-pic .swiper-button-next',
            prevEl: '#game-pic .swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                // console.log(this.activeIndex);

                let oImg = $('#game-pic .swiper-slide-active').find('img').attr('src');
                console.log(oImg);

                if (oImg == 'images/p4/min-t1.png') {
                    $('.big_pic_show img').eq(4).addClass('curr').siblings().removeClass('curr');
                }
                if (oImg == 'images/p4/min-t2.png') {
                    $('.big_pic_show img').eq(0).addClass('curr').siblings().removeClass('curr');
                }
                if (oImg == 'images/p4/min-t3.png') {
                    $('.big_pic_show img').eq(1).addClass('curr').siblings().removeClass('curr');
                }
                if (oImg == 'images/p4/min-t4.png') {
                    $('.big_pic_show img').eq(2).addClass('curr').siblings().removeClass('curr');
                }
                if (oImg == 'images/p4/min-t5.png') {
                    $('.big_pic_show img').eq(3).addClass('curr').siblings().removeClass('curr');
                };

                $('.big_pic_show').addClass('open').removeClass('curr');
            },

            slideChangeTransitionEnd: function () {

            },
        },
    })

    // 关闭悬浮
    $(document).on('click', '.fixede_mid .btn_close', function (param) {
        $('.fixede_mid').stop().animate({
            'left': '-3.48rem'
        }, 300, function (param) {
            $('.fixede_mid .btn_open').stop().animate({
                'right': '-1.3rem',
                'opacity': '1'
            }, 300)
        });
    });

    $(document).on('click', '.fixede_mid .btn_open', function (param) {
        $(this).stop().animate({
            'right': '2.7rem',
            'opacity': '0'
        }, 300, function (param) {
            $('.fixede_mid').stop().animate({
                'left': '0'
            });
        });
    });

    // 背包划过
    $('.btn-draw-log').hover(function () {
        $('.btn-draw-log .btn-draw-tips').removeClass('open_ani_close').addClass('open_ani');
    }, function () {
        $('.btn-draw-log .btn-draw-tips').removeClass('open_ani').addClass('open_ani_close');
    });


    $('.fbeibao').hover(function () {
        $('.fbeibao .btn-draw-tips').removeClass('open_ani_close').addClass('open_ani');
    }, function () {
        $('.fbeibao .btn-draw-tips').removeClass('open_ani').addClass('open_ani_close');
    });


    // 回到顶部
    $(document).on('click', '.robot', function (event) {
        event.preventDefault();
        // parallaxScroll.
        $("html,body").animate({ "scrollTop": 0 }, 5000);
    });


    // 英雄渐变色控制
    granimInstance = new Granim({
        element: '#canvas-interactive',
        name: 'interactive-gradient',
        elToSetClassOn: '.p3-s1',
        direction: 'top-bottom', // 方向
        defaultStateName: 'omar-state',//初始状态
        isPausedWhenNotInView: true,// 超出暂停
        scrollDebounceThreshold: 300,
        stateTransitionSpeed: 1000, // 速度
        states: {
            "omar-state": {
                gradients: [[
                    {
                        color: 'rgba(254,84,76,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(254,84,76,.3)'
                        , pos: 0.25
                    },
                    {
                        color: 'rgba(254,84,76,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(254,84,76,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(254,84,76,0)',
                        pos: 1
                    }]],
            },
            "emma-state": {
                gradients: [[
                    {
                        color: 'rgba(135,118,198,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(135,118,198,.3)'
                        , pos: 0.25
                    },
                    {
                        color: 'rgba(135,118,198,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(135,118,198,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(135,118,198,0)',
                        pos: 1
                    }]],
            },
            // Kuite
            "kuite-state": {
                gradients: [[
                    {
                        color: 'rgba(89,255,230,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(89,255,230,.3)'
                        , pos: 25
                    },
                    {
                        color: 'rgba(89,255,230,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(89,255,230,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(89,255,230,0)',
                        pos: 1
                    }]],
            },
            "artas-state": {
                gradients: [[
                    {
                        color: 'rgba(100,228,255,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(100,228,255,.3)'
                        , pos: 25
                    },
                    {
                        color: 'rgba(100,228,255,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(100,228,255,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(100,228,255,0)',
                        pos: 1
                    }]],
            },
            // Crete
            "crete-state": {
                gradients: [[
                    {
                        color: 'rgba(255,116,73,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(255,116,73,.2)'
                        , pos: 25
                    },
                    {
                        color: 'rgba(255,116,73,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(255,116,73,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(255,116,73,0)',
                        pos: 1
                    }]],
            },
            "luke-state": {
                gradients: [[
                    {
                        color: 'rgba(255,216,133,.4)'
                        , pos: 0
                    },
                    {
                        color: 'rgba(255,216,133,.3)'
                        , pos: 25
                    },
                    {
                        color: 'rgba(255,216,133,.2)'
                        , pos: 0.5
                    },
                    {
                        color: 'rgba(255,216,133,.1)'
                        , pos: 0.75
                    },
                    {
                        color: 'rgba(255,216,133,0)',
                        pos: 1
                    }]],
            },
        }
    });

    $(document).on('click', '#omar-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('omar-state');
        setClass('#omar-state-cta');

        terranSwiper.slideTo(0, 1000, true);

        $('.cta-wrapper.terran .hero-page dd span').stop().animate({
            'left': '0.15rem'
        }, 300);

        $('.tab1').attr('data-type', 'omar');
    });

    $(document).on('click', '#emma-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('emma-state');
        setClass('#emma-state-cta')

        terranSwiper.slideTo(1, 1000, true);//切换到第一个slide，速度为1秒

        $('.cta-wrapper.terran .hero-page dd span').stop().animate({
            'left': '1.75rem'
        }, 300);

        $('.tab1').attr('data-type', 'emma');
    });

    $(document).on('click', '#layer-state-cta', function (event) {
        event.preventDefault();
        layer.msg('敬请期待!');
    });


    function setClass(element) {
        // $('.cta-wrapper a').removeClass('active');
        // $(element).addClass('active');
        $(this).addClass('active').siblings().removeClass('active');
    };


    // 英雄展示
    var terranSwiper = new Swiper('#terran-hero .swiper', {
        effect: 'fade',
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: false,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: '#terran-hero .swiper-button-next',
            prevEl: '#terran-hero .swiper-button-prev',
        },
        on: {
            init: function () {
                slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },

            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
            },

            slideChangeTransitionStart: function () {

                console.log(this.activeIndex);
                if (this.activeIndex == 0) {
                    $('.sh1 .cta-wrapper a').eq(0).addClass('active').siblings().removeClass('active');

                    $('.hero-page .inow').text('01');

                    $('.cta-wrapper.terran .hero-page dd span').stop().animate({
                        'left': '0.15rem'
                    }, 300);
                }
                if (this.activeIndex == 1) {
                    $('.sh1 .cta-wrapper a').eq(1).addClass('active').siblings().removeClass('active');

                    $('.hero-page .inow').text('02');

                    $('.cta-wrapper.terran .hero-page dd span').stop().animate({
                        'left': '1.75rem'
                    }, 300);
                }
            },
        },
    });



    $(document).on('click', '#kuite-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('kuite-state');
        setClass('#kuite-state-cta');

        atlasSwiper.slideTo(0, 1000, true);

        $('.sh2 .cta-wrapper .hero-page dd span').stop().animate({
            'left': '0.15rem'
        }, 300);

        $('.tab2').attr('data-type', 'kuite');
    });

    $(document).on('click', '#artas-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('artas-state');
        setClass('#artas-state-cta')

        atlasSwiper.slideTo(1, 1000, true);//切换到第一个slide，速度为1秒

        $('.sh2 .cta-wrapper .hero-page dd span').stop().animate({
            'left': '1.75rem'
        }, 300);

        $('.tab2').attr('data-type', 'artas');
    });

    var atlasSwiper = new Swiper('#atlas-hero .swiper', {
        effect: 'fade',
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: false,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: '#atlas-hero .swiper-button-next',
            prevEl: '#atlas-hero .swiper-button-prev',
        },
        on: {
            init: function () {
                slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },

            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
            },
            slideChangeTransitionStart: function () {

                console.log(this.activeIndex);
                if (this.activeIndex == 0) {
                    $('.sh2 .cta-wrapper a').eq(0).addClass('active').siblings().removeClass('active');

                    // granimInstance.changeState('kuite-state');

                    $('.hero-page .inow').text('01');

                    $('.sh2 .cta-wrapper .hero-page dd span').stop().animate({
                        'left': '0.15rem'
                    }, 300);
                }
                if (this.activeIndex == 1) {
                    $('.sh2 .cta-wrapper a').eq(1).addClass('active').siblings().removeClass('active');

                    // granimInstance.changeState('artas-state');

                    $('.hero-page .inow').text('02');

                    $('.sh2 .cta-wrapper .hero-page dd span').stop().animate({
                        'left': '1.75rem'
                    }, 300);
                }
            },
        },
    });



    $(document).on('click', '#crete-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('crete-state');
        setClass('#crete-state-cta');

        wenfyrSwiper.slideTo(0, 1000, true);

        $('.sh3 .cta-wrapper .hero-page dd span').stop().animate({
            'left': '0.15rem'
        }, 300);

        $('.tab3').attr('data-type', 'crete');
    });

    $(document).on('click', '#luke-state-cta', function (event) {
        event.preventDefault();

        granimInstance.changeState('luke-state');
        setClass('#luke-state-cta')

        wenfyrSwiper.slideTo(1, 1000, true);//切换到第一个slide，速度为1秒

        $('.sh3 .cta-wrapper .hero-page dd span').stop().animate({
            'left': '1.75rem'
        }, 300);

        $('.tab3').attr('data-type', 'luke');
    });

    var wenfyrSwiper = new Swiper('#wenfyr-hero .swiper', {
        effect: 'fade',
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: false,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: '#wenfyr-hero .swiper-button-next',
            prevEl: '#wenfyr-hero .swiper-button-prev',
        },
        on: {
            init: function () {
                slide = this.slides.eq(0);
                slide.addClass('ani-slide');
            },

            transitionStart: function () {
                for (i = 0; i < this.slides.length; i++) {
                    slide = this.slides.eq(i);
                    slide.removeClass('ani-slide');
                }
            },
            transitionEnd: function () {
                slide = this.slides.eq(this.activeIndex);
                slide.addClass('ani-slide');
            },
            slideChangeTransitionStart: function () {

                console.log(this.activeIndex);
                if (this.activeIndex == 0) {
                    $('.sh3 .cta-wrapper a').eq(0).addClass('active').siblings().removeClass('active');

                    // granimInstance.changeState('kuite-state');

                    $('.hero-page .inow').text('01');

                    $('.sh3 .cta-wrapper .hero-page dd span').stop().animate({
                        'left': '0.15rem'
                    }, 300);
                }
                if (this.activeIndex == 1) {
                    $('.sh3 .cta-wrapper a').eq(1).addClass('active').siblings().removeClass('active');

                    // granimInstance.changeState('artas-state');

                    $('.hero-page .inow').text('02');

                    $('.sh3 .cta-wrapper .hero-page dd span').stop().animate({
                        'left': '1.75rem'
                    }, 300);
                }
            },
        },
    });

    // hero tab
    $(document).on('click', '.hero-tabs p', function (event) {
        event.preventDefault();
        $(this).addClass('curr').siblings().removeClass('curr');

        let iNow = $(this).index() + 1;

        $(`.sh${iNow}`).addClass('active').siblings().removeClass('active');

        let dataType = $(this).attr('data-type');

        console.log(dataType);

        console.log(iNow);
        if (iNow == 1) {
            if (dataType == 'omar') {
                granimInstance.changeState('omar-state');
            }
            if (dataType == 'emma') {
                granimInstance.changeState('emma-state');
            }
        }
        if (iNow == 2) {
            if (dataType == 'kuite') {
                granimInstance.changeState('kuite-state');
            }
            if (dataType == 'artas') {
                granimInstance.changeState('artas-state');
            }
        }
        if (iNow == 3) {
            if (dataType == 'crete') {
                granimInstance.changeState('crete-state');
            }
            if (dataType == 'luke') {
                granimInstance.changeState('luke-state');
            }
        }
    })

});



function argumentsTabs(tabList, page) {
    var $div_li = $(tabList);
    $div_li.click(function () {
        $(this).addClass('curr').siblings().removeClass('curr');
        var index = $div_li.index(this);

        page.slideTo(index, 800, false);//切换到第一个slide，速度为1秒
        // 跟随横条
        console.log(index);
        $(this).siblings('.swp-nav .after').stop().animate({ 'left': (index * 2.28) + 1.4 + 'rem' }, "88");
    }).eq(0).click();
};




// 滚动时添加
$(window).scroll(function () {
    console.log('111');
    var scrollT = $(window).scrollTop()
    scrollT = parseInt(scrollT);
    // console.log(scrollT)

    console.log(parallaxScroll.getScrollTop());
    document.querySelector('title').innerHTML = parallaxScroll.getScrollTop()


    if (parallaxScroll.getScrollTop() >= 700) {
        $('.rem-cnter').removeClass('hide animate__fadeOut').addClass('animate__animated animate__fadeInUp');

        setTimeout(() => {
            $('.rwm-img').removeClass('hide').addClass('animate__animated animate__fadeInUp');
            $('.rem-box .btns').removeClass('hide').addClass('animate__animated animate__fadeInUp');
        }, 600);
    } else {
        $('.rem-cnter').removeClass(' animate__fadeInUp').addClass(' animate__fadeOut');

        $('.rwm-img').removeClass('animate__animated animate__fadeInUp').addClass('hide');
        $('.rem-box .btns').removeClass('animate__animated animate__fadeInUp').addClass('hide');
    }

    if (parallaxScroll.getScrollTop() >= 1500) {
        $('.bgvvv').css('opacity', '0');
    } else {
        $('.bgvvv').css('opacity', '1');
    }

    if (parallaxScroll.getScrollTop() >= 2000) {
        $('#statsbg').addClass('vani');
    } else {
        $('#statsbg').removeClass('vani');
    }

    if (parallaxScroll.getScrollTop() >= 2300) {
        $('.p2 .my-atropos').removeClass('hide animate__fadeOut').addClass('animate__animated animate__fadeInUp');
    } else {
        $('.p2 .my-atropos').removeClass('animate__fadeInUp').addClass('animate__fadeOut');
    }


    if (parallaxScroll.getScrollTop() >= 3000) {
        $('.p3-s1 .img-box .after').removeClass('hide animate__fadeOutRight').addClass('animate__animated animate__fadeInRight');
    } else {
        $('.p3-s1 .img-box .after').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
    }


    if (parallaxScroll.getScrollTop() >= 4300) {
        $('.p4 .title').removeClass('hide animate__fadeOutDown').addClass('animate__animated animate__fadeInUp');
    } else {
        $('.p4 .title').removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
    }
    if (parallaxScroll.getScrollTop() >= 4300) {
        $('.p4 .big_pic_show').removeClass('hide animate__fadeOutDown').addClass('animate__animated animate__fadeInUp');
    } else {
        $('.p4 .big_pic_show').removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
    }

    if (parallaxScroll.getScrollTop() >= 4500) {
        $('.p4 .swiper').removeClass('hide animate__fadeOutDown').addClass('animate__animated animate__fadeInUp');
    } else {
        $('.p4 .swiper').removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
    }


    if (parallaxScroll.getScrollTop() >= 1600) {
        $('.fixede_mid').stop().animate({ 'opacity': 1 }, 100)
    } else {
        $('.fixede_mid').stop().animate({ 'opacity': 0 }, 100)
    }
});








