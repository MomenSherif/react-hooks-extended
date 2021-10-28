"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34],{1842:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>u,toc:()=>k,default:()=>c});var a=n(7896),r=n(1461),l=(n(2784),n(876)),i=n(2039),o=n(1846),m=["components"],d={sidebar_label:"useCounter",sidebar_position:1,title:"useCounter"},p=void 0,u={unversionedId:"custom-hooks/use-counter",id:"custom-hooks/use-counter",isDocsHomePage:!1,title:"useCounter",description:"About",source:"@site/docs/custom-hooks/use-counter.mdx",sourceDirName:"custom-hooks",slug:"/custom-hooks/use-counter",permalink:"/react-hooks-extended/custom-hooks/use-counter",editUrl:"https://github.com/MomenSherif/react-hooks-extended/tree/master/apps/docs/docs/custom-hooks/use-counter.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"useCounter",sidebar_position:1,title:"useCounter"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/react-hooks-extended/"},next:{title:"useStepper",permalink:"/react-hooks-extended/custom-hooks/use-stepper"}},k=[{value:"About",id:"about",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Baisc example",id:"baisc-example",children:[],level:2},{value:"Arguments",id:"arguments",children:[],level:2},{value:"Return",id:"return",children:[],level:2},{value:"Playground",id:"playground",children:[],level:2}],s={toc:k};function c(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"about"},"About"),(0,l.kt)("p",null,"Build counter easily with useCounter."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useCounter } from 'react-hooks-extended';\n")),(0,l.kt)("h2",{id:"baisc-example"},"Baisc example"),(0,l.kt)(i.Z,{groupId:"lng",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const { count, increment, decrement, reset } = useCounter();\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n"))),(0,l.kt)(o.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example() {\n  const { count, increment, decrement, reset } = useCounter();\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"initialCount")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"() => number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Initial counter value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UseCounterOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options.min")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Minimum counter values"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Number.MIN_SAFE_INTEGER"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options.max")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum counter value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Number.MAX_SAFE_INTEGER"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options.step")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter increment step"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h2",{id:"return"},"Return"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Current count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"increment")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Increment by one step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decrement")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Decrement by one step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"incrementBy")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"(value: number) => void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Increment with specific number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decrementBy")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"(value: number) => void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Decrement with specific number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"set")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"(value: number) => void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set counter to certain value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"reset")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reset counter to initial value")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Playground() {\n  const { count, increment, decrement, incrementBy, decrementBy, reset, set } =\n    useCounter(0, { min: 0, max: 100, step: 2 });\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n      <button onClick={() => incrementBy(5)}>Increment by 5</button>\n      <button onClick={() => decrementBy(5)}>Decrement by 5</button>\n      <button onClick={() => set(50)}>Set to 50</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);