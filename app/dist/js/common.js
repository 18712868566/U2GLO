"use strict";

var dialog = dialog || {}, flagPC = !0;

dialog = {
    closeDiv: function() {
        $("#alertInfo").stop(!0, !0).animate({
            top: "-100%",
            opacity: "0"
        }, "fast", function() {
            $("#maskLayer,#alertInfo").remove().hide();
        });
    },
    maskLayer: function() {
        $("#maskLayer,#alertInfo").remove();
        $("body").append("<div id='maskLayer'></div>", "<div id='alertInfo'><span class='close'>关闭</span></div>"), 
        $(".wrap").addClass("row"), $("#maskLayer").height("100%").show();
    },
    showInfo: function(n) {
        dialog.maskLayer();
        var o = $(window).height(), a = $(document).scrollTop(), n = ($("#alertInfo").append(n).show(), 
        $("#alertInfo").outerWidth()), s = $("#alertInfo").outerHeight(), e = parseInt(a + (o - s) / 2), n = parseInt(n / 2);
        o <= s ? ((e = a) + s >= $(document).height() && (e = $(document).height() - s), 
        $("#alertInfo").css("position", "absolute")) : (e = (o - s) / 2, $("#alertInfo").css("position", "fixed")), 
        $("#alertInfo").css({
            "margin-left": "-" + n + "px"
        }).stop(!0, !0).animate({
            top: e + "px",
            "margin-left": "-" + n + "px",
            opacity: "1"
        }, "fast");
    },
    alertInfoPo: function() {
        var n = $(window).height(), o = $(document).scrollTop(), a = $("#alertInfo").outerWidth(), s = $("#alertInfo").outerHeight(), e = parseInt(o + (n - s) / 2);
        e >= $("body").height() - s && (e = (o = $("body").height() - s) - (n - s) / 2), 
        n <= s ? ((e = o) + s >= $(document).height() && (e = $(document).height() - s), 
        $("#alertInfo").css("position", "absolute")) : (e = (n - s) / 2, $("#alertInfo").css("position", "fixed")), 
        $("html,body").stop(!0, !0).animate({
            scrollTop: o
        }), $("#alertInfo").stop(!0, !0).animate({
            top: e + "px",
            "margin-left": "-" + a / 2 + "px"
        }), $("#maskLayer").height($("body").height());
    },
    alertVideo: function(n) {
        dialog.showInfo("<div class='pop_warp  popytbVideo'><span class='pop_hero_close'></span><div class='before '><iframe border='0' marginwidth='0' framespacing='0' marginheight='0' src='" + n + "' frameborder='0' noresize='scrolling='no' width='100%' height='100%' vspale='0' id='iframe' name='iframe' allowfullscreen></iframe></div></div>"), 
        $(".popytbVideo").siblings(".close").hide();
    },
    alertImages: function(n) {
        dialog.showInfo("<div class='pop_warp pop_warp_img popVideo' id='custom_scrollbar'><div class='before '>" + '<img class="imgcove" src="'.concat(n, '" alt="">') + "</div></div>");
    },
    alertUidLogin: function() {
        dialog.showInfo('<div class="pop pop_uid_login">\n            <div class="borbox">\n                '.concat('\n            <a href="https://grayraven.onelink.me/gj4i/eden" class="btn btn_down_link" target="_blank"> https://grayraven.onelink.me/gj4i/eden </a>\n            <a href="https://pgrjpdeeplink.onelink.me/hQpR/6d9356f1" target="_blank" class="btn btn_gogame"></a> ', "\n            </div>\n        </div>"));
    },
    alertPopLogin: function() {
        dialog.showInfo('<div class="pop pop-global-logic">\n            <div class="borbox pop_login">\n            <span class="btn btn_close"></span>\n\n                '.concat('\n            <a href="javascript:;"  class="btn btn_fb_login_no hvr-grow"></a>\n            <a href="https://ee.hero.com/pre/auth.html?authclient=facebook"  class="btn btn_fb_login hvr-grow"></a>\n        ', "\n            </div>\n        </div>"));
    },
    alertPop_mylott: function(n, o, a) {
        var s = '<div class="plan-cen"> \n            <dl class=\'dl_lists \'>\n                <dd> <b class="cms-lott-icon"><em>+'.concat(100 * n, "</em></b>  </dd>\n                <i class='copyele '>COPY</i>\n\n                <p class=\"btn btn_dui\"></p>\n            </dl>\n            <dl class='dl_lists '>\n                <dd> <b class=\"cms-lott-icon\"></b> </dd>\n                <i class='copyele'>COPY</i>\n                <p class=\"btn btn_dui\"></p>\n\n            </dl>\n            <dl class='dl_lists'>\n                <dd> <b class=\"cms-lott-icon\"></b> </dd>\n                <i class='copyele'>COPY</i>\n                <p class=\"btn btn_dui\"></p>\n            </dl>\n        </div>");
        dialog.showInfo('<div class="pop pop-global-logic">\n            <div class="borbox pop-plan-mylott">\n             <span class="btn btn_close"></span>\n                <p class="htips1">Log into the game using the same Facebook account to receive pre-registrations rewards.</p>\n                <p class="htips2">Rewards will be sent within one week after release, valid until June 22, 2022.</p>\n                \n                '.concat(s, "\n            </div>\n        </div>")), 
        10 == n && $(".plan-cen .dl_lists:nth-child(1)").addClass("curr"), 1 == o && $(".plan-cen .dl_lists:nth-child(2)").addClass("curr"), 
        1 == a && $(".plan-cen .dl_lists:nth-child(3)").addClass("curr");
    },
    alertPop_gz: function() {
        dialog.showInfo('<div class="pop pop-global-logic">\n            <div class="borbox pop_gz">\n                <span class="btn btn_close"></span>\n                <div class="gzbox">\n                    <p>1) After release, log into the game with FB account used during pre-registration to receive pre-registration rewards.</p>\n                    <p>2) All the rewards will be transferred to your backpack.</p>\n                    <p>3) Each FB account can trigger all quests and get all rewards once.</p>\n                    <p>4) Quest 3 can only be shared once per day.</p>\n                    <p>5) IOS version is expected to launch in August.</p>\n                </div>\n            </div>\n        </div>');
    },
    alertPop_PreOver: function() {
        dialog.showInfo('<div class="pop pop-global-logic">\n            <div class="borbox pop_preover">\n                <span class="btn btn_close"></span>\n                \n            </div>\n        </div>');
    }
};