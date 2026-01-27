import{r as a,u,j as e,a as p,b as d,c as f,d as x}from"./index-BYYWbT5a.js";import{u as m,G as h,a as j}from"./graphql.types-D9bmFgh2.js";import{P as g}from"./Post-am_9XKuP.js";import{L as v}from"./LogoLoading-BpUjgviB.js";import{u as w}from"./BackButton-CUtAf0q8.js";import{i as y}from"./iconsLoader-CLwzdPhT.js";import{S as N,P as D}from"./PostContainer-sdOMiFWY.js";import{u as b}from"./useWindowSize-B9Gkjbh8.js";import"./proxy-D2VngpTg.js";import"./index-Cs-Vm0uR.js";import"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import"./Button-os3OzJus.js";import"./react-CKv4NPt5.js";function E(){const[t,s]=a.useState(null),o=u(),{data:r,isLoading:i}=m(h,{},{queryKey:["posts",{page:1}],select:n=>n.posts?(n.posts.forEach(l=>{o.setQueryData(["post",{postID:l.postID}],{post:l})}),{postIDs:n.posts.map(l=>l.postID)}):{postIDs:[]}});if(i)return e.jsx(v,{});if(r&&r.postIDs){const n=r.postIDs;return e.jsx("div",{className:"feed-section flex flex-col w-full items-center gap-8",children:n.map((l,c)=>e.jsxs(e.Fragment,{children:[e.jsx(P,{postID:l,threeDotsMenu:[t,s]}),c===n.length-1&&e.jsx("div",{className:"mb-10"})]}))})}}function P({postID:t,threeDotsMenu:s}){const{data:o}=j({queryKey:["post",{postID:t}]}),r=o&&o.post;return r?e.jsx(g,{post:r,threeDotsMenu:s,postCreationDate:!0,trimmedDescription:!0}):null}function I({introText:t}){const{user:[s]}=f();return e.jsxs("div",{className:`intro\r
			w-full h-full\r
			flex flex-row justify-end gap-3\r
			xl:h-[70%] xl:gap-1\r
		`,children:[e.jsx("div",{className:"profile-pic h-full xl:w-[10%]",children:e.jsx("div",{className:"flex w-full h-full items-center justify-center",children:e.jsx("div",{className:"profile-pic h-10 w-10 overflow-hidden rounded-[50%]",children:s&&e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})})}),e.jsx("div",{className:"intro-text flex items-center justify-start h-full w-full xl:w-[90%]",children:e.jsx("span",{className:"font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]",children:t||"What are you working on?"})}),e.jsx("div",{className:"tools-section flex justify-center items-center xl:hidden ",children:e.jsx("div",{className:"plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center",children:e.jsx(y.plus,{width:"30",height:"30",stroke:"#1E1E1E"})})})]})}function S({introText:t}){const{openOverlay:s}=p(),{width:o}=b(),r=d();function i(){o>1024?s(e.jsx(D,{})):r("/post/create")}return e.jsx("div",{className:"flex flex-col w-full items-center",children:e.jsxs("div",{className:`post-section\r
				rounded-[13px] border-[0.5px] border-gray-300 hover:bg-gray-100 active:bg-gray-100\r
				w-full gap-4 p-2\r
				flex flex-col\r
				xl:p-0\r
				desktop:gap-5\r
				cursor-pointer\r
			`,onClick:i,children:[e.jsx(I,{introText:t}),e.jsx(N,{className:`\r
					p-2\r
					w-full h-[30%]\r
					hidden\r
					xl:flex justify-between\r
				`})]})})}function A(){const{navElements:[,t]}=w(),{sideBar:[,s]}=x();return a.useEffect(()=>(t({desktop:{show:!0}}),()=>t({})),[]),a.useEffect(()=>()=>s(!1),[s]),e.jsxs("div",{className:"flex w-full flex-col mt-5",children:[e.jsx("div",{className:"xl:hidden mb-8",children:e.jsx(S,{})}),e.jsx(E,{})]})}export{A as default};
