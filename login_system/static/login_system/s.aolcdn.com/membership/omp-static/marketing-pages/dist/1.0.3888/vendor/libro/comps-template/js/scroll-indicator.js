/*! For license information please see scroll-indicator.js.LICENSE.txt */
this.LIBRO=this.LIBRO||{},this.LIBRO.scrollIndicator=function(){"use strict";function r(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var o,e,i=t.call(r),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(r){e={error:r}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return a}var n;!function(r){r.DEV="dev",r.QA="qa",r.QA5="qa5",r.STAGE="stage",r.PROD="prod"}(n||(n={}));var t=function(r,n){Array.isArray(r)?r.forEach((function(r){return t(r,n)})):a(r)?Array.isArray(n)?n.forEach((function(n){return r.classList.add(n)})):r.classList.add(n):i(r)&&t(c(r),n)},o=function(r,n){Array.isArray(r)?r.forEach((function(r){return o(r,n)})):a(r)?Array.isArray(n)?n.forEach((function(n){return r.classList.remove(n)})):r.classList.remove(n):i(r)&&o(c(r),n)},e=function(r,n){return i(r)?s(r).classList.contains(n):a(r)?r.classList.contains(n):void 0},i=function(r){return"string"==typeof r},a=function(r){return r instanceof Element},c=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=r(2===n.length?n:[document,n[0]],2),e=o[0],i=o[1];return Array.from(e.querySelectorAll(i))},s=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=r(2===n.length?n:[document,n[0]],2),e=o[0],i=o[1];return e.querySelector(i)};return function(){var r=s(".scroll-indicator"),n=.3*Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),i="scroll-indicator--show";function a(){r&&(window.pageYOffset<n?e(r,i)||t(r,i):e(r,i)&&o(r,i))}a(),window.addEventListener("scroll",(function(){a()}))}()}();