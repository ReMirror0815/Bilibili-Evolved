!function(i,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["touch/double-click-control"]=o():i["touch/double-click-control"]=o()}(self,(function(){return function(){var i,o,l={81:function(i,o,l){var e=l(645)((function(i){return i[1]}));e.push([i.id,".disable-original-hover .bilibili-player-video-control-bottom, .disable-original-hover .bilibili-player-video-control-mask, .disable-original-hover .bilibili-player-video-progress-shadow, .disable-original-hover .bilibili-player-video-top {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover .bilibili-player-video-control-wrap {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: -7px !important;\n  visibility: visible !important;\n}\n.disable-original-hover .bpx-player-top-wrap {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover .squirtle-progress-wrap {\n  top: unset !important;\n  bottom: 0 !important;\n  height: 2px !important;\n  width: 100% !important;\n  margin: 0 !important;\n}\n.disable-original-hover .squirtle-progress-wrap .squirtle-progress-bar {\n  height: 2px !important;\n  bottom: 0 !important;\n}\n.disable-original-hover .squirtle-high-energy {\n  width: 100% !important;\n  top: unset !important;\n  bottom: 2px !important;\n  margin: 0 !important;\n}\n.disable-original-hover .squirtle-controller-wrap {\n  display: none !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-bottom, .disable-original-hover.touch-video-control-show .bilibili-player-video-control-mask, .disable-original-hover.touch-video-control-show .bilibili-player-video-top {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  bottom: 32px !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-top-wrap {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-progress-wrap {\n  top: 0 !important;\n  bottom: unset !important;\n  height: 16px !important;\n  width: calc(100% - 24px) !important;\n  margin: 0 12px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-progress-wrap .squirtle-progress-bar {\n  height: 4px !important;\n  bottom: 6px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-high-energy {\n  width: calc(100% - 24px) !important;\n  top: -22px !important;\n  bottom: unset !important;\n  margin: 0 12px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-controller-wrap {\n  display: flex !important;\n}\n.disable-original-hover #bilibili_pbp,\n.disable-original-hover #bilibili_pbp_canvas {\n  opacity: 0 !important;\n}\n.disable-original-hover #bilibili_pbp.pin,\n.disable-original-hover #bilibili_pbp_canvas.pin {\n  opacity: 1 !important;\n}\n.disable-original-hover #bilibili_pbp_pin {\n  opacity: 0 !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp,\n.disable-original-hover.touch-video-control-show #bilibili_pbp_canvas {\n  opacity: 1 !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp_pin {\n  opacity: 1 !important;\n}\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp,\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas {\n  left: 0 !important;\n  width: 100% !important;\n}\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin {\n  bottom: 3px !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas {\n  bottom: calc(100% - 2px) !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_pin {\n  right: -8px !important;\n}\n@media screen and (min-width: 750px) {\n  body.player-mode-webfullscreen .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-mode-webfullscreen .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin, body.player-fullscreen-fix .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-fullscreen-fix .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin, body.player-full-win .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-full-win .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin {\n    bottom: 4px !important;\n  }\n  body.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas, body.player-full-win .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-full-win .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas {\n    bottom: calc(100% + 5px) !important;\n  }\n}\n.disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bc, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bl, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-br {\n  bottom: 20px !important;\n}\n.disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 54px !important;\n}\n.mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 68px !important;\n}\n\n@media screen and (min-width: 750px) {\n  .player .bilibili-player.mode-fullscreen .disable-original-hover .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: -7px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 49px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 49px !important;\n  }\n}",""]),i.exports=e},645:function(i){"use strict";
// eslint-disable-next-line func-names
i.exports=function(i){var o=[];return o.toString=function(){return this.map((function(o){var l=i(o);return o[2]?"@media ".concat(o[2]," {").concat(l,"}"):l})).join("")},
// eslint-disable-next-line func-names
o.i=function(i,l,e){"string"==typeof i&&(
// eslint-disable-next-line no-param-reassign
i=[[null,i,""]]);var n={};if(e)for(var t=0;t<this.length;t++){
// eslint-disable-next-line prefer-destructuring
var r=this[t][0];null!=r&&(n[r]=!0)}for(var a=0;a<i.length;a++){var b=[].concat(i[a]);e&&n[b[0]]||(l&&(b[2]?b[2]="".concat(l," and ").concat(b[2]):b[2]=l),o.push(b))}},o}},70:function(i,o,l){var e=l(81);e&&e.__esModule&&(e=e.default),i.exports="string"==typeof e?e:e.toString()},109:function(i){"use strict";i.exports=coreApis.utils}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var t=e[i]={id:i,exports:{}};return l[i](t,t.exports,n),t.exports}n.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(o,{a:o}),o},o=Object.getPrototypeOf?function(i){return Object.getPrototypeOf(i)}:function(i){return i.__proto__},n.t=function(l,e){if(1&e&&(l=this(l)),8&e)return l;if("object"==typeof l&&l){if(4&e&&l.__esModule)return l;if(16&e&&"function"==typeof l.then)return l}var t=Object.create(null);n.r(t);var r={};i=i||[null,o({}),o([]),o(o)];for(var a=2&e&&l;"object"==typeof a&&!~i.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((function(i){r[i]=function(){return l[i]}}));return r.default=function(){return l},n.d(t,r),t},n.d=function(i,o){for(var l in o)n.o(o,l)&&!n.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:o[l]})},n.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},n.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var t={};return function(){"use strict";n.d(t,{component:function(){return b}});var i=coreApis.componentApis.video.playerAgent,o=coreApis.observer,l=coreApis.style,e=coreApis.utils.urls,r=n(70),a=n.n(r);const b={name:"doubleClickControl",displayName:"启用双击控制",description:{"zh-CN":"将视频播放器的操作方式更改为: 单击显示 / 隐藏控制栏, 双击播放 / 暂停."},tags:[componentsTags.touch],enabledByDefault:navigator.maxTouchPoints>0,urlInclude:e.playerUrls,entry:async()=>{(0,l.addStyle)(a());const e="disable-original-hover";(0,o.videoChange)((async()=>{const o=await i.playerAgent.query.playerArea();if(o.classList.contains(e))return;o.classList.add(e);const l=i.playerAgent.query.video.container.sync(),{DoubleClickEvent:t}=await Promise.resolve().then(n.t.bind(n,109,23)),r=new t((()=>i.playerAgent.togglePlay()),!0);r.singleClickHandler=()=>{o.classList.toggle("touch-video-control-show")},r.bind(l)}))},commitHash:"a13ef02f247cc1059e9db8f9a2da9d60e392304d"}}(),t=t.component}()}));