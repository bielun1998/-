webpackJsonp([5],{"6t0b":function(e,t){},oyGs:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("OC4A"),o=i("84iU"),r=i.n(o),a={name:"TakeOutFood",data:function(){return{List:[],Arr:[],FlagCover:!0,LoadMore:"点击加载更多",Numbers:10,HeadersName:"",FlagLiHide:!0}},methods:{Division:function(e){for(var t=[],i=0,s=0;i<e.length;i+=8,s++)t[s]=e.slice(i,i+8);return t},RouteDetailsA:function(e,t){console.log(e,t),console.log(this.$route.query.position),this.$router.push("/foods?position="+this.$route.query.position+"&title="+e+"&restaurant_category_id="+t)},RouteDetailsB:function(e){this.$router.push("/shop?position="+this.$route.query.position+"&id="+e)},CoverShow:function(){var e=this;r.a.get("http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F").then(function(t){e.List=e.Division(t.data),r.a.get("http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit="+e.Numbers+"&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(t){e.Arr=t.data,console.log(t),e.FlagCover=!1})})},ClickLoadMore:function(){var e=this;this.Numbers=this.Numbers+10,console.log(this.Numbers),this.LoadMore="正在加载中...",r.a.get("http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit="+this.Numbers+"&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(t){e.Arr=t.data,console.log(t),e.LoadMore="点击加载更多"})}},mounted:function(){this.CoverShow(),localStorage.getItem("Code")&&(this.FlagLiHide=!1),localStorage.getItem("Address")&&(this.HeadersName=JSON.parse(localStorage.getItem("Address")))},components:{Headers:s.a}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"TakeOutFood_Iscroll",attrs:{id:"aDiv-Home"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.FlagCover,expression:"FlagCover"}]},[e._m(0)]),e._v(" "),i("Headers",{attrs:{FlagFood:!0,HeadersName:e.HeadersName,FlagLiHide:e.FlagLiHide}}),e._v(" "),i("div",[i("div",{staticClass:"block"},[i("el-carousel",{attrs:{height:"150px"}},e._l(e.List,function(t,s){return i("el-carousel-item",{key:s},[i("ul",e._l(t,function(t,s){return i("li",{key:s,on:{click:function(i){return e.RouteDetailsA(t.title,t.id)}}},[i("img",{attrs:{src:"https://fuss10.elemecdn.com/"+t.image_url,alt:""}}),e._v(" "),i("span",[e._v(e._s(t.title))])])}),0)])}),1)],1),e._v(" "),i("div",{attrs:{id:"aDiv-Home-Second"}},[e._m(1),e._v(" "),i("ul",e._l(e.Arr,function(t,s){return i("li",{key:s,on:{click:function(i){return e.RouteDetailsB(t.id)}}},[i("img",{attrs:{src:"https://elm.cangdu.org/img/"+t.image_path,alt:""}}),e._v(" "),i("p",[i("span",[e._v("品牌")]),e._v(" "),i("b",[e._v(e._s(t.name))]),e._v(" "),i("span",[e._v("保准票")])]),e._v(" "),i("div",[i("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.rating,callback:function(i){e.$set(t,"rating",i)},expression:"item.rating"}}),e._v(" "),i("span",[e._v(e._s(t.rating))]),e._v(" "),i("span",[e._v("月售"+e._s(t.recent_order_num)+"单")]),e._v(" "),i("span",[e._v("蜂鸟专送")]),e._v(" "),i("span",[e._v("准时达")])],1),e._v(" "),i("p",[i("span",[e._v("¥20元起送"),i("b",[e._v(" / ")]),e._v(e._s(t.piecewise_agent_fee.tips))]),e._v(" "),i("span")])])}),0),e._v(" "),i("p",{on:{click:function(t){return e.ClickLoadMore()}}},[e._v(e._s(e.LoadMore))])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"el-icon-loading"}),this._v(" "),t("p",[this._v("正在加载数据...")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("i",{staticClass:"el-icon-box"}),this._v("附近商家\n          ")])}]};var l=i("C7Lr")(a,n,!1,function(e){i("6t0b")},null,null);t.default=l.exports}});