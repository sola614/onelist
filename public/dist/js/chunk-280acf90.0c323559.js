(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280acf90"],{"3ea1":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c=e=>(Object(l["L"])("data-v-59b6fc04"),e=e(),Object(l["J"])(),e),b={key:0,class:"load"},s={key:1,class:"content"},i={class:"seriesTab"},o={class:"seriesTab-list"},O={class:"seriesTab-item"},n={class:"seriesTab-item"},r=c(()=>Object(l["l"])("i",{class:"bx bx-left-arrow-alt"},null,-1)),u={class:"seriesTab-item"},j=c(()=>Object(l["l"])("i",{class:"bx bx-right-arrow-alt"},null,-1)),d={class:"seriesTab-item"},v=c(()=>Object(l["l"])("i",{class:"bx bx-filter"},null,-1)),h={class:"card-show-content view-card-list"},p={class:"view-item-header"},g={class:"view-item-tag-list"},m={class:"view-item-tag rating"},w={key:0,class:"view-item-tag count"},k=c(()=>Object(l["l"])("i",{class:"bx bx-check"},null,-1)),f=[k],y=["src"],_={key:0,class:"view-item-title"},x={key:1,class:"view-item-title"},C=c(()=>Object(l["l"])("i",{class:"bx bx-x"},null,-1)),T={class:"sort-list"},M={class:"sort-list"};function I(e,t,a,c,k,I){const N=Object(l["R"])("n-button"),$=Object(l["R"])("router-link"),q=Object(l["R"])("n-radio"),z=Object(l["R"])("n-space"),R=Object(l["R"])("n-radio-group"),S=Object(l["R"])("n-card"),P=Object(l["R"])("n-modal");return c.loading?(Object(l["I"])(),Object(l["k"])("div",b)):(Object(l["I"])(),Object(l["k"])("div",s,[Object(l["l"])("div",i,[Object(l["l"])("div",o,[Object(l["l"])("div",O,Object(l["T"])(c.pageText),1),Object(l["l"])("div",n,[Object(l["n"])(N,{onClick:t[0]||(t[0]=t=>e.BackPage()),strong:"",secondary:"",circle:""},{default:Object(l["bb"])(()=>[r]),_:1})]),Object(l["l"])("div",u,[Object(l["n"])(N,{onClick:t[1]||(t[1]=e=>I.NextPage()),strong:"",secondary:"",circle:""},{default:Object(l["bb"])(()=>[j]),_:1})]),Object(l["l"])("div",d,[Object(l["n"])(N,{onClick:t[2]||(t[2]=e=>c.showSort=!c.showSort),strong:"",secondary:"",circle:""},{default:Object(l["bb"])(()=>[v]),_:1})])])]),Object(l["l"])("div",h,[(Object(l["I"])(!0),Object(l["k"])(l["b"],null,Object(l["P"])(c.data,(t,a)=>(Object(l["I"])(),Object(l["k"])("div",{class:"view-item",key:a},[Object(l["n"])($,{to:{path:"/video",query:{id:t.id,gallery_type:c.data_type}}},{default:Object(l["bb"])(()=>[Object(l["l"])("div",p,[Object(l["l"])("div",g,[Object(l["l"])("div",m,Object(l["T"])(isNaN(Math.floor(100*t.vote_average)/100)?"":Math.floor(100*t.vote_average)/100),1),t.played?(Object(l["I"])(),Object(l["k"])("div",w,f)):Object(l["j"])("",!0)])]),Object(l["l"])("img",{loading:"lazy",class:"carousel-img",src:e.COMMON.imgUrl+"/t/p/w220_and_h330_face/"+t.poster_path},null,8,y),null!=t.video?(Object(l["I"])(),Object(l["k"])("div",_,Object(l["T"])(t.title),1)):(Object(l["I"])(),Object(l["k"])("div",x,Object(l["T"])(t.name),1))]),_:2},1032,["to"])]))),128))]),Object(l["n"])(P,{show:c.showSort,"onUpdate:show":t[5]||(t[5]=e=>c.showSort=e),"transform-origin":"center"},{default:Object(l["bb"])(()=>[Object(l["n"])(S,{style:{width:"600px"},title:"选择分类",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":Object(l["bb"])(()=>[Object(l["n"])(N,{onClick:t[3]||(t[3]=e=>c.showSort=!c.showSort),strong:"",secondary:"",circle:""},{default:Object(l["bb"])(()=>[C]),_:1})]),default:Object(l["bb"])(()=>[Object(l["l"])("div",T,[Object(l["l"])("div",M,[Object(l["n"])(R,{value:c.mode,"onUpdate:value":t[4]||(t[4]=e=>c.mode=e),name:"radiogroup"},{default:Object(l["bb"])(()=>[Object(l["n"])(z,{vertical:""},{default:Object(l["bb"])(()=>[(Object(l["I"])(!0),Object(l["k"])(l["b"],null,Object(l["P"])(c.modes,e=>(Object(l["I"])(),Object(l["i"])(q,{onChange:c.handleChange,class:"sort-item",checked:c.mode===e.value,key:e.value,value:e.value},{default:Object(l["bb"])(()=>[Object(l["m"])(Object(l["T"])(e.label),1)]),_:2},1032,["onChange","checked","value"]))),128))]),_:1})]),_:1},8,["value"])])])]),_:1})]),_:1},8,["show"])]))}var N=a("0d1c"),$=a.n(N),q=a("6605"),z={name:"list",setup(){const e=Object(l["O"])(null),t=Object(l["O"])(null),a=Object(l["O"])(null),c=Object(l["O"])(null),b=Object(l["O"])(null),s=Object(l["O"])(!0),{proxy:i}=Object(l["p"])(),o=Object(l["O"])(null),O=Object(l["O"])(!1),n=Object(l["O"])(null),r=Object(l["O"])(null),u=Object(l["O"])(null),j=Object(l["O"])(null);t.value=48,a.value=1;const d=Object(l["O"])(8);i.COMMON.isMo&&(d.value=3);const v=Object(l["O"])(null);function h(){let e=t.value;o.value<t.value&&(e=o.value),v.value=o.value+" 的 "+(a.value-1)*t.value+"-"+((a.value-1)*t.value+e)}function p(){let l=i.COMMON.apiUrl+`/v1/api/themovie/search?q=${j.value}&?page=${a.value}&size=${t.value}`;"tv"==e.value&&(l=i.COMMON.apiUrl+`/v1/api/thetv/search?q=${j.value}&?page=${a.value}&size=${t.value}`),i.axios.post(l,{},{headers:{"content-type":"application/json",Authorization:i.$cookies.get("Authorization")}}).then(e=>{200==e.data.code&&(c.value=e.data.data,o.value=e.data.num,s.value=!1,h())}).catch(e=>{$.a.show({pos:"top-center",text:e,showAction:!1})})}e.value="movie",n.value=e.value,j.value=i.$route.query.q,Object(q["d"])((e,t)=>{j.value=e.query.q,p()});const g=()=>{p()};return Object(l["F"])(()=>{p()}),{data_type:e,per_card:d,data:c,loading:s,error:b,page:a,size:t,num:o,search:O,pageText:v,genre:r,year:u,reF:g,handleChange(){a.value=1,e.value=n.value,p()},showSort:Object(l["O"])(!1),showFilter:Object(l["O"])(!1),mode:n,modes:[{value:"tv",label:"节目"},{value:"movie",label:"电影"}].map(e=>(e.value=e.value.toLowerCase(),e))}},methods:{NextPage(){this.page=this.page+1,this.reF()}}},R=(a("48b3"),a("6b0d")),S=a.n(R);const P=S()(z,[["render",I],["__scopeId","data-v-59b6fc04"]]);t["default"]=P},"48b3":function(e,t,a){"use strict";a("e083")},e083:function(e,t,a){}}]);
//# sourceMappingURL=chunk-280acf90.0c323559.js.map