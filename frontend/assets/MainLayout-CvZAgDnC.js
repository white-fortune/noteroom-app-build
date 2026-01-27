import{h as v,b as h,g as w,j as e,d as b,c as y,a as m,L as N,R as k,r as d,O as P}from"./index-BYYWbT5a.js";import{u as C,H as _,L as E,T as S,P as L,a as R,b as $}from"./PrimaryTopbarContext-CqRwV8VZ.js";import{A as p}from"./index-Cs-Vm0uR.js";import{m as a}from"./proxy-D2VngpTg.js";import{N as I}from"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import{i as c}from"./iconsLoader-CLwzdPhT.js";import{u as T,B}from"./useWindowSize-B9Gkjbh8.js";import{P as z}from"./PostContainer-sdOMiFWY.js";import{u as F,N as M}from"./BackButton-CUtAf0q8.js";import{u as D,R as G}from"./RightPanelContext-KQV47PGF.js";import{d as g}from"./dexieDB-CFQoCMhE.js";import{B as H}from"./Button-os3OzJus.js";import"./react-CKv4NPt5.js";import"./graphql.types-D9bmFgh2.js";var O=v();const A="/logomain.png",U="/logomark.png",l={home:"/sidebar/home.svg",emerging:"/sidebar/emerging.svg",people:"/sidebar/people.svg",space:"/sidebar/space.svg",nova:"/sidebar/nova.svg",group:"/sidebar/group.svg",createGroup:"/sidebar/create-group.svg",tools:"/sidebar/tools.svg",settings:"/sidebar/settings.svg",help:"/sidebar/Help.svg",support:"/sidebar/support.svg"};function u({src:s,active:t=!1}){return e.jsx("div",{className:"w-6 h-6 flex items-center justify-center shrink-0",children:e.jsx("img",{src:s,alt:"icon",className:`w-full h-full object-contain ${t?"opacity-100":"opacity-60"}`})})}function i({label:s,icon:t,onClick:n,active:r=!1,collapsed:o=!1}){return e.jsxs("div",{className:`flex items-center gap-2 py-2 rounded-lg cursor-pointer transition-colors
        ${o?"w-10 px-2 justify-center":"w-full px-2"}
        ${r?"bg-white opacity-100":"opacity-70 hover:opacity-100 hover:bg-stone-50"}`,onClick:n,title:o?s:void 0,children:[e.jsx(u,{src:t,active:r}),e.jsx(p,{mode:"popLayout",initial:!1,children:!o&&e.jsx(a.div,{initial:{opacity:0,x:-5},animate:{opacity:1,x:0},exit:{opacity:0,x:-5},transition:{duration:.2},className:"grow min-w-0",children:e.jsx("span",{className:"text-black/70 text-lg font-medium font-['Space_Grotesk'] whitespace-nowrap overflow-hidden block text-ellipsis",children:s})})})]})}function W({collapsed:s=!1}){const t=h(),{pathname:n}=w();return e.jsxs("div",{className:`w-full h-full flex flex-col pt-6 pb-6 overflow-hidden transition-all duration-300 ${s?"pl-5 pr-2":"p-6"}`,children:[e.jsx("div",{className:"mb-6 w-full pl-1 h-12 hidden xl:flex items-center",children:e.jsx(p,{mode:"wait",children:s?e.jsx(a.img,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},src:U,alt:"NoteRoom Logo",className:"w-10 h-10 object-contain shrink-0"},"compact-logo"):e.jsx(a.img,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},src:A,alt:"NoteRoom Logo",className:"h-full w-auto object-contain shrink-0"},"full-logo")})}),e.jsxs("nav",{className:"flex flex-col gap-2 w-full",children:[e.jsx(i,{label:"Home",icon:l.home,onClick:()=>t("/"),active:n==="/",collapsed:s}),e.jsx(i,{label:"Emerging",icon:l.emerging,collapsed:s}),e.jsx(i,{label:"People",icon:l.people,collapsed:s}),e.jsx(i,{label:"Space",icon:l.space,onClick:()=>t("/space"),active:n==="/space",collapsed:s}),e.jsx(i,{label:"Nova",icon:l.nova,collapsed:s}),e.jsxs("div",{className:"w-full",children:[e.jsx(i,{label:"Groups",icon:l.group,onClick:()=>t("/group"),active:n==="/group",collapsed:s}),e.jsx("div",{className:"h-12 w-full mt-4 flex items-center",children:e.jsx(p,{mode:"wait",children:s?e.jsx(a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"w-12 h-12 rounded-[12px] border border-sky-400 flex justify-center items-center cursor-pointer hover:bg-sky-50 transition-colors shrink-0 ml-[-4px]",title:"Create a group",children:e.jsx(u,{src:l.createGroup,active:!1})},"compact-button"):e.jsxs(a.div,{initial:{opacity:0,x:-5},animate:{opacity:1,x:0},exit:{opacity:0,x:-5},className:"w-full h-full rounded-[12px] border border-sky-400 flex items-center justify-center gap-2 px-2 cursor-pointer hover:bg-sky-50 transition-colors",children:[e.jsx(u,{src:l.createGroup,active:!1}),e.jsx("span",{className:"text-black/70 text-base font-medium font-['Inter'] whitespace-nowrap",children:"Create a group"})]},"full-button")})})]}),e.jsxs("div",{className:"mt-3 flex flex-col gap-2 w-full",children:[e.jsx(i,{label:"Tools",icon:l.tools,collapsed:s}),e.jsx(i,{label:"Settings",icon:l.settings,collapsed:s}),e.jsx(i,{label:"Help center",icon:l.help,collapsed:s}),e.jsx(i,{label:"Support",icon:l.support,collapsed:s})]})]})]})}function q({open:s=!1,collapsed:t=!1}){const{leftPanelElements:[n]}=C();return e.jsx(a.div,{layout:!0,transition:{type:"spring",stiffness:300,damping:30,mass:.8},className:`left-panel
			bg-(--leftpanel-maincontainer-clr)
			row-span-2
			overflow-visible border-gray-300 border-r-2
			absolute w-[65%] z-50 h-[90vh] bottom-0
			transform ${s?"translate-x-0":"-translate-x-full"}
			sm:w-[35%]
			md:w-[35%]
			lg:w-[30%]
			xl:static xl:flex xl:flex-col xl:items-start xl:translate-x-0 xl:border-r-0 xl:h-screen xl:z-0
			${t?"xl:w-[80px]":"xl:w-full"}
		`,children:n.container||e.jsx(W,{collapsed:t})})}function J(){const{sideBar:[s,t]}=b();return e.jsxs("div",{className:`mobile-left\r
			w-[75%] h-[70%]\r
			flex flex-row items-center\r
			xl:hidden\r
		`,children:[e.jsx(_,{className:`p-3 rounded-[50%] active:bg-gray-200 ${s&&"bg-gray-200"}`,onClick:()=>t(n=>!n)}),e.jsx("div",{className:"app-logo w-12 h-12 overflow-hidden flex flex-row justify-start items-center",children:e.jsx("img",{src:I,className:"h-full w-full object-cover"})})]})}function x({name:s,children:t,onClick:n,extendedClass:r}){const o=k.cloneElement(t,{className:"xl:h-[20px] xl:w-[20px] h-[25px] w-[25px]"});return e.jsx("button",{className:`${s} h-11 w-11 bg-white rounded-full shadow-[0px_0px_2.4px_0px_rgba(0,0,0,0.26)] flex justify-center items-center cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors ${r}`,onClick:n,children:o})}function j(){const{user:[s]}=y(),{openOverlay:t}=m(),{width:n}=T(),r=h();function o(){n>1024?t(e.jsx(z,{})):r("/post/create")}return s?e.jsxs("div",{className:`interactions-tools\r
			flex flex-row items-center justify-around gap-3 xl:gap-4\r
			xl:p-0\r
		`,children:[e.jsx(x,{name:"create-post",onClick:o,extendedClass:"hidden xl:flex",children:e.jsx(c.plus,{stroke:"#1E1E1E"})}),e.jsx(x,{name:"notification",children:e.jsx(c.notification,{})}),e.jsx(x,{name:"chats",children:e.jsx(c.chat,{})}),e.jsx(x,{name:"search",extendedClass:"block xl:hidden",children:e.jsx(c.search,{viewBox:"0 0 24 24"})}),e.jsx(N,{className:"justify-self-start h-11 w-11 overflow-hidden rounded-full",to:`/user/${s.username}`,children:e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})]}):null}function K(){return e.jsx("div",{className:"hidden xl:block w-[75%] desktop:w-[80%] h-auto",children:e.jsxs("div",{className:`search-bar\r
				flex flex-row items-center\r
				bg-white pl-4 pr-2.5 py-2.5\r
				rounded-[30px] shadow-[0px_0px_2.4px_0px_rgba(0,0,0,0.26)]\r
				h-12\r
			`,children:[e.jsx("div",{className:"search-icon flex justify-center items-center p-0.5",children:e.jsx(c.search,{viewBox:"0 0 25 25",className:"w-5 h-5 text-zinc-500",stroke:"#71717a"})}),e.jsx("div",{className:"search-input flex-1 pl-2.5 flex items-center",children:e.jsx("input",{type:"text",placeholder:"Search Noteroom",className:"w-full h-full bg-transparent border-none outline-none text-base font-space text-zinc-700 placeholder:text-zinc-500"})})]})})}function Q(){const{navElements:[s]}=F();return e.jsxs("div",{className:`navigation-panel
			bg-(--primary-secondary-rightpanel-clr)
			relative z-40
			border-gray-300 border-b-[0.5px] p-2
			w-full h-[10vh]
			flex flex-row justify-between gap-3 justify-self-end items-center
			xl:mt-2 xl:p-0 ${s.desktop?.show?"":"xl:hidden"}
		`,children:[e.jsxs("div",{className:"desktop hidden xl:flex items-center gap-4 w-full h-full",children:[s.desktop?.left||e.jsx(K,{}),s.desktop?.right||e.jsx(j,{})]}),e.jsxs("div",{className:"mobile flex w-full h-full xl:hidden justify-between items-center",children:[s.mobile?.left||e.jsx(J,{}),s.mobile?.right||e.jsx(j,{})]})]})}function f({name:s,label:t,isActive:n,...r}){return e.jsx("button",{className:`${s}
			w-25
			flex justify-center
			shadow-[0_0_1px_0_rgba(0,0,0,0.3)] rounded-[15px]
			p-2 cursor-pointer ${n&&"bg-[#F6F6F6]"} hover:bg-[#F6F6F6]`,...r,children:e.jsx("span",{className:"text-[14px]",children:t})})}function V({activeRecentSection:[s,t]}){return e.jsxs("div",{className:"recent-sections flex justify-between gap-2 p-[10px_0] w-full",children:[e.jsx(f,{name:"recent-posts",label:"Posts",isActive:s==="posts",onClick:()=>t("posts")}),e.jsx(f,{name:"recent-groups",label:"Groups",onClick:()=>t("groups"),isActive:s==="groups"}),e.jsx(f,{name:"recent-people",label:"People",onClick:()=>t("people"),isActive:s==="people"})]})}function X({post:s}){const t=h();return e.jsxs("div",{className:`recent-post\r
			w-full\r
			flex justify-between gap-2\r
			rounded-[10px]\r
			p-2 cursor-pointer\r
			hover:bg-[#EFEFEF]`,onClick:()=>t(`/post/${s.postID}/${s.titleSlug}`),children:[e.jsxs("div",{className:"left-side flex flex-col gap-2 w-full",children:[e.jsx("div",{className:"post-header w-full flex gap-2 items-center",children:e.jsx("span",{className:"hover:underline text-[rgba(0,0,0,0.6)] font-semibold",children:s.author.name})}),e.jsx("div",{className:"post-content flex flex-col gap-1 w-full",children:e.jsx("span",{className:"text-justify hyphens-auto font-semibold",children:s.title.length>50?`${s.title.slice(0,50)}...`:s.title})}),e.jsxs("div",{className:"post-footer w-full flex justify-between",children:[e.jsxs("span",{children:[s.reactCount||0," Likes"]}),e.jsxs("span",{children:[s.replyCount||0," Comments"]})]})]}),e.jsx("div",{className:"right-side flex flex-col gap-2",children:e.jsx("div",{className:"post-thumbnail overflow-hidden w-20 h-20 rounded-[10px]",children:s.thumbnail&&e.jsx("img",{src:s.thumbnail,alt:"Post Image",className:"w-full h-full object-cover"})})})]})}function Y(){const[s,t]=d.useState([]);async function n(){await g.recentPosts.clear(),t([])}return d.useEffect(()=>{g.recentPosts.toArray().then(r=>t(r)).catch(r=>console.error(r))},[]),e.jsxs("div",{className:"recent-posts flex flex-col items-end gap-2",children:[s.length>0&&e.jsx("div",{className:"clear",children:e.jsx("span",{className:"text-sm text-primary-blue-dark-lm cursor-pointer",onClick:n,children:"Clear"})}),e.jsx("div",{className:"posts w-full flex flex-col gap-4 text-[12px] mb-10",children:s.map(r=>e.jsx(X,{post:r},r.postID))})]})}function Z(){const[s,t]=d.useState("posts");return e.jsxs("div",{className:"container w-[90%] h-full font-inter",children:[e.jsx("div",{className:"header h-[5vh] mt-[3vh] flex items-center w-full",children:e.jsx("span",{className:"font-semibold text-sm text-[rgba(0,0,0,0.5)]",children:"Recently seen"})}),e.jsxs("div",{className:"right-panel-container flex flex-col items-center h-[90vh] w-[90%] desktop:w-[80%]",children:[e.jsx(V,{activeRecentSection:[s,t]}),e.jsx("div",{className:"overflow-y-auto w-full left-panel",children:s==="posts"&&e.jsx(Y,{})})]})]})}function ee({className:s}){const{rightPanelElements:[t]}=D();return e.jsx("div",{className:`right-panel bg-(--primary-secondary-rightpanel-clr) hidden xl:flex rounded-[0_30px_0_0] ${s}`,children:t.container||e.jsx(Z,{})})}function se(){const{popup:[s,t]}=m();return e.jsx("div",{className:`popup-container\r
			w-screen h-auto\r
			flex justify-center items-center\r
		`,children:e.jsxs("div",{className:`popup\r
				w-[90%] h-auto\r
				flex flex-col gap-5\r
				rounded-[20px] p-5\r
				xl:max-w-[30vw]\r
				bg-white\r
			`,children:[e.jsxs("div",{className:"topbar flex flex-row justify-between",children:[e.jsx("span",{className:"font-bold text-xl font-inter",children:s.title}),e.jsx("div",{className:"close-button h-[20%] desktop:h-[22%] flex justify-center items-center",onClick:()=>t(n=>({...n,show:!1})),children:e.jsx(c.cross,{className:"w-[30px] h-[30px] rounded-[50%] bg-gray-200 hover:bg-gray-300 active:hover:bg-gray-300 cursor-pointer",viewBox:"0 0 24 24"})})]}),e.jsx("div",{className:"middle-section",children:e.jsx("span",{className:"font-inter text-text-accent-lm",children:s.description})}),e.jsx("div",{className:"bottom-bar flex justify-end",children:e.jsx("div",{className:"actions flex flex-row gap-2",children:s.actions?.map(n=>e.jsx(H,{variant:n.level==="impactful"?"outline-primary":"primary",className:"p-2",onClick:()=>{n.action(),t(r=>({...r,show:!1}))},children:n.label},n.label))})})]})})}function te(){const{toast:[s,t]}=m();return d.useEffect(()=>{setTimeout(()=>{t({show:!1,message:""})},3e3)},[]),e.jsxs("div",{className:`toast \r
            w-[90%] xl:w-[500px]\r
            flex flex-row justify-between items-center gap-2\r
            fixed bottom-10 left-1/2 -translate-x-1/2 z-60\r
            bg-gray-200 p-3 rounded-[20px]\r
        `,children:[e.jsx("span",{className:"font-inter ml-1 text-sm",children:s.message}),e.jsx("div",{className:"close-button h-[20%] desktop:h-[22%] flex justify-center items-center",onClick:()=>t({show:!1,message:""}),children:e.jsx(c.cross,{width:"30",height:"30",className:"rounded-[50%] bg-gray-200 hover:bg-gray-300 active:bg-gray-300 cursor-pointer",viewBox:"0 0 24 24"})})]})}function ne(){const{activeOverlay:s,popup:[t],toast:[n]}=m(),r=.2;return O.createPortal(e.jsxs(p,{mode:"wait",children:[s&&e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:r},className:`floating-elements
							fixed inset-0 z-50
							flex justify-center items-center
							bg-black/50
						`,children:e.jsx(a.div,{initial:{opacity:0,y:"10%"},animate:{opacity:1,y:"0%"},exit:{opacity:0,y:"10%"},transition:{duration:r},children:s})}),t.show&&e.jsx("div",{className:`floating-elements\r
						fixed inset-0 z-50\r
						flex justify-center items-center\r
						bg-black/50\r
					`,children:e.jsx(se,{})}),n.show&&e.jsx(te,{})]}),document.getElementById("portal"))}const re="/collap.png";function le({children:s,collapsed:t}){return e.jsx(a.div,{layout:!0,transition:{type:"spring",stiffness:300,damping:30,mass:.8},className:`main-container
            relative
            bg-(--leftpanel-maincontainer-clr)
            h-screen w-full min-h-0 overflow-hidden
            grid grid-cols-1
            ${t?"xl:grid-cols-[80px_1fr] xl:grid-rows-[auto_1fr]":"xl:grid-cols-[1.2fr_6fr] xl:grid-rows-[auto_1fr] desktop:grid-cols-[0.9fr_5fr]!"}
        `,children:s})}function ae({children:s}){return e.jsx("div",{className:"root-ui",children:s})}function ie({children:s,onToggleCollapse:t,collapsed:n}){return e.jsxs(a.div,{layout:!0,transition:{type:"spring",stiffness:300,damping:30,mass:.8},className:`primary-middle-section\r
			bg-(--primary-secondary-rightpanel-clr)\r
			h-full w-full\r
			grid grid-cols-1\r
			border-[0.5px] border-[rgba(0,0,0,0.1)]\r
			relative\r
			xl:h-[98.5%] xl:w-[99.5%] xl:self-end \r
            xl:grid-cols-[1fr_minmax(0,720px)_minmax(0,380px)_1fr] xl:gap-x-10 xl:grid-rows-[auto_1fr] \r
            xl:rounded-[30px_30px_0_0] xl:col-start-2\r
		`,children:[e.jsx(a.div,{className:"absolute left-0 top-[12%] -translate-x-1/2 z-50 cursor-pointer hidden xl:block",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,children:e.jsx("div",{"data-size":"48",className:"w-8 h-8 relative bg-white rounded shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-center",children:e.jsx(a.img,{src:re,alt:"Collapse Icon",animate:{rotate:n?180:0},transition:{type:"spring",stiffness:200,damping:20},className:"w-4 h-4 object-contain"})})}),s]})}function oe(){const{topbarElements:[s]}=R();return e.jsx("div",{className:"top-bar min-w-0 w-full h-full flex items-center xl:col-start-2",children:s.elements||e.jsx(e.Fragment,{})})}function ce(){const{primaryTopbar:[s]}=$();return e.jsx("div",{className:"flex min-h-0 h-auto w-full xl:col-start-2 xl:col-span-2",children:s.elements||e.jsx(e.Fragment,{})})}function xe({children:s}){return e.jsx("div",{className:`holder-middle-section\r
			flex flex-col items-center justify-self-center w-full\r
            xl:col-start-2\r
		`,children:s})}function de({children:s}){return e.jsx("div",{className:`secondary-middle-section left-panel\r
			w-[95%] h-[90vh] overflow-y-scroll\r
			flex flex-col items-center justify-self-end\r
			sm:w-[60%]\r
			md:w-[60%]\r
			lg:w-[50%]\r
			xl:w-full\r
		`,children:s})}function Ce(){const{sideBar:[s,t],sidebarCollapsed:[n,r]}=b();return e.jsxs(ae,{children:[e.jsx(le,{collapsed:n,children:e.jsxs(E,{children:[e.jsx(q,{open:s,collapsed:n}),s&&e.jsx(B,{zIndex:30,onClick:()=>t(!1)}),e.jsxs(S,{children:[e.jsx(oe,{}),e.jsx(ie,{collapsed:n,onToggleCollapse:()=>r(!n),children:e.jsxs(L,{children:[e.jsx(ce,{}),e.jsxs(G,{children:[e.jsx(M,{children:e.jsxs(xe,{children:[e.jsx(Q,{}),e.jsx(de,{children:e.jsx(P,{})})]})}),e.jsx(ee,{className:"xl:col-start-3"})]})]})})]})]})}),e.jsx(ne,{})]})}export{Ce as default};
