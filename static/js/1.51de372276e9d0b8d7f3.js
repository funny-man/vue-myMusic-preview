webpackJsonp([1],{"/LBa":function(A,t){},"5kbv":function(A,t,e){"use strict";t.b=function(){var A=a()({},r.b,{platform:"h5",hostUin:0,needNewCode:1,format:"jsonp"});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",A,r.c)},t.a=function(){var A=a()({},r.b,{platform:"yqq",uin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return l.a.get("/api/getHotList",{params:A}).then(function(A){return s.a.resolve(A.data)})},t.c=function(A){var t=a()({},r.b,{disstid:A,type:1,json:1,utf8:1,onlysong:0,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,song_num:20});return l.a.get("/api/getSongList",{params:t}).then(function(A){return s.a.resolve(A.data)})};var i=e("//Fk"),s=e.n(i),n=e("woOf"),a=e.n(n),o=e("Gak4"),r=e("TOkD"),c=e("mtWM"),l=e.n(c)},XWOf:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),n=e("qwAB"),a=e("43Vb"),o=e.n(a),r=e("3Q4o"),c={props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:1300},showDot:{type:Boolean,default:!0},click:{type:Boolean,default:!0},threshold:{type:Number,default:.3},speed:{type:Number,default:400}},data:function(){return{children:null,dots:[],pageIndex:0}},mounted:function(){var A=this;this.update(),window.addEventListener("resize",function(){console.log("改变窗口"),!A.slide|!A.slide.enabled||(console.log("改变窗口2"),clearTimeout(A.resizeTimer),A.resizeTimer=setTimeout(function(){A.refresh(),A.autoPlay&&A._play()},60))})},activated:function(){this.autoPlay&&(console.log("组件激活了"),this.refresh())},methods:{update:function(){var A=this;this.slide&&this.slide.destroy(),this.$nextTick(function(){A.init()})},refresh:function(){this._setSliderWidth(!0),this.slide.refresh()},prev:function(){this.slide.prev()},next:function(){this.slide.next()},init:function(){clearTimeout(this.timer),this.pageIndex=0,this._setSliderWidth(),this.showDot&&this._initDots(),this._initSlider(),this.autoPlay&&this._play()},_setSliderWidth:function(A){this.children=this.$refs.group.children;for(var t=0,e=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var s=this.children[i];Object(r.a)(s,"slider-item"),s.style.width=e+"px",t+=e}this.loop&&!A&&(t+=2*e),this.$refs.group.style.width=t+"px"},_initSlider:function(){var A=this;this.slide=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,click:this.click,bounce:!1,stopPropagation:!0,snap:!0,snapLoop:this.loop,snapThreshold:this.threshold,snapSpeed:this.speed}),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.on("touchEnd",function(){A.autoPlay&&A._play()}),this.slide.on("beforeScrollStart",function(){A.autoPlay&&clearTimeout(A.timer)})},_onScrollEnd:function(){var A=this.slide.getCurrentPage().pageX;this.pageIndex=A-1,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var A=this;clearTimeout(this.timer),this.timer=setTimeout(function(){A.next()},this.interval)}}},l={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{ref:"slider",staticClass:"slider"},[e("div",{ref:"group",staticClass:"slider-group"},[A._t("default")],2),A._v(" "),e("div",{staticClass:"dots"},A._l(A.dots,function(t,i){return e("span",{key:i,staticClass:"dot",class:{active:i==A.pageIndex}})}))])},staticRenderFns:[]};var d=e("VU/8")(c,l,!1,function(A){e("/LBa")},"data-v-0623009e",null).exports,h=e("y/jF"),g=e("F4+m"),u=e("NYxO"),f=e("5kbv"),Q=e("TOkD"),v={mixins:[g.b],data:function(){return{sliders:[],hotList:[],errorImg:'this.src="'+e("g5x/")+'"'}},created:function(){this._getSliders(),this._getHotList()},methods:s()({handlePlaylist:function(A){var t=A.length>0?"74px":"";this.$refs.essenceWrapper.style.paddingBottom=t,this.$refs.scroll.refresh()},selectItem:function(A){this.$router.push({path:"/essence/"+A.dissid}),this.setDisc(A)},_getSliders:function(){var A=this;Object(f.b)().then(function(t){t.code===Q.a&&(A.sliders=t.data.slider)})},_getHotList:function(){var A=this;Object(f.a)().then(function(t){t.code===Q.a&&(A.hotList=t.data.list)},function(A){})},loadImage:function(){var A=this;this.checkLoaded||(this.checkLoaded=!0,setTimeout(function(){A.$refs.scroll.refresh()},5e3))}},Object(u.d)({setDisc:"SET_DISC"})),components:{Slider:d,Scroll:n.a,Loading:h.a}},m={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{ref:"essence",attrs:{id:"essence"}},[e("scroll",{ref:"scroll",staticClass:"essence-ct",attrs:{data:A.hotList}},[e("div",{ref:"essenceWrapper"},[A.sliders.length?e("div",{staticClass:"essence-slider"},[e("slider",A._l(A.sliders,function(t){return e("div",{key:t.id},[e("a",{attrs:{href:t.linkUrl}},[e("img",{attrs:{src:t.picUrl,onerror:A.errorImg},on:{load:A.loadImage}})])])}))],1):A._e(),A._v(" "),e("div",{staticClass:"essence-list"},[e("h2",[A._v("HIT LIST")]),A._v(" "),e("ul",A._l(A.hotList,function(t,i){return e("li",{key:i,staticClass:"clearfix",on:{click:function(e){A.selectItem(t)}}},[e("div",{staticClass:"list-pic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{alt:""}})]),A._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"text-ct"},[e("h3",{staticClass:"name",domProps:{innerHTML:A._s(t.dissname)}},[A._v(A._s(t.dissname))]),A._v(" "),e("p",{staticClass:"clicks"},[e("span",[A._v("播放量：")]),e("span",{domProps:{innerHTML:A._s(t.listennum)}})])])]),A._v(" "),e("div",{staticClass:"icon"},[e("i",{staticClass:"vue-music-icon icon-arrow"})])])}))])]),A._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!A.hotList.length,expression:"!hotList.length"}],staticClass:"loading-ct"},[e("loading")],1)]),A._v(" "),e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)},staticRenderFns:[]};var p=e("VU/8")(v,m,!1,function(A){e("qg2H")},"data-v-2fee63e9",null);t.default=p.exports},"g5x/":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAEWCAIAAAALt9MBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM3RjZGRjk1QjQ0MTFFOEFFQjdFNzE1OUJFQ0VDREIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM3RjZGRkE1QjQ0MTFFOEFFQjdFNzE1OUJFQ0VDREIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzdGNkZGNzVCNDQxMUU4QUVCN0U3MTU5QkVDRUNEQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzdGNkZGODVCNDQxMUU4QUVCN0U3MTU5QkVDRUNEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtfRhNEAAAyaSURBVHja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"},qg2H:function(A,t){}});
//# sourceMappingURL=1.51de372276e9d0b8d7f3.js.map