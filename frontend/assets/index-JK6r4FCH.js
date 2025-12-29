import{r as o,j as e,u as c,a as u,b as d,c as x}from"./index-D5YYRnqi.js";import{P as f,D as a,u as m}from"./Post-Cz4wasRl.js";import{u as p,G as h}from"./graphql.types-Dx3DKrNT.js";import{u as j}from"./NavigationPanelContext-DmsjwQCu.js";import{i as w}from"./iconsLoader-BPwpFtUO.js";import{S as v,P as N}from"./PostContainer-DTo9-eTm.js";import"./Backdrop-BlIsgF5q.js";import"./Button-BPaPnenE.js";import"./react-PGDQaRC_.js";import"./BackButton-qpY1fYxt.js";function g(){const[t,s]=o.useState(null),{data:r}=p(h,{},{queryKey:["posts"]});if(r?.posts){const n=r.posts;return e.jsx("div",{className:`feed-section\r
				flex flex-col w-full items-center\r
			`,children:n.map((l,i)=>e.jsxs(e.Fragment,{children:[e.jsx(f,{post:l,threeDotsMenu:[t,s],postCreationDate:!0,trimmedDescription:!0}),i===n.length-1&&e.jsx("div",{className:"mb-10"}),i!==n.length-1&&e.jsx(a,{extendedClass:"my-5"})]}))})}}function y({introText:t}){const{user:[s]}=d();return e.jsxs("div",{className:`intro\r
			w-full h-full\r
			flex flex-row justify-end gap-3\r
			xl:h-[70%] xl:gap-1\r
		`,children:[e.jsx("div",{className:"profile-pic h-full xl:w-[10%]",children:e.jsx("div",{className:"flex w-full h-full items-center justify-center",children:e.jsx("div",{className:"profile-pic h-10 w-10 overflow-hidden rounded-[50%]",children:s&&e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})})}),e.jsx("div",{className:"intro-text flex items-center justify-start h-full w-full xl:w-[90%]",children:e.jsx("span",{className:"font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]",children:t||"What are you working on?"})}),e.jsx("div",{className:"tools-section flex justify-center items-center xl:hidden ",children:e.jsx("div",{className:"plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center",children:e.jsx(w.plus,{width:"30",height:"30",stroke:"#1E1E1E"})})})]})}function E({introText:t}){const{openOverlay:s}=c(),{width:r}=m(),n=u();function l(){r>1024?s(e.jsx(N,{})):n("/post/create")}return e.jsxs("div",{className:"flex flex-col w-full items-center",children:[e.jsxs("div",{className:`post-section\r
				rounded-[13px] border-[0.5px] border-gray-300\r
				w-full gap-4 p-2\r
				flex flex-col\r
				xl:p-0\r
				desktop:gap-5\r
				cursor-pointer\r
			`,onClick:l,children:[e.jsx(y,{introText:t}),e.jsx(v,{className:`\r
					p-2\r
					w-full h-[30%]\r
					hidden\r
					xl:flex justify-between\r
				`})]}),e.jsx(a,{extendedClass:"my-7"})]})}function U(){const{navElements:[,t]}=j(),{sideBar:[,s]}=x();return o.useEffect(()=>(t({desktop:{show:!0}}),()=>t({})),[]),o.useEffect(()=>()=>s(!1),[s]),e.jsxs("div",{className:"flex w-full flex-col mt-5",children:[e.jsx(E,{}),e.jsx(g,{})]})}export{U as default};
