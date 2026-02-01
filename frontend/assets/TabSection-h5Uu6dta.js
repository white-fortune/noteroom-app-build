import{j as t}from"./index-B7SX3Qtt.js";function c({tabItems:e,activeTab:[i,n]}){return t.jsx("div",{className:"tabs flex w-full justify-start gap-2.5",children:e.map(r=>{const o=r===i;return t.jsx("button",{className:`
              tab px-6 py-2 cursor-pointer transition-all duration-200
              text-sm font-semibold whitespace-nowrap rounded-[8px] border
              ${o?"bg-zinc-100 border-zinc-300 text-zinc-900":"bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:border-zinc-300"}
            `,onClick:()=>n(r),children:r},r)})})}export{c as T};
