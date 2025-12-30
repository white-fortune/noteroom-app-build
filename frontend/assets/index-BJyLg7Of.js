import{r as l,j as e,u,a as d,b as x,c as f}from"./index-C-HgPblD.js";import{P as m,D as a,u as p}from"./Post-IKgPc4Zs.js";import{u as h,G as j}from"./graphql.types-CkS7XuXT.js";import{L as g}from"./LogoLoading-B-FPpVKY.js";import{u as v}from"./NavigationPanelContext-CZW345T9.js";import{i as w}from"./iconsLoader-BxcHFTQq.js";import{S as N,P as y}from"./PostContainer-A4WQFzwR.js";import"./Backdrop-BYpv-kXw.js";import"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import"./Button-CKnIGst7.js";import"./react-CzhbMtfo.js";import"./BackButton-BN5cJ5D8.js";function b(){const[t,s]=l.useState(null),{data:r,isLoading:o}=h(j,{},{queryKey:["posts"]});if(o)return e.jsx(g,{});if(r&&r.posts){const n=r.posts;return e.jsx("div",{className:`feed-section\r
				flex flex-col w-full items-center\r
			`,children:n.map((c,i)=>e.jsxs(e.Fragment,{children:[e.jsx(m,{post:c,threeDotsMenu:[t,s],postCreationDate:!0,trimmedDescription:!0}),i===n.length-1&&e.jsx("div",{className:"mb-10"}),i!==n.length-1&&e.jsx(a,{extendedClass:"my-5"})]}))})}}function E({introText:t}){const{user:[s]}=x();return e.jsxs("div",{className:`intro\r
			w-full h-full\r
			flex flex-row justify-end gap-3\r
			xl:h-[70%] xl:gap-1\r
		`,children:[e.jsx("div",{className:"profile-pic h-full xl:w-[10%]",children:e.jsx("div",{className:"flex w-full h-full items-center justify-center",children:e.jsx("div",{className:"profile-pic h-10 w-10 overflow-hidden rounded-[50%]",children:s&&e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})})}),e.jsx("div",{className:"intro-text flex items-center justify-start h-full w-full xl:w-[90%]",children:e.jsx("span",{className:"font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]",children:t||"What are you working on?"})}),e.jsx("div",{className:"tools-section flex justify-center items-center xl:hidden ",children:e.jsx("div",{className:"plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center",children:e.jsx(w.plus,{width:"30",height:"30",stroke:"#1E1E1E"})})})]})}function P({introText:t}){const{openOverlay:s}=u(),{width:r}=p(),o=d();function n(){r>1024?s(e.jsx(y,{})):o("/post/create")}return e.jsxs("div",{className:"flex flex-col w-full items-center",children:[e.jsxs("div",{className:`post-section\r
				rounded-[13px] border-[0.5px] border-gray-300 hover:bg-gray-100 active:bg-gray-100\r
				w-full gap-4 p-2\r
				flex flex-col\r
				xl:p-0\r
				desktop:gap-5\r
				cursor-pointer\r
			`,onClick:n,children:[e.jsx(E,{introText:t}),e.jsx(N,{className:`\r
					p-2\r
					w-full h-[30%]\r
					hidden\r
					xl:flex justify-between\r
				`})]}),e.jsx(a,{extendedClass:"my-7"})]})}function Q(){const{navElements:[,t]}=v(),{sideBar:[,s]}=f();return l.useEffect(()=>(t({desktop:{show:!0}}),()=>t({})),[]),l.useEffect(()=>()=>s(!1),[s]),e.jsxs("div",{className:"flex w-full flex-col mt-5",children:[e.jsx(P,{}),e.jsx(b,{})]})}export{Q as default};
