import{j as m}from"./index-BLSFfZ90.js";function a({variant:e="primary",children:r,className:l,disabled:t,...o}){return m.jsx("button",{className:`button
            outline-none rounded-[5px]
            flex justify-center items-center gap-[5px]

            ${e.startsWith("outline-")&&"border bg-transparent"}

            ${!t&&`
           	cursor-pointer
           		${e==="primary"?"bg-primary-blue-lm  text-white hover:bg-primary-blue-dark-lm active:bg-primary-blue-dark-lm":e==="outline-primary"?"border-primary-blue-lm text-primary-blue-lm hover:bg-primary-blue-dark-lm hover:text-white active:bg-primary-blue-dark-lm active:text-white":e==="secondary"?"bg-text-accent-lm text-black hover:bg-text-secondary-lm active:bg-text-secondary-lm":e==="outline-secondary"?"border-text-accent-lm text-black hover:bg-text-secondary-lm/20 active:bg-text-secondary-lm/20":""}
            `}

            ${t&&`
           	cursor-not-allowed text-text-accent-lm
           		${e==="primary"?" bg-primary-blue-light-lm text-white":e==="outline-primary"?" border-primary-blue-light-lm":e==="secondary"?"bg-bg-secondary-lm":e==="outline-secondary"?"border-text-accent-lm/50":""}
            `}

            ${l}
        `,...o,children:r})}export{a as B};
