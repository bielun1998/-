webpackJsonp([6],{AkC4:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("3cXf"),i=s.n(e),o=s("OC4A"),a=s("84iU"),r=s.n(a),u=s("xd7I"),c=s("NjZ5");u.default.use(c.b);var l={name:"GoodsPosition",data:function(){return{List:[],CrossFlag:""}},methods:{AddPositions:function(){this.$router.push("/addPositions")},ClickChangeMassage:function(t){this.CrossFlag=t},DelData:function(t,n){var s=this;r.a.delete("http://elm.cangdu.org/v1/users/38000/addresses/"+n.id).then(function(t){s.ObtainDatas()})},ObtainDatas:function(){var t=this;r.a.get("http://elm.cangdu.org/v1/users/38000/addresses").then(function(n){t.List=n.data})},ObtainCurrentData:function(t){console.log(t),this.$router.push("/settlement?position="+this.$route.query.position+"&id="+this.$route.query.id),localStorage.setItem("PositionData",i()(t))}},mounted:function(){this.ObtainDatas()},components:{Headers:o.a}},d={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"GoodsPosition"},[s("Headers",{attrs:{GoodsPosition:!0},on:{ClickChangFlag:function(n){return t.ClickChangeMassage(n)}}}),t._v(" "),s("content",[s("ul",t._l(t.List,function(n,e){return s("li",{key:e,on:{click:function(s){return t.ObtainCurrentData(n)}}},[t._v("\n        "+t._s(n.address)+"\n        "),s("span",[t._v(t._s(n.phone))]),t._v(" "),t.CrossFlag?s("van-icon",{attrs:{name:"cross"},on:{click:function(s){return t.DelData(e,n)}}}):t._e()],1)}),0),t._v(" "),s("p",{on:{click:function(n){return t.AddPositions()}}},[s("span",[t._v("添加地址")]),s("i",{staticClass:"el-icon-arrow-right"})])])],1)},staticRenderFns:[]};var f=s("C7Lr")(l,d,!1,function(t){s("p7Sp")},null,null);n.default=f.exports},p7Sp:function(t,n){}});