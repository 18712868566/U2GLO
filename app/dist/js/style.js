"use strict";

var granimInstance, mainfest = [ {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/bg1.png"
}, {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/bg2.jpg"
}, {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/pv.jpg"
}, {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/bg3.jpg"
}, {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/bg4.jpg"
}, {
    src: "//cdnstatic.herogame.com/static/ee_hero_com/pre/pc/images/body-footer.jpg"
}, {
    src: "./images/hero/omar/1.png"
}, {
    src: "./images/hero/omar/2.png"
}, {
    src: "./images/hero/omar/3.png"
}, {
    src: "./images/hero/omar/4.png"
}, {
    src: "./images/hero/omar/5.png"
}, {
    src: "./images/hero/omar/6.png"
}, {
    src: "./images/hero/omar/7.png"
}, {
    src: "./images/hero/omar/8.png"
}, {
    src: "./images/hero/omar/9.png"
}, {
    src: "./images/hero/omar/10.png"
}, {
    src: "./images/hero/omar/11.png"
}, {
    src: "./images/hero/omar/12.png"
}, {
    src: "./images/hero/omar/13.png"
}, {
    src: "./images/hero/omar/14.png"
}, {
    src: "./images/hero/omar/15.png"
}, {
    src: "./images/hero/emma/1.png"
}, {
    src: "./images/hero/emma/2.png"
}, {
    src: "./images/hero/emma/3.png"
}, {
    src: "./images/hero/emma/4.png"
}, {
    src: "./images/hero/emma/5.png"
}, {
    src: "./images/hero/emma/6.png"
}, {
    src: "./images/hero/emma/7.png"
}, {
    src: "./images/hero/emma/8.png"
}, {
    src: "./images/hero/emma/9.png"
}, {
    src: "./images/hero/emma/10.png"
}, {
    src: "./images/hero/emma/11.png"
}, {
    src: "./images/hero/emma/12.png"
}, {
    src: "./images/hero/emma/13.png"
}, {
    src: "./images/hero/emma/14.png"
}, {
    src: "./images/hero/emma/15.png"
}, {
    src: "./images/hero/emma/16.png"
}, {
    src: "./images/hero/emma/17.png"
}, {
    src: "./images/hero/emma/18.png"
}, {
    src: "./images/hero/emma/19.png"
}, {
    src: "./images/hero/emma/20.png"
}, {
    src: "./images/hero/emma/21.png"
}, {
    src: "./images/hero/emma/22.png"
}, {
    src: "./images/hero/emma/23.png"
}, {
    src: "./images/hero/emma/24.png"
}, {
    src: "./images/hero/emma/25.png"
}, {
    src: "./images/hero/emma/26.png"
}, {
    src: "./images/hero/emma/27.png"
}, {
    src: "./images/hero/emma/28.png"
}, {
    src: "./images/hero/emma/29.png"
}, {
    src: "./images/hero/emma/30.png"
}, {
    src: "./images/hero/emma/31.png"
}, {
    src: "./images/hero/artas/1.png"
}, {
    src: "./images/hero/artas/2.png"
}, {
    src: "./images/hero/artas/3.png"
}, {
    src: "./images/hero/artas/4.png"
}, {
    src: "./images/hero/artas/5.png"
}, {
    src: "./images/hero/artas/6.png"
}, {
    src: "./images/hero/artas/7.png"
}, {
    src: "./images/hero/artas/8.png"
}, {
    src: "./images/hero/artas/9.png"
}, {
    src: "./images/hero/artas/10.png"
}, {
    src: "./images/hero/artas/11.png"
}, {
    src: "./images/hero/artas/12.png"
}, {
    src: "./images/hero/artas/13.png"
}, {
    src: "./images/hero/artas/14.png"
}, {
    src: "./images/hero/artas/15.png"
}, {
    src: "./images/hero/kuite/1.png"
}, {
    src: "./images/hero/kuite/2.png"
}, {
    src: "./images/hero/kuite/3.png"
}, {
    src: "./images/hero/kuite/4.png"
}, {
    src: "./images/hero/kuite/5.png"
}, {
    src: "./images/hero/kuite/6.png"
}, {
    src: "./images/hero/kuite/7.png"
}, {
    src: "./images/hero/kuite/8.png"
}, {
    src: "./images/hero/kuite/9.png"
}, {
    src: "./images/hero/kuite/10.png"
}, {
    src: "./images/hero/kuite/11.png"
}, {
    src: "./images/hero/kuite/12.png"
}, {
    src: "./images/hero/kuite/13.png"
}, {
    src: "./images/hero/kuite/14.png"
}, {
    src: "./images/hero/kuite/15.png"
}, {
    src: "./images/hero/kuite/16.png"
}, {
    src: "./images/hero/crete/1.png"
}, {
    src: "./images/hero/crete/2.png"
}, {
    src: "./images/hero/crete/3.png"
}, {
    src: "./images/hero/crete/4.png"
}, {
    src: "./images/hero/crete/5.png"
}, {
    src: "./images/hero/crete/6.png"
}, {
    src: "./images/hero/crete/7.png"
}, {
    src: "./images/hero/crete/8.png"
}, {
    src: "./images/hero/crete/9.png"
}, {
    src: "./images/hero/crete/10.png"
}, {
    src: "./images/hero/crete/11.png"
}, {
    src: "./images/hero/crete/12.png"
}, {
    src: "./images/hero/crete/13.png"
}, {
    src: "./images/hero/crete/14.png"
}, {
    src: "./images/hero/luke/1.png"
}, {
    src: "./images/hero/luke/2.png"
}, {
    src: "./images/hero/luke/3.png"
}, {
    src: "./images/hero/luke/4.png"
}, {
    src: "./images/hero/luke/5.png"
}, {
    src: "./images/hero/luke/6.png"
}, {
    src: "./images/hero/luke/7.png"
}, {
    src: "./images/hero/luke/8.png"
}, {
    src: "./images/hero/luke/9.png"
}, {
    src: "./images/hero/luke/10.png"
}, {
    src: "./images/hero/luke/11.png"
}, {
    src: "./images/hero/luke/12.png"
}, {
    src: "./images/hero/luke/13.png"
}, {
    src: "./images/hero/luke/14.png"
}, {
    src: "./images/hero/luke/15.png"
}, {
    src: "./images/hero/luke/16.png"
} ], length = mainfest.length, images = new Array(), loadEl = document.querySelector(".loading");

function preloadImg() {
    for (var e = 0, a = 0; a < length; a++) images[a] = new Image(), images[a].src = "".concat(mainfest[a].src), 
    images[a].onload = function() {
        ++e === length && ($(".loading").hide(), $("body").removeClass("noloading"));
    };
}

function argumentsTabsTwo(e, a) {
    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, s = $(e);
    s.click(function() {
        $(this).addClass("curr").siblings().removeClass("curr");
        var e = s.index(this) + 1, a = ($(".sh".concat(e)).addClass("active").siblings().removeClass("active"), 
        $(this).attr("data-type"));
        1 == e && ("omar" == a && granimInstance.changeState("omar-state"), "emma" == a && granimInstance.changeState("emma-state")), 
        2 == e && ("kuite" == a && granimInstance.changeState("kuite-state"), "artas" == a && granimInstance.changeState("artas-state")), 
        3 == e && ("crete" == a && granimInstance.changeState("crete-state"), "luke" == a && granimInstance.changeState("luke-state"));
    }).eq(r).click();
}

function argumentsTabs(e, a) {
    var r = $(e);
    r.click(function() {
        $(this).addClass("curr").siblings().removeClass("curr");
        var e = r.index(this);
        a.slideTo(e, 800, !1), $(this).siblings(".swp-nav .after").stop().animate({
            left: 2.28 * e + 1.4 + "rem"
        }, "88");
    }).eq(0).click();
}

preloadImg(), $(function() {
    $(document).on("click", "#alertInfo .close,.btn_close,.btn_fb_login_no", dialog.closeDiv), 
    $(".rem-box .glb-ani").addClass("hide"), $(document).on("click", ".p1 .after", function(e) {
        e.preventDefault(), dialog.alertPop_gz();
    }), $(document).on("click", ".icon-gw ", function(e) {
        e.preventDefault(), layer.msg("Coming Soon!");
    });
    var a = document.getElementById("videoKv");
    $(document).on("click", ".video-play", function(e) {
        e.preventDefault(), !0 === a.muted ? a.muted = !1 : a.muted = !0, $(this).toggleClass("open");
    });
    var e = [ "./images/hero/omar/1.png", "./images/hero/omar/2.png", "./images/hero/omar/3.png", "./images/hero/omar/4.png", "./images/hero/omar/5.png", "./images/hero/omar/6.png", "./images/hero/omar/7.png", "./images/hero/omar/8.png", "./images/hero/omar/9.png", "./images/hero/omar/10.png", "./images/hero/omar/11.png", "./images/hero/omar/12.png", "./images/hero/omar/13.png", "./images/hero/omar/14.png", "./images/hero/omar/15.png", "./images/hero/omar/16.png" ], r = document.getElementById("omarhero"), s = 0, t = (0 < $("#omarhero").length && setInterval(function() {
        r.src = e[s], ++s == e.length && (s = 0);
    }, 100), [ "./images/hero/emma/1.png", "./images/hero/emma/2.png", "./images/hero/emma/3.png", "./images/hero/emma/4.png", "./images/hero/emma/5.png", "./images/hero/emma/6.png", "./images/hero/emma/7.png", "./images/hero/emma/8.png", "./images/hero/emma/9.png", "./images/hero/emma/10.png", "./images/hero/emma/11.png", "./images/hero/emma/12.png", "./images/hero/emma/13.png", "./images/hero/emma/14.png", "./images/hero/emma/15.png", "./images/hero/emma/16.png", "./images/hero/emma/17.png", "./images/hero/emma/18.png", "./images/hero/emma/19.png", "./images/hero/emma/20.png", "./images/hero/emma/21.png", "./images/hero/emma/22.png", "./images/hero/emma/23.png", "./images/hero/emma/24.png", "./images/hero/emma/25.png", "./images/hero/emma/26.png", "./images/hero/emma/27.png", "./images/hero/emma/28.png", "./images/hero/emma/29.png", "./images/hero/emma/30.png", "./images/hero/emma/31.png" ]), n = document.getElementById("emmahero"), i = 0, o = (0 < $("#emmahero").length && setInterval(function() {
        n.src = t[i], ++i == t.length && (i = 0);
    }, 100), [ "./images/hero/artas/1.png", "./images/hero/artas/2.png", "./images/hero/artas/3.png", "./images/hero/artas/4.png", "./images/hero/artas/5.png", "./images/hero/artas/6.png", "./images/hero/artas/7.png", "./images/hero/artas/8.png", "./images/hero/artas/9.png", "./images/hero/artas/10.png", "./images/hero/artas/11.png", "./images/hero/artas/12.png", "./images/hero/artas/13.png", "./images/hero/artas/14.png", "./images/hero/artas/15.png" ]), g = document.getElementById("artashero"), m = 0, c = (0 < $("#artashero").length && setInterval(function() {
        g.src = o[m], ++m == o.length && (m = 0);
    }, 100), [ "./images/hero/kuite/1.png", "./images/hero/kuite/2.png", "./images/hero/kuite/3.png", "./images/hero/kuite/4.png", "./images/hero/kuite/5.png", "./images/hero/kuite/6.png", "./images/hero/kuite/7.png", "./images/hero/kuite/8.png", "./images/hero/kuite/9.png", "./images/hero/kuite/10.png", "./images/hero/kuite/11.png", "./images/hero/kuite/12.png", "./images/hero/kuite/13.png", "./images/hero/kuite/14.png", "./images/hero/kuite/15.png", "./images/hero/kuite/16.png" ]), p = document.getElementById("kuitehero"), h = 0, l = (0 < $("#kuitehero").length && setInterval(function() {
        p.src = c[h], ++h == c.length && (h = 0);
    }, 100), [ "./images/hero/crete/1.png", "./images/hero/crete/2.png", "./images/hero/crete/3.png", "./images/hero/crete/4.png", "./images/hero/crete/5.png", "./images/hero/crete/6.png", "./images/hero/crete/7.png", "./images/hero/crete/8.png", "./images/hero/crete/9.png", "./images/hero/crete/10.png", "./images/hero/crete/11.png", "./images/hero/crete/12.png", "./images/hero/crete/13.png", "./images/hero/crete/14.png" ]), d = document.getElementById("cretehero"), u = 0, f = (0 < $("#cretehero").length && setInterval(function() {
        d.src = l[u], ++u == l.length && (u = 0);
    }, 100), [ "./images/hero/luke/1.png", "./images/hero/luke/2.png", "./images/hero/luke/3.png", "./images/hero/luke/4.png", "./images/hero/luke/5.png", "./images/hero/luke/6.png", "./images/hero/luke/7.png", "./images/hero/luke/8.png", "./images/hero/luke/9.png", "./images/hero/luke/10.png", "./images/hero/luke/11.png", "./images/hero/luke/12.png", "./images/hero/luke/13.png", "./images/hero/luke/14.png", "./images/hero/luke/15.png", "./images/hero/luke/16.png" ]), v = document.getElementById("lukehero"), k = 0, C = (0 < $("#lukehero").length && setInterval(function() {
        v.src = f[k], ++k == f.length && (k = 0);
    }, 100), AOS.init(), 1), b = !1;
    function _(e) {
        var a;
        b || (b = !0, a = document.createElement("li"), 3 == e && (6 <= ++C && (C = 1), 
        document.querySelector(".s5-con ul li:first-child").parentNode.removeChild(document.querySelector(".s5-con ul li:first-child")), 
        a.classList.add("s5-img-".concat(C)), document.querySelector(".s5-con ul").appendChild(a)), 
        4 == e && (--C <= 0 && (C = 5), document.querySelector(".s5-con ul li:last-child").parentNode.removeChild(document.querySelector(".s5-con ul li:last-child")), 
        a.classList.add("s5-img-".concat(C - 1)), document.querySelector(".s5-con ul").insertBefore(a, document.querySelector(".s5-con ul").firstChild)), 
        document.querySelector(".s5-progress-count span").textContent = "0".concat(C), 
        document.querySelector(".s5-progress").setAttribute("class", "s5-progress s5-progress".concat(C, " aos-animate")), 
        setTimeout(function() {
            b = !1;
        }, 500));
    }
    $(".s5-con").on("click", function() {
        _(3);
    }), $(".s5-con .next").on("click", function() {
        _(3);
    }), $(".s5-con .prve").on("click", function() {
        _(4);
    }), $(".rz1").hover(function(e) {
        $(".right_fixed .rt1").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt1").removeClass("ccurr");
    }), $(".rz2").hover(function(e) {
        $(".right_fixed .rt2").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt2").removeClass("ccurr");
    }), $(".rz3").hover(function(e) {
        $(".right_fixed .rt3").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt3").removeClass("ccurr");
    }), $(".rz4").hover(function(e) {
        $(".right_fixed .rt4").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt4").removeClass("ccurr");
    }), $(".rz5").hover(function(e) {
        $(".right_fixed .rt5").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt5").removeClass("ccurr");
    }), $(".rz6").hover(function(e) {
        $(".right_fixed .rt6").addClass("ccurr");
    }, function(e) {
        $(".right_fixed .rt6").removeClass("ccurr");
    }), $(document).on("click", ".rec-warp .rect_zheng", function(e) {
        e.preventDefault(), $(this).addClass("curr").siblings().removeClass("curr");
    }), $(document).on("click", "#nav p,.rec-warp .rect_zheng", function(e) {
        e.preventDefault();
        var e = $(this).index(), a = (0 == e && $("html,body").animate({
            scrollTop: 0
        }, 600), $(".p1").offset().top), a = (1 == e && $("html,body").animate({
            scrollTop: a
        }, 600), $(".p2").offset().top), a = (2 == e && $("html,body").animate({
            scrollTop: a
        }, 600), $(".p3").offset().top), a = (3 == e && $("html,body").animate({
            scrollTop: a
        }, 600), $(".p4").offset().top), a = (4 == e && $("html,body").animate({
            scrollTop: a
        }, 600), $(".p5").offset().top);
        5 == e && $("html,body").animate({
            scrollTop: a
        }, 600);
    });
    Atropos({
        el: ".my-atropos",
        activeOffset: 5,
        shadow: !1,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: !1
    }), Atropos({
        el: ".game-atropos",
        activeOffset: 5,
        shadow: !1,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: !1
    }), Atropos({
        el: ".robot-atropos",
        activeOffset: 5,
        shadow: !1,
        rotateXMax: 3,
        rotateYMax: 3,
        highlight: !1
    });
    function w() {
        $(this).addClass("active").siblings().removeClass("active");
    }
    $(document).on("click", ".fixede_mid .btn_close", function(e) {
        $(".fixede_mid").stop().animate({
            left: "-3.48rem"
        }, 300, function(e) {
            $(".fixede_mid .btn_open").stop().animate({
                right: "-1.3rem",
                opacity: "1"
            }, 300);
        });
    }), $(document).on("click", ".fixede_mid .btn_open", function(e) {
        $(this).stop().animate({
            right: "2.7rem",
            opacity: "0"
        }, 300, function(e) {
            $(".fixede_mid").stop().animate({
                left: "0"
            });
        });
    }), $(".btn-draw-log").hover(function() {
        $(".btn-draw-log .btn-draw-tips").removeClass("open_ani_close").addClass("open_ani");
    }, function() {
        $(".btn-draw-log .btn-draw-tips").removeClass("open_ani").addClass("open_ani_close");
    }), $(".fbeibao").hover(function() {
        $(".fbeibao .btn-draw-tips").removeClass("open_ani_close").addClass("open_ani");
    }, function() {
        $(".fbeibao .btn-draw-tips").removeClass("open_ani").addClass("open_ani_close");
    }), $(document).on("click", ".robot", function(e) {
        e.preventDefault(), $("html,body").animate({
            scrollTop: 0
        }, 1e3);
    }), granimInstance = new Granim({
        element: "#canvas-interactive",
        name: "interactive-gradient",
        elToSetClassOn: ".p3-s1",
        direction: "top-bottom",
        defaultStateName: "artas-state",
        isPausedWhenNotInView: !0,
        scrollDebounceThreshold: 300,
        stateTransitionSpeed: 1e3,
        states: {
            "omar-state": {
                gradients: [ [ {
                    color: "rgba(235,42,33,0)",
                    pos: .15
                }, {
                    color: "rgba(235,42,33,.25)",
                    pos: .62
                }, {
                    color: "rgba(235,42,33,0)",
                    pos: 1
                } ] ]
            },
            "emma-state": {
                gradients: [ [ {
                    color: "rgba(135,118,198,0)",
                    pos: .15
                }, {
                    color: "rgba(135,118,198,.25)",
                    pos: .62
                }, {
                    color: "rgba(135,118,198,0)",
                    pos: 1
                } ] ]
            },
            "kuite-state": {
                gradients: [ [ {
                    color: "rgba(89,255,230,0)",
                    pos: .15
                }, {
                    color: "rgba(89,255,230,.25)",
                    pos: .62
                }, {
                    color: "rgba(89,255,230,0)",
                    pos: 1
                } ] ]
            },
            "artas-state": {
                gradients: [ [ {
                    color: "rgba(100,228,255,0)",
                    pos: .15
                }, {
                    color: "rgba(100,228,255,.25)",
                    pos: .62
                }, {
                    color: "rgba(100,228,255,0)",
                    pos: 1
                } ] ]
            },
            "crete-state": {
                gradients: [ [ {
                    color: "rgba(255,116,73,0)",
                    pos: .15
                }, {
                    color: "rgba(255,116,73,.25)",
                    pos: .62
                }, {
                    color: "rgba(255,116,73,0)",
                    pos: 1
                } ] ]
            },
            "luke-state": {
                gradients: [ [ {
                    color: "rgba(255,216,133,0)",
                    pos: .15
                }, {
                    color: "rgba(255,216,133,.25)",
                    pos: .62
                }, {
                    color: "rgba(255,216,133,0)",
                    pos: 1
                } ] ]
            }
        }
    }), $(document).on("click", "#omar-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("omar-state"), w(), x.slideTo(0, 600, !0), 
        $(".cta-wrapper.terran .hero-page dd span").stop().animate({
            left: "0.15rem"
        }, 300), $(".tab1").attr("data-type", "omar");
    }), $(document).on("click", "#emma-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("emma-state"), w(), x.slideTo(1, 600, !0), 
        $(".cta-wrapper.terran .hero-page dd span").stop().animate({
            left: "1.75rem"
        }, 300), $(".tab1").attr("data-type", "emma");
    }), $(document).on("click", "#layer-state-cta", function(e) {
        e.preventDefault(), layer.msg("Coming Soon!");
    });
    var x = new Swiper("#terran-hero .swiper", {
        effect: "fade",
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: !1,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: "#terran-hero .swiper-button-next",
            prevEl: "#terran-hero .swiper-button-prev"
        },
        on: {
            init: function() {
                this.slides.eq(0).addClass("ani-slide");
            },
            transitionStart: function() {
                for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).removeClass("ani-slide");
            },
            transitionEnd: function() {
                this.slides.eq(this.activeIndex).addClass("ani-slide");
            },
            slideChangeTransitionStart: function() {
                0 == this.activeIndex && ($(".sh1 .cta-wrapper a").eq(0).addClass("active").siblings().removeClass("active"), 
                $(".sh1 .hero-page .inow").text("01"), $(".cta-wrapper.terran .hero-page dd span").stop().animate({
                    left: "0.15rem"
                }, 300)), 1 == this.activeIndex && ($(".sh1 .cta-wrapper a").eq(1).addClass("active").siblings().removeClass("active"), 
                $(".sh1 .hero-page .inow").text("02"), $(".cta-wrapper.terran .hero-page dd span").stop().animate({
                    left: "1.75rem"
                }, 300));
            }
        }
    }), I = ($(document).on("click", "#kuite-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("kuite-state"), w(), I.slideTo(1, 600, !0), 
        $(".sh2 .cta-wrapper .hero-page dd span").stop().animate({
            left: "1.75rem"
        }, 300), $(".tab2").attr("data-type", "kuite");
    }), $(document).on("click", "#artas-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("artas-state"), w(), I.slideTo(0, 600, !0), 
        $(".sh2 .cta-wrapper .hero-page dd span").stop().animate({
            left: "0.15rem"
        }, 300), $(".tab2").attr("data-type", "artas");
    }), new Swiper("#atlas-hero .swiper", {
        effect: "fade",
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: !1,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: "#atlas-hero .swiper-button-next",
            prevEl: "#atlas-hero .swiper-button-prev"
        },
        on: {
            init: function() {
                this.slides.eq(0).addClass("ani-slide");
            },
            transitionStart: function() {
                for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).removeClass("ani-slide");
            },
            transitionEnd: function() {
                this.slides.eq(this.activeIndex).addClass("ani-slide");
            },
            slideChangeTransitionStart: function() {
                0 == this.activeIndex && ($(".sh2 .cta-wrapper a").eq(0).addClass("active").siblings().removeClass("active"), 
                $(".sh2 .hero-page .inow").text("01"), $(".sh2 .cta-wrapper .hero-page dd span").stop().animate({
                    left: "0.15rem"
                }, 300)), 1 == this.activeIndex && ($(".sh2 .cta-wrapper a").eq(1).addClass("active").siblings().removeClass("active"), 
                $(".sh2 .hero-page .inow").text("02"), $(".sh2 .cta-wrapper .hero-page dd span").stop().animate({
                    left: "1.75rem"
                }, 300));
            }
        }
    })), y = ($(document).on("click", "#crete-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("crete-state"), w(), y.slideTo(0, 600, !0), 
        $(".sh3 .cta-wrapper .hero-page dd span").stop().animate({
            left: "0.15rem"
        }, 300), $(".tab3").attr("data-type", "crete");
    }), $(document).on("click", "#luke-state-cta", function(e) {
        e.preventDefault(), granimInstance.changeState("luke-state"), w(), y.slideTo(1, 600, !0), 
        $(".sh3 .cta-wrapper .hero-page dd span").stop().animate({
            left: "1.75rem"
        }, 300), $(".tab3").attr("data-type", "luke");
    }), new Swiper("#wenfyr-hero .swiper", {
        effect: "fade",
        initialSlide: 0,
        spaceBetween: 0,
        followFinger: !1,
        speed: 500,
        loopAdditionalSlides: 3,
        navigation: {
            nextEl: "#wenfyr-hero .swiper-button-next",
            prevEl: "#wenfyr-hero .swiper-button-prev"
        },
        on: {
            init: function() {
                this.slides.eq(0).addClass("ani-slide");
            },
            transitionStart: function() {
                for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).removeClass("ani-slide");
            },
            transitionEnd: function() {
                this.slides.eq(this.activeIndex).addClass("ani-slide");
            },
            slideChangeTransitionStart: function() {
                0 == this.activeIndex && ($(".sh3 .cta-wrapper a").eq(0).addClass("active").siblings().removeClass("active"), 
                $(".sh3 .hero-page .inow").text("01"), $(".sh3 .cta-wrapper .hero-page dd span").stop().animate({
                    left: "0.15rem"
                }, 300)), 1 == this.activeIndex && ($(".sh3 .cta-wrapper a").eq(1).addClass("active").siblings().removeClass("active"), 
                $(".sh3 .hero-page .inow").text("02"), $(".sh3 .cta-wrapper .hero-page dd span").stop().animate({
                    left: "1.75rem"
                }, 300));
            }
        }
    }));
    argumentsTabsTwo(".hero-tabs p");
}), $(window).resize(function() {
    setTimeout(function() {
        location.reload();
    }, 300);
});

var sth1 = 600, sth2 = $(".p2").offset().top - 600, sth3 = $(".p3").offset().top - 600, sth4 = $(".p4").offset().top - 600, sth5 = $(".p5").offset().top - 600;

$(window).scroll(function() {
    var e = $(window).scrollTop();
    1 <= (e = parseInt(e)) && e <= 100 && $(".rec-warp .rz1").addClass("curr").siblings().removeClass("curr"), 
    600 <= e ? $(".topbar").removeClass("animate__fadeIn").addClass(" animate__fadeOut") : $(".topbar").removeClass("animate__fadeOut").addClass("animate__fadeIn"), 
    sth1 <= e && ($(".rec-warp .rz2").addClass("curr").siblings().removeClass("curr"), 
    $(".right_fixed .rt2").addClass("curr").siblings(".rect").removeClass("curr")), 
    sth2 <= e && ($(".rec-warp .rz3").addClass("curr").siblings().removeClass("curr"), 
    $(".right_fixed .rt3").addClass("curr").siblings(".rect").removeClass("curr")), 
    sth3 <= e && ($(".rec-warp .rz4").addClass("curr").siblings().removeClass("curr"), 
    $(".right_fixed .rt4").addClass("curr").siblings(".rect").removeClass("curr")), 
    sth4 <= e && ($(".rec-warp .rz5").addClass("curr").siblings().removeClass("curr"), 
    $(".right_fixed .rt5").addClass("curr").siblings(".rect").removeClass("curr")), 
    sth5 <= e && ($(".rec-warp .rz6").addClass("curr").siblings().removeClass("curr"), 
    $(".right_fixed .rt6").addClass("curr").siblings(".rect").removeClass("curr")), 
    2600 <= e ? $(".p3-s1 .img-box .after").removeClass("hide animate__fadeOutRight").addClass("animate__animated animate__fadeInRight") : $(".p3-s1 .img-box .after").removeClass("animate__fadeInRight").addClass("animate__fadeOutRight"), 
    300 <= e ? $(".fixede_mid").removeClass("animate__fadeOutLeft").addClass("animate__fadeInLeft") : $(".fixede_mid").removeClass("animate__fadeInLeft").addClass("animate__fadeOutLeft"), 
    600 <= e ? $(".right_fixed").removeClass("animate__fadeOutRight").addClass("animate__fadeInRight") : $(".right_fixed").removeClass("animate__fadeInRight").addClass("animate__fadeOutRight");
});