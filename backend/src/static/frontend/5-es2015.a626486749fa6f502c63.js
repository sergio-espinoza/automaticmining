(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1hFV":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("yWND"),o=n("LRne"),l=n("8Y7J");let r=(()=>{class t{constructor(){}getFiltersSources(){return Object(o.a)(a.c)}getFiltersCharts(){return Object(o.a)(a.b)}getFiltersIcon(){return Object(o.a)(a.a)}}return t.ngInjectableDef=l.Rb({factory:function(){return new t},token:t,providedIn:"root"}),t})()},IXXt:function(t,e,n){"use strict";n.r(e);var a=n("8Y7J");class o{}var l=n("pMnS"),r=n("FbN9"),u=n("BzsH"),i=n("/HVE"),s=n("SVse"),c=n("To+3"),g=n("oksU"),b=n("lzlj"),p=n("igqZ"),m=n("omvX"),d=n("hrfs"),h=n("Inq/"),w=a.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:400px}"]],data:{}});function f(t){return a.Nb(0,[(t()(),a.rb(0,0,null,null,2,"div",[["style","position:relative;width: 350px; height:600px;"]],null,null,null,null,null)),(t()(),a.rb(1,0,null,null,1,"canvas",[["baseChart",""],["height","550px"],["width","345px"]],null,null,null,null,null)),a.qb(2,999424,null,0,d.a,[a.k,d.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null)],(function(t,e){var n=e.component;t(e,2,0,n.barChartData,n.barChartLabels,n.barChartOptions,n.type,n.barChartLegend)}),null)}class v{constructor(t,e,n){this.productService=t,this.categoryService=e,this.filterService=n}ngOnInit(){this.getProducts(),this.getCategories(),this.getFiltersSources(),this.getFiltersCharts()}getProducts(){this.productService.getProducts().subscribe(t=>this.products=t)}getCategories(){this.categoryService.getCategories().subscribe(t=>{this.categories=t,console.log(this.categories)},t=>console.error(t))}getFiltersSources(){this.filterService.getFiltersSources().subscribe(t=>this.filtersSources=t)}getFiltersCharts(){this.filterService.getFiltersCharts().subscribe(t=>this.filtersCharts=t)}}var D=n("mwp0"),j=n("LRne");let B=(()=>{class t{constructor(){}getProducts(){return Object(j.a)(D.c)}}return t.ngInjectableDef=a.Rb({factory:function(){return new t},token:t,providedIn:"root"}),t})(),k=(()=>{class t{constructor(){}getCategories(){return Object(j.a)(D.d)}}return t.ngInjectableDef=a.Rb({factory:function(){return new t},token:t,providedIn:"root"}),t})();var y=n("1hFV"),C=a.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%;flex-direction:row;flex-flow:row wrap}div[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{display:inline-block;width:400px}app-report[_ngcontent-%COMP%]{display:inline-block}app-filter[_ngcontent-%COMP%]{position:fixed;right:15px;z-index:15}mat-toolbar[_ngcontent-%COMP%]{width:100%;height:64px}"]],data:{}});function q(t){return a.Nb(0,[(t()(),a.rb(0,0,null,null,6,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,r.b,r.a)),a.qb(1,4243456,null,1,u.a,[a.k,i.a,s.d],null,null),a.Jb(603979776,1,{_toolbarRows:1}),(t()(),a.rb(3,0,null,1,3,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),a.qb(4,16384,[[1,4]],0,u.c,[],null,null),(t()(),a.rb(5,0,null,null,1,"app-filter",[],null,null,null,c.b,c.a)),a.qb(6,114688,[["filter",4]],0,g.a,[],{filtersSources:[0,"filtersSources"]},null),(t()(),a.rb(7,0,null,null,4,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,b.d,b.a)),a.qb(8,49152,null,0,p.a,[[2,m.a]],null,null),(t()(),a.rb(9,0,null,0,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.qb(10,16384,null,0,p.d,[],null,null),(t()(),a.Lb(-1,null,[" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint nesciunt voluptates necessitatibus fugiat. Magni assumenda, reiciendis vitae nihil nulla maiores quisquam tempora suscipit? Culpa ipsum impedit sunt quidem porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores quam asperiores, atque id perspiciatis quas voluptatibus, aperiam animi quidem vero neque voluptate quos quibusdam minima! Ex quod ut ab! "])),(t()(),a.rb(12,0,null,null,1,"app-report",[],null,null,null,f,w)),a.qb(13,114688,null,0,h.a,[],{data:[0,"data"],type:[1,"type"]},null)],(function(t,e){var n=e.component;t(e,6,0,n.filtersCharts),t(e,13,0,n.categories,a.Db(e,6).value)}),(function(t,e){t(e,0,0,a.Db(e,1)._toolbarRows.length>0,0===a.Db(e,1)._toolbarRows.length),t(e,7,0,"NoopAnimations"===a.Db(e,8)._animationMode)}))}function x(t){return a.Nb(0,[(t()(),a.rb(0,0,null,null,1,"app-result",[],null,null,null,q,C)),a.qb(1,114688,null,0,v,[B,k,y.a],null,null)],(function(t,e){t(e,1,0)}),null)}var S=a.nb("app-result",v,x,{},{},[]),L=n("t68o"),O=n("NcP4"),z=n("YSfw"),P=n("QQfA"),I=n("IP0z"),H=n("gavF"),T=n("POq0"),J=n("Xd0L"),Q=n("JjoW"),Z=n("s6ns"),F=n("7kcP"),M=n("Mz6y"),R=n("cUpR"),W=n("OIZN"),_=n("s7LF"),A=n("iInd");class N{}var E=n("zMNK"),K=n("hOhj"),U=n("BV1i"),X=n("Fwaw"),G=n("mkRZ"),V=n("02hT"),Y=n("Q+lL"),$=n("Gi4r"),tt=n("5Bek"),et=n("c9fC"),nt=n("HsOI"),at=n("oapL"),ot=n("ZwOa"),lt=n("kNGD"),rt=n("5GAg"),ut=n("KPQW"),it=n("zQui"),st=n("8rEH"),ct=n("jAig"),gt=n("PCNd"),bt=n("dvZr");n.d(e,"ResultModuleNgFactory",(function(){return pt}));var pt=a.ob(o,[],(function(t){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[l.a,S,L.a,O.a,z.a,z.b]],[3,a.j],a.v]),a.Bb(4608,s.n,s.m,[a.s,[2,s.A]]),a.Bb(4608,P.c,P.c,[P.i,P.e,a.j,P.h,P.f,a.p,a.x,s.d,I.b,[2,s.h]]),a.Bb(5120,P.j,P.k,[P.c]),a.Bb(5120,H.a,H.d,[P.c]),a.Bb(4608,T.c,T.c,[]),a.Bb(4608,J.d,J.d,[]),a.Bb(5120,Q.a,Q.b,[P.c]),a.Bb(5120,Z.c,Z.d,[P.c]),a.Bb(135680,Z.e,Z.e,[P.c,a.p,[2,s.h],[2,Z.b],Z.c,[3,Z.e],P.e]),a.Bb(5120,F.d,F.a,[[3,F.d]]),a.Bb(5120,M.b,M.c,[P.c]),a.Bb(4608,R.e,J.e,[[2,J.i],[2,J.n]]),a.Bb(5120,W.c,W.a,[[3,W.c]]),a.Bb(4608,_.d,_.d,[]),a.Bb(4608,_.s,_.s,[]),a.Bb(1073742336,A.n,A.n,[[2,A.s],[2,A.k]]),a.Bb(1073742336,N,N,[]),a.Bb(1073742336,s.c,s.c,[]),a.Bb(1073742336,I.a,I.a,[]),a.Bb(1073742336,J.n,J.n,[[2,J.f],[2,R.f]]),a.Bb(1073742336,i.b,i.b,[]),a.Bb(1073742336,J.w,J.w,[]),a.Bb(1073742336,E.f,E.f,[]),a.Bb(1073742336,K.c,K.c,[]),a.Bb(1073742336,P.g,P.g,[]),a.Bb(1073742336,H.c,H.c,[]),a.Bb(1073742336,H.b,H.b,[]),a.Bb(1073742336,U.h,U.h,[]),a.Bb(1073742336,X.c,X.c,[]),a.Bb(1073742336,G.e,G.e,[]),a.Bb(1073742336,p.g,p.g,[]),a.Bb(1073742336,J.o,J.o,[]),a.Bb(1073742336,J.u,J.u,[]),a.Bb(1073742336,V.a,V.a,[]),a.Bb(1073742336,Y.c,Y.c,[]),a.Bb(1073742336,$.c,$.c,[]),a.Bb(1073742336,tt.c,tt.c,[]),a.Bb(1073742336,et.c,et.c,[]),a.Bb(1073742336,T.d,T.d,[]),a.Bb(1073742336,nt.e,nt.e,[]),a.Bb(1073742336,at.c,at.c,[]),a.Bb(1073742336,ot.b,ot.b,[]),a.Bb(1073742336,J.s,J.s,[]),a.Bb(1073742336,Q.d,Q.d,[]),a.Bb(1073742336,lt.b,lt.b,[]),a.Bb(1073742336,rt.a,rt.a,[]),a.Bb(1073742336,ut.a,ut.a,[]),a.Bb(1073742336,u.b,u.b,[]),a.Bb(1073742336,Z.j,Z.j,[]),a.Bb(1073742336,it.p,it.p,[]),a.Bb(1073742336,st.m,st.m,[]),a.Bb(1073742336,F.e,F.e,[]),a.Bb(1073742336,M.e,M.e,[]),a.Bb(1073742336,W.d,W.d,[]),a.Bb(1073742336,ct.a,ct.a,[]),a.Bb(1073742336,_.r,_.r,[]),a.Bb(1073742336,_.o,_.o,[]),a.Bb(1073742336,d.b,d.b,[]),a.Bb(1073742336,gt.a,gt.a,[]),a.Bb(1073742336,o,o,[]),a.Bb(1024,A.i,(function(){return[[{path:"",component:v}]]}),[]),a.Bb(256,lt.a,{separatorKeyCodes:[bt.f]},[])])}))},"To+3":function(t,e,n){"use strict";var a=n("8Y7J"),o=n("mkRZ"),l=n("IP0z"),r=n("Xd0L"),u=n("cUpR"),i=n("/HVE"),s=n("omvX"),c=n("5GAg"),g=a.pb({encapsulation:2,styles:[".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],data:{}});function b(t){return a.Nb(2,[a.Jb(671088640,1,{_buttonElement:0}),(t()(),a.rb(1,0,[[1,0],["button",1]],null,2,"button",[["class","mat-button-toggle-button"],["type","button"]],[[8,"id",0],[1,"tabindex",0],[1,"aria-pressed",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"click"]],(function(t,e,n){var a=!0;return"click"===e&&(a=!1!==t.component._onButtonClick()&&a),a}),null,null)),(t()(),a.rb(2,0,null,null,1,"div",[["class","mat-button-toggle-label-content"]],null,null,null,null,null)),a.Cb(null,0),(t()(),a.rb(4,0,null,null,0,"div",[["class","mat-button-toggle-focus-overlay"]],null,null,null,null,null)),(t()(),a.rb(5,0,null,null,1,"div",[["class","mat-button-toggle-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.qb(6,212992,null,0,r.v,[a.k,a.x,i.a,[2,r.m],[2,s.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null)],(function(t,e){var n=e.component;t(e,6,0,n.disableRipple||n.disabled,a.Db(e,1))}),(function(t,e){var n=e.component;t(e,1,0,n.buttonId,n.disabled?-1:n.tabIndex,n.checked,n.disabled||null,n.name||null,n.ariaLabel,n.ariaLabelledby),t(e,5,0,a.Db(e,6).unbounded)}))}var p=n("Mz6y"),m=n("QQfA"),d=n("hOhj"),h=n("Mr+X"),w=n("Gi4r"),f=n("s7LF"),v=n("SVse");n("oksU"),n.d(e,"a",(function(){return D})),n.d(e,"b",(function(){return B}));var D=a.pb({encapsulation:0,styles:[["mat-button-toggle-group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;flex-flow:row wrap}mat-button-toggle[_ngcontent-%COMP%]{font-size:9px}"]],data:{}});function j(t){return a.Nb(0,[(t()(),a.rb(0,16777216,null,null,5,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"focus"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(t,e,n){var o=!0;return"focus"===e&&(o=!1!==a.Db(t,1).focus()&&o),"longpress"===e&&(o=!1!==a.Db(t,2).show()&&o),"keydown"===e&&(o=!1!==a.Db(t,2)._handleKeydown(n)&&o),"touchend"===e&&(o=!1!==a.Db(t,2)._handleTouchend()&&o),o}),b,g)),a.qb(1,245760,[[1,4]],0,o.b,[[2,o.c],a.h,a.k,c.e,[8,null],[2,o.a]],{value:[0,"value"]},null),a.qb(2,212992,null,0,p.d,[m.c,a.k,d.b,a.N,a.x,i.a,c.c,c.e,p.b,[2,l.b],[2,p.a],[2,u.f]],{message:[0,"message"]},null),(t()(),a.rb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),a.qb(4,9158656,null,0,w.b,[a.k,w.d,[8,null],[2,w.a],[2,a.l]],null,null),(t()(),a.Lb(5,0,["",""])),(t()(),a.gb(0,null,null,0))],(function(t,e){t(e,1,0,e.context.$implicit.value),t(e,2,0,e.context.$implicit.label),t(e,4,0)}),(function(t,e){t(e,0,0,!a.Db(e,1).buttonToggleGroup,a.Db(e,1).checked,a.Db(e,1).disabled,"standard"===a.Db(e,1).appearance,-1,a.Db(e,1).id,null),t(e,3,0,a.Db(e,4).inline,"primary"!==a.Db(e,4).color&&"accent"!==a.Db(e,4).color&&"warn"!==a.Db(e,4).color),t(e,5,0,e.context.$implicit.icon)}))}function B(t){return a.Nb(0,[(t()(),a.rb(0,0,null,null,6,"mat-button-toggle-group",[["class","mat-button-toggle-group"],["role","group"]],[[1,"aria-disabled",0],[2,"mat-button-toggle-vertical",null],[2,"mat-button-toggle-group-appearance-standard",null]],[[null,"change"]],(function(t,e,n){var o=!0;return"change"===e&&(o=!1!==t.component.log(a.Db(t,3).value)&&o),o}),null,null)),a.Ib(5120,null,f.j,(function(t){return[t]}),[o.c]),a.Ib(6144,null,o.d,null,[o.c]),a.qb(3,1130496,[["group",4]],1,o.c,[a.h,[2,o.a]],null,{change:"change"}),a.Jb(603979776,1,{_buttonToggles:1}),(t()(),a.gb(16777216,null,null,1,null,j)),a.qb(6,278528,null,0,v.k,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var n=e.component;t(e,3,0),t(e,6,0,n.filtersSources)}),(function(t,e){t(e,0,0,a.Db(e,3).disabled,a.Db(e,3).vertical,"standard"===a.Db(e,3).appearance)}))}},mwp0:function(t,e,n){"use strict";const a=[{id:1,name:"PC ASUS",set:"pc",mark:"ASUS",quantity:5},{id:2,name:"Laptop",set:"laptop",mark:"ASUS",quantity:5},{id:3,name:"Mickey mouse",set:"mouse",mark:"rat",quantity:5},{id:4,name:"HD323",set:"harddisk",mark:"ASUS",quantity:5},{id:5,name:"Laptop",set:"ram",mark:"ASUS",quantity:5},{id:6,name:"MB 5",set:"motherboard",mark:"ASUS",quantity:5},{id:6,name:"MB 5",set:"motherboard",mark:"ASUS",quantity:5}];var o=n("5d+g");const l=[new o.a(1,"Transport 1",10,150,"https://i.imgur.com/OD1XrRy.jpg","",new Date),new o.a(2,"Transport 2",5,150,"https://i.imgur.com/6gIBtWL.jpg","",new Date),new o.a(3,"Transport 3",12,480,"https://i.imgur.com/g4bsOsm.jpg","",new Date),new o.a(4,"Transport 4",21,300,"https://i.imgur.com/AKwKuyw.jpg","",new Date),new o.a(5,"Transport 5",10,150,"https://i.imgur.com/1wjcWTu.jpg","",new Date),new o.a(6,"Transport 6",11,142,"https://i.imgur.com/EX1f3pA.jpg","",new Date),new o.a(7,"Transport 7",10,450,"https://i.imgur.com/MaIPaEH.jpg","",new Date),new o.a(8,"Transport 8",12,150,"https://i.imgur.com/C5eHug4.jpg","",new Date),new o.a(9,"Transport 9",35,500,"https://i.imgur.com/u2X6ZOH.jpg","",new Date),new o.a(10,"Transport 10",25,650,"https://i.imgur.com/nQLrPz9.jpg","",new Date),new o.a(11,"Transport 11",26,220,"https://i.imgur.com/u1kPSHP.jpg","",new Date),new o.a(12,"Transport 12",54,145,"https://i.imgur.com/sxpKWcR.jpg","",new Date)],r=[new o.a(1,"Work 1",10,150,"https://i.imgur.com/zKmGB5I.jpg","",new Date),new o.a(2,"Work 2",5,150,"https://i.imgur.com/OH8wZEk.jpg","",new Date),new o.a(3,"Work 3",12,480,"https://i.imgur.com/aFAibgZ.jpg","",new Date),new o.a(4,"Work 4",21,300,"https://i.imgur.com/uDQIfSS.jpg","",new Date),new o.a(5,"Work 5",10,150,"https://i.imgur.com/xci2lSn.jpg","",new Date),new o.a(6,"Work 6",11,142,"https://i.imgur.com/vLI9EOy.jpg","",new Date),new o.a(7,"Work 7",10,450,"https://i.imgur.com/J0GKeK2.jpg","",new Date),new o.a(8,"Work 8",12,150,"https://i.imgur.com/C6LPzle.jpg","",new Date),new o.a(9,"Work 9",35,500,"https://i.imgur.com/TgsIvR3.jpg","",new Date),new o.a(10,"Work 10",25,650,"https://i.imgur.com/tRSjOvw.jpg","",new Date),new o.a(11,"Work 11",26,220,"https://i.imgur.com/s7TEtCQ.jpg","",new Date),new o.a(12,"Work 12",54,145,"https://i.imgur.com/rHWFcm2.jpg","",new Date)],u=[new o.a(1,"Chequer 1",10,150,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(2,"Chequer 2",5,150,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(3,"Chequer 3",12,480,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(4,"Chequer 4",21,300,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(5,"Chequer 5",10,150,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(6,"Chequer 6",11,142,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(7,"Chequer 7",10,450,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(8,"Chequer 8",12,150,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(9,"Chequer 9",35,500,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(10,"Chequer 10",25,650,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(11,"Chequer 11",26,220,"https://i.imgur.com/zZwsJQq.png","",new Date),new o.a(12,"Chequer 12",54,145,"https://i.imgur.com/zZwsJQq.png","",new Date)],i=[new o.a(1,"Carrier 1",10,150,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(2,"Carrier 2",5,150,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(3,"Carrier 3",12,480,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(4,"Carrier 4",21,300,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(5,"Carrier 5",10,150,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(6,"Carrier 6",11,142,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(7,"Carrier 7",10,450,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(8,"Carrier 8",12,150,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(9,"Carrier 9",35,500,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(10,"Carrier 10",25,650,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(11,"Carrier 11",26,220,"https://i.imgur.com/L5jsCsH.jpg","",new Date),new o.a(12,"Carrier 12",54,145,"https://i.imgur.com/L5jsCsH.jpg","",new Date)];n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return i}))}}]);