"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[329],{2895:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>m,toc:()=>u,default:()=>c});var a=n(7896),r=n(1461),i=(n(2784),n(876)),l=n(2039),d=n(1846),o=["components"],p={sidebar_label:"useStepper",sidebar_position:2,title:"useStepper"},s=void 0,m={unversionedId:"custom-hooks/use-stepper",id:"custom-hooks/use-stepper",isDocsHomePage:!1,title:"useStepper",description:"About",source:"@site/docs/custom-hooks/use-stepper.mdx",sourceDirName:"custom-hooks",slug:"/custom-hooks/use-stepper",permalink:"/react-hooks-extended/custom-hooks/use-stepper",editUrl:"https://github.com/MomenSherif/react-hooks-extended/tree/master/apps/docs/docs/custom-hooks/use-stepper.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"useStepper",sidebar_position:2,title:"useStepper"},sidebar:"docsSidebar",previous:{title:"useCounter",permalink:"/react-hooks-extended/custom-hooks/use-counter"},next:{title:"useToggle",permalink:"/react-hooks-extended/custom-hooks/use-toggle"}},u=[{value:"About",id:"about",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Baisc example",id:"baisc-example",children:[],level:2},{value:"Arguments",id:"arguments",children:[],level:2},{value:"Return",id:"return",children:[],level:2},{value:"Playground",id:"playground",children:[],level:2}],k={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"Build stepper easily with useStepper."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useStepper } from 'react-hooks-extended';\n")),(0,i.kt)("h2",{id:"baisc-example"},"Baisc example"),(0,i.kt)(l.Z,{groupId:"lng",mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const todos = [\n  { id: 1, title: 'title 1', body: 'body 1' },\n  { id: 2, title: 'title 2', body: 'body 2' },\n  { id: 3, title: 'title 3', body: 'body 3' },\n  { id: 4, title: 'title 4', body: 'body 4' },\n  { id: 5, title: 'title 5', body: 'body 5' },\n];\n\nfunction Example() {\n  const { currentStep, next, prev, canNext, canPrev } = useStepper(todos);\n\n  return (\n    <div>\n      <div>\n        <h2>{currentStep.title}</h2>\n        <p>{currentStep.body}</p>\n      </div>\n      <button disabled={!canPrev} onClick={prev}>\n        Prev\n      </button>\n      <button disabled={!canNext} onClick={next}>\n        Next\n      </button>\n    </div>\n  );\n}\n"))),(0,i.kt)(d.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const todos = [\n  { id: 1, title: 'title 1', body: 'body 1' },\n  { id: 2, title: 'title 2', body: 'body 2' },\n  { id: 3, title: 'title 3', body: 'body 3' },\n  { id: 4, title: 'title 4', body: 'body 4' },\n  { id: 5, title: 'title 5', body: 'body 5' },\n];\n\nfunction Example() {\n  const { currentStep, next, prev, canNext, canPrev } = useStepper(todos);\n\n  return (\n    <div>\n      <div>\n        <h2>{currentStep.title}</h2>\n        <p>{currentStep.body}</p>\n      </div>\n      <button disabled={!canPrev} onClick={prev}>\n        Prev\n      </button>\n      <button disabled={!canNext} onClick={next}>\n        Next\n      </button>\n    </div>\n  );\n}\n")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"steps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of steps"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UseStepperOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stepper options"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.initialStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial active step"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,i.kt)("h2",{id:"return"},"Return"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Return value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"currentStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Current active step")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"currentIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Current active Index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Go to next step")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Go to prev step")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"goto")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"(step: number) => void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Go to certain step")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reset")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reset to initial step")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"canNext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Has next steps")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"canPrev")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Has previous steps")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Playground() {\n  const {\n    currentStep,\n    currentIndex,\n    next,\n    prev,\n    canNext,\n    canPrev,\n    goto,\n    reset,\n  } = useStepper(\n    [\n      { id: 1, title: 'title 1', body: 'body 1' },\n      { id: 2, title: 'title 2', body: 'body 2' },\n      { id: 3, title: 'title 3', body: 'body 3' },\n      { id: 4, title: 'title 4', body: 'body 4' },\n      { id: 5, title: 'title 5', body: 'body 5' },\n    ],\n    {\n      initialStep: 0,\n    }\n  );\n\n  return (\n    <div>\n      <div>\n        <div>Current index {currentIndex}</div>\n        <h2>{currentStep.title}</h2>\n        <p>{currentStep.body}</p>\n      </div>\n      <button onClick={reset}>Reset</button>\n      <button onClick={() => goto(2)}>go to 3</button>\n      <button disabled={!canPrev} onClick={prev}>\n        Prev\n      </button>\n      <button disabled={!canNext} onClick={next}>\n        Next\n      </button>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);