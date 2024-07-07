import{r as l,j as e,u as G,L as j,O as H}from"./index-DejjGbKT.js";import{c as h,b as N,B as y}from"./button-C-qDQRJn.js";import{c as J,u as U,a as X,b as q,P as K,d as Q,T as Y,e as T,f as $,g as P,L as O}from"./layout-B5HMipk9.js";import{P as w,u as Z,c as m}from"./index-JIfCFLoM.js";import{D as ee,a as se,b as te,c as ae,d as ne,e as re}from"./dropdown-menu-C9_Yoqs1.js";import{u as b,T as oe}from"./useTranslation-B_eRcuCs.js";var ie=h("apps","IconApps",[["path",{d:"M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-1"}],["path",{d:"M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",key:"svg-2"}],["path",{d:"M14 7l6 0",key:"svg-3"}],["path",{d:"M17 4l0 6",key:"svg-4"}]]),S=h("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),le=h("chevrons-left","IconChevronsLeft",[["path",{d:"M11 7l-5 5l5 5",key:"svg-0"}],["path",{d:"M17 7l-5 5l5 5",key:"svg-1"}]]),ce=h("layout-dashboard","IconLayoutDashboard",[["path",{d:"M4 4h6v8h-6z",key:"svg-0"}],["path",{d:"M4 16h6v4h-6z",key:"svg-1"}],["path",{d:"M14 12h6v8h-6z",key:"svg-2"}],["path",{d:"M14 4h6v4h-6z",key:"svg-3"}]]),de=h("menu-2","IconMenu2",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l16 0",key:"svg-2"}]]),pe=h("paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]),he=h("users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]]),ue=h("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),k="Collapsible",[me,Te]=J(k),[ve,C]=me(k),_=l.forwardRef((t,n)=>{const{__scopeCollapsible:a,open:s,defaultOpen:r,disabled:i,onOpenChange:o,...c}=t,[u=!1,p]=U({prop:s,defaultProp:r,onChange:o});return e.jsx(ve,{scope:a,disabled:i,contentId:X(),open:u,onOpenToggle:l.useCallback(()=>p(f=>!f),[p]),children:e.jsx(w.div,{"data-state":I(u),"data-disabled":i?"":void 0,...c,ref:n})})});_.displayName=k;var B="CollapsibleTrigger",V=l.forwardRef((t,n)=>{const{__scopeCollapsible:a,...s}=t,r=C(B,a);return e.jsx(w.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":I(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...s,ref:n,onClick:q(t.onClick,r.onOpenToggle)})});V.displayName=B;var M="CollapsibleContent",W=l.forwardRef((t,n)=>{const{forceMount:a,...s}=t,r=C(M,t.__scopeCollapsible);return e.jsx(K,{present:a||r.open,children:({present:i})=>e.jsx(xe,{...s,ref:n,present:i})})});W.displayName=M;var xe=l.forwardRef((t,n)=>{const{__scopeCollapsible:a,present:s,children:r,...i}=t,o=C(M,a),[c,u]=l.useState(s),p=l.useRef(null),f=Z(n,p),L=l.useRef(0),A=L.current,z=l.useRef(0),D=z.current,g=o.open||c,R=l.useRef(g),v=l.useRef();return l.useEffect(()=>{const d=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(d)},[]),Q(()=>{const d=p.current;if(d){v.current=v.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const E=d.getBoundingClientRect();L.current=E.height,z.current=E.width,R.current||(d.style.transitionDuration=v.current.transitionDuration,d.style.animationName=v.current.animationName),u(s)}},[o.open,s]),e.jsx(w.div,{"data-state":I(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!g,...i,ref:f,style:{"--radix-collapsible-content-height":A?`${A}px`:void 0,"--radix-collapsible-content-width":D?`${D}px`:void 0,...t.style},children:g&&r})});function I(t){return t?"open":"closed"}var fe=_;const ge=fe,ye=V,je=W;function x(){const{pathname:t}=G();return{checkActiveNav:a=>{const s=t.split("/").filter(r=>r!=="");return a==="/"&&s.length<1?!0:s.includes(a.replace(/^\//,""))}}}function Ne({links:t,isCollapsed:n,className:a,closeNav:s}){const r=({sub:i,...o})=>{b();const c=`${o.title}-${o.href}`;return n&&i?l.createElement(ke,{...o,sub:i,key:c,closeNav:s}):n?l.createElement(be,{...o,key:c,closeNav:s}):i?l.createElement(we,{...o,sub:i,key:c,closeNav:s}):l.createElement(F,{...o,key:c,closeNav:s})};return e.jsx("div",{"data-collapsed":n,className:m("group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none",a),children:e.jsx(Y,{delayDuration:0,children:e.jsx("nav",{className:"grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2",children:t.map(r)})})})}function F({title:t,icon:n,label:a,href:s,closeNav:r,subLink:i=!1}){const{checkActiveNav:o}=x();return b(),e.jsxs(j,{to:s,onClick:r,className:m(N({variant:o(s)?"secondary":"ghost",size:"sm"}),"h-12 justify-start text-wrap rounded-none px-6",i&&"h-10 w-full border-l border-l-slate-500 px-2"),"aria-current":o(s)?"page":void 0,children:[e.jsx("div",{className:"mr-2",children:n}),e.jsx(oe,{Trans:!0,i18nKey:`sidebar.${t.toLowerCase()}`,children:t}),a&&e.jsx("div",{className:"ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground",children:a})]})}function we({title:t,icon:n,label:a,sub:s,closeNav:r}){const{checkActiveNav:i}=x(),o=!!(s!=null&&s.find(c=>i(c.href)));return e.jsxs(ge,{defaultOpen:o,children:[e.jsxs(ye,{className:m(N({variant:"ghost",size:"sm"}),"group h-12 w-full justify-start rounded-none px-6"),children:[e.jsx("div",{className:"mr-2",children:n}),t,a&&e.jsx("div",{className:"ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground",children:a}),e.jsx("span",{className:m('ml-auto transition-all group-data-[state="open"]:-rotate-180'),children:e.jsx(S,{stroke:1})})]}),e.jsx(je,{className:"collapsibleDropdown",asChild:!0,children:e.jsx("ul",{children:s.map(c=>e.jsx("li",{className:"my-1 ml-8",children:e.jsx(F,{...c,subLink:!0,closeNav:r})},c.title))})})]})}function be({title:t,icon:n,label:a,href:s}){const{checkActiveNav:r}=x();return e.jsxs(T,{delayDuration:0,children:[e.jsx($,{asChild:!0,children:e.jsxs(j,{to:s,className:m(N({variant:r(s)?"secondary":"ghost",size:"icon"}),"h-12 w-12"),children:[n,e.jsx("span",{className:"sr-only",children:t})]})}),e.jsxs(P,{side:"right",className:"flex items-center gap-4",children:[t,a&&e.jsx("span",{className:"ml-auto text-muted-foreground",children:a})]})]})}function ke({title:t,icon:n,label:a,sub:s}){const{checkActiveNav:r}=x(),i=!!(s!=null&&s.find(o=>r(o.href)));return e.jsxs(ee,{children:[e.jsxs(T,{delayDuration:0,children:[e.jsx($,{asChild:!0,children:e.jsx(se,{asChild:!0,children:e.jsx(y,{variant:i?"secondary":"ghost",size:"icon",className:"h-12 w-12",children:n})})}),e.jsxs(P,{side:"right",className:"flex items-center gap-4",children:[t," ",a&&e.jsx("span",{className:"ml-auto text-muted-foreground",children:a}),e.jsx(S,{size:18,className:"-rotate-90 text-muted-foreground"})]})]}),e.jsxs(te,{side:"right",align:"start",sideOffset:4,children:[e.jsxs(ae,{children:[t," ",a?`(${a})`:""]}),e.jsx(ne,{}),s.map(({title:o,icon:c,label:u,href:p})=>e.jsx(re,{asChild:!0,children:e.jsxs(j,{to:p,className:`${r(p)?"bg-secondary":""}`,children:[c," ",e.jsx("span",{className:"ml-2 max-w-52 text-wrap",children:o}),u&&e.jsx("span",{className:"ml-auto text-xs",children:u})]})},`${o}-${p}`))]})]})}const Ce=[{title:"Overview",label:"",href:"/",icon:e.jsx(ce,{size:18}),isActive:!0},{title:"Employees",label:"9",href:"/employees",icon:e.jsx(he,{size:18}),isActive:!1},{title:"Documents",label:"",href:"/documents",icon:e.jsx(pe,{size:18}),isActive:!1},{title:"Apps",label:"",href:"/apps",icon:e.jsx(ie,{size:18}),isActive:!1}],Me=({className:t,isCollapsed:n,setIsCollapsed:a})=>{b();const[s,r]=l.useState(!1);return l.useEffect(()=>{s?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[s]),e.jsxs("aside",{className:m(`fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${n?"md:w-14":"md:w-64"}`,t),children:[e.jsx("div",{onClick:()=>r(!1),className:`absolute inset-0 transition-[opacity] delay-100 duration-700 ${s?"h-svh opacity-50":"h-0 opacity-0"} w-full bg-black md:hidden`}),e.jsxs(O,{fixed:!0,className:s?"h-svh":"",children:[e.jsxs(O.Header,{sticky:!0,className:"z-50 flex justify-between px-4 py-3 shadow-sm md:px-4",children:[e.jsxs("div",{className:`flex items-center ${n?"":"gap-2"}`,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",className:`transition-all ${n?"h-6 w-6":"h-8 w-8"}`,children:[e.jsx("rect",{width:"256",height:"256",fill:"none"}),e.jsx("line",{x1:"208",y1:"128",x2:"128",y2:"208",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.jsx("line",{x1:"192",y1:"40",x2:"40",y2:"192",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.jsx("span",{className:"sr-only",children:"Website Name"})]}),e.jsxs("div",{className:`flex flex-col justify-end truncate ${n?"invisible w-0":"visible w-auto"}`,children:[e.jsx("span",{className:"font-medium",children:"MOA CONSOLE"}),e.jsx("span",{className:"text-xs"})]})]}),e.jsx(y,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Toggle Navigation","aria-controls":"sidebar-menu","aria-expanded":s,onClick:()=>r(i=>!i),children:s?e.jsx(ue,{}):e.jsx(de,{})})]}),e.jsx(Ne,{id:"sidebar-menu",className:`z-40 h-full flex-1 overflow-auto ${s?"max-h-screen":"max-h-0 py-0 md:max-h-screen md:py-2"}`,closeNav:()=>r(!1),isCollapsed:n,links:Ce}),e.jsx(y,{onClick:()=>a(i=>!i),size:"icon",variant:"outline",className:"absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex",children:e.jsx(le,{stroke:1.5,className:`h-5 w-5 ${n?"rotate-180":""}`})})]})]})},Ie=({key:t,defaultValue:n})=>{const[a,s]=l.useState(()=>{const r=localStorage.getItem(t);return r!==null?JSON.parse(r):n});return l.useEffect(()=>{localStorage.setItem(t,JSON.stringify(a))},[a,t]),[a,s]},Le=()=>{const[t,n]=Ie({key:"collapsed-sidebar",defaultValue:!1});return l.useEffect(()=>{const a=()=>{n(window.innerWidth<768?!1:t)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[t,n]),[t,n]};function $e(){const[t,n]=Le();return e.jsxs("div",{className:"relative h-full overflow-hidden bg-background",children:[e.jsx(Me,{isCollapsed:t,setIsCollapsed:n}),e.jsx("main",{id:"content",className:`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${t?"md:ml-14":"md:ml-64"} h-full`,children:e.jsx(H,{})})]})}export{$e as default};