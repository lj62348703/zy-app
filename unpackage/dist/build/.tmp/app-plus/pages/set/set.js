(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{2477:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{}},methods:u({},(0,o.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=r}).call(this,e("6e42")["default"])},3361:function(t,n,e){"use strict";e.r(n);var o=e("bdce"),u=e("4664");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("9f69");var r=e("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},4664:function(t,n,e){"use strict";e.r(n);var o=e("2477"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=u.a},"4c85":function(t,n,e){},"9f69":function(t,n,e){"use strict";var o=e("4c85"),u=e.n(o);u.a},bdce:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},d2b0:function(t,n,e){"use strict";(function(t){e("9257"),e("921b");o(e("66fd"));var n=o(e("3361"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["d2b0","common/runtime","common/vendor"]]]);