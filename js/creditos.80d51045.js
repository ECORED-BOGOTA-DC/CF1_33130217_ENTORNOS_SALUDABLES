(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,s){"use strict";s("95c5")},"13aa":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid banner-interno"},[s("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),s("div",{staticClass:"container"},[s("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?s("div",{staticClass:"banner-interno__titulo__icono me-3"},[s("i",{class:t.icono})]):t._e(),s("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},n=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},a=r,o=(s("0095"),s("2877")),c=Object(o["a"])(a,i,n,!1,null,null,null);e["default"]=c.exports},"2e81":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"curso-main-container creditos-vista"},[i("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[i("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(t.creditosData,(function(e,s){return i("div",{key:"credito-"+s,staticClass:"creditos__item",class:s!=t.creditosData.length-1?"mb-4":""},[i("div",{staticClass:"creditos__titulo"},[t._v(t._s(e.titulo))]),i("table",[i("tbody",t._l(e.autores,(function(e,s){return i("tr",{key:"autor-"+s},[i("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(e.nombre))}}),i("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(e.cargo))}}),i("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(e.centro))}})])})),0)])])})),0),i("div",{staticClass:"row mb-4 mb-md-5"},[i("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[i("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[i("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("ef52")}}),i("p",{domProps:{innerHTML:t._s(t.creditosAdicionales.imagenes)}})])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[i("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("e1f5")}}),i("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.creditosAdicionales.creativeCommons)}})])])]),i("Footer",{attrs:{"all-round":""}})],1)],1)},n=[],r=s("13aa"),a=s("e9c6"),o={name:"Creditos",components:{BannerInterno:r["default"],Footer:a["a"]},data:()=>({configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}),computed:{creditosData(){return this.$config.creditos},creditosAdicionales(){return this.$config.creditosAdicionales}},methods:{renderText(t){let e="";return Array.isArray(t)?t.forEach((t,s)=>{e+=(s?"<br/>":"")+t}):e+=t,e}}},c=o,l=(s("5d8e"),s("2877")),d=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports},"5d8e":function(t,e,s){"use strict";s("f728")},"95c5":function(t,e,s){},e1f5:function(t,e,s){t.exports=s.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,s){t.exports=s.p+"img/creditos-img.689712e2.svg"},f728:function(t,e,s){}}]);
//# sourceMappingURL=creditos.80d51045.js.map