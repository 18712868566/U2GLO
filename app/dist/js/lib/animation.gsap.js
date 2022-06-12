"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
!function(e, o) {
    var n;
    "function" == typeof define && define.amd ? define([ "ScrollMagic", "gsap", "TweenMax", "TimelineMax" ], o) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? (n = require("gsap/dist/gsap") || require("gsap"), 
    o(require("scrollmagic"), n, TweenMax || n, TimelineMax || n)) : o(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.gsap, e.gsap || e.TweenMax || e.TweenLite, e.gsap || e.TimelineMax || e.TimelineLite);
}(void 0, function(e, o, w, h) {
    var n = "animation.gsap", m = o && 3 <= parseFloat(o.version), o = window.console || {}, o = Function.prototype.bind.call(o.error || o.log || function() {}, o);
    e || o("(" + n + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), 
    w || o("(" + n + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), 
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e;
    }), e.Scene.extend(function() {
        function d() {
            g._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + n + ")", "->"), 
            g._log.apply(this, arguments));
        }
        var f, g = this, y = (g.on("progress.plugin_gsap", function() {
            y();
        }), g.on("destroy.plugin_gsap", function(e) {
            g.removeTween(e.reset);
        }), function() {
            var e, o;
            f && (e = g.progress(), o = g.state(), f.repeat && -1 === f.repeat() ? "DURING" === o && f.paused() ? f.play() : "DURING" === o || f.paused() || f.pause() : e != f.progress() && (0 === g.duration() ? 0 < e ? f.play() : f.reverse() : g.tweenChanges() && f.tweenTo ? f.tweenTo(e * f.duration()) : f.progress(e).pause()));
        });
        g.setTween = function(e, o, n) {
            var t, r, i;
            1 < arguments.length && (r = "number" == typeof arguments[1], m ? (n = r ? n : o).hasOwnProperty("duration") || (n.duration = r ? o : 1) : arguments.length < 3 && (n = o, 
            o = 1), e = m ? w.to(e, n) : w.to(e, o, n));
            try {
                (t = h && !m ? new h({
                    smoothChildTiming: !0
                }).add(e) : e).pause();
            } catch (e) {
                return d(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), 
                g;
            }
            if (f && g.removeTween(), f = t, e.repeat && -1 === e.repeat() && (f.repeat(-1), 
            f.yoyo(e.yoyo())), g.tweenChanges() && !f.tweenTo && d(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), 
            f && g.controller() && g.triggerElement() && 2 <= g.loglevel() && (r = w.getTweensOf(g.triggerElement()), 
            i = g.controller().info("vertical"), r.forEach(function(e, o) {
                e = e.vars.css || e.vars;
                if (i ? void 0 !== e.top || void 0 !== e.bottom : void 0 !== e.left || void 0 !== e.right) return d(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), 
                !1;
            })), 1.14 <= parseFloat(TweenLite.version)) for (var a, s, l = m ? "onInterrupt" : "onOverwrite", u = f.getChildren ? f.getChildren(!0, !0, !1) : [ f ], p = function() {
                d(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
            }, c = 0; c < u.length; c++) a = u[c], s !== p && (s = a.vars[l], a.vars[l] = function() {
                s && s.apply(this, arguments), p.apply(this, arguments);
            });
            return d(3, "added tween"), y(), g;
        }, g.removeTween = function(e) {
            return f && (e && f.progress(0).pause(), f.kill(), f = void 0, d(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), 
            g;
        };
    });
});