import{u as m,a as p,j as e,r as c,d as h}from"./index-BLSFfZ90.js";import{B as x}from"./BackButton-BdOoBccK.js";import{u}from"./NavigationPanelContext-DNlrcYOX.js";import{T as j}from"./TabSection-C-3GfeRX.js";import{i}from"./iconsLoader-D75ja61F.js";import{B as o}from"./Button-9yleo0g_.js";import{u as w,P as v,D as N}from"./Post-D7QFDg5w.js";import{E as g}from"./EditProfileSection-D_N22_TV.js";import{u as b,d as y}from"./graphql.types-BEwQID2g.js";import"./Backdrop-BiqRp8og.js";import"./react-MpyCqBSl.js";function f({user:s,className:n}){const{openOverlay:a}=m(),{width:l}=w(),r=p();function t(){l>1024?a(e.jsx(g,{})):r("/profile/edit")}return e.jsxs("div",{className:n,children:[s.ownerOfProfile?e.jsxs(o,{variant:"outline-secondary",className:"p-2",onClick:t,children:[e.jsx(i.edit,{}),e.jsx("span",{className:"text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block",children:"Edit"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{className:"p-2",children:[e.jsx(i.addfriend,{}),e.jsx("span",{className:"text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block",children:"Add Friend"})]}),e.jsxs(o,{variant:"outline-primary",className:"p-2",children:[e.jsx(i.chatcircle,{}),e.jsx("span",{className:"text-sm font-sans whitespace-nowrap lg:text-[11px] hidden xl:block",children:"Message"})]})]}),e.jsx("button",{className:"flex justify-center items-center cursor-pointer",children:e.jsx(i.threedots,{viewBox:"0 0 24 24",height:"24",width:"24"})})]})}function P({user:s}){return e.jsxs("div",{className:"entity-header-section w-full",children:[e.jsx("div",{className:`cover-image-section\r
                w-full h-[200px]\r
                xl:h-[250px]\r
                desktop:h-[350px]\r
            `,children:e.jsx("div",{className:"cover-image overflow-hidden w-full h-full rounded-[10px]",children:e.jsx("img",{src:s.coverImageUrl,className:"w-full h-full object-cover",alt:"Cover Image"})})}),e.jsxs("div",{className:`bottom-section\r
                w-full\r
                flex flex-col gap-5\r
                xl:flex-row xl:justify-between\r
            `,children:[e.jsxs("div",{className:`top-bar\r
                    w-full\r
                    relative\r
                    flex justify-between\r
                    xl:w-[25%] xl:justify-end\r
                    desktop:w-[20%]\r
                `,children:[e.jsx("div",{className:`display-image-holder\r
                        w-[40%] flex justify-center\r
                        xl:w-full xl:justify-end\r
                    `,children:e.jsx("div",{className:`display-image
                            w-30 h-30
                            absolute -translate-y-1/2
                            rounded-[50%] border-3 border-(--primary-secondary-rightpanel-clr)
                            overflow-hidden
                        `,children:e.jsx("img",{src:s.profileImageUrl,className:"w-full h-full object-cover",alt:"Display Image"})})}),e.jsx("div",{className:"block xl:hidden",children:e.jsx(f,{user:s,className:"flex xl:hidden mt-3 gap-2"})})]}),e.jsxs("div",{className:`entity-headline\r
                    w-[95%] self-center\r
                    flex flex-col gap-5\r
                    mt-3\r
                    xl:w-[75%] xl:self-start\r
                    desktop:w-[80%]\r
                `,children:[e.jsxs("div",{className:"profile-text-metadata gap-2 flex flex-col w-full font-sans",children:[e.jsx("div",{className:"top-section block xl:flex justify-between items-center",children:e.jsx("span",{className:"font-bold text-lg",children:s.name})}),e.jsx("span",{className:"about text-sm",children:s.bio})]}),e.jsxs("div",{className:`bottom-left\r
                        w-full\r
                        flex items-center justify-between\r
                        text-[12px]\r
                        desktop:text-base\r
                    `,children:[e.jsxs("div",{className:"flex gap-3 desktop:gap-5",children:[e.jsxs("span",{className:"following flex gap-0.5",children:[e.jsx("span",{className:"font-bold",children:"46"}),"Following"]}),e.jsxs("span",{className:"followers flex gap-0.5",children:[e.jsx("span",{className:"font-bold",children:"46k"}),"Followers"]})]}),e.jsx(f,{user:s,className:"hidden xl:flex gap-2"})]})]})]})]})}function k({user:s}){const[n,a]=c.useState(null);if(s.posts){const l=s.posts;return e.jsx("div",{className:"posts flex flex-col w-full",children:s.posts.map((r,t)=>e.jsxs(e.Fragment,{children:[e.jsx(v,{post:r,threeDotsMenu:[n,a],postCreationDate:!0}),t===l.length-1&&e.jsx("div",{className:"mb-10"}),t!==l.length-1&&e.jsx(N,{extendedClass:"my-5"})]}))})}}function A(){const{username:s}=h(),{navElements:[,n]}=u(),a=["Posts","About","Communities","Questions"],[l,r]=c.useState("Posts"),{data:t}=b(y,{username:s},{enabled:!!s,queryKey:["getuser",{username:s}]});if(c.useEffect(()=>(n({desktop:{show:!0},mobile:{left:e.jsxs("div",{className:"flex items-center gap-2 xl:hidden",children:[e.jsx(x,{}),e.jsx("div",{className:"action-title h-12 overflow-hidden flex flex-row justify-start items-center",children:e.jsx("span",{className:"text-lg font-['Space_Grotesk']",children:"Profile"})})]})}}),()=>n({})),[]),!t||!t.user)return null;const d=t.user;return e.jsxs("div",{className:`user-profile left-panel\r
            w-full\r
            flex flex-col gap-5\r
            mt-5\r
        `,children:[e.jsxs("div",{className:"back flex flex-col gap-5",children:[e.jsxs("div",{className:"back hidden xl:flex items-center gap-3",children:[e.jsx(x,{}),e.jsx("span",{className:"font-space",children:"Profile"})]}),e.jsx(P,{user:d})]}),e.jsx(j,{tabItems:a,activeTab:[l,r]}),e.jsx("div",{className:"tab-contents flex w-full mb-10",children:l==="Posts"&&e.jsx(k,{user:d})})]})}export{A as default};
