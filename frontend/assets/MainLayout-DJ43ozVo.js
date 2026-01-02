import{B as w,C as N,r as o,b as h,j as e,R as j,d as g,c as y,L as P,a as f,O as k}from"./index-CmNEEB8z.js";import{u as E,H as C,S,L as R,T as _,P as L,a as B,b as I}from"./PrimaryTopbarContext-BBxkLmhN.js";import{i as r}from"./iconsLoader-Cj6XedVZ.js";import{N as F}from"./NoteRoom_logo-fullcolor-rgb-2-1000_1000px-DxGY_Wqj.js";import{B as b}from"./Button-Dr62xi4H.js";import{N as T}from"./NoteRoomLogoMark_logomark-fullcolor-rgb-512_512px-DiCDYmyP.js";import{u as $,m,N as D}from"./NavigationPanelContext-CvBBCT1Q.js";import{u as z,R as A}from"./RightPanelContext-uUixpMQU.js";import{d as u}from"./dexieDB-BNtskSoo.js";import{A as G,B as M}from"./Backdrop-Dv6fYd-E.js";var O=w();function v({icon:s}){return j.cloneElement(s,{className:"h-[24px] w-[24px]"})}function a({label:s,icon:n,onClick:t,active:l=!1}){return e.jsxs("div",{className:`item
			w-[90%]
			flex gap-[15px] items-center
			rounded-[10px] cursor-pointer p-[10px_10px]
			${l?"bg-[#E9E9E9]":"hover:bg-[#EFEFEF]"}
		`,onClick:t,children:[e.jsx(v,{icon:n}),e.jsx("span",{className:"text-[14px] font-['Space_Grotesk'] text-[rgba(0,0,0,0.7)]",children:s})]})}function c({label:s,hasIcon:n=!0}){return e.jsxs("div",{className:`dropdown\r
			w-[90%]\r
			flex gap-[15px] items-center\r
			p-[10px_10px]\r
		`,children:[e.jsx("span",{className:"text-[13px] font-sans grow text-[rgba(0,0,0,0.5)]",children:s}),n&&e.jsx(r.downarrow,{width:"20",height:"20"})]})}function H({label:s,icon:n}){return e.jsx("div",{className:`item\r
			w-[90%]\r
			flex gap-[15px] items-center\r
			rounded-[10px] cursor-pointer p-[10px_10px]\r
		`,children:e.jsxs(b,{className:"w-full py-[7px] rounded-full",children:[n&&e.jsx(v,{icon:n}),e.jsx("span",{className:"text-[13px] font-medium font-inter text-white whitespace-nowrap",children:s})]})})}function U(){const{pathname:s}=N(),n={"/":"home","/group":"groups"},[t,l]=o.useState(null);o.useEffect(()=>{l(n[s])},[s]);const i=h();return e.jsxs("div",{className:"leftpanel-container overflow-y-auto w-[90%] desktop:w-[85%] h-full flex flex-col gap-5 items-center",children:[e.jsx("div",{className:"logo-container hidden w-[90%] xl:flex justify-start",children:e.jsx("div",{className:"logo w-full desktop:w-[85%]",children:e.jsx("img",{src:F,alt:"NoteRoom Logo",className:"object-cover"})})}),e.jsxs("div",{className:"items-container mt-1 xl:mt-0 w-[95%] flex flex-col items-center self-end gap-[1vh]",children:[e.jsx(a,{label:"Home",active:t==="home",icon:e.jsx(r.home,{fill:t==="home"?"black":"none"}),onClick:()=>i("/")}),e.jsx(a,{label:"Popular",icon:e.jsx(r.popular,{})}),e.jsx(a,{label:"Friends",icon:e.jsx(r.friends,{})}),e.jsx(a,{label:"Schedule",icon:e.jsx(r.schedule,{})}),e.jsx(a,{label:"Study Space",icon:e.jsx(r.studyspace,{}),onClick:()=>i("/space")}),e.jsx(c,{label:"Groups"}),e.jsx(a,{label:"Explore Groups",active:t==="groups",icon:e.jsx(r.groups,{fill:t==="groups"?"black":"none"}),onClick:()=>i("/group")}),e.jsx(H,{label:"Create A Group",icon:e.jsx(r.plus,{stroke:"white"})}),e.jsx(c,{label:"Tools",hasIcon:!1}),e.jsx(a,{label:"Explore Tools",icon:e.jsx(r.tools,{})}),e.jsx(c,{label:"Others",hasIcon:!1}),e.jsx(a,{label:"Settings",icon:e.jsx(r.settingsgear,{})}),e.jsx(a,{label:"Blogs",icon:e.jsx(r.blogs,{})})]})]})}function q({open:s=!1}){const{leftPanelElements:[n]}=E();return e.jsx("div",{className:`left-panel
			bg-(--leftpanel-maincontainer-clr)
			row-span-2
			overflow-visible border-gray-300 border-r-2
			absolute w-[65%] z-50 h-[90vh] bottom-0
			transition-transform duration-300
			transform ${s?"translate-x-0":"-translate-x-full"}
			sm:w-[35%]
			md:w-[35%]
			lg:w-[30%]
			xl:static xl:flex xl:flex-col xl:items-start xl:w-full xl:translate-x-0 xl:border-r-0 xl:h-screen xl:z-0
		`,children:n.container||e.jsx(U,{})})}function V(){const{sideBar:[s,n]}=g();return e.jsxs("div",{className:`mobile-left\r
			w-[75%] h-[70%]\r
			flex flex-row items-center\r
			xl:hidden\r
		`,children:[e.jsx(C,{className:`p-3 rounded-[50%] active:bg-gray-200 ${s&&"bg-gray-200"}`,onClick:()=>n(t=>!t)}),e.jsx("div",{className:"app-logo w-12 h-12 overflow-hidden flex flex-row justify-start items-center",children:e.jsx("img",{src:T,className:"h-full w-full object-cover"})})]})}function x({name:s,children:n,extendedClass:t}){const l=j.cloneElement(n,{className:"xl:h-[20px] xl:w-[20px] h-[25px] w-[25px]"});return e.jsx("div",{className:`${s} xl:border-gray-300 flex justify-center items-center xl:border h-10 w-10 rounded-full hover:bg-gray-100 active:bg-gray-100 ${t}`,children:l})}function p(){const{user:[s]}=y();return s?e.jsxs("div",{className:`interactions-tools\r
			flex flex-row items-center justify-around gap-1\r
			xl:p-0 xl:gap-0 xl:w-[25%] xl:justify-between\r
			desktop:w-[10%]\r
		`,children:[e.jsx(x,{name:"notification",children:e.jsx(r.notification,{})}),e.jsx(x,{name:"chats",children:e.jsx(r.chat,{})}),e.jsx(x,{name:"search",extendedClass:"block xl:hidden",children:e.jsx(r.search,{viewBox:"0 0 24 24"})}),e.jsx(P,{className:"justify-self-start h-10 w-10 overflow-hidden rounded-[50%]",to:`/user/${s.username}`,children:e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"user"})})]}):null}function J(){return e.jsx("div",{className:"hidden xl:block w-[75%] desktop:w-[90%] h-auto",children:e.jsx(S,{placeholder:"Search NoteRoom",className:"h-11 w-full desktop:h-12"})})}function K(){const{navElements:[s]}=$();return e.jsxs("div",{className:`navigation-panel
			bg-(--primary-secondary-rightpanel-clr)
			relative z-40
			border-gray-300 border-b-[0.5px] p-2
			w-full h-[10vh]
			flex flex-row justify-between gap-3 justify-self-end items-center
			xl:mt-2 xl:p-0 ${s.desktop?.show?"":"xl:hidden"}
		`,children:[e.jsxs("div",{className:"desktop hidden xl:flex items-center gap-6 desktop:gap-8 w-full h-full",children:[s.desktop?.left||e.jsx(J,{}),s.desktop?.right||e.jsx(p,{})]}),e.jsxs("div",{className:"mobile flex w-full h-full xl:hidden justify-between items-center",children:[s.mobile?.left||e.jsx(V,{}),s.mobile?.right||e.jsx(p,{})]})]})}function d({name:s,label:n,isActive:t,...l}){return e.jsx("button",{className:`${s}
			w-25
			flex justify-center
			shadow-[0_0_1px_0_rgba(0,0,0,0.3)] rounded-[15px]
			p-2 cursor-pointer ${t&&"bg-[#F6F6F6]"} hover:bg-[#F6F6F6]`,...l,children:e.jsx("span",{className:"text-[14px]",children:n})})}function Q({activeRecentSection:[s,n]}){return e.jsxs("div",{className:"recent-sections flex justify-between gap-2 p-[10px_0] w-full",children:[e.jsx(d,{name:"recent-posts",label:"Posts",isActive:s==="posts",onClick:()=>n("posts")}),e.jsx(d,{name:"recent-groups",label:"Groups",onClick:()=>n("groups"),isActive:s==="groups"}),e.jsx(d,{name:"recent-people",label:"People",onClick:()=>n("people"),isActive:s==="people"})]})}function W({post:s}){const n=h();return e.jsxs("div",{className:`recent-post\r
			w-full\r
			flex justify-between gap-2\r
			rounded-[10px]\r
			p-2 cursor-pointer\r
			hover:bg-[#EFEFEF]`,onClick:()=>n(`/post/${s.postID}/${s.titleSlug}`),children:[e.jsxs("div",{className:"left-side flex flex-col gap-2 w-full",children:[e.jsx("div",{className:"post-header w-full flex gap-2 items-center",children:e.jsx("span",{className:"hover:underline text-[rgba(0,0,0,0.6)] font-semibold",children:s.author.name})}),e.jsx("div",{className:"post-content flex flex-col gap-1 w-full",children:e.jsx("span",{className:"text-justify hyphens-auto font-semibold",children:s.title.length>50?`${s.title.slice(0,50)}...`:s.title})}),e.jsxs("div",{className:"post-footer w-full flex justify-between",children:[e.jsxs("span",{children:[s.reactCount||0," Likes"]}),e.jsxs("span",{children:[s.replyCount||0," Comments"]})]})]}),e.jsx("div",{className:"right-side flex flex-col gap-2",children:e.jsx("div",{className:"post-thumbnail overflow-hidden w-20 h-20 rounded-[10px]",children:s.thumbnail&&e.jsx("img",{src:s.thumbnail,alt:"Post Image",className:"w-full h-full object-cover"})})})]})}function X(){const[s,n]=o.useState([]);async function t(){await u.recentPosts.clear(),n([])}return o.useEffect(()=>{u.recentPosts.toArray().then(l=>n(l)).catch(l=>console.error(l))},[]),e.jsxs("div",{className:"recent-posts flex flex-col items-end gap-2",children:[s.length>0&&e.jsx("div",{className:"clear",children:e.jsx("span",{className:"text-sm text-primary-blue-dark-lm cursor-pointer",onClick:t,children:"Clear"})}),e.jsx("div",{className:"posts w-full flex flex-col gap-4 text-[12px] mb-10",children:s.map(l=>e.jsx(W,{post:l},l.postID))})]})}function Y(){const[s,n]=o.useState("posts");return e.jsxs("div",{className:"container w-[90%] h-full font-inter",children:[e.jsx("div",{className:"header h-[5vh] mt-[3vh] flex items-center w-full",children:e.jsx("span",{className:"font-semibold text-sm text-[rgba(0,0,0,0.5)]",children:"Recently seen"})}),e.jsxs("div",{className:"right-panel-container flex flex-col items-center h-[90vh] w-[90%] desktop:w-[80%]",children:[e.jsx(Q,{activeRecentSection:[s,n]}),e.jsx("div",{className:"overflow-y-auto w-full left-panel",children:s==="posts"&&e.jsx(X,{})})]})]})}function Z(){const{rightPanelElements:[s]}=z();return e.jsx("div",{className:"right-panel bg-(--primary-secondary-rightpanel-clr) hidden xl:flex rounded-[0_10px_0_0]",children:s.container||e.jsx(Y,{})})}function ee(){const{popup:[s,n]}=f();return e.jsx("div",{className:`popup-container\r
			w-screen h-auto\r
			flex justify-center items-center\r
		`,children:e.jsxs("div",{className:`popup\r
				w-[90%] h-auto\r
				flex flex-col gap-5\r
				rounded-[20px] p-5\r
				xl:max-w-[30vw]\r
				bg-white\r
			`,children:[e.jsxs("div",{className:"topbar flex flex-row justify-between",children:[e.jsx("span",{className:"font-bold text-xl font-inter",children:s.title}),e.jsx("div",{className:"close-button h-[20%] desktop:h-[22%] flex justify-center items-center",onClick:()=>n(t=>({...t,show:!1})),children:e.jsx(r.cross,{className:"w-[30px] h-[30px] rounded-[50%] bg-gray-200 hover:bg-gray-300 active:hover:bg-gray-300 cursor-pointer",viewBox:"0 0 24 24"})})]}),e.jsx("div",{className:"middle-section",children:e.jsx("span",{className:"font-inter text-text-accent-lm",children:s.description})}),e.jsx("div",{className:"bottom-bar flex justify-end",children:e.jsx("div",{className:"actions flex flex-row gap-2",children:s.actions?.map(t=>e.jsx(b,{variant:t.level==="impactful"?"outline-primary":"primary",className:"p-2",onClick:()=>{t.action(),n(l=>({...l,show:!1}))},children:t.label},t.label))})})]})})}function se(){const{toast:[s,n]}=f();return o.useEffect(()=>{setTimeout(()=>{n({show:!1,message:""})},3e3)},[]),e.jsxs("div",{className:`toast \r
            w-[90%] xl:w-[500px]\r
            flex flex-row justify-between items-center gap-2\r
            fixed bottom-10 left-1/2 -translate-x-1/2 z-60\r
            bg-gray-200 p-3 rounded-[20px]\r
        `,children:[e.jsx("span",{className:"font-inter ml-1 text-sm",children:s.message}),e.jsx("div",{className:"close-button h-[20%] desktop:h-[22%] flex justify-center items-center",onClick:()=>n({show:!1,message:""}),children:e.jsx(r.cross,{width:"30",height:"30",className:"rounded-[50%] bg-gray-200 hover:bg-gray-300 active:bg-gray-300 cursor-pointer",viewBox:"0 0 24 24"})})]})}function ne(){const{activeOverlay:s,popup:[n],toast:[t]}=f(),l=.2;return O.createPortal(e.jsxs(G,{mode:"wait",children:[s&&e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:l},className:`floating-elements
							fixed inset-0 z-50
							flex justify-center items-center
							bg-black/50
						`,children:e.jsx(m.div,{initial:{opacity:0,y:"10%"},animate:{opacity:1,y:"0%"},exit:{opacity:0,y:"10%"},transition:{duration:l},children:s})}),n.show&&e.jsx("div",{className:`floating-elements\r
						fixed inset-0 z-50\r
						flex justify-center items-center\r
						bg-black/50\r
					`,children:e.jsx(ee,{})}),t.show&&e.jsx(se,{})]}),document.getElementById("portal"))}function te({children:s}){return e.jsx("div",{className:`main-container\r
            relative\r
            bg-(--leftpanel-maincontainer-clr)\r
            h-screen w-full min-h-0 overflow-hidden\r
            grid grid-cols-1\r
            xl:grid-cols-[1.2fr_6fr] xl:grid-rows-[auto_1fr]\r
            desktop:grid-cols-[0.9fr_5fr]!\r
        `,children:s})}function le({children:s}){return e.jsx("div",{className:"root-ui",children:s})}function re({children:s}){return e.jsx("div",{className:`primary-middle-section\r
			bg-(--primary-secondary-rightpanel-clr)\r
			h-full w-full\r
			grid grid-cols-1\r
			border-[0.5px] border-[rgba(0,0,0,0.1)]\r
			xl:h-[98.5%] xl:w-[99.5%] xl:self-end xl:grid-cols-[5fr_1.8fr] xl:grid-rows-[auto_1fr] xl:rounded-[30px_10px_0_0]\r
		`,children:s})}function ae(){const{topbarElements:[s]}=B();return e.jsx("div",{className:"top-bar min-w-0 w-full h-full flex items-center",children:s.elements||e.jsx(e.Fragment,{})})}function oe(){const{primaryTopbar:[s]}=I();return e.jsx("div",{className:"flex min-h-0 h-auto w-full xl:col-span-2",children:s.elements||e.jsx(e.Fragment,{})})}function ie({children:s}){return e.jsx("div",{className:`holder-middle-section\r
			flex flex-col items-center justify-self-center w-full\r
			xl:w-[65%]\r
			desktop:w-[60%]!\r
		`,children:s})}function ce({children:s}){return e.jsx("div",{className:`secondary-middle-section left-panel\r
			w-[95%] h-[90vh] overflow-y-scroll\r
			flex flex-col items-center justify-self-end\r
			sm:w-[60%]\r
			md:w-[60%]\r
			lg:w-[50%]\r
			xl:w-full\r
		`,children:s})}function ve(){const{sideBar:[s,n]}=g();return e.jsxs(le,{children:[e.jsx(te,{children:e.jsxs(R,{children:[e.jsx(q,{open:s}),s&&e.jsx(M,{zIndex:30,onClick:()=>n(!1)}),e.jsxs(_,{children:[e.jsx(ae,{}),e.jsx(re,{children:e.jsxs(L,{children:[e.jsx(oe,{}),e.jsxs(A,{children:[e.jsx(D,{children:e.jsxs(ie,{children:[e.jsx(K,{}),e.jsx(ce,{children:e.jsx(k,{})})]})}),e.jsx(Z,{})]})]})})]})]})}),e.jsx(ne,{})]})}export{ve as default};
