const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GamePlay-C7LyX0pF.js","assets/index-scQdLHFd.js","assets/animations-HgPmqfwS.js","assets/react-DCx2HzwT.js","assets/ui-DsXiTr-K.js","assets/index-B_V6k3C4.css","assets/GameResult-C9mWL_Mb.js","assets/escolhas-Dwmjyc91.js"])))=>i.map(i=>d[i]);
import{_ as n,d as N,a as T}from"./index-scQdLHFd.js";import{j as e}from"./animations-HgPmqfwS.js";import{r}from"./react-DCx2HzwT.js";import"./ui-DsXiTr-K.js";const _=r.lazy(()=>n(()=>import("./GamePlay-C7LyX0pF.js"),__vite__mapDeps([0,1,2,3,4,5]))),v=r.lazy(()=>n(()=>import("./GameResult-C9mWL_Mb.js"),__vite__mapDeps([6,2,3,7,1,4,5])));function O({setScore:m,setScoreJ1:f,setScoreJ2:h,setJogoAtivo:x,setEscolhaJ1:j,setEscolhaJ2:p,setTurno:b,turno:o,score:a,scoreJ1:d,scoreJ2:c,isJogoAtivo:i,pvp:t,escolhaJ1:u,escolhaJ2:w,language:l,mode:s}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between w-full border-3 border-[var(--colorHeaderOutline)] p-3 lg:p-4 lg:px-5 rounded-2xl items-center lg:w-6/12 lg:h-40",children:[e.jsxs("div",{className:"p-2",children:[s==="normal"&&e.jsx("img",{src:N.iconLogo,alt:"",className:"w-28 lg:w-44"}),s==="bonus"&&e.jsx("img",{src:T.iconLogo,alt:"",className:"w-24 lg:w-32"})]}),e.jsxs("div",{className:"flex h-full gap-3",children:[t&&!i&&e.jsxs("div",{className:"h-full bg-white flex flex-col w-24 items-center lg:w-40 justify-center lg:border-1 lg:border-black py-3 rounded-md shadow-sm shadow-neutral-950",children:[e.jsx("p",{className:"text-[var(--colorScoreText)] text-xs font-bold lg:text-lg",children:l==="en"?"Turn:":"Turno :"}),e.jsx("p",{className:"text-1xl lg:text-2xl flex font-bold text-[var(--colorDarkText)]",children:o===1?l==="en"?"Player 1":l==="pt"?"Jogador 1":"Jugador 1":l==="en"?"Player 2":l==="pt"?"Jogador 2":"Jugador 2"})]}),e.jsxs("div",{className:"h-full bg-white flex flex-col w-24 items-center lg:w-40 justify-center lg:border-1 lg:border-black py-3 rounded-md shadow-sm shadow-neutral-950",children:[t?e.jsxs("p",{className:"text-[var(--colorScoreText)] text-xs font-bold lg:text-lg",children:[l==="en"&&"S C O R E B O A R D",l==="pt"&&"P L A C A R",l==="es"&&"M A R C A D O R"]}):e.jsxs("p",{className:"text-[var(--colorScoreText)] text-xs font-bold lg:text-base",children:[l==="en"&&"S C O R E",l==="pt"&&"P O N T U A Ç Ã O",l==="es"&&"P U N T U A C I Ó N"]}),t?e.jsxs("p",{className:"text-3xl lg:text-5xl flex font-bold text-[var(--colorDarkText)] gap-2",children:[d,e.jsx("span",{className:"text-blue-900",children:" x "}),c]}):e.jsx("p",{className:"text-[var(--colorDarkText)] text-5xl lg:text-7xl flex font-bold",children:a})]})]})]}),i?e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading Game Result..."}),children:e.jsx(v,{setJogoAtivo:x,setScore:m,setScoreJ1:f,setScoreJ2:h,escolhaJ1:u,escolhaJ2:w,language:l,score:a,scoreJ1:d,scoreJ2:c,mode:s,pvp:t})}):e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading Game Play..."}),children:e.jsx(_,{setJogoAtivo:x,setEscolhaJ1:j,setEscolhaJ2:p,setTurno:b,turno:o,mode:s,pvp:t})})]})}export{O as default};
