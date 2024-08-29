import{j as e,a as x}from"./animations-HgPmqfwS.js";import{r as m}from"./react-DCx2HzwT.js";import{c as S,a as y,i as U,b as R}from"./escolhas-Dwmjyc91.js";import{b as D}from"./ui-DsXiTr-K.js";import"./index-scQdLHFd.js";const H=(i,r,t,n,c,o,p,a,f)=>{r!==t&&(r==="pedra"&&t==="tesoura"||r==="tesoura"&&t==="papel"||r==="papel"&&t==="pedra"?i?a(c+1):p(n+1):i?f(o+1):n>0&&p(n-1))},T=(i,r,t,n)=>{if(i===r){if(t==="en")return"DRAW";if(t==="pt")return"EMPATE";if(t==="es")return"PUESTO"}else if(i==="pedra"&&r==="tesoura"||i==="tesoura"&&r==="papel"||i==="papel"&&r==="pedra")if(n){if(t==="en")return"PLAYER 1 WIN";if(t==="pt")return"JOGADOR 1 GANHOU";if(t==="es")return"JUGADOR 1 GANASTE"}else{if(t==="en")return"YOU WIN";if(t==="pt")return"VOCÊ GANHOU";if(t==="es")return"TU GANASTE"}else if(n){if(t==="en")return"PLAYER 2 WIN";if(t==="pt")return"JOGADOR 2 GANHOU";if(t==="es")return"JUGADOR 2 GANASTE"}else{if(t==="en")return"YOU LOSE";if(t==="pt")return"VOCÊ PERDEU";if(t==="es")return"TU PERDISTE"}},I=(i,r,t,n,c,o,p,a,f)=>{r!==t&&(r==="pedra"&&t==="tesoura"||r==="pedra"&&t==="lizard"||r==="tesoura"&&t==="papel"||r==="tesoura"&&t==="lizard"||r==="papel"&&t==="pedra"||r==="papel"&&t==="spock"||r==="spock"&&t==="tesoura"||r==="spock"&&t==="pedra"||r==="lizard"&&t==="spock"||r==="lizard"&&t==="papel"?i?a(c+1):p(n+1):i?f(o+1):n>0&&p(n-1))},C=(i,r,t,n)=>{if(i===r){if(t==="en")return"DRAW";if(t==="pt")return"EMPATE";if(t==="es")return"PUESTO"}else if(i==="pedra"&&r==="tesoura"||i==="pedra"&&r==="lizard"||i==="tesoura"&&r==="papel"||i==="tesoura"&&r==="lizard"||i==="papel"&&r==="pedra"||i==="papel"&&r==="spock"||i==="spock"&&r==="tesoura"||i==="spock"&&r==="pedra"||i==="lizard"&&r==="spock"||i==="lizard"&&r==="papel")if(n){if(t==="en")return"PLAYER 1 WON";if(t==="pt")return"JOGADOR 1 GANHOU";if(t==="es")return"JUGADOR 1 GANÓ"}else{if(t==="en")return"YOU WIN";if(t==="pt")return"VOCÊ GANHOU";if(t==="es")return"TU GANASTE"}else if(n){if(t==="en")return"PLAYER 2 WON";if(t==="pt")return"JOGADOR 2 GANHOU";if(t==="es")return"JUGADOR 2 GANÓ"}else{if(t==="en")return"YOU LOSE";if(t==="pt")return"VOCÊ PERDEU";if(t==="es")return"TU PERDISTE"}};function F({setJogoAtivo:i,setScore:r,setScoreJ1:t,setScoreJ2:n,escolhaJ1:c,escolhaJ2:o,score:p,scoreJ1:a,scoreJ2:f,language:s,mode:d,pvp:l}){const[_,P]=m.useState(!1),[h,k]=m.useState(!1),[A,u]=m.useState(!1),[L,O]=m.useState(""),N=d==="normal"?S(c):y(c),w=d==="normal"?U(c):R(c),Y=d==="normal"?U(o):R(o);m.useEffect(()=>{const E=setTimeout(()=>{u(!0),k(!0),O(d==="normal"?S(o):y(o))},1500);return()=>clearTimeout(E)},[o,d]),m.useEffect(()=>{if(A&&h){const E=setTimeout(()=>{P(!0)},500);return()=>clearTimeout(E)}},[h,A,o]);const G=()=>{i(!1),d==="normal"?H(l,c,o,p,a,f,r,t,n):I(l,c,o,p,a,f,r,t,n)},b=window.innerWidth>1024;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-center items-start gap-12",children:[l?e.jsxs(x.div,{className:"flex flex-col items-center gap-5",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:[e.jsx(x.div,{className:"w-32 h-32 rounded-[50%] lg:w-56 lg:h-56 lg:border-[1.8rem] flex justify-center items-center bg-white border-[1rem] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black] shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black]",style:{borderColor:N},initial:{scale:.5,opacity:0},animate:{scale:h?1:.5,opacity:h?1:0},transition:{duration:.8},children:h&&e.jsx(x.img,{src:w,alt:`Escolha ${c}`,className:"transition-opacity duration-1000 lg:w-[72px]",initial:{scale:.5},animate:{scale:1},transition:{duration:.8}})}),e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[l?e.jsxs("p",{children:[s==="en"&&"P L A Y E R",s==="pt"&&"J O G A D O R",s==="es"&&"J U G A D O R"]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[s==="en"&&"T H E",s==="pt"&&"A",s==="es"&&"L A"]}),e.jsxs("p",{children:[s==="en"&&"H O U S E",s==="pt"&&"C A S A",s==="es"&&"C A S A"]})]}),e.jsx("p",{children:"1"})]})]}):e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx("div",{className:"w-32 bg-white h-32 rounded-[50%]  lg:w-56 lg:h-56 lg:border-[1.8rem] flex justify-center items-center border-[1rem] transition-all transform duration-500 lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black] shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black]",style:{borderColor:N},children:e.jsx("img",{src:w,alt:`Escolha ${c}`,className:"lg:w-[72px]"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("p",{children:[s==="en"&&"Y O U",s==="pt"&&"V O C Ê",s==="es"&&"T Ú"]}),e.jsxs("p",{children:[s==="en"&&"P I C K E D",s==="pt"&&"E S C O L H E U",s==="es"&&"E S C O G I Ó"]})]})]}),b&&_&&e.jsxs(x.div,{className:"flex flex-col items-center justify-center self-center mx-10 gap-6",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,delay:.5},children:[e.jsx("p",{className:"text-6xl text-slate-100",children:d==="normal"?T(c,o,s,l):C(c,o,s,l)}),e.jsxs(D,{color:"primary",variant:"solid",radius:"sm",className:"px-16 bg-slate-200 font-bold",onClick:G,children:[e.jsxs("p",{className:"text-[--colorShadow] font-bold",children:[s==="en"&&"P L A Y",s==="pt"&&"J O G A R",s==="es"&&"J U G A R"]}),e.jsxs("p",{className:"text-[--colorShadow] font-bold",children:[s==="en"&&"A G A I N",s==="pt"&&"D E",s==="es"&&"D E"]}),(s==="pt"||s==="es")&&e.jsxs(e.Fragment,{children:[s==="pt"&&e.jsx("p",{className:"text-[--colorShadow] font-bold",children:"N O V O"}),s==="es"&&e.jsx("p",{className:"text-[--colorShadow] font-bold",children:"N U E V O"})]})]})]}),e.jsxs(x.div,{className:"flex flex-col items-center gap-5",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:[e.jsx(x.div,{className:"w-32 h-32 rounded-[50%] lg:w-56 lg:h-56 lg:border-[1.8rem] flex justify-center items-center bg-white border-[1rem] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black] shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black]",style:{borderColor:L},initial:{scale:.5,opacity:0},animate:{scale:A?1:.5,opacity:A?1:0},transition:{duration:.8},children:A&&e.jsx(x.img,{src:Y,alt:`Escolha ${o}`,className:"transition-opacity duration-1000 lg:w-[72px]",initial:{scale:.5},animate:{scale:1},transition:{duration:.8}})}),e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[l?e.jsxs("p",{children:[s==="en"&&"P L A Y E R",s==="pt"&&"J O G A D O R",s==="es"&&"J U G A D O R"]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[s==="en"&&"T H E",s==="pt"&&"A",s==="es"&&"L A"]}),e.jsxs("p",{children:[s==="en"&&"H O U S E",s==="pt"&&"C A S A",s==="es"&&"C A S A"]})]}),e.jsxs("p",{children:[l?"2":s==="en"&&"P I C K E D",l?"":s==="pt"&&"E S C O L H E U",l?"":s==="es"&&"E L E G I D A"]})]})]})]}),!b&&_&&e.jsxs(x.div,{className:"flex flex-col items-center justify-center gap-6",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,delay:.25},children:[e.jsx("p",{className:"text-6xl text-slate-100 text-center",children:d==="normal"?T(c,o,s,l):C(c,o,s,l)}),e.jsxs(D,{color:"primary",variant:"solid",radius:"sm",className:"px-16 bg-slate-200 font-bold",onClick:G,children:[e.jsxs("p",{className:"text-[--colorShadow] font-bold",children:[s==="en"&&"P L A Y",s==="pt"&&"J O G A R",s==="es"&&"J U G A R"]}),e.jsxs("p",{className:"text-[--colorShadow] font-bold",children:[s==="en"&&"A G A I N",s==="pt"&&"D E",s==="es"&&"D E"]}),(s==="pt"||s==="es")&&e.jsxs(e.Fragment,{children:[s==="pt"&&e.jsx("p",{className:"text-[--colorShadow] font-bold",children:"N O V O"}),s==="es"&&e.jsx("p",{className:"text-[--colorShadow] font-bold",children:"N U E V O"})]})]})]})]})}export{F as default};
