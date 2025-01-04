/*! For license information please see vendor-glide.js.LICENSE.txt */
(self.webpackChunkCAAS_AOLCOM=self.webpackChunkCAAS_AOLCOM||[]).push([[3414],{44134:function(t){function e(t,e,n){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var r=e.length;return i(e,void 0!==n&&n<r?n:r)}return t(e,n)}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}t.exports={arrowDisabler:function(t,i){return{mount:function(){t.settings.rewind||t.on(["mount.after","run"],(function(){var r=e(n,i.Controls.items),o=e(n,i.Html.slides),s=t.index,a=t.settings.perView;r.forEach((function(t){if(t.className.includes("glide__arrows")){var e=t.querySelector(".glide__arrow--prev");e&&i.Run.isStart()?e.setAttribute("disabled","true"):e.removeAttribute("disabled");var n=t.querySelector(".glide__arrow--next");n&&(i.Run.isEnd()||s+a>=o.length)?n.setAttribute("disabled","true"):n.removeAttribute("disabled")}}))}))}}},ariaHiddenAddRemove:function(t,i){return{mount:function(){t.on(["mount.after","run"],(function(){setTimeout((function(){for(var r,o=e(n,i.Html.slides),s=o.findIndex((function(t){return t.classList.contains("glide__slide--active")})),a=s+((null==t||null===(r=t.settings)||void 0===r?void 0:r.perView)||1),u=0;u<o.length;u++)u>=s&&u<a?o[u].setAttribute("aria-hidden",!1):o[u].setAttribute("aria-hidden",!0)}),500)}))}}}}},54708:function(t,e,n){"use strict";var i=n(41739),r=n(44134),o=n(39356);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}function u(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}e.A=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.elem=e,this.instance=n,this.carouselElem=this.elem.querySelector(".m-nc__carousel"),this.glideOptions={perView:7,perSwipe:"|",rewind:!1,gap:16,breakpoints:{1440:{perView:4,peek:{before:0,after:50}},1280:{perView:4,peek:{before:0,after:50}},1123:{perView:4,peek:{before:0,after:50}},900:{gap:10,perView:6,peek:{before:0,after:50}},600:{gap:10,perView:4,peek:{before:0,after:50}}}},this.init())},(e=[{key:"init",value:function(){var t=this;this.glideInstance=new i.A(this.carouselElem,this.glideOptions),this.glideInstance.mount({arrowDisabler:r.arrowDisabler}),this.glideInstance.on(["run.after"],(function(){(0,o.rapidReady)((function(e){e.refreshModule(t.elem.id)}))}))}}])&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}()},21008:function(t,e,n){"use strict";var i=n(41739),r=n(44134);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function a(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var u,c={CUSTOM_WIDTH:220,translateWidthValue:0,customScrollIndex:0};e.A=(u=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.elem=e,this.instance=n,this.carouselElem=this.elem.querySelector(".m-yss-hmc--o__carousel"),this.OLYMPIC_GLIDE__LEFT_ARROW_CLASS=".m-yss-hmc--o__controls--prev",this.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS=".m-yss-hmc--o__controls--next",this.glideOptions={type:"slider",hoverpause:!1,bound:!1,rewind:!1,autoplay:!1,perView:5,perSwipe:"|",startAt:0,animationDuration:300,gap:36,peek:{before:0,after:120},breakpoints:{1680:{gap:16},1570:{gap:16,perView:4},1100:{gap:16,perView:3},750:{gap:16,perView:2},500:{gap:16,perView:1}}},this.init())},e=[{key:"init",value:function(){var t,e,n=this;this.glideInstance=new i.A(this.carouselElem,this.glideOptions),this.glideInstance.mount({arrowDisabler:r.arrowDisabler,setCustomSlideWidth:this.setCustomSlideWidth}),this.glideInstance.on(["mount.after","run.start"],(function(){n.disabledGlideArrow(n.OLYMPIC_GLIDE__LEFT_ARROW_CLASS),n.enabledGlideArrow(n.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS)})),this.glideInstance.on("run.before",(function(t){n.enabledGlideArrow(n.OLYMPIC_GLIDE__LEFT_ARROW_CLASS),n.enabledGlideArrow(n.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS);var e=t.direction,i=t.steps;"|"===e&&("<"===i?n.moveSliderLeft():">"===i&&n.moveSliderRight())})),this.glideInstance.on("resize",(t=function(t){n.resizeEventHandler()},function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=this;clearTimeout(e),e=setTimeout((function(){e=null,t.apply(o,i)}),200)})),this.sliderTranslateWidth(0)}},{key:"glideConfig",value:function(){var t=this;return new Promise((function(e,n){var i,r=t.glideInstance.index,o=t.glideInstance.settings;e({perView:o.perView,gap:o.gap,currentIndex:r,slidesLength:null==t||null===(i=t.glideInstance)||void 0===i||null===(i=i._c)||void 0===i||null===(i=i.Html)||void 0===i||null===(i=i.slides)||void 0===i?void 0:i.length})}))}},{key:"moveSliderRight",value:function(){var t=this;this.glideConfig().then((function(e){var n=e.perView,i=e.gap,r=e.currentIndex,o=e.slidesLength,s=r+n;r>=o?s=r:s>=o&&(s=r+1),t.updateCustomSlide(s,i),o&&r+2*n>=o&&t.disabledGlideArrow(t.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS)}))}},{key:"moveSliderLeft",value:function(){var t=this;this.glideConfig().then((function(e){var n=e.perView,i=e.gap,r=e.currentIndex-n;r=r<=0?0:r,t.updateCustomSlide(r,i)}))}},{key:"updateRightArrowUI",value:function(){var t=this;this.glideConfig().then((function(e){var n=e.perView,i=e.currentIndex,r=e.slidesLength;r&&i+n>=r?t.disabledGlideArrow(t.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS):t.enabledGlideArrow(t.OLYMPIC_GLIDE__RIGHT_ARROW_CLASS)}))}},{key:"enabledGlideArrow",value:function(t){var e=document.querySelector(t);if(e.style.cursor="pointer",e){var n=e.querySelector("svg");n.classList.add("enable_arrow"),n.classList.remove("disable_arrow"),e.disabled=!1}}},{key:"disabledGlideArrow",value:function(t){var e=document.querySelector(t);if(e.style.cursor="none",e){var n=e.querySelector("svg");n.classList.add("disable_arrow"),n.classList.remove("enable_arrow"),e.disabled=!0}}},{key:"getTranslateWidthValue",value:function(){return c.translateWidthValue}},{key:"setCustomSlideWidth",value:function(t,e,n){return{mount:function(){e.Html.slides.forEach((function(t,e){t.style.width="".concat(c.CUSTOM_WIDTH,"px"),t.style["min-width"]="".concat(c.CUSTOM_WIDTH,"px")}))}}}},{key:"setSliderZeroWidthToUI",value:function(){c.customScrollIndex=0,c.translateWidthValue=0,this.glideInstance.go("<<"),document.querySelector(".m-yss-hmc--o-slides").style.transform="translate3d(2px, 0px, 0px)"}},{key:"setSliderWidthToUI",value:function(t){c.translateWidthValue=t,document.querySelector(".m-yss-hmc--o-slides").style.transform="translate3d(-".concat(t-2,"px, 0px, 0px)")}},{key:"getSliderWidth",value:function(t,e){var n=t;return{actualTranslateWidth:t*c.CUSTOM_WIDTH+t*e,actualIndex:n}}},{key:"sliderTranslateWidth",value:function(t,e){if(0!==t){var n=this.getSliderWidth(t,e),i=n.actualTranslateWidth,r=n.actualIndex;c.customScrollIndex=r,this.glideInstance.go("=".concat(c.customScrollIndex)),this.setSliderWidthToUI(i)}else this.setSliderZeroWidthToUI()}},{key:"updateCustomSlide",value:function(t,e){this.sliderTranslateWidth(t,e)}},{key:"resizeEventHandler",value:function(){var t=this;this.glideInstance.mount({setCustomSlideWidth:this.setCustomSlideWidth}),this.glideConfig().then((function(e){var n=e.gap;c.customScrollIndex?t.sliderTranslateWidth(c.customScrollIndex,n):t.sliderTranslateWidth(0),t.updateRightArrowUI()}))}}],e&&s(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),u)},77376:function(t,e,n){"use strict";var i=n(41739),r=n(44134),o=n(39356);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}function u(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}e.A=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.elem=e,this.instance=n,this.carouselElem=this.elem.querySelector(".m-nc__carousel"),this.glideOptions={perView:7,perSwipe:"|",rewind:!1,gap:46,breakpoints:{1680:{gap:50,perView:5,peek:{before:0,after:160}},1440:{gap:34,perView:5,peek:{before:0,after:140}},1280:{gap:42,perView:5,peek:{before:0,after:140}},1123:{gap:22,perView:5,peek:{before:0,after:105}},900:{gap:22,perView:4,peek:{before:0,after:50}},600:{gap:10,perView:3,peek:{before:0,after:50}}}},this.init())},(e=[{key:"init",value:function(){var t=this;this.glideInstance=new i.A(this.carouselElem,this.glideOptions),this.glideInstance.mount({arrowDisabler:r.arrowDisabler}),this.glideInstance.on(["run.after"],(function(){(0,o.rapidReady)((function(e){e.refreshModule(t.elem.id)}))}))}}])&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}()},41739:function(t,e,n){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},p.apply(this,arguments)}n.d(e,{A:function(){return J}});var v={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function m(t){console.error("[Glide warn]: ".concat(t))}function g(t){return parseInt(t)}function y(t){return"string"==typeof t}function b(t){var e=s(t);return"function"===e||"object"===e&&!!t}function w(t){return"function"==typeof t}function S(t){return void 0===t}function _(t){return t.constructor===Array}function k(t,e,n){Object.defineProperty(t,e,n)}function A(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),["direction","type","slide","arrow","nav"].forEach((function(i){e.classes.hasOwnProperty(i)&&(n.classes[i]=o(o({},t.classes[i]),e.classes[i]))}))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t),this.events=e,this.hop=e.hasOwnProperty}return c(t,[{key:"on",value:function(t,e){if(!_(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(_(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),T=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this._c={},this._t=[],this._e=new O,this.disabled=!1,this.selector=e,this.settings=A(v,n),this.index=this.settings.startAt}return c(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),b(t)?this._c=function(t,e,n){var i={};for(var r in e)w(e[r])?i[r]=e[r](t,i,n):m("Extension must be a function");for(var o in i)w(i[o].mount)&&i[o].mount();return i}(this,t,this._e):m("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return _(t)?this._t=t:m("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=A(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){b(t)?this._o=t:m("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=g(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function I(){return(new Date).getTime()}function C(t,e){var n,i,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=0,u=function(){a=!1===s.leading?0:I(),n=null,o=t.apply(i,r),n||(i=r=null)},c=function(){var c=I();a||!1!==s.leading||(a=c);var l=e-(c-a);return i=this,r=arguments,l<=0||l>e?(n&&(clearTimeout(n),n=null),a=c,o=t.apply(i,r),n||(i=r=null)):n||!1===s.trailing||(n=setTimeout(u,l)),o};return c.cancel=function(){clearTimeout(n),a=0,n=i=r=null},c}var x={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function L(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function H(t){return Array.prototype.slice.call(t)}var R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t),this.listeners=e}return c(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];y(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];y(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),E=["ltr","rtl"],P={">":"<","<":">","=":"="};function j(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function W(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function D(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function M(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return b(i)?n-i.before:n-i}return n}}}function V(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var G=!1;try{var z=Object.defineProperty({},"passive",{get:function(){G=!0}});window.addEventListener("testPassive",null,z),window.removeEventListener("testPassive",null,z)}catch(t){}var q=G,B=["touchstart","mousedown"],Y=["touchmove","mousemove"],U=["touchend","touchcancel","mouseup","mouseleave"],F=["mousedown","mousemove","mouseup","mouseleave"],N='[data-glide-el^="controls"]',X="".concat(N,' [data-glide-dir*="<"]'),Z="".concat(N,' [data-glide-dir*=">"]');function K(t){return b(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(m("Breakpoints option must be an object"),{});var e}var $={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=H(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return k(i,"root",{get:function(){return i._r},set:function(t){y(t)&&(t=document.querySelector(t)),null!==t?i._r=t:m("Root element must be a existing Html node")}}),k(i,"track",{get:function(){return i._t},set:function(t){i._t=t}}),k(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e){var n=[W,D,M,V].concat(t._t,[j]);return{mutate:function(i){for(var r=0;r<n.length;r++){var o=n[r];w(o)&&w(o().modify)?i=o(t,e,undefined).modify(i):m("Transformer should be a function that returns an object with `modify()` method")}return i}}}(t,e).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r,e.Html.wrapper.style.webkitTransform=r,e.Html.wrapper.style.transform=r},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var o=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(o-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return k(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(P[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return k(i,"value",{get:function(){return i._v},set:function(t){E.indexOf(t)>-1?i._v=t:m("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return k(i,"value",{get:function(){return i._v},set:function(t){b(t)?(t.before=g(t.before),t.after=g(t.after)):t=g(t),i._v=t}}),k(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return b(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return k(i,"length",{get:function(){return e.Html.slides.length}}),k(i,"width",{get:function(){return e.Html.track.offsetWidth}}),k(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),k(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[x[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?r[x[o][1]]="".concat(this.value/2,"px"):r[x[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return k(i,"value",{get:function(){return g(t.settings.gap)}}),k(i,"grow",{get:function(){return i.value*e.Sizes.length}}),k(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],C((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return k(i,"offset",{get:function(){return i._o},set:function(t){i._o=S(t)?0:g(t)}}),k(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),k(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(i.length>0)for(var u=o+ +!!t.settings.peek+Math.round(o/2),c=i.slice(0,u).reverse(),l=i.slice(-1*u),f=0;f<Math.max(a,Math.floor(o/i.length));f++){for(var d=0;d<c.length;d++){var h=c[d].cloneNode(!0);h.classList.add(s.slide.clone),n.push(h)}for(var p=0;p<l.length;p++){var v=l[p].cloneNode(!0);v.classList.add(s.slide.clone),n.unshift(v)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(-1*o).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return k(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new R,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,C((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),L(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,o=e.direction,s=1;if("="===o)return t.settings.bound&&g(r)>n?void(t.index=n):void(t.index=r);if(">"!==o||">"!==r)if("<"!==o||"<"!==r){if("|"===o&&(s=t.settings.perView||1),">"===o||"|"===o&&">"===r){var a=function(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}(s);return a>n&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e<=r?e:t.isType("carousel")?e-(r+1):t.settings.rewind?i.isBound()&&!i.isEnd()?r:0:i.isBound()?r:Math.floor(r/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===r){var u=function(e){var n=t.index;return t.isType("carousel")?n-e:(Math.ceil(n/e)-1)*e}(s);return u<0&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e>=0?e:t.isType("carousel")?e+(r+1):t.settings.rewind?i.isBound()&&i.isStart()?r:Math.floor(r/n)*n:0}(u,s))}m("Invalid direction pattern [".concat(o).concat(r,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return k(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?g(e)?g(e):e:0}}}),k(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(g(n.perView)-1)+g(n.focusAt):i-1}}),k(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new R,r=0,o=0,s=0,a=!1,u=!!q&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=g(i.pageX),s=g(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(i),d=g(f.pageX)-o,h=g(f.pageY)-s,p=Math.abs(d<<2),v=Math.abs(h<<2),m=Math.sqrt(p+v),y=Math.sqrt(v);if(!(180*(r=Math.asin(y/m))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(d*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=s.perSwipe,u=s.touchAngle,c=s.classes,l=this.touches(i),f=this.threshold(i),d=l.pageX-o,h=180*r/Math.PI;this.enable(),d>f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):d<-f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(c.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(B[0],e.Html.wrapper,(function(t){n.start(t)}),u),s&&i.on(B[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(B[0],e.Html.wrapper,u),i.off(B[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(Y,e.Html.wrapper,C((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(Y,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(U,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(U,e.Html.wrapper)},touches:function(t){return F.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return F.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new R,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new R,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return k(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new R,r=!!q&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(N),this._arrowControls={previous:e.Html.root.querySelectorAll(X),next:e.Html.root.querySelectorAll(Z)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.nav.active),L(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];null==n||n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=o._arrowControls.next,i=o._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){H(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){H(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){q||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return k(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new R,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=t.settings.perSwipe;["ArrowRight","ArrowLeft"].includes(n.code)&&e.Run.make(e.Direction.resolve("".concat(i).concat({ArrowRight:">",ArrowLeft:"<"}[n.code])))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new R,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),t.settings.autoplay&&S(this._i)&&(this._i=setInterval((function(){i.stop(),e.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return k(r,"time",{get:function(){return g(e.Html.slides[t.index].getAttribute("data-glide-autoplay")||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new R,r=t.settings,o=K(r.breakpoints),s=Object.assign({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return s}};return Object.assign(r,a.match(o)),i.on("resize",window,C((function(){t.settings=A(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=K(o),s=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(n,t);var e=h(n);function n(){return a(this,n),e.apply(this,arguments)}return c(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p(f(n.prototype),"mount",this).call(this,Object.assign({},$,t))}}]),n}(T)}}]);
//# sourceMappingURL=vendor-glide.js.map