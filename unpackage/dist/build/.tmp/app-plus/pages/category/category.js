(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{1825:function(t,n,e){"use strict";e.r(n);var i=e("985e"),a=e("ad36");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("8663");var c=e("2877"),u=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},"793c":function(t,n,e){"use strict";(function(t){e("9257"),e("921b");i(e("66fd"));var n=i(e("1825"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},8663:function(t,n,e){"use strict";var i=e("97ee"),a=e.n(i);a.a},"97ee":function(t,n,e){},"985e":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},ad36:function(t,n,e){"use strict";e.r(n);var i=e("c6bb"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=a.a},c6bb:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,r,c){try{var u=t[r](c),o=u.value}catch(s){return void e(s)}u.done?n(o):Promise.resolve(o).then(i,a)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var c=t.apply(n,e);function u(t){r(c,i,a,u,o,"next",t)}function o(t){r(c,i,a,u,o,"throw",t)}u(void 0)})}}var u={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=c(i.default.mark(function t(){var n,e=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:n=t.sent,n.forEach(function(t){t.pid?t.picture?e.tlist.push(t):e.slist.push(t):e.flist.push(t)});case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var n=this.slist.findIndex(function(n){return n.pid===t.id});this.tabScrollTop=this.slist[n].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var n=t.detail.scrollTop,e=this.slist.filter(function(t){return t.top<=n}).reverse();e.length>0&&(this.currentId=e[0].pid)},calcSize:function(){var n=0;this.slist.forEach(function(e){var i=t.createSelectorQuery().select("#main-"+e.id);i.fields({size:!0},function(t){e.top=n,n+=t.height,e.bottom=n}).exec()}),this.sizeCalcState=!0},navToList:function(n,e){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(n,"&tid=").concat(e)})}}};n.default=u}).call(this,e("6e42")["default"])}},[["793c","common/runtime","common/vendor"]]]);