webpackJsonp([8],{Pet2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("OC4A"),o=n("84iU"),a=n.n(o);a.a.defaults.withCredentials=!0;var i={name:"HomePage",data:function(){return{Route:[{Class:"el-icon-eleme",names:"外卖",path:"/home/?position="+this.$route.query.position},{Class:"el-icon-discover",names:"搜索",path:"/home/search"},{Class:"el-icon-tickets",names:"订单",path:"/home/order"},{Class:"el-icon-user",names:"我的",path:"/home/my"}],Positions:""}},methods:{},mounted:function(){this.Positions=this.$route.query.position,a.a.get("http://elm.cangdu.org/v2/pois/"+this.Positions).then(function(e){})},components:{Headers:s.a}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"aDiv-HomePage"}},[n("content",[n("transition",{attrs:{name:"fade"}},[this.$route.meta.keepAlive?n("router-view"):e._e()],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[this.$route.meta.keepAlive?e._e():n("router-view")],1)],1),e._v(" "),n("footer",[n("ul",e._l(e.Route,function(t,s){return n("router-link",{key:s,attrs:{tag:"li",to:t.path}},[n("div",[n("i",{class:t.Class}),e._v(" "),n("span",[e._v(e._s(t.names))])])])}),1)])])},staticRenderFns:[]};var u=n("C7Lr")(i,r,!1,function(e){n("Zz25")},"data-v-65b44b71",null);t.default=u.exports},Zz25:function(e,t){}});