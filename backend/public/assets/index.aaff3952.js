import{d as e,u as l,r as a,o as n,c as t,a as o,w as u,b as s,F as r,e as i,f as d,g as c,p,h as m,t as v,i as g,j as h,C as b,k as f,l as w,m as y,n as _,I as x}from"./vendor.82e483d4.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((a,o)=>{const u=new URL(e,n);if(self[l].moduleMap[u])return a(self[l].moduleMap[u]);const s=new Blob([`import * as m from '${u}';`,`${l}.moduleMap['${u}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){o(new Error(`Failed to import: ${e}`)),t(r)},onload(){a(self[l].moduleMap[u]),t(r)}});document.head.appendChild(r)})),self[l].moduleMap={}}}("/assets/");const U=i(" Home "),V=i(" Admin "),k=i(" Cart "),j=i(" Login ");var C=e({expose:[],setup(e){const i=l();return(e,l)=>{const d=a("el-menu-item"),c=a("el-avatar"),p=a("el-menu"),m=a("router-view");return n(),t(r,null,[o("nav",null,[o(p,{"default-active":"/",mode:"horizontal",router:""},{default:u((()=>[o(d,{index:"/"},{default:u((()=>[U])),_:1}),o(d,{index:"/admin"},{default:u((()=>[V])),_:1}),o(d,{index:"/cart"},{default:u((()=>[k])),_:1}),o(d,{index:"/login"},{default:u((()=>[j])),_:1}),s(i).state.loginState?(n(),t(d,{key:0,index:"/user",id:"user"},{default:u((()=>[o(c,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})])),_:1})):(n(),t(d,{key:1,index:"/login",id:"user"},{default:u((()=>[o(c,{class:"el-icon-user"})])),_:1}))])),_:1})]),o(m,{id:"r"})],64)}}});const L=c();p("data-v-1657af0b");const P={class:"title"},S=o("h1",null,"All Your Electronics",-1);m();var R=e({expose:[],setup(e){const l=[{name:"Phone",img:"Phone.jpg"},{name:"Computer",img:"Computer.jpg"},{name:"TV",img:"TV.jpg"},{name:"Camera",img:"Camera.jpg"},{name:"Pad",img:"Pad.jpg"},{name:"Headphone",img:"Headphone.jpg"}];return(e,u)=>{const s=a("router-link"),i=a("el-card"),c=a("el-col"),p=a("el-row");return n(),t("div",null,[o("div",P,[S,o(p,null,{default:L((()=>[(n(),t(r,null,d(l,(e=>o(c,{span:8},{default:L((()=>[o(i,{"body-style":{padding:"0px"}},{default:L((()=>[o(s,{to:"/cart"}),o("h2",null,v(e.name),1)])),_:2},1024)])),_:2},1024))),64))])),_:1})])])}}});R.__scopeId="data-v-1657af0b";const A={class:"title"};var I=e({expose:[],setup(e){const l=g("Cart");return(e,a)=>(n(),t("div",null,[o("div",A,[o("h1",null,v(l.value),1)])]))}});const T={class:"admin-new"},E={class:"container"},M={class:"col-lg-3 col-md-3 col-sm-12 col-xs-12"},$={class:"admin-menu"},H=i("View Products"),B=i("New Products");var F=e({expose:[],setup:e=>(g("Admin"),(e,l)=>{const s=a("router-link"),r=a("router-view");return n(),t("div",null,[o("div",T,[o("div",E,[o("div",M,[o("ul",$,[o("li",null,[o(s,{to:"/admin"},{default:u((()=>[H])),_:1})]),o("li",null,[o(s,{to:"/admin/new"},{default:u((()=>[B])),_:1})])])]),o(r)])])])})});const N={},O=o("div",{class:"title"},[o("h1",null,"This is Admin/New")],-1);N.render=function(e,l){return n(),t("div",null,[O])};const D={},z={class:"title"};D.render=function(e,l){return n(),t("div",null,[o("div",z,[o("h1",null,"This is Admin/Edit/"+v(e.$route.params.id),1)])])};const G=c();p("data-v-70517cb2");const Y=o("br",null,null,-1),q=o("br",null,null,-1),J=o("br",null,null,-1),K=o("br",null,null,-1),Q=o("br",null,null,-1),W=o("br",null,null,-1),X=i(" Log In "),Z=o("br",null,null,-1),ee=o("br",null,null,-1),le=i(" or Sign Up ");m();var ae=e({expose:[],setup(e){const u=l(),s=g(""),r=g(""),i=g(!1),d=g(!1),c=()=>{b.post("http://localhost:3000/api/login",{username:s.value,password:r.value}).then((e=>{console.log(e.data),i.value=!e.data,i.value||(d.value=!0,u.commit("login"),setTimeout((()=>{we.push("./")}),2e3))}))};return(e,l)=>{const u=a("el-input"),p=a("el-alert"),m=a("el-button"),v=a("router-link");return n(),t("div",null,[Y,o(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e),placeholder:"Username"},null,8,["modelValue"]),q,J,o(u,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e),placeholder:"Password","show-password":""},null,8,["modelValue"]),K,Q,i.value?(n(),t(p,{key:0,closable:!1,title:"Username or password is invalid!",type:"error"})):h("",!0),d.value?(n(),t(p,{key:1,closable:!1,title:"Login success! Going to the home page...",type:"success"})):h("",!0),W,o(m,{type:"primary",onClick:c},{default:G((()=>[X])),_:1}),Z,ee,o(v,{to:"/signup"},{default:G((()=>[o(m,{plain:"",type:"success"},{default:G((()=>[le])),_:1})])),_:1})])}}});ae.__scopeId="data-v-70517cb2";const ne=c();p("data-v-4ed9a7ec");const te=o("br",null,null,-1),oe=o("br",null,null,-1),ue=o("br",null,null,-1),se=o("br",null,null,-1),re=o("br",null,null,-1),ie=o("br",null,null,-1),de=o("br",null,null,-1),ce=o("br",null,null,-1),pe=i("Sign Up "),me=o("br",null,null,-1),ve=o("br",null,null,-1),ge=i(" or Back to Log In ");m();var he=e({expose:[],setup(e){const l=g(""),u=g(""),s=g(""),r=g(!1),i=g(!1),d=g(!1),c=()=>{""!==l.value&&""!==u.value?(r.value=!1,u.value===s.value?(i.value=!1,b.post("http://localhost:3000/api/signup",{username:l.value,password:u.value}).then((()=>{d.value=!0,setTimeout((()=>{we.push("./login")}),2e3)}))):i.value=!0):r.value=!0};return(e,p)=>{const m=a("el-input"),v=a("el-alert"),g=a("el-button"),b=a("router-link");return n(),t("div",null,[te,o(m,{type:"text",modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=e=>l.value=e),placeholder:"Username",clearable:""},null,8,["modelValue"]),oe,ue,o(m,{type:"text",modelValue:u.value,"onUpdate:modelValue":p[2]||(p[2]=e=>u.value=e),placeholder:"Password","show-password":""},null,8,["modelValue"]),se,re,o(m,{type:"text",modelValue:s.value,"onUpdate:modelValue":p[3]||(p[3]=e=>s.value=e),placeholder:"Confirm your password","show-password":""},null,8,["modelValue"]),ie,de,r.value?(n(),t(v,{key:0,closable:!1,title:"Username or password is empty!",type:"error"})):h("",!0),i.value?(n(),t(v,{key:1,closable:!1,title:"Password does not match!",type:"error"})):h("",!0),d.value?(n(),t(v,{key:2,closable:!1,title:"Sign up success! Returning to login page...",type:"success"})):h("",!0),ce,o(g,{type:"success",onClick:c},{default:ne((()=>[pe])),_:1}),me,ve,o(b,{to:"/login"},{default:ne((()=>[o(g,{plain:"",type:"primary"},{default:ne((()=>[ge])),_:1})])),_:1})])}}});he.__scopeId="data-v-4ed9a7ec";const be={class:"title"};const fe=[{path:"/",name:"Home",component:R},{path:"/login",name:"Login",component:ae},{path:"/signup",name:"SignUp",component:he},{path:"/cart",name:"Cart",component:I},{path:"/admin",name:"Admin",component:F,children:[{path:"new",name:"New",component:N},{path:"product",name:"Product",component:{}},{path:"edit/:id",name:"Edit",component:D}]},{path:"/detail",name:"Detail",component:e({expose:[],setup(e){const l=g("Detail");return(e,a)=>(n(),t("div",null,[o("div",be,[o("h1",null,v(l.value),1)])]))}})}],we=f({history:w(),routes:fe,scrollBehavior:()=>({top:0})}),ye={loginState:!1};var _e=y({state:()=>ye,mutations:{login(e){e.loginState=!0},logout(e){e.loginState=!1}},actions:{login(e){e.commit("login")},logout(e){e.commit("logout")}},getters:{}});_(C).use(we).use(_e).use(x).mount("#app");
