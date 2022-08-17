import{r as Q,k as u,b8 as se,n as ge,b9 as je,a2 as He,aL as ve,d as T,t as de,j as ee,a4 as Ae,ay as G,_ as te,A as O,H as W,P as E,K as q,L as Fe,s as k,a3 as oe,aq as $e,M as I,b2 as Ue,ba as Pe,q as Re,aN as Ge,z as J,D as N,E as C,aO as Je,S as ae,Q as Y,R as X,O as z,N as Oe,aa as Ze,a9 as Qe,bb as _e,aK as ue,aW as Ye,J as Z,aB as Xe,B as et,aj as tt}from"./index.3fb55838.js";import{p as rt,g as Ce,s as we,a as at}from"./index.a7b6c58b.js";function Se(e){return ve(e)}function pe(e,t,r=!1){const a=Q({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),s=u(()=>{let n=t;if(Se(e.value))for(let l=0;l<se.length;l++){const f=se[l];if((a.value[f]||f==="xs"&&r)&&e.value[f]!==void 0){n=e.value[f];break}}else n=e.value;return n});let i="";return ge(()=>{i=je.subscribe(n=>{Se(e.value)&&(a.value=n)})}),He(()=>{i&&je.unsubscribe(i)}),s}var B=Object.prototype.toString;function ie(e){return B.call(e)==="[object Array]"}function M(e){return B.call(e)==="[object Object]"}function fe(e){return B.call(e)==="[object String]"}function st(e){return B.call(e)==="[object Number]"&&e===e}function ot(e){return B.call(e)==="[object Boolean]"}function he(e){return B.call(e)==="[object Function]"}function it(e){return M(e)&&Object.keys(e).length===0}function R(e){return e==null||e===""}function Ne(e){return ie(e)&&!e.length}var me=function(e,t){if(typeof e!="object"||typeof t!="object")return e===t;if(he(e)&&he(t))return e===t||e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e){var a=me(e[r],t[r]);if(!a)return!1}return!0},nt=function(e,t){var r={};return Object.keys(e).forEach(function(a){var s=e[a],i=t&&t[a];r[a]=M(s)?Object.assign(Object.assign({},s),i):i||s}),r},lt=function(e,t){for(var r=t.split("."),a=e,s=0;s<r.length;s++)if(a=a&&a[r[s]],a===void 0)return a;return a},x="`#{value}` is not a #{type} type",ut={required:"#{field} is required",type:{ip:x,email:x,url:x,string:x,number:x,array:x,object:x,boolean:x},number:{min:"`#{value}` is not greater than `#{min}`",max:"`#{value}` is not less than `#{max}`",equal:"`#{value}` is not equal to `#{equal}`",range:"`#{value}` is not in range `#{min} ~ #{max}`",positive:"`#{value}` is not a positive number",negative:"`#{value}` is not a negative number"},array:{length:"The `#{value}` length is not equal to #{length}",minLength:"The `#{value}` length is not greater than #{minLength}",maxLength:"The `#{value}` length is not less than #{maxLength}",includes:"#{value} is not includes #{includes}",deepEqual:"#{value} is not deep equal with #{deepEqual}",empty:"`#{value}` is not an empty array"},string:{maxLength:"The `#{value}` length is not greater than #{maxLength}",minLength:"The `#{value}` length is not less than #{minLength}",length:"The `#{value}` length is not equal to #{length}",match:"`#{value}` is not match pattern #{pattern}",uppercase:"Expect `#{value}` to be uppercased",lowercase:"Expect `#{value}` to be lowercased"},object:{deepEqual:"`#{value}` is not deep equal with #{deepEqual}",hasKeys:"`#{value}` is not has keys #{keys}",empty:"`#{value}` is not an empty object"},boolean:{true:"Expect true but got `#{value}`",false:"Expect false but got `#{value}`"}},w=function(t,r){var a=this;this.getValidateMsg=function(s,i){i===void 0&&(i={});var n=Object.assign(Object.assign({},i),{value:a.obj,field:a.field,type:a.type}),l=lt(a.validateMessages,s);return he(l)?l(n):fe(l)?l.replace(/\#\{.+?\}/g,function(f){var g=f.slice(2,-1);return g in n?M(n[g])||ie(n[g])?JSON.stringify(n[g]):String(n[g]):f}):l},M(r)&&fe(t)&&r.trim?this.obj=t.trim():M(r)&&r.ignoreEmptyString&&t===""?this.obj=void 0:this.obj=t,this.message=r.message,this.type=r.type,this.error=null,this.field=r.field||r.type,this.validateMessages=nt(ut,r.validateMessages)},ne={not:{configurable:!0},isRequired:{configurable:!0},end:{configurable:!0}};ne.not.get=function(){return this._not=!this._not,this};ne.isRequired.get=function(){return(R(this.obj)||Ne(this.obj))&&(this.error={value:this.obj,type:this.type,requiredError:!0,message:this.message||(this._not?"[NOT MODE]:":"")+this.getValidateMsg("required")}),this};ne.end.get=function(){return this.error};w.prototype.addError=function(t){!this.error&&t&&(this.error={value:this.obj,type:this.type,message:this.message||(M(t)?t:(this._not?"[NOT MODE]:":"")+t)})};w.prototype.validate=function(t,r){var a=this._not?t:!t;return a&&this.addError(r),this};w.prototype.collect=function(t){t&&t(this.error)};Object.defineProperties(w.prototype,ne);var ct=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"string"})),this.validate(s&&s.strict?fe(this.obj):!0,this.getValidateMsg("type.string"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={uppercase:{configurable:!0},lowercase:{configurable:!0}};return t.prototype.maxLength=function(s){return this.obj?this.validate(this.obj.length<=s,this.getValidateMsg("string.maxLength",{maxLength:s})):this},t.prototype.minLength=function(s){return this.obj?this.validate(this.obj.length>=s,this.getValidateMsg("string.minLength",{minLength:s})):this},t.prototype.length=function(s){return this.obj?this.validate(this.obj.length===s,this.getValidateMsg("string.length",{length:s})):this},t.prototype.match=function(s){var i=s instanceof RegExp;return i&&(s.lastIndex=0),this.validate(this.obj===void 0||i&&s.test(this.obj),this.getValidateMsg("string.match",{pattern:s}))},r.uppercase.get=function(){return this.obj?this.validate(this.obj.toUpperCase()===this.obj,this.getValidateMsg("string.uppercase")):this},r.lowercase.get=function(){return this.obj?this.validate(this.obj.toLowerCase()===this.obj,this.getValidateMsg("string.lowercase")):this},Object.defineProperties(t.prototype,r),t}(w),dt=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"number"})),this.validate(s&&s.strict?st(this.obj):!0,this.getValidateMsg("type.number"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={positive:{configurable:!0},negative:{configurable:!0}};return t.prototype.min=function(s){return R(this.obj)?this:this.validate(this.obj>=s,this.getValidateMsg("number.min",{min:s}))},t.prototype.max=function(s){return R(this.obj)?this:this.validate(this.obj<=s,this.getValidateMsg("number.max",{max:s}))},t.prototype.equal=function(s){return R(this.obj)?this:this.validate(this.obj===s,this.getValidateMsg("number.equal",{equal:s}))},t.prototype.range=function(s,i){return R(this.obj)?this:this.validate(this.obj>=s&&this.obj<=i,this.getValidateMsg("number.range",{min:s,max:i}))},r.positive.get=function(){return R(this.obj)?this:this.validate(this.obj>0,this.getValidateMsg("number.positive"))},r.negative.get=function(){return R(this.obj)?this:this.validate(this.obj<0,this.getValidateMsg("number.negative"))},Object.defineProperties(t.prototype,r),t}(w),pt=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"array"})),this.validate(s&&s.strict?ie(this.obj):!0,this.getValidateMsg("type.array",{value:this.obj,type:this.type}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={empty:{configurable:!0}};return t.prototype.length=function(s){return this.obj?this.validate(this.obj.length===s,this.getValidateMsg("array.length",{value:this.obj,length:s})):this},t.prototype.minLength=function(s){return this.obj?this.validate(this.obj.length>=s,this.getValidateMsg("array.minLength",{value:this.obj,minLength:s})):this},t.prototype.maxLength=function(s){return this.obj?this.validate(this.obj.length<=s,this.getValidateMsg("array.maxLength",{value:this.obj,maxLength:s})):this},t.prototype.includes=function(s){var i=this;return this.obj?this.validate(s.every(function(n){return i.obj.indexOf(n)!==-1}),this.getValidateMsg("array.includes",{value:this.obj,includes:s})):this},t.prototype.deepEqual=function(s){return this.obj?this.validate(me(this.obj,s),this.getValidateMsg("array.deepEqual",{value:this.obj,deepEqual:s})):this},r.empty.get=function(){return this.validate(Ne(this.obj),this.getValidateMsg("array.empty",{value:this.obj}))},Object.defineProperties(t.prototype,r),t}(w),ft=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"object"})),this.validate(s&&s.strict?M(this.obj):!0,this.getValidateMsg("type.object"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={empty:{configurable:!0}};return t.prototype.deepEqual=function(s){return this.obj?this.validate(me(this.obj,s),this.getValidateMsg("object.deepEqual",{deepEqual:s})):this},t.prototype.hasKeys=function(s){var i=this;return this.obj?this.validate(s.every(function(n){return i.obj[n]}),this.getValidateMsg("object.hasKeys",{keys:s})):this},r.empty.get=function(){return this.validate(it(this.obj),this.getValidateMsg("object.empty"))},Object.defineProperties(t.prototype,r),t}(w),ht=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"boolean"})),this.validate(s&&s.strict?ot(this.obj):!0,this.getValidateMsg("type.boolean"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={true:{configurable:!0},false:{configurable:!0}};return r.true.get=function(){return this.validate(this.obj===!0,this.getValidateMsg("boolean.true"))},r.false.get=function(){return this.validate(this.obj===!1,this.getValidateMsg("boolean.false"))},Object.defineProperties(t.prototype,r),t}(w),gt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,vt=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),mt=/^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/,bt=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"type"}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={email:{configurable:!0},url:{configurable:!0},ip:{configurable:!0}};return r.email.get=function(){return this.type="email",this.validate(this.obj===void 0||gt.test(this.obj),this.getValidateMsg("type.email"))},r.url.get=function(){return this.type="url",this.validate(this.obj===void 0||vt.test(this.obj),this.getValidateMsg("type.url"))},r.ip.get=function(){return this.type="ip",this.validate(this.obj===void 0||mt.test(this.obj),this.getValidateMsg("type.ip"))},Object.defineProperties(t.prototype,r),t}(w),yt=function(e){function t(a,s){e.call(this,a,Object.assign(Object.assign({},s),{type:"custom"}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={validate:{configurable:!0}};return r.validate.get=function(){var a=this;return function(s,i){var n;if(s)return n=s(a.obj,a.addError.bind(a)),n&&n.then?(i&&n.then(function(){i&&i(a.error)},function(l){console.error(l)}),[n,a]):(i&&i(a.error),a.error)}},Object.defineProperties(t.prototype,r),t}(w),jt=function(t,r){this.string=new ct(t,r),this.number=new dt(t,r),this.array=new pt(t,r),this.object=new ft(t,r),this.boolean=new ht(t,r),this.type=new bt(t,r),this.custom=new yt(t,r)},Ie=function(t,r){r===void 0&&(r={}),this.schema=t,this.options=r};Ie.prototype.validate=function(t,r){var a=this;if(!M(t))return;var s=[],i=null;function n(l,f){i||(i={}),(!i[l]||f.requiredError)&&(i[l]=f)}this.schema&&Object.keys(this.schema).forEach(function(l){if(ie(a.schema[l]))for(var f=function(h){var p=a.schema[l][h],m=p.type,j=p.message;if(!m&&!p.validator)throw"You must specify a type to field "+l+"!";var v=new jt(t[l],Object.assign(Object.assign({},a.options),{message:j,field:l})),c=v.type[m]||null;if(!c)if(p.validator){c=v.custom.validate(p.validator),Object.prototype.toString.call(c)==="[object Array]"&&c[0].then?s.push({function:c[0],_this:c[1],key:l}):c&&n(l,c);return}else c=v[m];if(Object.keys(p).forEach(function(b){p.required&&(c=c.isRequired),b!=="message"&&c[b]&&p[b]&&typeof c[b]=="object"&&(c=c[b]),c[b]&&p[b]!==void 0&&typeof c[b]=="function"&&(c=c[b](p[b]))}),c.collect(function(b){b&&n(l,b)}),i)return"break"},g=0;g<a.schema[l].length;g++){var y=f(g);if(y==="break")break}}),s.length>0?Promise.all(s.map(function(l){return l.function})).then(function(){s.forEach(function(l){l._this.error&&n(l.key,l._this.error)}),r&&r(i)}):r&&r(i)};const ke=Symbol("RowContextInjectionKey"),$t=T({name:"Row",props:{gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start"},align:{type:String,default:"start"},div:{type:Boolean},wrap:{type:Boolean,default:!0}},setup(e){const{gutter:t,align:r,justify:a,div:s,wrap:i}=de(e),n=ee("row"),l=u(()=>({[`${n}`]:!s.value,[`${n}-nowrap`]:!i.value,[`${n}-align-${r.value}`]:r.value,[`${n}-justify-${a.value}`]:a.value})),f=u(()=>Array.isArray(t.value)?t.value[0]:t.value),g=u(()=>Array.isArray(t.value)?t.value[1]:0),y=pe(f,0),h=pe(g,0),p=u(()=>{const j={};if((y.value||h.value)&&!s.value){const v=-y.value/2,c=-h.value/2;v&&(j.marginLeft=`${v}px`,j.marginRight=`${v}px`),c&&(j.marginTop=`${c}px`,j.marginBottom=`${c}px`)}return j}),m=u(()=>[y.value,h.value]);return Ae(ke,G({gutter:m,div:s})),{classNames:l,styles:p}}});function Ot(e,t,r,a,s,i){return O(),W("div",{class:q(e.classNames),style:Fe(e.styles)},[E(e.$slots,"default")],6)}var _t=te($t,[["render",Ot]]);function Ct(e){return u(()=>{const{val:r,key:a,xs:s,sm:i,md:n,lg:l,xl:f,xxl:g}=e.value;if(!s&&!i&&!n&&!l&&!f&&!g)return r;const y={};return se.forEach(h=>{const p=e.value[h];k(p)?y[h]=p:ve(p)&&k(p[a])&&(y[h]=p[a])}),y})}var wt=Object.defineProperty,Ve=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable,Ee=(e,t,r)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))St.call(t,r)&&Ee(e,r,t[r]);if(Ve)for(var r of Ve(t))Vt.call(t,r)&&Ee(e,r,t[r]);return e};function Et(e){if($e(e)&&(["initial","auto","none"].includes(e)||/^\d+$/.test(e))||k(e))return e;if($e(e)&&/^\d+(px|em|rem|%)$/.test(e))return`0 0 ${e}`}const Lt=T({name:"Col",props:{span:{type:Number,default:24},offset:{type:Number},order:{type:Number},xs:{type:[Number,Object]},sm:{type:[Number,Object]},md:{type:[Number,Object]},lg:{type:[Number,Object]},xl:{type:[Number,Object]},xxl:{type:[Number,Object]},flex:{type:[Number,String]}},setup(e){const t=ee("col"),r=oe(ke,{}),a=u(()=>Et(e.flex)),s=u(()=>{const{div:h}=r,{span:p,offset:m,order:j,xs:v,sm:c,md:b,lg:A,xl:F,xxl:D}=e,P={[`${t}`]:!h,[`${t}-order-${j}`]:j,[`${t}-${p}`]:!h&&!v&&!c&&!b&&!A&&!F&&!D,[`${t}-offset-${m}`]:m&&m>0},K={xs:v,sm:c,md:b,lg:A,xl:F,xxl:D};return Object.keys(K).forEach(_=>{const $=K[_];$&&k($)?P[`${t}-${_}-${$}`]=!0:$&&ve($)&&(P[`${t}-${_}-${$.span}`]=$.span,P[`${t}-${_}-offset-${$.offset}`]=$.offset,P[`${t}-${_}-order-${$.order}`]=$.order)}),P}),i=u(()=>a.value?t:s.value),n=u(()=>{const{gutter:h,div:p}=r,m={};if(Array.isArray(h)&&!p){const j=h[0]&&h[0]/2||0,v=h[1]&&h[1]/2||0;j&&(m.paddingLeft=`${j}px`,m.paddingRight=`${j}px`),v&&(m.paddingTop=`${v}px`,m.paddingBottom=`${v}px`)}return m}),l=u(()=>a.value?{flex:a.value}:{}),f=u(()=>rt(e,se)),g=Ct(u(()=>ce({val:e.span,key:"span"},f.value))),y=pe(g,24,!0);return{visible:u(()=>!!y.value),classNames:i,styles:u(()=>ce(ce({},n.value),l.value))}}});function xt(e,t,r,a,s,i){return e.visible?(O(),W("div",{key:0,class:q(e.classNames),style:Fe(e.styles)},[E(e.$slots,"default")],6)):I("v-if",!0)}var qt=te(Lt,[["render",xt]]);const Mt=T({name:"FormItemLabel",components:{ResizeObserver:Ue},props:{required:{type:Boolean,default:!1},showColon:{type:Boolean,default:!1},component:{type:String,default:"label"},attrs:Object},setup(){const e=ee("form-item-label"),t=oe(Pe,void 0),r=Ge(),a=Q(),s=()=>{a.value&&k(a.value.offsetWidth)&&(t==null||t.setLabelWidth(a.value.offsetWidth,r==null?void 0:r.uid))};return ge(()=>{a.value&&k(a.value.offsetWidth)&&(t==null||t.setLabelWidth(a.value.offsetWidth,r==null?void 0:r.uid))}),Re(()=>{t==null||t.removeLabelWidth(r==null?void 0:r.uid)}),{prefixCls:e,labelRef:a,handleResize:s}}}),At=z("svg",{fill:"currentColor",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[z("path",{d:"M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})],-1),Ft=[At];function Pt(e,t,r,a,s,i){const n=J("ResizeObserver");return O(),N(n,{onResize:e.handleResize},{default:C(()=>[(O(),N(Je(e.component),ae({ref:"labelRef",class:e.prefixCls},e.attrs),{default:C(()=>[e.required?(O(),W("strong",{key:0,class:q(`${e.prefixCls}-required-symbol`)},Ft,2)):I("v-if",!0),E(e.$slots,"default"),Y(" "+X(e.showColon?":":""),1)]),_:3},16,["class"]))]),_:3},8,["onResize"])}var Rt=te(Mt,[["render",Pt]]);const Nt=T({name:"FormItemMessage",props:{error:Array,help:String},setup(){return{prefixCls:ee("form-item-message")}}});function It(e,t,r,a,s,i){return e.help||e.$slots.help?(O(),N(Oe,{key:0,name:"form-blink",appear:""},{default:C(()=>[z("div",{class:q([e.prefixCls,`${e.prefixCls}-help`])},[E(e.$slots,"help",{},()=>[Y(X(e.help),1)])],2)]),_:3})):(O(!0),W(Qe,{key:1},Ze(e.error,n=>(O(),N(Oe,{key:n,name:"form-blink",appear:""},{default:C(()=>[z("div",{role:"alert",class:q([e.prefixCls])},X(n),3)]),_:2},1024))),128))}var kt=te(Nt,[["render",It]]);const Le=["success","warning","error","validating"],zt=e=>{let t="";for(const r of Object.keys(e)){const a=e[r];a&&(!t||Le.indexOf(a)>Le.indexOf(t))&&(t=e[r])}return t},Tt=e=>{const t=[];for(const r of Object.keys(e)){const a=e[r];a&&t.push(a)}return t};var Wt=Object.defineProperty,xe=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable,qe=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))Bt.call(t,r)&&qe(e,r,t[r]);if(xe)for(var r of xe(t))Dt.call(t,r)&&qe(e,r,t[r]);return e};const Kt=T({name:"FormItem",components:{ArcoRow:_t,ArcoCol:qt,FormItemLabel:Rt,FormItemMessage:kt},props:{field:{type:String,default:""},label:String,showColon:{type:Boolean,default:!1},noStyle:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0},help:String,extra:String,required:{type:Boolean,default:!1},rules:{type:[Object,Array]},validateStatus:{type:String},validateTrigger:{type:[String,Array],default:"change"},labelColProps:Object,wrapperColProps:Object,hideLabel:{type:Boolean,default:!1},hideAsterisk:{type:Boolean,default:!1},labelColStyle:Object,wrapperColStyle:Object,rowProps:Object,rowClass:[String,Array,Object],contentClass:[String,Array,Object],contentFlex:{type:Boolean,default:!0},mergeProps:{type:[Boolean,Function],default:!0},labelColFlex:{type:[Number,String]},feedback:{type:Boolean,default:!1},labelComponent:{type:String,default:"label"},labelAttrs:Object},setup(e){const t=ee("form-item"),{field:r}=de(e),a=oe(Pe,{}),{autoLabelWidth:s,layout:i}=de(a),n=u(()=>{var o;const d=Me({},(o=e.labelColProps)!=null?o:a.labelColProps);return e.labelColFlex?d.flex=e.labelColFlex:a.autoLabelWidth&&(d.flex=`${a.maxLabelWidth}px`),d}),l=u(()=>{var o;const d=Me({},(o=e.wrapperColProps)!=null?o:a.wrapperColProps);return(e.labelColFlex||a.autoLabelWidth)&&(d.flex="auto"),d}),f=u(()=>{var o;return(o=e.labelColStyle)!=null?o:a.labelColStyle}),g=u(()=>{var o;return(o=e.wrapperColStyle)!=null?o:a.wrapperColStyle}),y=Ce(a.model,e.field),h=G({}),p=G({}),m=u(()=>zt(h)),j=u(()=>Tt(p)),v=Q(!1),c=u(()=>Ce(a.model,e.field)),b=u(()=>{var o;return Boolean((o=e.disabled)!=null?o:a==null?void 0:a.disabled)}),A=u(()=>{var o;return(o=e.validateStatus)!=null?o:m.value}),F=u(()=>m.value==="error"),D=u(()=>{var o,d,S;const U=[].concat((S=(d=e.rules)!=null?d:(o=a==null?void 0:a.rules)==null?void 0:o[e.field])!=null?S:[]),L=U.some(V=>V.required);return e.required&&!L?[{required:!0}].concat(U):U}),P=u(()=>D.value.some(o=>o.required)),K=e.noStyle?oe(_e,void 0):void 0,_=(o,{status:d,message:S})=>{h[o]=d,p[o]=S,e.noStyle&&(K==null||K.updateValidateState(o,{status:d,message:S}))},$=u(()=>e.feedback&&A.value?A.value:void 0),H=()=>{if(v.value)return Promise.resolve();const o=D.value;if(!r.value||o.length===0)return m.value&&le(),Promise.resolve();const d=r.value,S=c.value;_(d,{status:"",message:""});const U=new Ie({[d]:o.map(L=>(!L.type&&!L.validator&&(L.type="string"),L))},{ignoreEmptyString:!0});return new Promise(L=>{U.validate({[d]:S},V=>{var be;const ye=Boolean(V==null?void 0:V[d]);_(d,{status:ye?"error":"",message:(be=V==null?void 0:V[d].message)!=null?be:""});const Ke=ye?{label:e.label,field:r.value,value:V[d].value,type:V[d].type,isRequiredError:Boolean(V[d].requiredError),message:V[d].message}:void 0;L(Ke)})})},ze=u(()=>[].concat(e.validateTrigger)),Te=u(()=>ze.value.reduce((o,d)=>{switch(d){case"change":return o.onChange=()=>{H()},o;case"input":return o.onInput=()=>{ue(()=>{H()})},o;case"focus":return o.onFocus=()=>{H()},o;case"blur":return o.onBlur=()=>{H()},o;default:return o}},{}));Ae(_e,G({eventHandlers:Te,size:a&&Ye(a,"size"),disabled:b,error:F,feedback:$,updateValidateState:_}));const le=()=>{r.value&&_(r.value,{status:"",message:""})},re=G({field:r,disabled:b,error:F,validate:H,clearValidate:le,resetField:()=>{le(),v.value=!0,(a==null?void 0:a.model)&&r.value&&we(a.model,r.value,y),ue(()=>{v.value=!1})},setField:o=>{var d,S;r.value&&(v.value=!0,"value"in o&&(a==null?void 0:a.model)&&r.value&&we(a.model,r.value,o.value),(o.status||o.message)&&_(r.value,{status:(d=o.status)!=null?d:"",message:(S=o.message)!=null?S:""}),ue(()=>{v.value=!1}))}});ge(()=>{var o;re.field&&((o=a.addField)==null||o.call(a,re))}),Re(()=>{var o;re.field&&((o=a.removeField)==null||o.call(a,re))});const We=u(()=>[t,`${t}-layout-${a.layout}`,{[`${t}-error`]:F.value,[`${t}-status-${A.value}`]:Boolean(A.value)},e.rowClass]),Be=u(()=>[`${t}-label-col`,{[`${t}-label-col-left`]:a.labelAlign==="left",[`${t}-label-col-flex`]:a.autoLabelWidth||e.labelColFlex}]),De=u(()=>[`${t}-wrapper-col`,{[`${t}-wrapper-col-flex`]:!l.value}]);return{prefixCls:t,cls:We,isRequired:P,isError:F,finalMessage:j,mergedLabelCol:n,mergedWrapperCol:l,labelColCls:Be,autoLabelWidth:s,layout:i,mergedLabelStyle:f,wrapperColCls:De,mergedWrapperStyle:g}}});function Ht(e,t,r,a,s,i){var n;const l=J("FormItemLabel"),f=J("ArcoCol"),g=J("FormItemMessage"),y=J("ArcoRow");return e.noStyle?E(e.$slots,"default",{key:0}):(O(),N(y,ae({key:1,class:[e.cls,{[`${e.prefixCls}-has-help`]:Boolean((n=e.$slots.help)!=null?n:e.help)}],wrap:!(e.labelColFlex||e.autoLabelWidth),div:e.layout!=="horizontal"||e.hideLabel},e.rowProps),{default:C(()=>[e.hideLabel?I("v-if",!0):(O(),N(f,ae({key:0,class:e.labelColCls,style:e.mergedLabelStyle},e.mergedLabelCol),{default:C(()=>[Z(l,{required:e.hideAsterisk?!1:e.isRequired,"show-colon":e.showColon,component:e.labelComponent,attrs:e.labelAttrs},{default:C(()=>[e.$slots.label||e.label?E(e.$slots,"label",{key:0},()=>[Y(X(e.label),1)]):I("v-if",!0)]),_:3},8,["required","show-colon","component","attrs"])]),_:3},16,["class","style"])),Z(f,ae({class:e.wrapperColCls,style:e.mergedWrapperStyle},e.mergedWrapperCol),{default:C(()=>[z("div",{class:q(`${e.prefixCls}-content-wrapper`)},[z("div",{class:q([`${e.prefixCls}-content`,{[`${e.prefixCls}-content-flex`]:e.contentFlex},e.contentClass])},[E(e.$slots,"default")],2)],2),e.isError||e.$slots.help||e.help?(O(),N(g,{key:0,error:e.finalMessage,help:e.help},Xe({_:2},[e.$slots.help?{name:"help",fn:C(()=>[E(e.$slots,"help")])}:void 0]),1032,["error","help"])):I("v-if",!0),e.$slots.extra||e.extra?(O(),W("div",{key:1,class:q(`${e.prefixCls}-extra`)},[E(e.$slots,"extra",{},()=>[Y(X(e.extra),1)])],2)):I("v-if",!0)]),_:3},16,["class","style"])]),_:3},16,["class","wrap","div"]))}var Ut=te(Kt,[["render",Ht]]);const Gt={container:"","mx-auto":""},Jt=Y(" \u4FDD\u5B58sss "),er=T({__name:"setting",setup(e){let t=Q([]);const r=Q(new Set),a={MetaRight:"\u2318",AltRight:"\u2325",ControlLeft:"\u2303"},s=l=>{a[l.code]?r.value.add(a[l.code]):r.value.add(l.code.replace(/Key/,"")),t.value=Array.from(r.value)},i=()=>{r.value.clear()},n=()=>{tt.success("\u4FDD\u5B58\u6210\u529F")};return(l,f)=>{const g=at,y=Ut,h=et;return O(),W("section",Gt,[Z(y,{field:"name",label:"\u4E0A\u4F20\u5FEB\u6377\u952E"},{default:C(()=>[Z(g,{"model-value":t.value.join("+"),placeholder:"\u8BF7\u5F55\u5236\u4E0A\u4F20\u5FEB\u6377\u952Ebaa",onKeydown:s,onBlur:i},null,8,["model-value"])]),_:1}),Z(h,{"mx-auto":"",long:"",type:"primary",size:"large",onClick:n},{default:C(()=>[Jt]),_:1})])}}});export{er as default};