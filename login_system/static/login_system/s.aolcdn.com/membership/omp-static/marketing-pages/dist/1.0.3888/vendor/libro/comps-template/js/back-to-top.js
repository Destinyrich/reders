/*! For license information please see back-to-top.js.LICENSE.txt */
this.LIBRO=this.LIBRO||{},this.LIBRO.backToTop=function(){"use strict";function r(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var o,e,a=t.call(r),i=[];try{for(;(void 0===n||n-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(r){e={error:r}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return i}function n(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(r(arguments[t]));return n}var t;!function(r){r.DEV="dev",r.QA="qa",r.QA5="qa5",r.STAGE="stage",r.PROD="prod"}(t||(t={}));var o,e,a,i=function(r,n){Array.isArray(r)?r.forEach((function(r){return i(r,n)})):f(r)?Array.isArray(n)?n.forEach((function(n){return r.classList.add(n)})):r.classList.add(n):s(r)&&i(y(r),n)},c=function(r,n){Array.isArray(r)?r.forEach((function(r){return c(r,n)})):f(r)?Array.isArray(n)?n.forEach((function(n){return r.classList.remove(n)})):r.classList.remove(n):s(r)&&c(y(r),n)},u=function(r,n){return s(r)?d(r).classList.contains(n):f(r)?r.classList.contains(n):void 0},s=function(r){return"string"==typeof r},f=function(r){return r instanceof Element},l=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];try{var e=r(t),a=e[0],i=e.slice(1);if(Array.isArray(a))a.forEach((function(r){return l.apply(void 0,n([r],i))}));else{var c=s(a)?y(a):a;Array.isArray(c)?c.forEach((function(r){l.apply(void 0,n([r],i))})):Array.isArray(i[0])?i.forEach((function(r){return c.addEventListener(r[0],r[1],r[2])})):c.addEventListener(i[0],i[1],i[2])}}catch(r){console.log(r)}},y=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=r(2===n.length?n:[document,n[0]],2),e=o[0],a=o[1];return Array.from(e.querySelectorAll(a))},d=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=r(2===n.length?n:[document,n[0]],2),e=o[0],a=o[1];return e.querySelector(a)};return o=d(".back-to-top"),e=.3*Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),a="back-to-top--show",l(o,"click",(function(){window.scroll({top:0})})),void window.addEventListener("scroll",(function(){window.pageYOffset>e?u(o,a)||i(o,a):u(o,a)&&c(o,a)}))}();