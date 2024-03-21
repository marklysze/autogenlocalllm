"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8574],{44482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(85893),i=n(11151);const r={title:"MathChat - An Conversational Framework to Solve Math Problems",authors:"yiranwu",tags:["LLM","GPT","research"]},a=void 0,o={permalink:"/autogen/blog/2023/06/28/MathChat",source:"@site/blog/2023-06-28-MathChat/index.mdx",title:"MathChat - An Conversational Framework to Solve Math Problems",description:"MathChat WorkFlow",date:"2023-06-28T00:00:00.000Z",formattedDate:"June 28, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:7.31,hasTruncateMarker:!1,authors:[{name:"Yiran Wu",title:"PhD student at Pennsylvania State University",url:"https://github.com/kevin666aa",imageURL:"https://github.com/kevin666aa.png",key:"yiranwu"}],frontMatter:{title:"MathChat - An Conversational Framework to Solve Math Problems",authors:"yiranwu",tags:["LLM","GPT","research"]},unlisted:!1,prevItem:{title:"Use AutoGen for Local LLMs",permalink:"/autogen/blog/2023/07/14/Local-LLMs"},nextItem:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",permalink:"/autogen/blog/2023/05/18/GPT-adaptive-humaneval"}},l={authorsImageUrls:[void 0]},h=[{value:"The MathChat Framework",id:"the-mathchat-framework",level:2},{value:"Experiment Setup",id:"experiment-setup",level:2},{value:"Experiment Results",id:"experiment-results",level:2},{value:"Future Directions",id:"future-directions",level:2},{value:"For Further Reading",id:"for-further-reading",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"MathChat WorkFlow",src:n(4579).Z+"",width:"2159",height:"639"}),"\n",(0,s.jsx)(t.strong,{children:"TL;DR:"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"We introduce MathChat, a conversational framework leveraging Large Language Models (LLMs), specifically GPT-4, to solve advanced mathematical problems."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"MathChat improves LLM's performance on challenging math problem-solving, outperforming basic prompting and other strategies by about 6%. The improvement was especially notable in the Algebra category, with a 15% increase in accuracy."})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Despite the advancement, GPT-4 still struggles to solve very challenging math problems, even with effective prompting strategies. Further improvements are needed, such as the development of more specific assistant models or the integration of new tools and prompts."})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Recent Large Language Models (LLMs) like GTP-3.5 and GPT-4 have demonstrated astonishing abilities over previous models on various tasks, such as text generation, question answering, and code generation. Moreover, these models can communicate with humans through conversations and remember previous contexts, making it easier for humans to interact with them. These models play an increasingly important role in our daily lives assisting people with different tasks, such as writing emails, summarizing documents, and writing code."}),"\n",(0,s.jsx)(t.p,{children:"In this blog post, we probe into the problem-solving capabilities of LLMs. Specifically, we are interested in their capabilities to solve advanced math problems, which could be representative of a broader class of problems that require precise reasoning and also have deterministic solutions."}),"\n",(0,s.jsx)(t.p,{children:"We introduce MathChat, a conversational framework designed for solving challenging math problems with LLMs. This framework takes advantage of the chat-optimized feature of state-of-the-art LLMs, where a user proxy agent and an LLM assistant work together to tackle math problems. We also test previous prompting techniques for comparison."}),"\n",(0,s.jsx)(t.h2,{id:"the-mathchat-framework",children:"The MathChat Framework"}),"\n",(0,s.jsx)(t.p,{children:"MathChat simulates a conversation between the LLM assistant and a user proxy agent. As the name indicates, the user proxy agent acts as a proxy for the user, which is responsible for communicating with the LLM assistant and continuing the conversation in a desired manner."}),"\n",(0,s.jsx)(t.p,{children:"The proxy agent first presents a math problem to the LLM assistant, framed by an initial prompt that guides the assistant in how it should work collaboratively to solve the problem. We incorporate existing prompting methods such as CoT (chain-of-thought) and tool-using are incorporated in the initial prompt. Key components of the prompt include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tool-using Prompt:"})," This guides the LLM assistant to use Python code in the correct format to address the problem, allowing the user proxy agent to parse the code and provide the appropriate results."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Problem-Solving Strategy Selection Prompt:"})," The assistant is instructed to choose one of three potential problem-solving strategies, including:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Writing a Python program to solve the problem directly."}),"\n",(0,s.jsx)(t.li,{children:"Solving the problem directly without using Python, which exercises LLMs' inherent reasoning capabilities."}),"\n",(0,s.jsx)(t.li,{children:"Solving the problem step by step with Python. This should be used when the first two strategies aren't suitable."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Final Answer Encapsulation Prompt:"})," This part instructs the assistant to put the final answer in ",(0,s.jsx)(t.em,{children:"\\boxed"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The prompt design in MathChat is flexible and can easily be refined to include other tools, such as Wolfram Alpha."}),"\n",(0,s.jsxs)(t.p,{children:["Let's take a look at an example between the ",(0,s.jsx)(t.strong,{children:"User Proxy Agent"})," and the ",(0,s.jsx)(t.strong,{children:"LLM Assistant"})," (GPT-4). The conversation focuses on how to solve inequality using Python.\n(The conversation is modified for readability.)"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Participant"}),(0,s.jsx)(t.th,{children:"Dialogue"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User Proxy Agent"}),(0,s.jsx)(t.td,{children:"(Initial Prompt: Let's solve a math problem with Python...) Problem: Find all x that satisfy the inequality (2x+10)(x+3) < (3x+9)(x+8). Express your answer in interval notation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LLM assistant"}),(0,s.jsx)(t.td,{children:"The key idea to solve this problem is to find the critical points, which are the points where the inequality is equal. Then, test the intervals between the critical points to find the interval for which the inequality holds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LLM assistant (continued)"}),(0,s.jsxs)(t.td,{children:["Here's Python code to find the critical points: ",(0,s.jsx)(t.code,{children:'from sympy import symbols, Eq, solve; x = symbols("x"); lhs = (2*x + 10)*(x + 3); rhs = (3*x + 9)*(x + 8); equation = Eq(lhs, rhs); critical_points = solve(equation, x); critical_points'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User Proxy Agent"}),(0,s.jsx)(t.td,{children:"The critical points are: [-14, -3]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LLM assistant"}),(0,s.jsx)(t.td,{children:"We found the critical points to be x = -14 and x = -3. Now we'll test the intervals between these critical points as well as points before and after the critical points. The intervals are: x < -14, -14 < x < -3, x > -3."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LLM assistant (continued)"}),(0,s.jsxs)(t.td,{children:["Here's Python code to test the inequality for each interval: ",(0,s.jsx)(t.code,{children:'from sympy import symbols; x = symbols("x"); inequality = (2*x + 10)*(x + 3) < (3*x + 9)*(x + 8); test_points = [-15, -5, 0]; intervals = []; for point in test_points: if inequality.subs(x, point): intervals.append(point); intervals'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User Proxy Agent"}),(0,s.jsx)(t.td,{children:"The intervals where the inequality holds true are for test points: [-15, 0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LLM assistant"}),(0,s.jsx)(t.td,{children:"We have tested the intervals and found that the inequality holds for: 1. x < -14 (test point: -15) 2. x > -3 (test point: 0). Therefore, the solution to the inequality (2x+10)(x+3) < (3x+9)(x+8) is x \u2208 (-\u221e, -14) \u222a (-3, \u221e)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"experiment-setup",children:"Experiment Setup"}),"\n",(0,s.jsx)(t.p,{children:"We evaluate the improvement brought by MathChat."}),"\n",(0,s.jsx)(t.p,{children:"For the experiment, we focus on the level-5 problems from the MATH dataset, which are composed of high school competition problems. These problems include the application of theorems and complex equation derivation and are challenging even for undergraduate students. We evaluate 6 of 7 categories from the dataset (excluding Geometry): Prealgebra, Algebra, Number Theory, Counting and Probability, Intermediate Algebra, and Precalculus."}),"\n",(0,s.jsxs)(t.p,{children:["We evaluate GPT-4 and use the default configuration of the OpenAI API. To access the final performance, we manually compare the final answer with the correct answer.  For the vanilla prompt, Program Synthesis, and MathChat, we have GPT-4 enclose the final answer in ",(0,s.jsx)(t.em,{children:"\\boxed"}),", and we take the return of the function in PoT as the final answer."]}),"\n",(0,s.jsx)(t.p,{children:"We also evaluate the following methods for comparison:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Vanilla prompting:"})," Evaluates GPT-4's direct problem-solving capability. The prompt used is: ",(0,s.jsxs)(t.em,{children:['" Solve the problem carefully. Put the final answer in \\boxed','"']}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Program of Thoughts (PoT):"})," Uses a zero-shot PoT prompt that requests the model to create a ",(0,s.jsx)(t.em,{children:"Solver"})," function to solve the problem and return the final answer."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Program Synthesis (PS) prompting:"})," Like PoT, it prompts the model to write a program to solve the problem. The prompt used is: ",(0,s.jsx)(t.em,{children:'"Write a program that answers the following question: {Problem}"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"experiment-results",children:"Experiment Results"}),"\n",(0,s.jsx)(t.p,{children:"The accuracy on all the problems with difficulty level-5 from different categories of the MATH dataset with different methods is shown below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Result",src:n(85553).Z+"",width:"1470",height:"326"})}),"\n",(0,s.jsx)(t.p,{children:"We found that compared to basic prompting, which demonstrates the innate capabilities of GPT-4, utilizing Python within the context of PoT or PS strategy improved the overall accuracy by about 10%. This increase was mostly seen in categories involving more numerical manipulations, such as Counting & Probability and Number Theory, and in more complex categories like Intermediate Algebra and Precalculus."}),"\n",(0,s.jsx)(t.p,{children:"For categories like Algebra and Prealgebra, PoT and PS showed little improvement, and in some instances, even led to a decrease in accuracy. However, MathChat was able to enhance total accuracy by around 6% compared to PoT and PS, showing competitive performance across all categories. Remarkably, MathChat improved accuracy in the Algebra category by about 15% over other methods. Note that categories like Intermediate Algebra and Precalculus remained challenging for all methods, with only about 20% of problems solved accurately."}),"\n",(0,s.jsxs)(t.p,{children:["The code for experiments can be found at this ",(0,s.jsx)(t.a,{href:"https://github.com/kevin666aa/FLAML/tree/gpt_math_solver/flaml/autogen/math",children:"repository"}),".\nWe now provide an implementation of MathChat using the interactive agents in AutoGen. See this ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_MathChat.ipynb",children:"notebook"})," for example usage."]}),"\n",(0,s.jsx)(t.h2,{id:"future-directions",children:"Future Directions"}),"\n",(0,s.jsx)(t.p,{children:"Despite MathChat's improvements over previous methods, the results show that complex math problem is still challenging for recent powerful LLMs, like GPT-4, even with help from external tools."}),"\n",(0,s.jsx)(t.p,{children:"Further work can be done to enhance this framework or math problem-solving in general:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Although enabling the model to use tools like Python can reduce calculation errors, LLMs are still prone to logic errors. Methods like self-consistency (Sample several solutions and take a major vote on the final answer), or self-verification (use another LLM instance to check whether an answer is correct) might improve the performance."}),"\n",(0,s.jsx)(t.li,{children:"Sometimes, whether the LLM can solve the problem depends on the plan it uses. Some plans require less computation and logical reasoning, leaving less room for mistakes."}),"\n",(0,s.jsx)(t.li,{children:"MathChat has the potential to be adapted into a copilot system, which could assist users with math problems. This system could allow users to be more involved in the problem-solving process, potentially enhancing learning."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://arxiv.org/abs/2306.01337",children:"Research paper of MathChat"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"/docs/Getting-Started",children:["Documentation about ",(0,s.jsx)(t.code,{children:"autogen"})]})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Are you working on applications that involve math problem-solving? Would you appreciate additional research or support on the application of LLM-based agents for math problem-solving? Please join our ",(0,s.jsx)(t.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"})," server for discussion."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4579:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mathchatflow-926a8ed1975a114ab76c69996942c23a.png"},85553:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/result-514251f4c387d5b6e11656e1fa33de08.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);