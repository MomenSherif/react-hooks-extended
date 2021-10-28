"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[477],{3683:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>d,contentTitle:()=>m,metadata:()=>u,toc:()=>p,default:()=>c});var a=n(7896),r=n(1461),o=(n(2784),n(876)),i=n(2039),l=n(1846),s=["components"],d={sidebar_label:"useMutation",sidebar_position:13,title:"useMutation"},m=void 0,u={unversionedId:"custom-hooks/use-mutation",id:"custom-hooks/use-mutation",isDocsHomePage:!1,title:"useMutation",description:"About",source:"@site/docs/custom-hooks/use-mutation.mdx",sourceDirName:"custom-hooks",slug:"/custom-hooks/use-mutation",permalink:"/react-hooks-extended/custom-hooks/use-mutation",editUrl:"https://github.com/MomenSherif/react-hooks-extended/tree/master/apps/docs/docs/custom-hooks/use-mutation.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"useMutation",sidebar_position:13,title:"useMutation"},sidebar:"docsSidebar",previous:{title:"useQuery",permalink:"/react-hooks-extended/custom-hooks/use-query"}},p=[{value:"About",id:"about",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Baisc example",id:"baisc-example",children:[],level:2},{value:"Arguments",id:"arguments",children:[],level:2},{value:"Return",id:"return",children:[],level:2},{value:"Playground",id:"playground",children:[],level:2}],k={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"Mutate data with loading & error states indicators easier with useMutation."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useMutation } from 'react-hooks-extended';\n")),(0,o.kt)("h2",{id:"baisc-example"},"Baisc example"),(0,o.kt)(i.Z,{groupId:"lng",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const { mutate, isLoading, isError, error } = useMutation(\n    // Any mutation action that returns a promise\n    // Just a dummy example for showing success & error randomly\n    name =>\n      new Promise((res, rej) => {\n        setTimeout(\n          () => (Math.random() > 0.5 ? res(name) : rej(new Error('Oops!'))),\n          1000\n        );\n      }),\n    {\n      onSuccess: data => console.log(`onSuccess ${data}`),\n      onError: error => console.log(`onError ${error}`),\n    }\n  );\n\n  return (\n    <div>\n      <button onClick={() => mutate('useMutation')} disabled={isLoading}>\n        Delete {isLoading && '...'} {!isLoading && isError && error?.message}\n      </button>\n    </div>\n  );\n}\n"))),(0,o.kt)(l.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example() {\n  const { mutate, isLoading, isError, error } = useMutation(\n    // Any mutation action that returns a promise\n    // Just a dummy example for showing success & error randomly\n    (name: string) =>\n      new Promise((res, rej) => {\n        setTimeout(\n          () => (Math.random() > 0.5 ? res(name) : rej(new Error('Oops!'))),\n          1000\n        );\n      }),\n    {\n      onSuccess: data => console.log(`onSuccess ${data}`),\n      onError: (error: Error) => console.log(`onError ${error}`),\n    }\n  );\n\n  return (\n    <div>\n      <button onClick={() => mutate('useMutation')} disabled={isLoading}>\n        Delete {isLoading && '...'} {!isLoading && isError && error?.message}\n      </button>\n    </div>\n  );\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mutationFn")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(... args: K[]) => Promise<T>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mutation function that returns a promise"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"UseMutationOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mutation options"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options.onSuccess")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(data: T) => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function to be called with the data after mutation success"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options.onError")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(error: E) => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function to be called with the error after mutation fail"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Return value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mutate")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"(...args: K[]) => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mutate function to be called to trigger the mutation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"reset")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reset internal state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"isLoading")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Is mutating")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"isError")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Is mutation failed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"E")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error state catched from mutation function")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Playground() {\n  const { mutate, isLoading, isError, error } = useMutation(\n    // Any mutation action that returns a promise\n    // Just a dummy example for showing success & error randomly\n    name =>\n      new Promise((res, rej) => {\n        setTimeout(\n          () => (Math.random() > 0.5 ? res(name) : rej(new Error('Oops!'))),\n          1000\n        );\n      }),\n    {\n      onSuccess: data => console.log(`onSuccess ${data}`),\n      onError: error => console.log(`onError ${error}`),\n    }\n  );\n\n  return (\n    <div>\n      <button onClick={() => mutate('useMutation')} disabled={isLoading}>\n        Delete {isLoading && '...'} {!isLoading && isError && error.message}\n      </button>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);