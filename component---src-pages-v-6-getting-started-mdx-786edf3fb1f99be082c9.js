(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{BYEA:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return m})),s.d(e,"default",(function(){return N}));var n=s("wx14"),t=s("Ff2n"),p=(s("q1tI"),s("7ljp")),c=s("7oih");s("qKvR");const m={},b={_frontmatter:m},r=c.a;function N(a){let{components:e}=a,s=Object(t.a)(a,["components"]);return Object(p.b)(r,Object(n.a)({},b,s,{components:e,mdxType:"MDXLayout"}),Object(p.b)("p",null,"There are two ways to install the package."),Object(p.b)("h3",null,"1. Package Manager"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"bash","data-index":"0"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk3"},"# npm")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"npm i tippy.js")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"}),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk3"},"# Yarn")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"yarn add tippy.js")))),Object(p.b)("p",null,"In your application, import the ",Object(p.b)("inlineCode",{parentName:"p"},"tippy")," module, and the core CSS:"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"js","data-index":"1"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"import"),Object(p.b)("span",{parentName:"span",className:"mtk1"}," tippy "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"from"),Object(p.b)("span",{parentName:"span",className:"mtk1"}," "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(p.b)("span",{parentName:"span",className:"mtk11"},"tippy.js"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"';")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"import"),Object(p.b)("span",{parentName:"span",className:"mtk1"}," "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(p.b)("span",{parentName:"span",className:"mtk11"},"tippy.js/dist/tippy.css"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"';"),Object(p.b)("span",{parentName:"span",className:"mtk1"}," "),Object(p.b)("span",{parentName:"span",className:"mtk3"},"// optional for styling")))),Object(p.b)("p",null,"This assumes you're using a module bundler like webpack, Rollup, or Parcel. If\nyou're getting an error message about ",Object(p.b)("inlineCode",{parentName:"p"},"process")," inside the browser,\n",Object(p.b)("a",{parentName:"p",href:"../faq/#im-getting-uncaught-referenceerror-process-is-not-defined"},"see the FAQ for help.")),Object(p.b)("p",null,'The core CSS is not required, but provides a base styling for you to use. If\nyou\'d like to use Tippy "headless" without any of the default element rendering\nor CSS, use ',Object(p.b)("a",{parentName:"p",href:"../headless-tippy/"},"Headless Tippy"),"."),Object(p.b)("h3",null,"2. CDN"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"2"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk3"},"\x3c!-- Development --\x3e")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"}),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk3"},"\x3c!-- Production --\x3e")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/@popperjs/core@2"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/tippy.js@6"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")))),Object(p.b)("p",null,"Place them at the very bottom of the ",Object(p.b)("inlineCode",{parentName:"p"},"<body>"),", ensuring they are placed before\nyour own scripts. The version numbers after ",Object(p.b)("inlineCode",{parentName:"p"},"@")," are important, make sure they\ndon't get removed."),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},Object(p.b)("strong",{parentName:"p"},"Note")),Object(p.b)("p",{parentName:"blockquote"},"The CSS automatically gets injected into ",Object(p.b)("inlineCode",{parentName:"p"},"<head>")," with the CDN\n(",Object(p.b)("inlineCode",{parentName:"p"},"tippy-bundle"),"). With CSP enabled, you may need to separately link\n",Object(p.b)("inlineCode",{parentName:"p"},"dist/tippy.css")," and use ",Object(p.b)("inlineCode",{parentName:"p"},"dist/tippy.umd.min.js")," instead.")),Object(p.b)("h3",null,"Usage"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"3"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"html"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"head"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"title"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">"),Object(p.b)("span",{parentName:"span",className:"mtk1"},"Tippy"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"title"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"head"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"body"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"button "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"id"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"myButton"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'">'),Object(p.b)("span",{parentName:"span",className:"mtk1"},"My button"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"button"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"}),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"    <"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/@popperjs/core@2"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"    <"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/tippy.js@6"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"></'),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"    <"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"      "),Object(p.b)("span",{parentName:"span",className:"mtk3"},"// With the above scripts loaded, you can call `tippy()` with a CSS")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"      "),Object(p.b)("span",{parentName:"span",className:"mtk3"},"// selector and a `content` prop:")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk20"},"      "),Object(p.b)("span",{parentName:"span",className:"mtk13"},"tippy"),Object(p.b)("span",{parentName:"span",className:"mtk20"},"("),Object(p.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(p.b)("span",{parentName:"span",className:"mtk11"},"#myButton"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"',"),Object(p.b)("span",{parentName:"span",className:"mtk20"}," {")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk20"},"        "),Object(p.b)("span",{parentName:"span",className:"mtk15"},"content"),Object(p.b)("span",{parentName:"span",className:"mtk5"},":"),Object(p.b)("span",{parentName:"span",className:"mtk21"}," "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(p.b)("span",{parentName:"span",className:"mtk11"},"My tooltip!"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"',")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk20"},"      })"),Object(p.b)("span",{parentName:"span",className:"mtk5"},";")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk20"},"    "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"script"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"body"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"</"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"html"),Object(p.b)("span",{parentName:"span",className:"mtk5"},">")))),Object(p.b)("h3",null,"Component Wrappers"),Object(p.b)("h4",null,"React"),Object(p.b)("p",null,"Using React? Use the\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/atomiks/tippyjs-react"},"official component package")," which\nintegrates well with React, allowing you to use Tippy declaratively."),Object(p.b)("h4",null,"Ember"),Object(p.b)("p",null,"There is the unofficial ",Object(p.b)("a",{parentName:"p",href:"https://github.com/nag5000/ember-tippy"},"ember-tippy")," addon\nfor Emberistas."),Object(p.b)("h3",null,"Optional extra imports"),Object(p.b)("p",null,"For brevity, this documentation shows imports via a module bundler in Node. If\nyou're using the CDN, you'll be using ",Object(p.b)("inlineCode",{parentName:"p"},"<link>")," tags instead."),Object(p.b)("p",null,"This ",Object(p.b)("strong",{parentName:"p"},"optional")," extra import in the documentation:"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"js","data-index":"4"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"import"),Object(p.b)("span",{parentName:"span",className:"mtk1"}," "),Object(p.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(p.b)("span",{parentName:"span",className:"mtk11"},"tippy.js/animations/scale.css"),Object(p.b)("span",{parentName:"span",className:"mtk5"},"';")))),Object(p.b)("p",null,"Is equivalent to this using a CDN in the browser:"),Object(p.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"5"},Object(p.b)("code",{parentName:"pre",className:"grvsc-code"},Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"<"),Object(p.b)("span",{parentName:"span",className:"mtk14"},"link")),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk14"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"rel"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"stylesheet"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk14"},"  "),Object(p.b)("span",{parentName:"span",className:"mtk8"},"href"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'="'),Object(p.b)("span",{parentName:"span",className:"mtk11"},"https://unpkg.com/tippy.js@6/animations/scale.css"),Object(p.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(p.b)("span",{parentName:"code",className:"grvsc-line"},Object(p.b)("span",{parentName:"span",className:"mtk5"},"/>")))),Object(p.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n  .moonlight-ii {\n    background-color: #222436;\n    color: #c8d3f5;\n  }\n  .moonlight-ii .mtk3 { color: #7A88CF; }\n  .moonlight-ii .mtk1 { color: #C8D3F5; }\n  .moonlight-ii .mtk5 { color: #86E1FC; }\n  .moonlight-ii .mtk11 { color: #C3E88D; }\n  .moonlight-ii .mtk14 { color: #FF757F; }\n  .moonlight-ii .mtk8 { color: #C099FF; }\n  .moonlight-ii .mtk20 { color: #B4C2F0; }\n  .moonlight-ii .mtk13 { color: #65BCFF; }\n  .moonlight-ii .mtk15 { color: #4FD6BE; }\n  .moonlight-ii .mtk21 { color: #A9B8E8; }\n"))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-getting-started-mdx-786edf3fb1f99be082c9.js.map