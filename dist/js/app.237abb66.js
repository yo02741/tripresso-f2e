(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tripresso-f2e/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a7fe"),n=a.n(s),r=a("bc3a"),i=a.n(r),o=(a("4989"),a("9062")),c=a.n(o),l=(a("e40d"),a("a7ab")),u=a.n(l),d=(a("7b8d"),a("6a2c"),a("2b0e")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},g=[],f=(a("5c0b"),a("2877")),h={},v=Object(f["a"])(h,p,g,!1,null,null,null),b=v.exports,m=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t._m(0),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"sidebarCollapse"}},[t._v("≡")]),a("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}}),a("ul",{staticClass:"row flex-column flex-md-row justify-content-center align-items-center list-unstyled pl-0 pt-3"},[a("li",{staticClass:"col-12 col-md-3 dropdown my-2"},[a("button",{staticClass:"btn btn-outline-secondary dropdown-toggle w-100",class:{active:"rating_desc"===t.sort||"rating_asc"===t.sort},attrs:{type:"button",id:"sortRating","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t._f("sortrating")(t.sort))+" ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getTours(1,10,"rating_desc"),t.resetRange()}}},[t._v("高 至 低")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getTours(1,10,"rating_asc"),t.resetRange()}}},[t._v("低 至 高")])])]),a("li",{staticClass:"col-12 col-md-3 dropdown my-2"},[a("button",{staticClass:"btn btn-outline-secondary dropdown-toggle w-100",class:{active:"price_desc"===t.sort||"price_asc"===t.sort},attrs:{type:"button",id:"sortPrice","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t._f("sortprice")(t.sort))+" ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getTours(1,10,"price_desc"),t.resetRange()}}},[t._v("高 至 低")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getTours(1,10,"price_asc"),t.resetRange()}}},[t._v("低 至 高")])])])]),a("ul",{staticClass:"row flex-column justify-content-center align-items-center list-unstyled"},t._l(t.tours,(function(e){return a("li",{key:e.id,staticClass:"col-11 col-lg-9 d-flex flex-column flex-md-row px-0 py-0 my-3 tourItem"},[a("img",{staticClass:"card-img tourItemImg",attrs:{src:e.image_url}}),a("div",{staticClass:"d-flex bg-white flex-column tourItemContent"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"agency mr-2"},[t._v(t._s(e.agency))]),t._l(e.rating,(function(t,e){return a("i",{key:"Yellow"+e,staticClass:"fas fa-star text-yellow"})})),t._l(5-e.rating,(function(t,e){return a("i",{key:"Dark"+e,staticClass:"fas fa-star text-dark"})}))],2),a("h2",{staticClass:"h6 font-weight-bold my-3"},[a("a",{attrs:{href:e.tour_detail_url}},[t._v(" "+t._s(e.title)+" ")])]),a("ul",{staticClass:"d-flex flex-wrap list-unstyled"},t._l(e.tags,(function(e){return a("li",{key:e,staticClass:"badge badge-pill badge-primary mx-1 my-1"},[t._v(t._s(e))])})),0)]),a("div",{staticClass:"card-footer d-flex flex-column flex-lg-row justify-content-between align-items-center px-5"},[a("VueSlickCarousel",t._b({staticClass:"cardFooterSlick my-3"},"VueSlickCarousel",t.slickSettings,!1),t._l(e.group,(function(e){return a("div",{key:e.id},[a("button",{staticClass:"btn btn-outline-primary d-flex flex-column mx-auto",attrs:{type:"button"}},[a("strong",{staticClass:"group"},[t._v(t._s(t._f("time")(e.date)))]),a("span",{staticClass:"group"},[t._v("可售"+t._s(e.quantity)+"位")])])])})),0),a("p",{staticClass:"mb-0 text-right cardFooterPrice"},[a("span",{staticClass:"text-accent h6 font-weight-bold"},[t._v(t._s(e.tour_days))]),t._v("天 "),a("span",{staticClass:"text-accent h4 font-weight-bold"},[t._v(t._s(e.min_price))]),t._v("元起 ")])],1)])])})),0),a("pagination",{ref:"pagi",attrs:{pages:t.page},on:{changePage:function(e){return t.getTours(e,10,t.sort)}}})],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"d-flex flex-column justify-content-between align-items-center",attrs:{id:"sidebar"}},[a("ul",{staticClass:"list-unstyled w-100"},[a("li",{staticClass:"sidebarItem"},[a("a",{attrs:{href:"https://www.notion.so/Tripresso-f2e-1c1890b308d848be8dcba50232125f08"}},[t._v("製作筆記")])]),a("li",{staticClass:"sidebarItem"},[a("a",{attrs:{href:"https://www.cakeresume.com/yochen"}},[t._v("我的履歷")])])]),a("p",{staticClass:"h6 text-accent"},[t._v("YU-JUNG, CHEN")])])}],y=(a("99af"),a("ac1f"),a("1276"),a("1157")),C=a.n(y),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.currentPage-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.range,(function(e,s){return a("li",{key:s,staticClass:"page-item",class:{active:t.pages.currentPage===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.calcRange(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.currentPage===t.pages.totalPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.currentPage+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},k=[],P={data:function(){return{range:[],rangeLimit:5}},props:["pages"],methods:{updatePage:function(t){this.$emit("changePage",t)},calcRange:function(t){if(t<=Math.ceil(this.rangeLimit/2))this.setRange(1,this.rangeLimit);else if(t>this.pages.totalPage-Math.ceil(this.rangeLimit/2)){var e=this.rangeLimit-1;this.setRange(this.pages.totalPage-e,this.pages.totalPage)}else{var a=Math.ceil(this.rangeLimit/2)-1;this.setRange(t-a,t+a)}this.updatePage(t)},setRange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.rangeLimit;this.range=[];for(var a=t;a<=e;a+=1)this.range.push(a)}},created:function(){this.setRange()}},j=P,R=Object(f["a"])(j,x,k,!1,null,null,null),T=R.exports;C()(document).ready((function(){C()("#sidebarCollapse").on("click",(function(){C()("#sidebar").toggleClass("active"),C()(this).toggleClass("active")}))}));var M={data:function(){return{api:{apiPath:"https://interview.tripresso.com/tour/search"},tours:[],tempTours:{},sort:"rating_desc",page:{totalPage:0,currentPage:1,rowPerPage:10},isLoading:!1,slickSettings:{arrows:!0,dots:!1,infinite:!1,centerMode:!0,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{centerMode:!1,slidesPerRow:2}},{breakpoint:992,settings:{centerMode:!1,slidesPerRow:3}},{breakpoint:450,settings:{centerMode:!1,slidesPerRow:2}}]}}},components:{pagination:T},methods:{getTours:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rating_desc";this.isLoading=!0,this.$http.get("".concat(this.api.apiPath,"?page=").concat(e,"&row_per_page=").concat(a,"&sort=").concat(s)).then((function(a){t.isLoading=!1,t.tours=a.data.data.tour_list,t.page.totalPage=Math.ceil(100/t.page.rowPerPage),t.page.currentPage=e,t.sort=s,C()("html,body").animate({scrollTop:0},"slow")})).catch((function(t){console.log(t)}))},resetRange:function(){this.$refs.pagi.setRange()}},filters:{sortrating:function(t){return"rating_desc"===t?"評價：高 至 低":"rating_asc"===t?"評價：低 至 高":"評價"},sortprice:function(t){return"price_desc"===t?"價錢：高 至 低":"price_asc"===t?"價錢：低 至 高":"價錢"},time:function(t){var e=t.split("-")[0],a=t.split("-")[1],s=t.split("-")[2],n=new Date(e,a-1,s),r=n.getDay();switch(r){case 0:r="日";break;case 1:r="一";break;case 2:r="二";break;case 3:r="三";break;case 4:r="四";break;case 5:r="五";break;case 6:r="六";break;default:break}return"".concat(a,"/").concat(s,"(").concat(r,")")}},created:function(){this.getTours()}},O=M,L=Object(f["a"])(O,_,w,!1,null,null,null),S=L.exports;d["a"].use(m["a"]);var D=[{path:"*",redirect:"/tours"},{path:"/tours",name:"Tours",component:S}],$=new m["a"]({routes:D}),I=$;d["a"].use(n.a,i.a),d["a"].component("Loading",c.a),d["a"].component("VueSlickCarousel",u.a),d["a"].config.productionTip=!1,new d["a"]({router:I,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.237abb66.js.map