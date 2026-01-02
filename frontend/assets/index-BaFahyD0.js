import{r as a,u as d,j as e,a as p,b as x,c as f,d as m}from"./index-CmNEEB8z.js";import{D as u,P as h,u as j}from"./Post-DKqkO1WU.js";import{u as g,G as v,a as y}from"./graphql.types-C39L-k5z.js";import{L as w}from"./LogoLoading-9g6x4EC0.js";import{u as N}from"./NavigationPanelContext-CvBBCT1Q.js";import{i as D}from"./iconsLoader-Cj6XedVZ.js";import{S as E,P}from"./PostContainer-BLS2mLbj.js";import"./Backdrop-Dv6fYd-E.js";import"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import"./Button-Dr62xi4H.js";import"./react-DVwLWN09.js";import"./BackButton-k8fQHT5O.js";function b(){const[t,s]=a.useState(null),o=d(),{data:r,isLoading:i}=g(v,{},{queryKey:["posts",{page:1}],select:n=>n.posts?(n.posts.forEach(l=>{o.setQueryData(["post",{postID:l.postID}],{post:l})}),{postIDs:n.posts.map(l=>l.postID)}):{postIDs:[]}});if(i)return e.jsx(w,{});if(r&&r.postIDs){const n=r.postIDs;return e.jsx("div",{className:`feed-section\r
				flex flex-col w-full items-center\r
			`,children:n.map((l,c)=>e.jsxs(e.Fragment,{children:[e.jsx(I,{postID:l,threeDotsMenu:[t,s]}),c===n.length-1&&e.jsx("div",{className:"mb-10"}),c!==n.length-1&&e.jsx(u,{extendedClass:"my-5"})]}))})}}function I({postID:t,threeDotsMenu:s}){const{data:o}=y({queryKey:["post",{postID:t}]}),r=o&&o.post;return r?e.jsx(h,{post:r,threeDotsMenu:s,postCreationDate:!0,trimmedDescription:!0}):null}function C({introText:t}){const{user:[s]}=f();return e.jsxs("div",{className:`intro\r
			w-full h-full\r
			flex flex-row justify-end gap-3\r
			xl:h-[70%] xl:gap-1\r
		`,children:[e.jsx("div",{className:"profile-pic h-full xl:w-[10%]",children:e.jsx("div",{className:"flex w-full h-full items-center justify-center",children:e.jsx("div",{className:"profile-pic h-10 w-10 overflow-hidden rounded-[50%]",children:s&&e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})})}),e.jsx("div",{className:"intro-text flex items-center justify-start h-full w-full xl:w-[90%]",children:e.jsx("span",{className:"font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]",children:t||"What are you working on?"})}),e.jsx("div",{className:"tools-section flex justify-center items-center xl:hidden ",children:e.jsx("div",{className:"plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center",children:e.jsx(D.plus,{width:"30",height:"30",stroke:"#1E1E1E"})})})]})}function S({introText:t}){const{openOverlay:s}=p(),{width:o}=j(),r=x();function i(){o>1024?s(e.jsx(P,{})):r("/post/create")}return e.jsxs("div",{className:"flex flex-col w-full items-center",children:[e.jsxs("div",{className:`post-section\r
				rounded-[13px] border-[0.5px] border-gray-300 hover:bg-gray-100 active:bg-gray-100\r
				w-full gap-4 p-2\r
				flex flex-col\r
				xl:p-0\r
				desktop:gap-5\r
				cursor-pointer\r
			`,onClick:i,children:[e.jsx(C,{introText:t}),e.jsx(E,{className:`\r
					p-2\r
					w-full h-[30%]\r
					hidden\r
					xl:flex justify-between\r
				`})]}),e.jsx(u,{extendedClass:"my-7"})]})}function A(){const{navElements:[,t]}=N(),{sideBar:[,s]}=m();return a.useEffect(()=>(t({desktop:{show:!0}}),()=>t({})),[]),a.useEffect(()=>()=>s(!1),[s]),e.jsxs("div",{className:"flex w-full flex-col mt-5",children:[e.jsx(S,{}),e.jsx(b,{})]})}export{A as default};
