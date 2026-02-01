import{r as m,j as l}from"./index-vZtEAzgS.js";const b=({length:r=6,otpValue:[s,n],disabled:u=!1,containerClassName:c=""})=>{const o=m.useRef([]);function f(e,t){o.current[e]=t}function i(e,t){n(a=>a.map((p,g)=>g===e?t:p)),o.current[e<r?e+1:e]?.focus()}function d(e){const t=e.clipboardData.getData("text"),a=Array.from(t);a.length===r&&n(a)}return l.jsx("div",{className:`grid grid-cols-6 gap-3 w-full ${c}`,children:s.map((e,t)=>l.jsx("input",{ref:a=>f(t,a),maxLength:1,value:s[t],onChange:a=>i(t,a.target.value),onPaste:d,className:`
						caret-sky-600 
						aspect-square w-full
						text-center text-xl text-slate-900 font-semibold
						rounded-[10px] border 
						${u?"bg-slate-50 border-slate-200":"bg-white border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20"} 
						outline-none transition-all
					`,"aria-label":`OTP digit ${t+1}`},t))})};export{b as O};
