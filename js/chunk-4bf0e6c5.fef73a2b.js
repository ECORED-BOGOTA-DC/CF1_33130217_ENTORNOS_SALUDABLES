(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf0e6c5"],{6189:function(t,e,s){"use strict";var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},i=[],a={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const e=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,s=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===s)return;const l=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),i=this.$refs.hContainer,a=s.offsetWidth*this.ids.length;let o=l?s.offsetLeft-i.offsetLeft:s.offsetLeft;const n=i.offsetWidth/s.offsetWidth;n>1&&a-o<i.offsetWidth&&(o=a-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-o},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}},o=a,n=(s("ac46"),s("2877")),d=Object(n["a"])(o,l,i,!1,null,"22adfd6b",null);e["a"]=d.exports},7596:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slyder-b"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,l){return s("div",{key:"key-"+t.getId(l),staticClass:"slyder-b__slyde",attrs:{id:t.getId(l)}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[s("figure",{staticClass:"slyder-b__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",{domProps:{innerHTML:t._s(e.leyendaImagen)}}):t._e()])]),s("div",{staticClass:"col-lg-4 order-lg-1"},[e.hasOwnProperty("titulo")?s("h3",{domProps:{innerHTML:t._s(e.titulo)}}):t._e(),s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(l+1)+"/"+t._s(t.datos.length))]),l-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(l-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),l!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(l+1)},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===l?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])])})),0):t._e()],1)},i=[],a=s("c73e"),o=s("6189"),n={name:"SlyderB",components:{ScrollHorizontal:o["a"]},mixins:[a["a"]],data:()=>({mostrarIndicador:!0}),mounted(){this.selected=this.getId(0)}},d=n,r=s("2877"),c=Object(r["a"])(d,l,i,!1,null,null,null);e["default"]=c.exports},"818d":function(t,e,s){},ac46:function(t,e,s){"use strict";s("818d")},c73e:function(t,e,s){"use strict";e["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}}}]);
//# sourceMappingURL=chunk-4bf0e6c5.fef73a2b.js.map