(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60cbc06b"],{5270:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header container-fluid"},[n("div",{staticClass:"row align-items-center justify-content-between"},[n("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?n("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:t.toggleMenu}},[n("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[n("div",{staticClass:"line-2"}),n("div",{staticClass:"line-1"}),n("div",{staticClass:"line-3"})]),n("span",[t._v("MENÚ")])]):t._e(),n("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:s("a00a")}}),t.isInicio?n("div",{staticClass:"d-none d-md-flex align-items-center"},[n("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):n("div",{staticClass:"header__componente-formativo"},[n("span",{domProps:{innerHTML:t._s(t.globalData.componenteFormativo)}})])]),t.isInicio?n("div",{staticClass:"col-auto"},[n("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[t._v("Ver contenido")]),n("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},i=[],a=s("ecc5"),o={name:"Header",mixins:[a["a"]],computed:{globalData(){return this.$config&&this.$config.global},isInicio(){return"inicio"===this.$route.name},menuOpen(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu(){this.$store.dispatch("toggleMenu",!this.menuOpen)}}},c=o,l=(s("ab51"),s("2877")),r=Object(l["a"])(c,n,i,!1,null,"7e5a4120",null);e["default"]=r.exports},ab51:function(t,e,s){"use strict";s("fa60")},fa60:function(t,e,s){}}]);
//# sourceMappingURL=chunk-60cbc06b.0290ae57.js.map