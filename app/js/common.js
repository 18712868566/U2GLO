/*wlo:Cflower*/
var dialog;
if (!dialog) dialog = {};
var flagPC = true;
dialog = {
    //关闭  document.location.reload()
    closeDiv: function () {
        // $("body").css("position", "relative");
        $("#alertInfo").stop(true, true).animate({
            "top": "-100%",
            "opacity": "0"
        }, "fast", function () {
            $("#maskLayer,#alertInfo").remove().hide();
        });
    },
    //
    maskLayer: function () {
        $("#maskLayer,#alertInfo").remove();
        var maskLayer = "<div id='maskLayer'></div>";
        var alertInfo = "<div id='alertInfo'><span class='close'>关闭</span></div>";
        $("body").append(maskLayer, alertInfo);
        $('.wrap').addClass('row');
        $("#maskLayer").height('100%').show();
    },
    //显示提示信息框
    showInfo: function (alertHtml) {
        dialog.maskLayer();
        // $("body").css({'position':'fixed','width':'100%'});
        var _winH = $(window).height(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
        var _scrollTop = $(document).scrollTop(); //　　　　　　　　　　　      ├→
        $("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
        var _thisDomWidth = $("#alertInfo").outerWidth();
        var _thisDomHeight = $("#alertInfo").outerHeight();
        var topD = parseInt(_scrollTop + (_winH - _thisDomHeight) / 2);
        var mL = parseInt(_thisDomWidth / 2);
        if (_thisDomHeight >= _winH) {
            topD = _scrollTop;
            if (_scrollTop + _thisDomHeight >= $(document).height()) {
                topD = $(document).height() - _thisDomHeight;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topD = (_winH - _thisDomHeight) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("#alertInfo").css({
            "margin-left": "-" + mL + "px"
        }).stop(true, true).animate({
            "top": topD + "px",
            "margin-left": "-" + mL + "px",
            "opacity": "1"
        }, "fast");
    },
    //改变窗口大小时改变弹出层的位置
    alertInfoPo: function () {
        var _winHResize = $(window).height();
        var _scrollTopResize = $(document).scrollTop();
        var _thisDomWidthResize = $("#alertInfo").outerWidth();
        var _thisDomHeightResize = $("#alertInfo").outerHeight();
        var topResize = parseInt(_scrollTopResize + (_winHResize - _thisDomHeightResize) / 2);
        if (topResize >= $("body").height() - _thisDomHeightResize) {
            _scrollTopResize = $("body").height() - _thisDomHeightResize;
            topResize = _scrollTopResize - (_winHResize - _thisDomHeightResize) / 2;
        };
        if (_thisDomHeightResize >= _winHResize) {
            topResize = _scrollTopResize;
            if (_scrollTopResize + _thisDomHeightResize >= $(document).height()) {
                topResize = $(document).height() - _thisDomHeightResize;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topResize = (_winHResize - _thisDomHeightResize) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("html,body").stop(true, true).animate({
            scrollTop: _scrollTopResize
        });
        $("#alertInfo").stop(true, true).animate({
            "top": topResize + "px",
            "margin-left": "-" + (_thisDomWidthResize / 2) + "px"
        })
        $("#maskLayer").height($("body").height());
    },
    //视频弹窗
    alertVideo: function (videoUrl) {
        let sendUrl = videoUrl;

        dialog.showInfo(
            "<div class='pop_warp  popytbVideo'>" +
            "<span class='pop_hero_close'></span>"
            + "<div class='before '>"
            // +"<embed src='"+videoUrl+"' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' wmode='opaque'>"
            + "<iframe border='0' marginwidth='0' framespacing='0' marginheight='0' src='" + sendUrl + "' frameborder='0' noresize='scrolling='no' width='100%' height='100%' vspale='0' id='iframe' name='iframe' allowfullscreen></iframe>" +
            // + '<video src="' + sendUrl + '" muted loop autoplay="autoplay" playsinline="" webkit-playsinline="" x5-playsinline="" controls="controls"></video>' +
            "</div>" +
            "</div>")

        $('.popytbVideo').siblings('.close').hide();
    },
    //图片弹窗
    alertImages: function (imgUrl) {
        dialog.showInfo(
            "<div class='pop_warp pop_warp_img popVideo' id='custom_scrollbar'>" +
            "<div class='before '>" +
            `<img class="imgcove" src="${imgUrl}" alt="">` +
            "</div>" +
            "</div>")
    },
    // UID登录
    alertUidLogin: function () {
        const uidHtml = `
            <a href="https://grayraven.onelink.me/gj4i/eden" class="btn btn_down_link" target="_blank"> https://grayraven.onelink.me/gj4i/eden </a>
            <a href="https://pgrjpdeeplink.onelink.me/hQpR/6d9356f1" target="_blank" class="btn btn_gogame"></a> `;

        dialog.showInfo(`<div class="pop pop_uid_login">
            <div class="borbox">
                ${uidHtml}
            </div>
        </div>`)
    },
    // 登陆
    alertPopLogin: function () {
        var LoginHtml = `
            <a href="javascript:;"  class="btn btn_fb_login_no hvr-grow"></a>
            <a href="https://ee.hero.com/pre/auth.html?authclient=facebook"  class="btn btn_fb_login hvr-grow"></a>
        `;

        dialog.showInfo(`<div class="pop pop-global-logic">
            <div class="borbox pop_login">
            <span class="btn btn_close"></span>

                ${LoginHtml}
            </div>
        </div>`)
    },
    // 我的背包
    alertPop_mylott: function (data1,data2,data3) {


        console.log(data1);
        console.log(data2);
        console.log(data3);
        // class  copyeleyes
        // <dl class='dl_lists curr'>

        let _html = `<div class="plan-cen"> 
            <dl class='dl_lists '>
                <dd> <b class="cms-lott-icon"><em>+${data1*100}</em></b>  </dd>
                <i class='copyele '>COPY</i>

                <p class="btn btn_dui"></p>
            </dl>
            <dl class='dl_lists '>
                <dd> <b class="cms-lott-icon"></b> </dd>
                <i class='copyele'>COPY</i>
                <p class="btn btn_dui"></p>

            </dl>
            <dl class='dl_lists'>
                <dd> <b class="cms-lott-icon"></b> </dd>
                <i class='copyele'>COPY</i>
                <p class="btn btn_dui"></p>
            </dl>
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-logic">
            <div class="borbox pop-plan-mylott">
             <span class="btn btn_close"></span>
                <p class="htips1">Log into the game using the same Facebook account to receive pre-registrations rewards.</p>
                <p class="htips2">Rewards will be sent within one week after release, valid until June 22, 2022.</p>
                
                ${_html}
            </div>
        </div>`);


        if (data1 == 10) {
            $('.plan-cen .dl_lists:nth-child(1)').addClass('curr');
        }

        if (data2 == 1) {
            $('.plan-cen .dl_lists:nth-child(2)').addClass('curr');
        }

        if (data3 == 1) {
            $('.plan-cen .dl_lists:nth-child(3)').addClass('curr');
        }

    },
    // 活动规则
    alertPop_gz: function () {
        dialog.showInfo(`<div class="pop pop-global-logic">
            <div class="borbox pop_gz">
                <span class="btn btn_close"></span>
                <div class="gzbox">
                    <p>1) After release, log into the game with FB account used during pre-registration to receive pre-registration rewards.</p>
                    <p>2) All the rewards will be transferred to your backpack.</p>
                    <p>3) Each FB account can trigger all quests and get all rewards once.</p>
                    <p>4) Quest 3 can only be shared once per day.</p>
                    <p>5) IOS version is expected to launch in August.</p>
                </div>
            </div>
        </div>`)
    },
    // pre over
    alertPop_PreOver: function () {
        dialog.showInfo(`<div class="pop pop-global-logic">
            <div class="borbox pop_preover">
                <span class="btn btn_close"></span>
                
            </div>
        </div>`)
    }
};

// dialog.alertPop_mylott();


// dialog.alertPop_gz();

// dialog.alertPop_PreOver();