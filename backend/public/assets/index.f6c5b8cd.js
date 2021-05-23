import{d as e,u as a,r as t,o as l,c as o,a as n,w as r,b as u,F as s,e as d,p,f as c,g as i,t as m,h,i as v,j as b,C as f,k as g,l as y,m as _,n as w,q as k,s as C,v as V,x,I as P}from"./vendor.416ab1ab.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,n)=>{const r=new URL(e,l);if(self[a].moduleMap[r])return t(self[a].moduleMap[r]);const u=new Blob([`import * as m from '${r}';`,`${a}.moduleMap['${r}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){n(new Error(`Failed to import: ${e}`)),o(s)},onload(){t(self[a].moduleMap[r]),o(s)}});document.head.appendChild(s)})),self[a].moduleMap={}}}("/assets/");const U=d(" Home "),S=d(" Admin "),A=d(" Cart "),O=d(" Chat "),I=d(" Track your Order ");var T=e({expose:[],setup(e){const d=a();return(e,a)=>{const p=t("el-menu-item"),c=t("el-avatar"),i=t("el-menu"),m=t("router-view");return l(),o(s,null,[n("nav",null,[n(i,{"default-active":"/",mode:"horizontal",router:""},{default:r((()=>[n(p,{index:"/"},{default:r((()=>[U])),_:1}),n(p,{index:"/admin"},{default:r((()=>[S])),_:1}),n(p,{index:"/cart"},{default:r((()=>[A])),_:1}),n(p,{index:"/chat"},{default:r((()=>[O])),_:1}),n(p,{index:"/track"},{default:r((()=>[I])),_:1}),u(d).state.loginState?(l(),o(p,{key:0,index:"/user",id:"user"},{default:r((()=>[n(c,{src:"http://localhost:3000/assets/user.png"})])),_:1})):(l(),o(p,{key:1,index:"/login",id:"user"},{default:r((()=>[n(c,{class:"el-icon-user"})])),_:1}))])),_:1})]),n(m,{id:"r"})],64)}}});const L=h();p("data-v-22fba0c2");const $=n("h1",null,"All Your Electronics",-1);c();var j=e({expose:[],setup(e){const a=[{name:"phone",img:"Phone.jpg"},{name:"computer",img:"Computer.jpg"},{name:"TV",img:"TV.jpg"},{name:"camera",img:"Camera.jpg"},{name:"pad",img:"Pad.jpg"},{name:"headphone",img:"Headphone.jpg"}];return(e,r)=>{const u=t("router-link"),d=t("el-card"),p=t("el-col"),c=t("el-row");return l(),o("div",null,[$,n(c,null,{default:L((()=>[(l(),o(s,null,i(a,(e=>n(p,{span:8},{default:L((()=>[n(d,{"body-style":{padding:"0px"}},{default:L((()=>[n(u,{to:"/category/"+e.name},{default:L((()=>[n("img",{src:"http://localhost:3000/assets/"+e.img,class:"image"},null,8,["src"])])),_:2},1032,["to"]),n("h2",null,m(e.name),1)])),_:2},1024)])),_:2},1024))),64))])),_:1})])}}});j.__scopeId="data-v-22fba0c2";const D=n("h1",null,"Shopping Cart",-1),F=d("+ 1 "),q=d("- 1 "),R=d("Delete "),E=d("Check Out");var M=e({expose:[],setup(e){const s=a(),d=v(),p=()=>{if(!1===s.state.loginState||""===s.state.username)return b({duration:1200,type:"error",message:"You need to login first! Going to login page..."}),void setTimeout((()=>{d.push("./login")}),1200);if(0===s.state.cart.length)return void b({duration:1200,type:"warning",message:"Your cart is empty!"});const e={date:(new Date).toLocaleDateString(),username:s.state.username,price:s.getters.total,item:s.state.cart.map((e=>e.quantity+" x "+e.name)).join(", "),shipment:"pending"};f.post("http://localhost:3000/api/checkout",e).then((()=>{s.commit("clearCart"),b({duration:1200,type:"success",message:"Check out success!"})}))};return(e,a)=>{const d=t("el-table-column"),c=t("el-button"),i=t("el-table");return l(),o("div",null,[D,n(i,{data:u(s).state.cart,"empty-text":"Your cart is empty"},{default:r((()=>[n(d,{sortable:"",prop:"name",label:"Product"}),n(d,{sortable:"",prop:"price",label:"Price($)"}),n(d,{sortable:"",prop:"quantity",label:"Quantity"}),n(d,{label:"Operation"},{default:r((e=>[n(c,{plain:"",size:"small",type:"success",onClick:a=>{return t=e.row,void s.commit("addOne",t);var t}},{default:r((()=>[F])),_:2},1032,["onClick"]),n(c,{plain:"",size:"small",type:"warning",onClick:a=>{return t=e.row,void s.commit("removeOne",t);var t}},{default:r((()=>[q])),_:2},1032,["onClick"]),n(c,{plain:"",size:"small",type:"danger",onClick:a=>{return t=e.row,void s.commit("removeFromCart",t);var t}},{default:r((()=>[R])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n("h2",null,"Total: $"+m(u(s).getters.total),1),n(c,{plain:"",type:"primary",onClick:p},{default:r((()=>[E])),_:1})])}}});const z={class:"title"},Y=d("Add to Cart");var G=e({expose:[],setup(e){const d=a(),p=y().params.name,c=g([]);f.get(`http://localhost:3000/api/product/${p}`).then((e=>{e.data.map((e=>{c.push(e)}))}));return(e,a)=>{const p=t("el-divider"),h=t("el-button");return l(),o("div",null,[n("div",z,[n("h1",null,m(e.$route.params.name),1),n(p),(l(!0),o(s,null,i(u(c),(e=>(l(),o("div",null,[n("h2",null,m(e.name),1),n("h3",null,"Price: $"+m(e.price),1),n(h,{onClick:a=>(e=>{d.commit("addToCart",e),b({duration:1200,type:"success",message:`${e.name} has been added to the cart`})})(e)},{default:r((()=>[Y])),_:2},1032,["onClick"]),n(p)])))),256))])])}}});const H=h();p("data-v-1db1cbfb");const N={key:0},B=d(" View Products "),Q=d(" View Orders "),J=d(" New Products "),K=d(" Customer Feedbacks "),W=d(" Report "),X=d(" Chat "),Z={key:1},ee=n("h2",null,"Log In",-1),ae=n("br",null,null,-1),te=n("br",null,null,-1),le=n("br",null,null,-1),oe=n("br",null,null,-1),ne=d(" Log In ");c();var re=e({expose:[],setup(e){const r=a(),s=v(),d=_(""),p=_(""),c=()=>{f.post("http://localhost:3000/api/login/admin",{username:d.value,password:p.value}).then((e=>{e.data?(r.commit("admin"),b({duration:1200,type:"success",message:"Admin login success!"}),s.push("/admin/products")):b({duration:1200,type:"error",message:"Admin username or password is invalid!"})}))};return(e,a)=>{const s=t("el-menu-item"),i=t("el-menu"),m=t("router-view"),h=t("el-input"),v=t("el-button");return u(r).state.adminState?(l(),o("div",N,[n(i,{"default-active":"/",mode:"horizontal",router:""},{default:H((()=>[n(s,{index:"/admin/products"},{default:H((()=>[B])),_:1}),n(s,{index:"/admin/orders"},{default:H((()=>[Q])),_:1}),n(s,{index:"/admin/new"},{default:H((()=>[J])),_:1}),n(s,{index:"/admin/feedback"},{default:H((()=>[K])),_:1}),n(s,{index:"/admin/report"},{default:H((()=>[W])),_:1}),n(s,{index:"/admin/chat"},{default:H((()=>[X])),_:1})])),_:1}),n(m)])):(l(),o("div",Z,[ee,n(h,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e),placeholder:"Username"},null,8,["modelValue"]),ae,te,n(h,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value=e),placeholder:"Password","show-password":""},null,8,["modelValue"]),le,oe,n(v,{type:"primary",onClick:c},{default:H((()=>[ne])),_:1})]))}}});re.__scopeId="data-v-1db1cbfb",p("data-v-3d7a4298");const ue={id:"new"},se=n("h1",null,"Report",-1),de=n("h2",null,"Product Sold",-1);c();var pe=e({expose:[],setup(e){const a=g(Array());f.get("http://localhost:3000/api/orders").then((e=>{for(const t of e.data)a.push(t)}));const r=g(Array());f.get("http://localhost:3000/api/product").then((e=>{for(const a of e.data)r.push(a)}));const u=_(new Map),d=_(Array()),p=_(Array()),c=()=>{d.value=a.filter((e=>new Date(e.date).valueOf()>p.value[0].valueOf()&&new Date(e.date).valueOf()<p.value[1].valueOf()));let e=Array(),t=Array();d.value.forEach((a=>{let t=a.products.split(", ");e.push(...t)})),e.forEach((e=>{t.push(e.split(" x "))})),u.value=new Map,t.forEach((e=>{u.value.has(e[1])?u.value.set(e[1],u.value.get(e[1])+Number(e[0])):u.value.set(e[1],Number(e[0]))}))};return(e,a)=>{const r=t("el-date-picker");return l(),o("div",ue,[se,n(r,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),type:"daterange","range-separator":"to","start-placeholder":"start date","end-placeholder":"end date",onChange:c},null,8,["modelValue"]),de,n("ul",null,[(l(!0),o(s,null,i(u.value,(e=>(l(),o("li",null,m(e[0])+" : "+m(e[1]),1)))),256))])])}}});pe.__scopeId="data-v-3d7a4298";const ce=h();p("data-v-7d835300");const ie=n("h2",null,"If you have any comment, please:",-1),me={id:"feedback"},he=n("br",null,null,-1),ve=n("br",null,null,-1),be=d("Send your Feedback"),fe=d("Log out");c();var ge=e({expose:[],setup(e){const r=_(""),s=a(),d=v(),p=()=>{s.commit("logout"),b({duration:1200,type:"error",message:"Logout success! Going to the home page..."}),setTimeout((()=>{d.push("./")}),1200)},c=()=>{let e={username:s.state.username,feedback:r.value};f.post("http://localhost:3000/api/feedback",e).then((()=>{r.value="",b({duration:1200,type:"success",message:"Feedback sent!"})}))};return(e,a)=>{const d=t("el-input"),i=t("el-button"),h=t("el-divider");return l(),o("div",null,[n("h1",null,"Hi, "+m(u(s).state.username),1),ie,n("div",me,[n(d,{type:"textarea",placeholder:"Please tell us what you think",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),rows:"15"},null,8,["modelValue"]),he,ve,n(i,{onClick:c},{default:ce((()=>[be])),_:1})]),n(h),n(i,{onClick:p,plain:"",type:"danger"},{default:ce((()=>[fe])),_:1})])}}});ge.__scopeId="data-v-7d835300";const ye=h();p("data-v-1ab5051f");const _e={id:"chat"},we=n("h1",null,"Chat with our staff",-1),ke={id:"chat"},Ce=n("br",null,null,-1),Ve=n("br",null,null,-1),xe=d(" Send ");c();var Pe=e({expose:[],setup(e){const a=w("http://localhost:3000");a.on("chat",(function(e){u.value.push(e)}));const r=_(""),u=_(Array()),d=_(!0),p=()=>{d.value=!r.value.length},c=()=>{a.emit("chat","customer: "+r.value),r.value="",d.value=!0};return(e,a)=>{const h=t("el-input"),v=t("el-button");return l(),o("div",_e,[we,n("div",ke,[n("div",null,[(l(!0),o(s,null,i(u.value,(e=>(l(),o("h3",null,m(e),1)))),256))]),n(h,{type:"textarea",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),onInput:p,rows:"5"},null,8,["modelValue"]),Ce,Ve,n(v,{type:"primary",disabled:d.value,onClick:c},{default:ye((()=>[xe])),_:1},8,["disabled"])])])}}});Pe.__scopeId="data-v-1ab5051f";const Ue=n("h1",null,"Track Your Order",-1);var Se=e({expose:[],setup(e){const s=a(),d=v(),p=g(Array());return s.state.loginState?f.post("http://localhost:3000/api/order",{username:s.state.username}).then((e=>{for(const a of e.data)p.push(a)})):(b({duration:1200,type:"error",message:"Please login first! Going to the login page..."}),setTimeout((()=>{d.push("./login")}),1200)),(e,a)=>{const s=t("el-table-column"),d=t("el-table");return l(),o("div",null,[Ue,n(d,{data:u(p),"empty-text":"You have no order"},{default:r((()=>[n(s,{sortable:"",prop:"id",label:"Order ID"}),n(s,{sortable:"",prop:"date",label:"Order Date"}),n(s,{sortable:"",prop:"price",label:"Price($)"}),n(s,{sortable:"",prop:"products",label:"Products"}),n(s,{sortable:"",prop:"shipment",label:"Shipment"})])),_:1},8,["data"])])}}});const Ae=h();p("data-v-1fcebfbc");const Oe={id:"new"},Ie=n("h1",null,"Add a New Product",-1),Te=n("label",null,"Product name: ",-1),Le=n("br",null,null,-1),$e=n("br",null,null,-1),je=n("label",null,"Price: ",-1),De=n("br",null,null,-1),Fe=n("br",null,null,-1),qe=n("label",null,"Category: ",-1),Re=d("Phone"),Ee=d("Computer"),Me=d("TV"),ze=d("Camera"),Ye=d("Pad"),Ge=d("Headphone"),He=n("br",null,null,-1),Ne=n("br",null,null,-1),Be=d(" Add Product ");c();var Qe=e({expose:[],setup(e){const a=_({name:"",price:0,category:""}),r=()=>{""!==a.value.name&&""!==a.value.category&&0!==a.value.price?f.post("http://localhost:3000/api/product/new",a.value).then((()=>{b({duration:1200,type:"success",message:"Add product success!"})})):b({duration:1200,type:"error",message:"Enter product detail!"})};return(e,u)=>{const s=t("el-input"),d=t("el-option"),p=t("el-select"),c=t("el-button");return l(),o("div",Oe,[Ie,Te,n(s,{modelValue:a.value.name,"onUpdate:modelValue":u[1]||(u[1]=e=>a.value.name=e)},null,8,["modelValue"]),Le,$e,je,n(s,{modelValue:a.value.price,"onUpdate:modelValue":u[2]||(u[2]=e=>a.value.price=e),placeholder:"Product price",type:"number"},null,8,["modelValue"]),De,Fe,qe,n(p,{modelValue:a.value.category,"onUpdate:modelValue":u[3]||(u[3]=e=>a.value.category=e),placeholder:"category"},{default:Ae((()=>[n(d,{value:"phone"},{default:Ae((()=>[Re])),_:1}),n(d,{value:"computer"},{default:Ae((()=>[Ee])),_:1}),n(d,{value:"TV"},{default:Ae((()=>[Me])),_:1}),n(d,{value:"camera"},{default:Ae((()=>[ze])),_:1}),n(d,{value:"pad"},{default:Ae((()=>[Ye])),_:1}),n(d,{value:"headphone"},{default:Ae((()=>[Ge])),_:1})])),_:1},8,["modelValue"]),He,Ne,n(c,{onClick:r},{default:Ae((()=>[Be])),_:1})])}}});Qe.__scopeId="data-v-1fcebfbc";const Je=h();p("data-v-e6f519e4");const Ke={id:"chat"},We=n("h1",null,"Reply your customers",-1),Xe={id:"chat"},Ze=n("br",null,null,-1),ea=n("br",null,null,-1),aa=d(" Send ");c();var ta=e({expose:[],setup(e){const r=w("http://localhost:3000");r.on("chat",(function(e){d.value.push(e)}));const u=_(""),d=_(Array()),p=_(!0);a(),v();const c=()=>{p.value=!u.value.length},h=()=>{r.emit("chat","Staff: "+u.value),u.value="",p.value=!0};return(e,a)=>{const r=t("el-input"),v=t("el-button");return l(),o("div",Ke,[We,n("div",Xe,[n("div",null,[(l(!0),o(s,null,i(d.value,(e=>(l(),o("h3",null,m(e),1)))),256))]),n(r,{type:"textarea",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=e=>u.value=e),onInput:c,rows:"5"},null,8,["modelValue"]),Ze,ea,n(v,{type:"primary",disabled:p.value,onClick:h},{default:Je((()=>[aa])),_:1},8,["disabled"])])])}}});ta.__scopeId="data-v-e6f519e4";const la={class:"title"},oa=n("h1",null,"All Products",-1),na=d("Delete ");var ra=e({expose:[],setup(e){const a=g(Array());f.get("http://localhost:3000/api/product").then((e=>{for(const t of e.data)a.push(t)}));return(e,s)=>{const d=t("el-table-column"),p=t("el-button"),c=t("el-table");return l(),o("div",null,[n("div",la,[oa,n(c,{data:u(a),"empty-text":"There is no order"},{default:r((()=>[n(d,{prop:"id",label:"Product ID"}),n(d,{prop:"name",label:"Product"}),n(d,{prop:"category",label:"Product Category"}),n(d,{prop:"price",label:"Price($)"}),n(d,{label:"Operation"},{default:r((e=>[n(p,{plain:"",size:"small",type:"danger",onClick:t=>(e=>{f.post("http://localhost:3000/api/product/delete",{id:e.row.id}).then((()=>{f.get("http://localhost:3000/api/product").then((e=>{a.length=0;for(const t of e.data)a.push(t)})),b({duration:1200,type:"success",message:"Delete success"})}))})(e)},{default:r((()=>[na])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}}});const ua={class:"title"},sa=n("h1",null,"Customer Feedbacks",-1);var da=e({expose:[],setup(e){const a=g(Array());return f.get("http://localhost:3000/api/feedbacks").then((e=>{for(const t of e.data)a.push(t)})),(e,s)=>{const d=t("el-table-column"),p=t("el-table");return l(),o("div",null,[n("div",ua,[sa,n(p,{data:u(a),"empty-text":"There is no feedback"},{default:r((()=>[n(d,{prop:"id",label:"Feedback ID"}),n(d,{prop:"username",label:"Customer"}),n(d,{prop:"feedback",label:"Feedback"})])),_:1},8,["data"])])])}}});const pa={class:"title"},ca=n("h1",null,"All Orders",-1);var ia=e({expose:[],setup(e){const a=g(Array());f.get("http://localhost:3000/api/orders").then((e=>{for(const t of e.data)a.push(t)}));return(e,s)=>{const d=t("el-table-column"),p=t("el-option"),c=t("el-select"),i=t("el-table");return l(),o("div",null,[n("div",pa,[ca,n(i,{data:u(a),"empty-text":"There is no order"},{default:r((()=>[n(d,{prop:"id",label:"Order ID"}),n(d,{prop:"date",label:"Order Date"}),n(d,{prop:"username",label:"Customer"}),n(d,{prop:"price",label:"Price($)"}),n(d,{prop:"products",label:"Products"}),n(d,{prop:"shipment",label:"Shipment"}),n(d,{label:"Change Shipment State"},{default:r((e=>[n(c,{modelValue:u(a)[e.$index].shipment,"onUpdate:modelValue":t=>u(a)[e.$index].shipment=t,onChange:a=>(e=>{f.post("http://localhost:3000/api/orders/edit",{id:e.row.id,shipment:e.row.shipment}),b({duration:1200,type:"success",message:"Shipment state changed"})})(e)},{default:r((()=>[n(p,{label:"pending",value:"pending"}),n(p,{label:"shipped",value:"shipped"}),n(p,{label:"arrived",value:"arrived"})])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1},8,["data"])])])}}});const ma=h();p("data-v-4262042f");const ha=n("h2",null,"Log In",-1),va=n("br",null,null,-1),ba=n("br",null,null,-1),fa=n("br",null,null,-1),ga=n("br",null,null,-1),ya=d(" Log In "),_a=n("br",null,null,-1),wa=n("br",null,null,-1),ka=d(" or Sign Up ");c();var Ca=e({expose:[],setup(e){const r=v(),u=a(),s=_(""),d=_(""),p=_(!1),c=()=>{f.post("http://localhost:3000/api/login",{username:s.value,password:d.value}).then((e=>{p.value=!e.data,p.value?b({duration:1200,type:"error",message:"Username or password is invalid!"}):(u.commit("login",s.value),b({duration:1200,type:"success",message:"Login success! Going to the home page..."}),setTimeout((()=>{r.push("./")}),1200))}))};return(e,a)=>{const r=t("el-input"),u=t("el-button"),p=t("router-link");return l(),o("div",null,[ha,n(r,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),placeholder:"Username"},null,8,["modelValue"]),va,ba,n(r,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e),placeholder:"Password","show-password":""},null,8,["modelValue"]),fa,ga,n(u,{type:"primary",onClick:c},{default:ma((()=>[ya])),_:1}),_a,wa,n(p,{to:"/signup"},{default:ma((()=>[n(u,{plain:"",type:"success"},{default:ma((()=>[ka])),_:1})])),_:1})])}}});Ca.__scopeId="data-v-4262042f";const Va=h();p("data-v-0b124b8f");const xa=n("h2",null,"Sign Up",-1),Pa=n("br",null,null,-1),Ua=n("br",null,null,-1),Sa=n("br",null,null,-1),Aa=n("br",null,null,-1),Oa=n("br",null,null,-1),Ia=n("br",null,null,-1),Ta=d("Sign Up "),La=n("br",null,null,-1),$a=n("br",null,null,-1),ja=d(" or Back to Log In ");c();var Da=e({expose:[],setup(e){const a=v(),r=_(""),u=_(""),s=_("");_(!1);const d=()=>{""!==r.value&&""!==u.value&&""!==s.value?u.value===s.value?f.post("http://localhost:3000/api/signup",{username:r.value,password:u.value}).then((()=>{b({duration:1200,type:"success",message:"Sign up success! Going back to login page..."}),setTimeout((()=>{a.push("./login")}),1200)})):b({duration:1200,type:"error",message:"Password does not match!"}):b({duration:1200,type:"error",message:"Username or password is empty!"})};return(e,a)=>{const p=t("el-input"),c=t("el-button"),i=t("router-link");return l(),o("div",null,[xa,n(p,{type:"text",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),placeholder:"Username",clearable:""},null,8,["modelValue"]),Pa,Ua,n(p,{type:"text",modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value=e),placeholder:"Password","show-password":""},null,8,["modelValue"]),Sa,Aa,n(p,{type:"text",modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value=e),placeholder:"Confirm your password","show-password":""},null,8,["modelValue"]),Oa,Ia,n(c,{type:"success",onClick:d},{default:Va((()=>[Ta])),_:1}),La,$a,n(i,{to:"/login"},{default:Va((()=>[n(c,{plain:"",type:"primary"},{default:Va((()=>[ja])),_:1})])),_:1})])}}});Da.__scopeId="data-v-0b124b8f";const Fa=[{path:"/",name:"Home",component:j},{path:"/login",name:"Login",component:Ca},{path:"/track",name:"Track",component:Se},{path:"/user",name:"User",component:ge},{path:"/chat",name:"Chat",component:Pe},{path:"/signup",name:"SignUp",component:Da},{path:"/cart",name:"Cart",component:M},{path:"/category/:name",name:"Category",component:G},{path:"/admin",name:"Admin",component:re,children:[{path:"new",name:"New",component:Qe},{path:"chat",name:"AdminChat",component:ta},{path:"orders",name:"Orders",component:ia},{path:"products",name:"Products",component:ra},{path:"report",name:"Report",component:pe},{path:"feedback",name:"Feedback",component:da}]}],qa=k({history:C(),routes:Fa,scrollBehavior:()=>({top:0})}),Ra={loginState:!1,adminState:!1,cart:Array(),username:""};var Ea=V({state:()=>Ra,mutations:{admin(e){e.adminState=!0},login(e,a){e.loginState=!0,e.username=a},logout(e){e.loginState=!1,e.username=""},addToCart(e,a){let t=!1;for(const l of e.cart)l.name!==a.name||t||(l.price+=a.price,l.quantity++,t=!0);t||e.cart.push({name:a.name,price:a.price,quantity:1})},clearCart(e){e.cart=[]},removeFromCart(e,a){e.cart=e.cart.filter((e=>e.name!==a.name))},addOne(e,a){for(const t of e.cart)if(a.name===t.name){const e=a.price/a.quantity;t.price+=e,t.quantity++}},removeOne(e,a){for(const t of e.cart)if(a.name===t.name)if(1===t.quantity)e.cart=e.cart.filter((e=>e.name!==a.name));else{const e=a.price/a.quantity;t.price-=e,t.quantity--}}},actions:{login(e){e.commit("login")},logout(e){e.commit("logout")}},getters:{total(e){let a=0;for(const t of e.cart)a+=t.price;return a}}});x(T).use(qa).use(Ea).use(P).mount("#app");
