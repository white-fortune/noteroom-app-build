import{r as o,j as t,b as l}from"./index-BtXRzL6T.js";import{i as c}from"./iconsLoader-iz3GJFGa.js";import{m as u}from"./proxy-C2WUHU84.js";const r=o.createContext(null);function d({children:n}){const[e,a]=o.useState({desktop:{show:!0}});return t.jsx(r,{value:{navElements:[e,a]},children:n})}function f(){return o.useContext(r)}function p({className:n,onClick:e,...a}){const s=l();return t.jsx(u.button,{whileHover:{scale:.9},whileTap:{scale:.9},children:t.jsx("div",{className:`back-button
		        	flex flex-row justify-center items-center
		         	w-8 h-8
		          	border border-[rgba(0,0,0,0.1)]
					hover:bg-text-secondary-lm/10 active:bg-text-secondary-lm/10
					cursor-pointer
		           	rounded-[5px]
					${n}
				`,onClick:i=>e?e(i):s(-1),...a,children:t.jsx(c.leftarrow,{className:"h-5 w-5 xl:h-4 xl:w-4"})})})}export{p as B,d as N,f as u};
