(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"311c":function(t,e,i){"use strict";i.r(e);var n=i("6d77"),s=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=s.a},"329d":function(t,e,i){"use strict";(function(t){i("9257"),i("921b");n(i("66fd"));var e=n(i("ef6e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"6d77":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i,n,s,c,a){try{var r=t[c](a),o=r.value}catch(d){return void i(d)}r.done?e(o):Promise.resolve(o).then(n,s)}function a(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var a=t.apply(e,i);function r(t){c(a,n,s,r,o,"next",t)}function o(t){c(a,n,s,r,o,"throw",t)}r(void 0)})}}var r=function(){return i.e("components/share").then(i.bind(null,"1b09"))},o={components:{share:r},data:function(){return{specClass:"none",specSelected:[],favorite:!0,shareList:[],imgList:[{src:"https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"},{src:"https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"},{src:"https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg"}],desc:'\n\t\t\t\t<div style="width:100%">\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t</div>\n\t\t\t',specList:[{id:1,name:"尺寸"},{id:2,name:"颜色"}],specChildList:[{id:1,pid:1,name:"XS"},{id:2,pid:1,name:"S"},{id:3,pid:1,name:"M"},{id:4,pid:1,name:"L"},{id:5,pid:1,name:"XL"},{id:6,pid:1,name:"XXL"},{id:7,pid:2,name:"白色"},{id:8,pid:2,name:"珊瑚粉"},{id:9,pid:2,name:"草木绿"}]}},onLoad:function(){var t=a(n.default.mark(function t(e){var i,s=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.id,i&&this.$api.msg("点击了".concat(i)),this.specList.forEach(function(t){var e=!0,i=!1,n=void 0;try{for(var c,a=s.specChildList[Symbol.iterator]();!(e=(c=a.next()).done);e=!0){var r=c.value;if(r.pid===t.id){s.$set(r,"selected",!0),s.specSelected.push(r);break}}}catch(o){i=!0,n=o}finally{try{e||null==a.return||a.return()}finally{if(i)throw n}}}),t.next=5,this.$api.json("shareList");case 5:this.shareList=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t,e){var i=this,n=this.specChildList;n.forEach(function(t){t.pid===e&&i.$set(t,"selected",!1)}),this.$set(n[t],"selected",!0),this.specSelected=[],n.forEach(function(t){!0===t.selected&&i.specSelected.push(t)})},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){this.favorite=!this.favorite},buy:function(){t.navigateTo({url:"/pages/order/createOrder"})},stopPrevent:function(){}}};e.default=o}).call(this,i("6e42")["default"])},9361:function(t,e,i){"use strict";var n=i("cdde"),s=i.n(n);s.a},cdde:function(t,e,i){},e191:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},ef6e:function(t,e,i){"use strict";i.r(e);var n=i("e191"),s=i("311c");for(var c in s)"default"!==c&&function(t){i.d(e,t,function(){return s[t]})}(c);i("9361");var a=i("2877"),r=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["329d","common/runtime","common/vendor"]]]);