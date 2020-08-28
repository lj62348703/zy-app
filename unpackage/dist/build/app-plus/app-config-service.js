
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/product/product","pages/set/set","pages/userinfo/userinfo","pages/detail/articleDetail","pages/answer/answer","components/list","pages/index/index2","pages/cart/cart","pages/public/login","pages/user/user","pages/detail/detail","pages/order/order","pages/money/money","pages/order/createOrder","pages/address/address","pages/address/addressManage","pages/money/pay","pages/money/paySuccess","pages/notice/notice","pages/category/category","pages/product/list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"精彩生活","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f8f8f8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mix-mall 电商项目模版","compilerVersion":"2.8.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/product/product","meta":{},"window":{"navigationBarTitleText":"详情展示"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"修改资料"}},{"path":"/pages/detail/articleDetail","meta":{},"window":{"navigationBarTitleText":"视频"}},{"path":"/pages/answer/answer","meta":{},"window":{"navigationBarTitleText":"刷题"}},{"path":"/components/list","meta":{},"window":{"navigationBarTitleText":"列表"}},{"path":"/pages/index/index2","meta":{},"window":{"navigationBarTitleText":"学习首页"}},{"path":"/pages/cart/cart","meta":{},"window":{"navigationBarTitleText":"优惠购"}},{"path":"/pages/public/login","meta":{},"window":{"navigationBarTitleText":"登陆"}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单"}},{"path":"/pages/money/money","meta":{},"window":{}},{"path":"/pages/order/createOrder","meta":{},"window":{"navigationBarTitleText":"创建订单"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"收货地址"}},{"path":"/pages/address/addressManage","meta":{},"window":{"navigationBarTitleText":"地址管理"}},{"path":"/pages/money/pay","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/money/paySuccess","meta":{},"window":{"navigationBarTitleText":"支付成功"}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarTitleText":"通知"}},{"path":"/pages/category/category","meta":{},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/product/list","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});