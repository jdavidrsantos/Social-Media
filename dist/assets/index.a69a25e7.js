import{d as P,j as k,k as c,s as K,_ as V,A as a,H as v,K as s,L as oe,O as u,u as ie,a3 as re,ap as we,J as g,$ as se,a0 as te,aq as $e,R as h,M as l,P as $,ar as Ce,as as Ie,at as Se,au as S,t as he,av as Pe,r as ke,aw as be,Y as Ee,ax as Le,ay as Be,az as J,aA as Ae,z as I,S as Z,D as Q,aB as Re,E as X,aC as R,aD as _}from"./index.ee478a78.js";const je=P({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const o=k("icon"),i=c(()=>[o,`${o}-empty`,{[`${o}-spin`]:e.spin}]),r=c(()=>{if(e.size)return{fontSize:K(e.size)?`${e.size}px`:e.size}});return{cls:i,sizeStyle:r}}}),Ne=["stroke-width","stroke-linecap","stroke-linejoin"],Oe=u("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),Ke=[Oe];function Ve(e,o,i,r,t,d){return a(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:s(e.cls),style:oe(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Ke,14,Ne)}var j=V(je,[["render",Ve]]);const ze=Object.assign(j,{install:(e,o)=>{var i;const r=(i=o==null?void 0:o.iconPrefix)!=null?i:"";e.component(r+j.name,j)}});var N=P({name:"Empty",props:{description:String,imgSrc:String},setup(e,{slots:o}){const i=k("empty"),{t:r}=ie(),t=re(we,void 0);return()=>{var d,m,y,f;return t!=null&&t.slots.empty?t.slots.empty():g("div",{class:i},[g("div",{class:`${i}-image`},[(m=(d=o.image)==null?void 0:d.call(o))!=null?m:e.imgSrc?g("img",{src:e.imgSrc,alt:e.description||"empty"},null):g(ze,null,null)]),g("div",{class:`${i}-description`},[(f=(y=o.default)==null?void 0:y.call(o))!=null?f:e.description||r("empty.description")])])}}});const Je=Object.assign(N,{install:(e,o)=>{se(e,o);const i=te(o);e.component(i+N.name,N)}}),Ze={ENTER:"Enter",ESC:"Escape",BACKSPACE:"Backspace",TAB:"Tab",SPACE:" ",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight"},x=e=>JSON.stringify({key:e.key,ctrl:Boolean(e.ctrl),shift:Boolean(e.shift),alt:Boolean(e.alt),meta:Boolean(e.meta)}),Qe=e=>{const o={};return e.forEach((i,r)=>{const t=$e(r)?{key:r}:r;o[x(t)]=i}),i=>{const r=x({key:i.key,ctrl:i.ctrlKey,shift:i.shiftKey,alt:i.altKey,meta:i.metaKey}),t=o[r];t&&(i.stopPropagation(),t(i))}},Fe=P({name:"ImageFooter",props:{title:{type:String},description:{type:String}},setup(){return{prefixCls:k("image-footer")}}}),De=["title"],He=["title"];function Te(e,o,i,r,t,d){return a(),v("div",{class:s(e.prefixCls)},[e.title||e.description?(a(),v("div",{key:0,class:s(`${e.prefixCls}-caption`)},[e.title?(a(),v("div",{key:0,class:s(`${e.prefixCls}-caption-title`),title:e.title},h(e.title),11,De)):l("v-if",!0),e.description?(a(),v("div",{key:1,class:s(`${e.prefixCls}-caption-description`),title:e.description},h(e.description),11,He)):l("v-if",!0)],2)):l("v-if",!0),e.$slots.extra?(a(),v("div",{key:1,class:s(`${e.prefixCls}-extra`)},[$(e.$slots,"extra")],2)):l("v-if",!0)],2)}var We=V(Fe,[["render",Te]]);function ee(e){if(Ce(e))return;if(!K(e)&&/^\d+(%)$/.test(e))return e;const o=parseInt(e,10);return K(o)?`${o}px`:void 0}let Ge=0;const Me=P({name:"Image",components:{IconImageClose:Ie,IconLoading:Se,ImageFooter:We,ImagePreview:S},inheritAttrs:!1,props:{renderToBody:{type:Boolean,default:!0},src:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},title:{type:String},description:{type:String},alt:{type:String},hideFooter:{type:Boolean},footerPosition:{type:String,default:"inner"},showLoader:{type:Boolean,default:!1},preview:{type:Boolean,default:!0},previewVisible:{type:Boolean,default:void 0},defaultPreviewVisible:{type:Boolean,default:!1},previewProps:{type:Object},footerClass:{type:[String,Array,Object]}},emits:["preview-visible-change","update:previewVisible"],setup(e,{attrs:o,slots:i,emit:r}){const{t}=ie(),{height:d,width:m,hideFooter:y,title:f,description:C,src:n,footerPosition:z,defaultPreviewVisible:ne,previewVisible:ae,preview:b,previewProps:F}=he(e),p=re(Pe,void 0),w=k("image"),E=ke(),{isLoaded:L,isError:D,isLoading:H,setLoadStatus:B}=be(),T=c(()=>({width:ee(m==null?void 0:m.value),height:ee(d==null?void 0:d.value)})),le=c(()=>[`${w}`,{[`${w}-loading`]:H.value,[`${w}-loading-error`]:D.value,[`${w}-with-footer-inner`]:L&&A&&z.value==="inner",[`${w}-with-footer-outer`]:L&&A&&z.value==="outer"},o.class]),de=c(()=>[T.value,o.style]),A=c(()=>!y.value&&!!((f==null?void 0:f.value)||(C==null?void 0:C.value)||i.extra)),pe=c(()=>Ee(o,["class","style"])),[ue,W]=Le(ne.value,Be({value:ae})),ce=c(()=>!(p!=null&&p.preview)&&b.value);J(()=>{Ae||!E.value||(E.value.src=n==null?void 0:n.value,B("loading"))});const G=Ge++;J(ye=>{var M,U,Y;const q=(Y=p==null?void 0:p.registerImageUrl)==null?void 0:Y.call(p,G,((U=(M=F==null?void 0:F.value)==null?void 0:M.src)!=null?U:n==null?void 0:n.value)||"",b.value);ye(()=>{q==null||q()})});function ve(){B("loaded")}function me(){B("error")}function fe(){!b.value||(p!=null&&p.preview?p.preview(G):(r("preview-visible-change",!0),W(!0)))}function ge(){r("preview-visible-change",!1),W(!1)}return{t,refImg:E,prefixCls:w,wrapperClassNames:le,wrapperStyles:de,showFooter:A,imgProps:pe,imgStyle:T.value,isLoaded:L,isError:D,isLoading:H,mergedPreviewVisible:ue,mergePreview:ce,onImgLoaded:ve,onImgLoadError:me,onImgClick:fe,onPreviewClose:ge}}}),Ue=["title","alt"];function Ye(e,o,i,r,t,d){const m=I("IconImageClose"),y=I("IconLoading"),f=I("ImageFooter"),C=I("ImagePreview");return a(),v("div",{class:s(e.wrapperClassNames),style:oe(e.wrapperStyles)},[u("img",Z({ref:"refImg",class:`${e.prefixCls}-img`},e.imgProps,{style:e.imgStyle,title:e.title,alt:e.alt,onLoad:o[0]||(o[0]=(...n)=>e.onImgLoaded&&e.onImgLoaded(...n)),onError:o[1]||(o[1]=(...n)=>e.onImgLoadError&&e.onImgLoadError(...n)),onClick:o[2]||(o[2]=(...n)=>e.onImgClick&&e.onImgClick(...n))}),null,16,Ue),e.isLoaded?l("v-if",!0):(a(),v("div",{key:0,class:s(`${e.prefixCls}-overlay`)},[e.isError?$(e.$slots,"error",{key:0},()=>[u("div",{class:s(`${e.prefixCls}-error`)},[u("div",{class:s(`${e.prefixCls}-error-icon`)},[$(e.$slots,"error-icon",{},()=>[g(m)])],2),u("div",{class:s(`${e.prefixCls}-error-alt`)},h(e.alt||e.description),3)],2)]):l("v-if",!0),e.isLoading&&(e.showLoader||e.$slots.loader)?$(e.$slots,"loader",{key:1},()=>[u("div",{class:s([`${e.prefixCls}-loader`])},[u("div",{class:s(`${e.prefixCls}-loader-spin`)},[g(y),u("div",{class:s(`${e.prefixCls}-loader-spin-text`)},h(e.t("image.loading")),3)],2)],2)]):l("v-if",!0)],2)),e.isLoaded&&e.showFooter?(a(),Q(f,{key:1,class:s(e.footerClass),"prefix-cls":e.prefixCls,title:e.title,description:e.description},Re({_:2},[e.$slots.extra?{name:"extra",fn:X(()=>[$(e.$slots,"extra")])}:void 0]),1032,["class","prefix-cls","title","description"])):l("v-if",!0),e.isLoaded&&e.mergePreview?(a(),Q(C,Z({key:2,src:e.src},e.previewProps,{visible:e.mergedPreviewVisible,"render-to-body":e.renderToBody,onClose:e.onPreviewClose}),{actions:X(()=>[$(e.$slots,"preview-actions")]),_:3},16,["src","visible","render-to-body","onClose"])):l("v-if",!0)],6)}var O=V(Me,[["render",Ye]]);const Xe=Object.assign(O,{Preview:S,PreviewGroup:R,install:(e,o)=>{se(e,o);const i=te(o);e.component(i+O.name,O),e.component(i+S.name,S),e.component(i+R.name,R),e.component(i+_.name,_)}});export{Je as E,Xe as I,Ze as K,Qe as g};
