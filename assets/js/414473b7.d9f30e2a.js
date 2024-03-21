"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7418],{52248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=t(85893),o=t(11151);const s={title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",authors:["skzhang1","jieyuz2"],tags:["LLM","research"]},a=void 0,r={permalink:"/autogen/blog/2023/12/23/AgentOptimizer",source:"@site/blog/2023-12-23-AgentOptimizer/index.mdx",title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",description:"Overall structure of AgentOptimizer",date:"2023-12-23T00:00:00.000Z",formattedDate:"December 23, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:6.23,hasTruncateMarker:!1,authors:[{name:"Shaokun Zhang",title:"PhD student at the Pennsylvania State University",url:"https://github.com/skzhang1",imageURL:"https://github.com/skzhang1.png",key:"skzhang1"},{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],frontMatter:{title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",authors:["skzhang1","jieyuz2"],tags:["LLM","research"]},unlisted:!1,prevItem:{title:"All About Agent Descriptions",permalink:"/autogen/blog/2023/12/29/AgentDescriptions"},nextItem:{title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",permalink:"/autogen/blog/2023/12/01/AutoGenStudio"}},c={authorsImageUrls:[void 0,void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"AgentOptimizer",id:"agentoptimizer",level:2},{value:"Pseudocode for the optimization process",id:"pseudocode-for-the-optimization-process",level:2},{value:"The implementation technology behind the AgentOptimizer",id:"the-implementation-technology-behind-the-agentoptimizer",level:2},{value:"Limitation &amp; Future work",id:"limitation--future-work",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Overall structure of AgentOptimizer",src:t(73184).Z+"",width:"1496",height:"600"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TL;DR:"}),"\nIntroducing ",(0,i.jsx)(n.strong,{children:"AgentOptimizer"}),", a new class for training LLM agents in the era of LLMs as a service.\n",(0,i.jsx)(n.strong,{children:"AgentOptimizer"})," is able to prompt autogen agents to iteratively optimize its function/skills according to the historical conversation and performance.\nCheckout one implementation for ",(0,i.jsx)(n.strong,{children:"AgentOptimizer"})," on ",(0,i.jsx)(n.a,{href:"https://github.com/hendrycks/math",children:"MATH"})," dataset\n",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Paper is coming soon!"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["In traditional ML pipeline, we train a model by updating its weights according to the loss on the training set, while in the era of LLM agents, how should we train an agent?\nHere, we take an initial step towards the agent training.\nInspired by the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"function calling"})," capabilities provided by OpenAI,\nwe draw an analogy between model weights and agent functions/skills, and update an agent\u2019s functions/skills based on its historical performance on a training set.\nSpecifically, we propose to use the function calling capabilities to formulate the actions that optimize the agents\u2019 functions as a set of function calls,\nto support iteratively ",(0,i.jsx)(n.strong,{children:"adding, revising, and removing"})," existing functions.\nAs an agentic way of training an agent, our approach helps enhance the agents\u2019 abilities without requiring access to the LLMs weights."]}),"\n",(0,i.jsx)(n.h2,{id:"agentoptimizer",children:"AgentOptimizer"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AgentOptimizer"})," is a class designed to optimize the agents by improving their function calls.\nIt contains two core methods:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"step()"}),": ",(0,i.jsx)(n.code,{children:"step()"})," takes three inputs, including the previous conversation history (history), the statistical information of solving previous problems (statistic), and the current functions (current_functions)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"actions, updated_functions = AgentOptimizer.step(history, statistic, current_functions)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It has two outputs ",(0,i.jsx)(n.code,{children:"actions"})," and ",(0,i.jsx)(n.code,{children:"updated_functions"}),". ",(0,i.jsx)(n.code,{children:"actions"})," is a series of actions to manipulate the current functions. And ",(0,i.jsx)(n.code,{children:"updated_functions"})," is the updated functions after the actions are applied (including code implementation)."]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"update_function_call()"}),":\nThis method takes the agents and actions as input. It updates the functions registered in these agents according to the actions from ",(0,i.jsx)(n.code,{children:"step()"}),".\nFor AssistantAgent, it first uses ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#update_function_signature",children:"update_function_signature"})," to update the function signatures.\nThen, it updates the functions in the MathUserproxyAgent with the corresponding code implementation gained from ",(0,i.jsx)(n.code,{children:"step()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes, the function signatures (JSON schema) returned by the ",(0,i.jsx)(n.code,{children:"step()"})," may not be valid, and the generated code may also face syntax errors.\n",(0,i.jsx)(n.strong,{children:"AgentOptimizer"})," includes mechanisms to check the (1) validity of the function signatures and (2) code implementation before updating the functions.\nMoreover, it also includes mechanisms to check whether each action is feasible, such as avoiding the removal of a function that is not in the current functions due to hallucination."]}),"\n",(0,i.jsx)(n.h2,{id:"pseudocode-for-the-optimization-process",children:"Pseudocode for the optimization process"}),"\n",(0,i.jsx)(n.p,{children:"The optimization process is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for - in range(EPOCH):\n    history, statistic, current_functions = solve_problems(train_problems)\n    actions, updated_functions = AgentOptimizer.step(history, statistic, current_functions)\n    AgentOptimizer.update_function_call(actions)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Given a prepared training dataset, the agents iteratively solve problems from the training set to obtain conversation history and statistical information.\nThe functions are then improved using AgentOptimizer.\nEach iteration can be regarded as one training step analogous to traditional machine learning, with the optimization elements being the functions that agents have.\nAfter EPOCH iterations, the agents are expected to obtain better functions that may be used in future tasks"}),"\n",(0,i.jsx)(n.h2,{id:"the-implementation-technology-behind-the-agentoptimizer",children:"The implementation technology behind the AgentOptimizer"}),"\n",(0,i.jsxs)(n.p,{children:["To obtain stable and structured function signatures and code implementations from AgentOptimizer,\nwe leverage the function calling capabilities provided by OpenAI to formulate the actions that manipulate the functions as a set of function calls.\nSpecifically, we introduce three function calls to manipulate the current functions at each step: ",(0,i.jsx)(n.code,{children:"add_function"}),", ",(0,i.jsx)(n.code,{children:"remove_function"}),", and ",(0,i.jsx)(n.code,{children:"revise_function"}),".\nThese calls add, remove, and revise functions in the existing function list, respectively.\nThis practice could fully leverages the function calling capabilities of GPT-4 and outputs structured functions with more stable signatures and code implementation.\nBelow is the JSON schema of these function calls:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add_function"}),": Add one new function that may be used in the future tasks."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'ADD_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "add_function",\n        "description": "Add a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                },\n                "description": {\n                    "type": "string",\n                    "description": "A short description of the function."\n                },\n                "arguments": {\n                    "type": "string",\n                    "description": "JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { \\"url\\": { \\"type\\": \\"string\\", \\"description\\": \\"The URL\\", }}. Please avoid the error \'array schema missing items\' when using array type."\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list."\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration."\n                }\n            },\n            "required": ["name", "description", "arguments", "packages", "code"]\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"revise_function"}),": Revise one existing function (code implementation, function signature) in the current function list according to the conversation history and performance."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'REVISE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "revise_function",\n        "description": "Revise a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                },\n                "description": {\n                    "type": "string",\n                    "description": "A short description of the function."\n                },\n                "arguments": {\n                    "type": "string",\n                    "description": "JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { \\"url\\": { \\"type\\": \\"string\\", \\"description\\": \\"The URL\\", }}. Please avoid the error \'array schema missing items\' when using array type."\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list."\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration."\n                }\n            },\n            "required": ["name", "description", "arguments", "packages", "code"]\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remove_function"}),": Remove one existing function in the current function list. It is used to remove the functions that are not useful (redundant) in the future tasks."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'REMOVE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "remove_function",\n        "description": "Remove one function in the context of the conversation. Once remove one function, the assistant will not use this function in future conversation.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                }\n            },\n            "required": ["name"]\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"limitation--future-work",children:"Limitation & Future work"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Unlike gradient descent in traditional machine learning training processes, each optimization step does not necessarily lead to better performance on the training set.\nWhen the training epoch is small, the agent\u2019s performance may even decrease. One urgent task is to design a better mechanism to guide the optimization process."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb",children:"Current implementation"})," of AgentOptimizer is mainly for illustration purpose and is just a proof of concept.\nIt is not formally integrated into the autogen with a general interface like optimizing any kinds of agents in any tasks.\nCurrently, it only supports optimizing the multi-agent system in solving problems from ",(0,i.jsx)(n.a,{href:"https://github.com/hendrycks/math",children:"MATH"})," dataset. We will integrate it into autogen with more general interface in the future."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},73184:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/agentoptimizer-33b265dcca6cff56bbf0c9d63ff389f9.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);