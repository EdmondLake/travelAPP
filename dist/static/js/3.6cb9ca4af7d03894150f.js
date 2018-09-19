webpackJsonp([3],{"7k3t":function(t,e){},"8QYY":function(t,e){},G9XZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"CommonGallery",props:{gallaryImgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGalleryClick:function(){this.$emit("closeGallery")}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.gallaryImgs,function(t,a){return e("swiper-slide",{key:a},[e("img",{staticClass:"gallery-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var r={name:"DetailBanner",components:{CommonGallery:a("C7Lr")(n,s,!1,function(t){a("w22w")},"data-v-5dea43a8",null).exports,FadeAnimation:a("C7Lr")({name:"FadeAnimation"},i,!1,function(t){a("PwAg")},"data-v-84124206",null).exports},data:function(){return{showGallery:!1}},props:{bannerImg:String,sightName:String,gallaryImgs:Array},methods:{handleBannerClick:function(){this.showGallery=!0},handleGalleryClose:function(){this.showGallery=!1}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[a("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),a("div",{staticClass:"banner-info"},[a("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),a("fade-animation",[a("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{gallaryImgs:t.gallaryImgs},on:{closeGallery:t.handleGalleryClose}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont banner-icon"},[this._v("")]),this._v("\n        30\n      ")])}]};var o=a("C7Lr")(r,l,!1,function(t){a("8QYY")},"data-v-11d6ae46",null).exports,c={name:"DetailHeader",props:{sightName:String},data:function(){return{showAbs:!0,opacityStyl:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyl={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[a("div",{staticClass:"iconfont"},[t._v("\n      \n    ")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyl},[a("router-link",{attrs:{tag:"div",to:"/"}},[a("span",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("\n    "+t._s(t.sightName)+"\n  ")],1)],1)},staticRenderFns:[]};var h=a("C7Lr")(c,d,!1,function(t){a("Mhh8")},"data-v-2e0d6d50",null).exports,m={name:"DetailList",props:{list:Array}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"list-item"},[a("div",{staticClass:"item-title border-bottom"},[a("span",{staticClass:"ticket-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?a("div",{staticClass:"item-children"},[a("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var v=a("C7Lr")(m,u,!1,function(t){a("ykRX")},"data-v-45eae812",null).exports,g=a("aozt"),f=a.n(g),p={name:"Detail",data:function(){return{bannerImg:"",sightName:"",gallaryImgs:[],categoryList:[]}},components:{DetailBanner:o,DetailHeader:h,DetailList:v},methods:{getDetailInfo:function(){f.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.bannerImg=e.bannerImg,this.sightName=e.sightName,this.gallaryImgs=e.gallaryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.getDetailInfo()}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{bannerImg:this.bannerImg,sightName:this.sightName,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header",{attrs:{sightName:this.sightName}}),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.categoryList}})],1)],1)},staticRenderFns:[]};var w=a("C7Lr")(p,y,!1,function(t){a("7k3t")},"data-v-f61f6724",null);e.default=w.exports},Mhh8:function(t,e){},PwAg:function(t,e){},w22w:function(t,e){},ykRX:function(t,e){}});
//# sourceMappingURL=3.6cb9ca4af7d03894150f.js.map