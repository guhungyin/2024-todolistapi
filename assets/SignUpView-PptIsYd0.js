import{_,u as h,r as p,c as w,o as v,a as y,b as e,w as i,v as u,d as b,e as C,f as x,i as t,g as S,h as k,R as U,p as V,j as L}from"./index-f7zm6h8J.js";const l=n=>(V("data-v-c7fc0e16"),n=n(),L(),n),T={id:"signUpPage",class:"bg-yellow"},M={class:"conatiner signUpPage vhContainer"},H=l(()=>e("div",{class:"side"},[e("a",{href:"#"},[e("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),e("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1)),I={class:"formControls",action:"index.html"},P=l(()=>e("h2",{class:"formControls_txt"},"註冊帳號",-1)),q=l(()=>e("label",{class:"formControls_label",for:"email"},"Email",-1)),B=l(()=>e("label",{class:"formControls_label",for:"name"},"您的暱稱",-1)),E=l(()=>e("label",{class:"formControls_label",for:"password"},"密碼",-1)),N=l(()=>e("label",{class:"formControls_label",for:"againPassword"},"再次輸入密碼",-1)),R=["disabled"],D="https://todolist-api.hexschool.io",j={__name:"SignUpView",setup(n){const c=h(),a=p({email:"",password:"",nickname:""}),r=p(""),m=()=>{a.value.email==""?t.warn("請輸入Email",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0}):a.value.password==""?t.warn("請輸入密碼",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0}):a.value.nickname==""?t.warn("請輸入暱稱",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0}):r.value!==a.value.password?t.warn("密碼與再次輸入密碼不同",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0}):g()},g=async()=>{try{(await S.post(`${D}/users/sign_up`,a.value)).data.status===!0&&(t.success("註冊成功，請至登入頁登入",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0}),c.push({name:"loging"}))}catch(d){t.error(d.response.data.message,{theme:"auto",type:"default",dangerouslyHTMLString:!0})}},f=w(()=>a.value.email===""||a.value.password===""||a.value.nickname===""||r.value==="");return(d,s)=>(v(),y("div",T,[e("div",M,[H,e("div",null,[e("form",I,[P,q,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.email=o),class:"formControls_input",type:"text",name:"email",placeholder:"請輸入 email",autocomplete:"email",required:""},null,512),[[u,a.value.email]]),B,i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>a.value.nickname=o),class:"formControls_input",type:"text",name:"name",placeholder:"請輸入您的暱稱",autocomplete:"username"},null,512),[[u,a.value.nickname]]),E,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>a.value.password=o),class:"formControls_input",type:"password",name:"password",placeholder:"請輸入密碼",autocomplete:"new-password",required:""},null,512),[[u,a.value.password]]),N,i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>r.value=o),class:"formControls_input",type:"password",name:"againPassword",placeholder:"請再次輸入密碼",autocomplete:"new-password",required:""},null,512),[[u,r.value]]),e("input",{class:"formControls_btnSubmit",type:"button",onClick:m,value:"註冊帳號",disabled:f.value},null,8,R),b(x(U),{class:"formControls_btnLink",to:"/"},{default:C(()=>[k("登入")]),_:1})])])])]))}},$=_(j,[["__scopeId","data-v-c7fc0e16"]]);export{$ as default};
