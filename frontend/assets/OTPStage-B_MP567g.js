import{r,j as s,b as p}from"./index-yg5M7VcE.js";import{A as g}from"./AuthBtn-B3pWwtkC.js";const h=({length:l=6,otpValue:[o,i],disabled:c=!1})=>{const u=r.useRef([]);function f(e,t){u.current[e]=t}function d(e,t){i(a=>a.map((x,m)=>m===e?t:x)),u.current[e<l?e+1:e]?.focus()}function n(e){const t=e.clipboardData.getData("text"),a=Array.from(t);a.length===l&&i(a)}return s.jsx("div",{className:"flex gap-2 justify-center",children:o.map((e,t)=>s.jsx("input",{ref:a=>f(t,a),maxLength:1,value:o[t],onChange:a=>d(t,a.target.value),onPaste:n,className:`
						caret-[#42ACDE] 
						w-12 h-12 
						text-center text-lg text-[#2E3139]
						rounded-lg border 
						border-[#D3E0FE] focus:border-[#42ACDE] 
						focus:ring-[#42ACDE]
						outline-none
						${c&&"bg-gray-200 cursor-not-allowed"}
					`,"aria-label":`OTP digit ${t+1}`},t))})};function E(){const l=p(),[o,i]=r.useState(Array.from({length:6},()=>"")),[c,u]=r.useState(void 0),[f,d]=r.useState(void 0),[n,e]=r.useState(!1),[t,a]=r.useState(!1),x=async m=>{m.preventDefault(),u(void 0),d(void 0),e(!0);try{setTimeout(()=>{e(!1),l("/forgot-password/reset")},3e3)}catch{d("Verification failed. Please try again."),e(!1)}};return r.useEffect(()=>{a(o.join("").length!==6)},[o]),s.jsxs("form",{onSubmit:x,className:"flex flex-col gap-4 transition-all duration-400 ease-out",children:[s.jsx("h1",{className:"text-3xl font-bold mb-1 text-center",children:"OTP Verification"}),s.jsx("p",{className:"text-sm text-gray-500 text-center mb-4",children:"Check your email to see the verification code"}),s.jsx("div",{className:"flex justify-center mb-2",children:s.jsx(h,{length:6,otpValue:[o,i],disabled:n})}),c&&s.jsx("p",{className:"text-red-500 text-sm text-center",children:c}),f&&s.jsx("p",{className:"text-red-500 text-sm text-center",children:f}),s.jsx(g,{label:n?"Verifying...":"Verify",onClick:()=>{},disabled:n||t})]})}export{E as default};
