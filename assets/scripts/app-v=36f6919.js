"use strict";!function(e,o,t,n,i){o.bem=function(e,o){var t=this.blockName,n=this.dot,a=this.prefix?this.prefix+"-":"";if(e===!1&&"string"==typeof o)var r=""+(n?".":"")+a+t+"_"+o;else if(e===!1||e===i)var r=""+(n?".":"")+a+t;else if("string"==typeof o)var r=""+(n?".":"")+a+t+"__"+e+"_"+o;else var r=""+(n?".":"")+a+t+"__"+e;return r}}(jQuery,window.app=window.app||{},window,document),function(e,o,t,n,i){var a="breakpoints",r={};r.refreshValue=function(){this.value=t.getComputedStyle(n.querySelector("body"),":before").getPropertyValue("content").replace(/\"/g,"")},e(t).resize(function(){r.refreshValue()}).resize(),o[a]={breakpoint:r}}(jQuery,window.app=window.app||{},window,document),function(e,o,t,n,i){var a="clickHandler";if(o[a]===i){var r={bodyListener:function(){e("body").on("click","[data-action]",function(t){var n=e(this).data("action"),a=e(this).data("module"),r=e(this).data("prevent");if(r!==!1&&t.preventDefault(),a===i)throw'Module not defined (use data-module="")';if(!(a in o))throw"Module '"+a+"' not found";if(!(n in o[a]))throw"Method '"+n+"' not defined in module '"+a+"'";o[a][n](this)})}};r.bodyListener(),o[a]=r.bodyListener}}(jQuery,window.app=window.app||{},window,document),function(e,o,t,n,i){var a="elementInViewport";if(o[a]===i){var r={main:function(e){var o=e.offsetTop,n=e.offsetLeft;for(e.offsetWidth,e.offsetHeight;e.offsetParent;)e=e.offsetParent,o+=e.offsetTop,n+=e.offsetLeft;return console.log(e),console.log(t.pageYOffset),o>=t.pageYOffset&&n>=t.pageXOffset&&o<=t.pageYOffset+t.innerHeight&&n<=t.pageXOffset+t.innerWidth}};o[a]=r.main}}(jQuery,window.app=window.app||{},window,document),function(e,o,t,n,i){var a="resizeWindow",r={init:function(){}};r.init(),o[a]={init:r.init}}(jQuery,window.app=window.app||{},window,document),function(e,o,t,n,i){var a="scrollHandler";if(o[a]===i){var r={scroll:function(){var o=e("body").scrollTop()?e("body").scrollTop():e("html").scrollTop(),t=e(".navigation"),n=e(".header"),i=n.outerHeight(),a=Math.round(o/i*100);t[a>=20?"addClass":"removeClass"]("navigation--active"),t[a>=100?"addClass":"removeClass"]("navigation--background"),n.find(".header__white-cover").css({opacity:1.5*a/100}),e(".js-header__meta").css({opacity:1-a/100})},init:function(){r.scroll(),e(t).scroll(r.scroll)}};r.init(),o[a]=r.init}}(jQuery,window.app=window.app||{},window,document);
//# sourceMappingURL=app.js.map
