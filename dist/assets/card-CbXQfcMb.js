import{r as o,j as s}from"./index-Bvuik8sh.js";import{c as M,u as D,a as $,b as g,P as k}from"./layout-D9dI7FAm.js";import{u as C,v as V,R as G,I as L}from"./dropdown-menu-Dmj9OsNR.js";import{P as v,c as u}from"./index-CiLDlUfB.js";var x="Tabs",[H,se]=M(x,[C]),N=C(),[K,T]=H(x),y=o.forwardRef((e,a)=>{const{__scopeTabs:t,value:r,onValueChange:d,defaultValue:l,orientation:n="horizontal",dir:f,activationMode:b="automatic",...p}=e,c=V(f),[i,m]=D({prop:r,onChange:d,defaultProp:l});return s.jsx(K,{scope:t,baseId:$(),value:i,onValueChange:m,orientation:n,dir:c,activationMode:b,children:s.jsx(v.div,{dir:c,"data-orientation":n,...p,ref:a})})});y.displayName=x;var h="TabsList",R=o.forwardRef((e,a)=>{const{__scopeTabs:t,loop:r=!0,...d}=e,l=T(h,t),n=N(t);return s.jsx(G,{asChild:!0,...n,orientation:l.orientation,dir:l.dir,loop:r,children:s.jsx(v.div,{role:"tablist","aria-orientation":l.orientation,...d,ref:a})})});R.displayName=h;var j="TabsTrigger",w=o.forwardRef((e,a)=>{const{__scopeTabs:t,value:r,disabled:d=!1,...l}=e,n=T(j,t),f=N(t),b=A(n.baseId,r),p=P(n.baseId,r),c=r===n.value;return s.jsx(L,{asChild:!0,...f,focusable:!d,active:c,children:s.jsx(v.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":p,"data-state":c?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:b,...l,ref:a,onMouseDown:g(e.onMouseDown,i=>{!d&&i.button===0&&i.ctrlKey===!1?n.onValueChange(r):i.preventDefault()}),onKeyDown:g(e.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&n.onValueChange(r)}),onFocus:g(e.onFocus,()=>{const i=n.activationMode!=="manual";!c&&!d&&i&&n.onValueChange(r)})})})});w.displayName=j;var I="TabsContent",_=o.forwardRef((e,a)=>{const{__scopeTabs:t,value:r,forceMount:d,children:l,...n}=e,f=T(I,t),b=A(f.baseId,r),p=P(f.baseId,r),c=r===f.value,i=o.useRef(c);return o.useEffect(()=>{const m=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(m)},[]),s.jsx(k,{present:d||c,children:({present:m})=>s.jsx(v.div,{"data-state":c?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":b,hidden:!m,id:p,tabIndex:0,...n,ref:a,style:{...e.style,animationDuration:i.current?"0s":void 0},children:m&&l})})});_.displayName=I;function A(e,a){return`${e}-trigger-${a}`}function P(e,a){return`${e}-content-${a}`}var B=y,E=R,F=w,S=_;const oe=B,q=o.forwardRef(({className:e,...a},t)=>s.jsx(E,{ref:t,className:u("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...a}));q.displayName=E.displayName;const z=o.forwardRef(({className:e,...a},t)=>s.jsx(F,{ref:t,className:u("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...a}));z.displayName=F.displayName;const O=o.forwardRef(({className:e,...a},t)=>s.jsx(S,{ref:t,className:u("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...a}));O.displayName=S.displayName;const J=o.forwardRef(({className:e,...a},t)=>s.jsx("div",{ref:t,className:u("rounded-xl border bg-card text-card-foreground shadow",e),...a}));J.displayName="Card";const Q=o.forwardRef(({className:e,...a},t)=>s.jsx("div",{ref:t,className:u("flex flex-col space-y-1.5 p-6",e),...a}));Q.displayName="CardHeader";const U=o.forwardRef(({className:e,...a},t)=>s.jsx("h3",{ref:t,className:u("font-semibold leading-none tracking-tight",e),...a}));U.displayName="CardTitle";const W=o.forwardRef(({className:e,...a},t)=>s.jsx("p",{ref:t,className:u("text-sm text-muted-foreground",e),...a}));W.displayName="CardDescription";const X=o.forwardRef(({className:e,...a},t)=>s.jsx("div",{ref:t,className:u("p-6 pt-0",e),...a}));X.displayName="CardContent";const Y=o.forwardRef(({className:e,...a},t)=>s.jsx("div",{ref:t,className:u("flex items-center p-6 pt-0",e),...a}));Y.displayName="CardFooter";export{J as C,O as T,Q as a,U as b,W as c,X as d,Y as e,oe as f,q as g,z as h};
