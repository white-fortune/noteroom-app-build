import{r as a,u as f,j as e,a as p,b as d,c as x,d as m}from"./index-iQbCJglC.js";import{u as c,G as h,a as j}from"./graphql.types-CGmwCgtV.js";import{P as g}from"./Post-CMNRzyB3.js";import{L as v}from"./LogoLoading-CwaIhIJL.js";import{u as w}from"./BackButton-6sNrTUQE.js";import{i as y}from"./iconsLoader-BTiO5x6u.js";import{S as N,P}from"./PostContainer-rTIseZff.js";import{u as b}from"./useWindowSize-Bz1pvkPS.js";import"./proxy-D4D5TrsA.js";import"./index-CqEd_-iz.js";import"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import"./Button-yJkXI082.js";import"./react-Do0rag7d.js";function D(){const[s,t]=a.useState(null),n=f(),{data:r,isLoading:i}=c(h,{},{queryKey:["posts",{page:1}],select:l=>l.posts?(l.posts.forEach(o=>{n.setQueryData(["post",{postID:o.postID}],{post:o})}),{postIDs:l.posts.map(o=>o.postID)}):{postIDs:[]}});if(i)return e.jsx(v,{});if(r&&r.postIDs){const l=r.postIDs;return e.jsx("div",{className:"feed-section flex flex-col w-full items-center gap-8",children:l.map((o,u)=>e.jsxs("div",{className:"w-full flex flex-col items-center gap-8",children:[e.jsx(E,{postID:o,threeDotsMenu:[s,t]}),u===l.length-1&&e.jsx("div",{className:"mb-10"})]},o))})}}function E({postID:s,threeDotsMenu:t}){const{data:n}=c(j,{postID:s},{queryKey:["post",{postID:s}]}),r=n&&n.post;return r?e.jsx(g,{post:r,threeDotsMenu:t,postCreationDate:!0,trimmedDescription:!0}):null}function I({introText:s}){const{user:[t]}=x();return e.jsxs("div",{className:`intro\r
			w-full h-full\r
			flex flex-row justify-end gap-3\r
			xl:h-[70%] xl:gap-1\r
		`,children:[e.jsx("div",{className:"profile-pic h-full xl:w-[10%]",children:e.jsx("div",{className:"flex w-full h-full items-center justify-center",children:e.jsx("div",{className:"profile-pic h-10 w-10 overflow-hidden rounded-[50%]",children:t&&e.jsx("img",{src:t.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})})}),e.jsx("div",{className:"intro-text flex items-center justify-start h-full w-full xl:w-[90%]",children:e.jsx("span",{className:"font-['Space_Grotesk'] text-[16px] xl:text-[15px] desktop:text-[20px] text-[rgba(0,0,0,0.7)]",children:s||"What are you working on?"})}),e.jsx("div",{className:"tools-section flex justify-center items-center xl:hidden ",children:e.jsx("div",{className:"plus-icon rounded-full border border-[#1E1E1E] flex justify-center items-center",children:e.jsx(y.plus,{width:"30",height:"30",stroke:"#1E1E1E"})})})]})}function S({introText:s}){const{openOverlay:t}=p(),{width:n}=b(),r=d();function i(){n>1024?t(e.jsx(P,{})):r("/post/create")}return e.jsx("div",{className:"flex flex-col w-full items-center",children:e.jsxs("div",{className:`post-section\r
				rounded-[13px] border-[0.5px] border-gray-300 hover:bg-gray-100 active:bg-gray-100\r
				w-full gap-4 p-2\r
				flex flex-col\r
				xl:p-0\r
				desktop:gap-5\r
				cursor-pointer\r
			`,onClick:i,children:[e.jsx(I,{introText:s}),e.jsx(N,{className:`\r
					p-2\r
					w-full h-[30%]\r
					hidden\r
					xl:flex justify-between\r
				`})]})})}function A(){const{navElements:[,s]}=w(),{sideBar:[,t]}=m();return a.useEffect(()=>(s({desktop:{show:!0}}),()=>s({})),[]),a.useEffect(()=>()=>t(!1),[t]),e.jsxs("div",{className:"flex w-full flex-col mt-5",children:[e.jsx("div",{className:"xl:hidden mb-8",children:e.jsx(S,{})}),e.jsx(D,{})]})}export{A as default};
