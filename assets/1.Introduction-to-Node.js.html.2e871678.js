import{r as a,o as p,c,a as t,b as o,w as r,F as d,d as e,e as _}from"./app.6c8a6d5d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},h=t("h1",{id:"nodejs-\u7B80\u4ECB",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nodejs-\u7B80\u4ECB","aria-hidden":"true"},"#"),e(" NodeJS \u7B80\u4ECB")],-1),u={class:"table-of-contents"},f=e("\u5E9E\u5927\u7684\u4ED3\u5E93"),g=e("\u4E00\u4E2A\u793A\u4F8B Node.js \u5E94\u7528\u7A0B\u5E8F"),j=e("Node.js \u6846\u67B6\u548C\u5DE5\u5177"),b=_('<p>Node.js \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u8DE8\u5E73\u53F0 JavaScript \u8FD0\u884C\u65F6\u73AF\u5883\u3002\u5B83\u51E0\u4E4E\u662F\u4EFB\u4F55\u7C7B\u578B\u9879\u76EE\u7684\u6D41\u884C\u5DE5\u5177\uFF01</p><p>Node.js \u5728\u6D4F\u89C8\u5668\u4E4B\u5916\u8FD0\u884C V8 JavaScript \u5F15\u64CE\uFF0C\u5B83\u662F Google Chrome \u7684\u6838\u5FC3\u3002\u8FD9\u4F7F\u5F97 Node.js \u7684\u6027\u80FD\u975E\u5E38\u597D\u3002</p><p>Node.js \u5E94\u7528\u7A0B\u5E8F\u5728\u5355\u4E2A\u8FDB\u7A0B\u4E2D\u8FD0\u884C\uFF0C\u65E0\u9700\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u65B0\u7EBF\u7A0B\u3002 Node.js \u5728\u5176\u6807\u51C6\u5E93\u4E2D\u63D0\u4F9B\u4E86\u4E00\u7EC4\u5F02\u6B65 I/O \u539F\u8BED\uFF0C\u4EE5\u9632\u6B62 JavaScript \u4EE3\u7801\u963B\u585E\uFF0C\u901A\u5E38\uFF0CNode.js \u4E2D\u7684\u5E93\u662F\u4F7F\u7528\u975E\u963B\u585E\u8303\u5F0F\u7F16\u5199\u7684\uFF0C\u4F7F\u5F97\u963B\u585E\u884C\u4E3A\u6210\u4E3A\u4F8B\u5916\u800C\u4E0D\u662F\u5E38\u6001\u3002</p><p>\u5F53 Node.js \u6267\u884C I/O \u64CD\u4F5C\u65F6\uFF0C\u6BD4\u5982\u4ECE\u7F51\u7EDC\u8BFB\u53D6\u3001\u8BBF\u95EE\u6570\u636E\u5E93\u6216\u6587\u4EF6\u7CFB\u7EDF\uFF0CNode.js \u4F1A\u5728\u54CD\u5E94\u8FD4\u56DE\u65F6\u6062\u590D\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u963B\u585E\u7EBF\u7A0B\u548C\u6D6A\u8D39 CPU \u5468\u671F\u7B49\u5F85\u3002</p><p>\u8FD9\u5141\u8BB8 Node.js \u5904\u7406\u4E0E\u5355\u4E2A\u670D\u52A1\u5668\u7684\u6570\u5343\u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF0C\u800C\u200B\u200B\u4E0D\u4F1A\u5F15\u5165\u7BA1\u7406\u7EBF\u7A0B\u5E76\u53D1\u7684\u8D1F\u62C5\uFF0C\u8FD9\u53EF\u80FD\u662F\u9519\u8BEF\u7684\u91CD\u8981\u6765\u6E90\u3002</p><p>Node.js \u5177\u6709\u72EC\u7279\u7684\u4F18\u52BF\uFF0C\u56E0\u4E3A\u6570\u767E\u4E07\u4E3A\u6D4F\u89C8\u5668\u7F16\u5199 JavaScript \u7684\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u73B0\u5728\u65E0\u9700\u5B66\u4E60\u5B8C\u5168\u4E0D\u540C\u7684\u8BED\u8A00\uFF0C\u5C31\u53EF\u4EE5\u7F16\u5199\u9664\u5BA2\u6237\u7AEF\u4EE3\u7801\u4E4B\u5916\u7684\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\u3002</p><p>\u5728 Node.js \u4E2D\uFF0C\u53EF\u4EE5\u6BEB\u65E0\u95EE\u9898\u5730\u4F7F\u7528\u65B0\u7684 ECMAScript \u6807\u51C6\uFF0C\u56E0\u4E3A\u60A8\u4E0D\u5FC5\u7B49\u5F85\u6240\u6709\u7528\u6237\u66F4\u65B0\u4ED6\u4EEC\u7684\u6D4F\u89C8\u5668 - \u60A8\u8D1F\u8D23\u901A\u8FC7\u66F4\u6539 Node.js \u7248\u672C\u6765\u51B3\u5B9A\u4F7F\u7528\u54EA\u4E2A ECMAScript \u7248\u672C\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u5E26\u6709\u6807\u5FD7\u7684 Node.js \u6765\u542F\u7528\u7279\u5B9A\u7684\u5B9E\u9A8C\u6027\u529F\u80FD\u3002</p><h2 id="\u5E9E\u5927\u7684\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5E9E\u5927\u7684\u4ED3\u5E93" aria-hidden="true">#</a> \u5E9E\u5927\u7684\u4ED3\u5E93</h2><p>npm \u4EE5\u5176\u7B80\u5355\u7684\u7ED3\u6784\u5E2E\u52A9 Node.js \u751F\u6001\u7CFB\u7EDF\u84EC\u52C3\u53D1\u5C55\uFF0C\u73B0\u5728 npm \u6CE8\u518C\u8868\u6258\u7BA1\u4E86\u8D85\u8FC7 1,000,000 \u4E2A\u5F00\u6E90\u5305\uFF0C\u60A8\u53EF\u4EE5\u81EA\u7531\u4F7F\u7528\u3002</p><h2 id="\u4E00\u4E2A\u793A\u4F8B-node-js-\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u793A\u4F8B-node-js-\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> \u4E00\u4E2A\u793A\u4F8B Node.js \u5E94\u7528\u7A0B\u5E8F</h2><p>Node.js \u7684\u6700\u5E38\u89C1\u793A\u4F8B Hello World \u662F Web \u670D\u52A1\u5668\uFF1A</p><iframe title="Hello world web server" src="https://stackblitz.com/edit/nodejs-dev-0001-01?embed=1&amp;file=index.js&amp;zenmode=1" alt="nodejs-dev-0001-01 on StackBlitz" style="height:400px;width:100%;border:0px;"></iframe>',12),k=e("\u6B64\u4EE3\u7801\u9996\u5148\u5305\u542B Node.js "),m={href:"https://nodejs.org/api/http.html",target:"_blank",rel:"noopener noreferrer"},v=e("http \u6A21\u5757"),N=e("\u3002"),S=e("Node.js \u6709\u4E00\u4E2A\u5F88\u68D2\u7684"),x={href:"https://nodejs.org/api/",target:"_blank",rel:"noopener noreferrer"},T=e("\u6807\u51C6\u5E93"),y=e("\uFF0C\u5305\u62EC\u4E00\u6D41\u7684\u7F51\u7EDC\u652F\u6301\u3002"),w=t("p",null,[t("code",null,"http"),e(" \u7684 "),t("code",null,"createServer()"),e(" \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 HTTP \u670D\u52A1\u5668\u5E76\u8FD4\u56DE\u5B83\u3002")],-1),C=t("p",null,"\u670D\u52A1\u5668\u8BBE\u7F6E\u4E3A\u4FA6\u542C\u6307\u5B9A\u7684\u7AEF\u53E3\u548C\u4E3B\u673A\u540D\u3002\u5F53\u670D\u52A1\u5668\u51C6\u5907\u597D\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u901A\u77E5\u6211\u4EEC\u670D\u52A1\u5668\u6B63\u5728\u8FD0\u884C\u3002",-1),J=e("\u6BCF\u5F53\u63A5\u6536\u5230\u65B0\u8BF7\u6C42\u65F6\uFF0C\u90FD\u4F1A\u8C03\u7528"),E={href:"https://nodejs.org/api/http.html#http_event_request",target:"_blank",rel:"noopener noreferrer"},R=e("\u8BF7\u6C42\u4E8B\u4EF6"),A=e("\uFF0C\u63D0\u4F9B\u4E24\u4E2A\u5BF9\u8C61\uFF1Arequest\uFF08"),H=t("code",null,"http.IncomingMessage",-1),I=e(" \u5BF9\u8C61\uFF09\u548C response\uFF08"),W=t("code",null,"http.ServerResponse",-1),F=e(" \u5BF9\u8C61\uFF09\u3002"),L=_(`<p>\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u5BF9\u4E8E\u5904\u7406 HTTP \u8C03\u7528\u81F3\u5173\u91CD\u8981\u3002</p><p>\u7B2C\u4E00\u4E2A\u63D0\u4F9B\u8BF7\u6C42\u8BE6\u7EC6\u4FE1\u606F\u3002\u5728\u8FD9\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5B83\u6CA1\u6709\u88AB\u4F7F\u7528\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u8BBF\u95EE\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u6570\u636E\u3002</p><p>\u7B2C\u4E8C\u4E2A\u7528\u4E8E\u5411\u8C03\u7528\u8005\u8FD4\u56DE\u6570\u636E\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6211\u4EEC\u5C06 statusCode \u5C5E\u6027\u8BBE\u7F6E\u4E3A 200\uFF0C\u4EE5\u6307\u793A\u6210\u529F\u54CD\u5E94\u3002</p><p>\u6211\u4EEC\u8BBE\u7F6E Content-Type \u6807\u5934\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u5173\u95ED\u54CD\u5E94\uFF0C\u5C06\u5185\u5BB9\u6DFB\u52A0\u4E3A <code>end()</code> \u7684\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World\\n&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="node-js-\u6846\u67B6\u548C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#node-js-\u6846\u67B6\u548C\u5DE5\u5177" aria-hidden="true">#</a> Node.js \u6846\u67B6\u548C\u5DE5\u5177</h2><p>Node.js \u662F\u4E00\u4E2A\u4F4E\u7EA7\u5E73\u53F0\u3002\u4E3A\u4E86\u8BA9\u5F00\u53D1\u4EBA\u5458\u7684\u5DE5\u4F5C\u53D8\u5F97\u8F7B\u677E\u6709\u8DA3\uFF0C\u793E\u533A\u5728 Node.js \u4E0A\u6784\u5EFA\u4E86\u6570\u5343\u4E2A\u5E93\u3002</p><p>\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u5176\u4E2D\u8BB8\u591A\u5DF2\u6210\u4E3A\u6D41\u884C\u7684\u9009\u62E9\u3002\u4EE5\u4E0B\u5217\u8868\u4E0D\u662F\u5F88\u5168\u9762\uFF0C\u4F46\u662F\u503C\u5F97\u5B66\u4E60\uFF1A</p>`,13),M={href:"https://adonisjs.com/",target:"_blank",rel:"noopener noreferrer"},P=e("AdonisJS"),V=e("\uFF1A\u4E00\u4E2A\u57FA\u4E8E TypeScript \u7684\u5168\u529F\u80FD\u6846\u67B6\uFF0C\u9AD8\u5EA6\u5173\u6CE8\u5F00\u53D1\u4EBA\u5458\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\u3001\u7A33\u5B9A\u6027\u548C\u673A\u5BC6\u3002 Adonis \u662F\u6700\u5FEB\u7684 Node.js Web \u6846\u67B6\u4E4B\u4E00\u3002"),B={href:"https://eggjs.org/en/",target:"_blank",rel:"noopener noreferrer"},q=e("Egg.js"),z=e("\uFF1A\u4E00\u4E2A\u4F7F\u7528 Node.js \u548C Koa \u6784\u5EFA\u66F4\u597D\u7684\u4F01\u4E1A\u7EA7\u6846\u67B6\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u6846\u67B6\u3002"),G={href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"},O=e("Express"),K=e("\uFF1A\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u6700\u7B80\u5355\u4F46\u529F\u80FD\u5F3A\u5927\u7684\u65B9\u6CD5\u6765\u521B\u5EFA Web \u670D\u52A1\u5668\u3002\u5B83\u7684\u6781\u7B80\u4E3B\u4E49\u65B9\u6CD5\uFF0C\u6CA1\u6709\u504F\u89C1\uFF0C\u4E13\u6CE8\u4E8E\u670D\u52A1\u5668\u7684\u6838\u5FC3\u529F\u80FD\uFF0C\u662F\u5176\u6210\u529F\u7684\u5173\u952E\u3002"),Q={href:"https://www.fastify.io/",target:"_blank",rel:"noopener noreferrer"},U=e("Fastify"),D=e("\uFF1A\u4E00\u4E2A\u9AD8\u5EA6\u4E13\u6CE8\u4E8E\u4EE5\u6700\u5C11\u7684\u5F00\u9500\u548C\u5F3A\u5927\u7684\u63D2\u4EF6\u67B6\u6784\u63D0\u4F9B\u6700\u4F73\u5F00\u53D1\u4EBA\u5458\u4F53\u9A8C\u7684 Web \u6846\u67B6\u3002 Fastify \u662F\u6700\u5FEB\u7684 Node.js Web \u6846\u67B6\u4E4B\u4E00\u3002"),X={href:"https://feathersjs.com/",target:"_blank",rel:"noopener noreferrer"},Y=e("FeatherJS"),Z=e("\uFF1AFeathers \u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u7F51\u7EDC\u6846\u67B6\uFF0C\u7528\u4E8E\u4F7F\u7528 JavaScript \u6216 TypeScript \u521B\u5EFA\u5B9E\u65F6\u5E94\u7528\u7A0B\u5E8F\u548C REST API\u3002\u5728\u51E0\u5206\u949F\u5185\u6784\u5EFA\u539F\u578B\uFF0C\u5728\u51E0\u5929\u5185\u6784\u5EFA\u53EF\u7528\u4E8E\u751F\u4EA7\u7684\u5E94\u7528\u7A0B\u5E8F\u3002"),$={href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noopener noreferrer"},ee=e("Gatsby"),te=e("\uFF1A\u57FA\u4E8E "),oe={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},se=e("React"),ne=e("\u3001"),re={href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"},ae=e("GraphQL"),_e=e(" \u9A71\u52A8\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\uFF0C\u5177\u6709\u975E\u5E38\u4E30\u5BCC\u7684\u63D2\u4EF6\u548C\u542F\u52A8\u5668\u751F\u6001\u7CFB\u7EDF\u3002"),pe={href:"https://hapi.dev/",target:"_blank",rel:"noopener noreferrer"},ce=e("hapi"),de=e("\uFF1A\u7528\u4E8E\u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u7684\u4E30\u5BCC\u6846\u67B6\uFF0C\u4F7F\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u4E13\u6CE8\u4E8E\u7F16\u5199\u53EF\u91CD\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\u903B\u8F91\uFF0C\u800C\u4E0D\u662F\u82B1\u65F6\u95F4\u6784\u5EFA\u57FA\u7840\u8BBE\u65BD\u3002"),ie={href:"http://koajs.com/",target:"_blank",rel:"noopener noreferrer"},le=e("koa"),he=e("\uFF1A\u5B83\u7531 Express \u80CC\u540E\u7684\u540C\u4E00\u4E2A\u56E2\u961F\u6784\u5EFA\uFF0C\u5EFA\u7ACB\u5728\u591A\u5E74\u77E5\u8BC6\u4E4B\u4E0A\uFF0C\u65E8\u5728\u66F4\u7B80\u5355\u548C\u66F4\u5C0F\u3002\u5728\u4E0D\u7834\u574F\u73B0\u6709\u793E\u533A\u7684\u60C5\u51B5\u4E0B\uFF0C\u65B0\u9879\u76EE\u7684\u8BDE\u751F\u51FA\u4E8E\u521B\u5EFA\u4E0D\u517C\u5BB9\u66F4\u6539\u7684\u9700\u8981\u3002"),ue={href:"https://loopback.io/",target:"_blank",rel:"noopener noreferrer"},fe=e("Loopback.io"),ge=e("\uFF1A\u4F7F\u6784\u5EFA\u9700\u8981\u590D\u6742\u96C6\u6210\u7684\u73B0\u4EE3\u5E94\u7528\u7A0B\u5E8F\u53D8\u5F97\u5BB9\u6613\u3002"),je={href:"https://meteor.com/",target:"_blank",rel:"noopener noreferrer"},be=e("Meteor"),ke=e("\uFF1A\u4E00\u4E2A\u4EE4\u4EBA\u96BE\u4EE5\u7F6E\u4FE1\u7684\u5F3A\u5927\u7684\u5168\u6808\u6846\u67B6\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u540C\u6784\u7684\u65B9\u6CD5\u6765\u4F7F\u7528 JavaScript \u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E0A\u5171\u4EAB\u4EE3\u7801\u3002\u66FE\u7ECF\u662F\u63D0\u4F9B\u4E00\u5207\u7684\u73B0\u6210\u5DE5\u5177\uFF0C\u73B0\u5728\u4E0E\u524D\u7AEF\u5E93 "),me={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},ve=e("React"),Ne=e("\u3001"),Se={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},xe=e("Vue"),Te=e(" \u548C "),ye={href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"},we=e("Angular"),Ce=e(" \u96C6\u6210\u3002\u4E5F\u53EF\u7528\u4E8E\u521B\u5EFA\u79FB\u52A8\u5E94\u7528\u7A0B\u5E8F\u3002"),Je={href:"https://github.com/vercel/micro",target:"_blank",rel:"noopener noreferrer"},Ee=e("Micro"),Re=e("\uFF1A\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u670D\u52A1\u5668\u6765\u521B\u5EFA\u5F02\u6B65 HTTP \u5FAE\u670D\u52A1\u3002"),Ae={href:"https://nestjs.com/",target:"_blank",rel:"noopener noreferrer"},He=e("NestJS"),Ie=e("\uFF1A\u4E00\u4E2A\u57FA\u4E8E TypeScript \u7684\u6E10\u8FDB\u5F0F Node.js \u6846\u67B6\uFF0C\u7528\u4E8E\u6784\u5EFA\u4F01\u4E1A\u7EA7\u9AD8\u6548\u3001\u53EF\u9760\u548C\u53EF\u6269\u5C55\u7684\u670D\u52A1\u5668\u7AEF\u5E94\u7528\u7A0B\u5E8F\u3002"),We={href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"},Fe=e("Next.js"),Le=e("\uFF1A"),Me={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},Pe=e("React"),Ve=e(" \u6846\u67B6\uFF0C\u53EF\u4E3A\u60A8\u63D0\u4F9B\u751F\u4EA7\u6240\u9700\u7684\u6240\u6709\u529F\u80FD\u7684\u6700\u4F73\u5F00\u53D1\u4EBA\u5458\u4F53\u9A8C\uFF1A\u6DF7\u5408\u9759\u6001\u548C\u670D\u52A1\u5668\u6E32\u67D3\u3001TypeScript \u652F\u6301\u3001\u667A\u80FD\u6346\u7ED1\u3001\u8DEF\u7531\u9884\u53D6\u7B49\u3002"),Be={href:"https://nx.dev/",target:"_blank",rel:"noopener noreferrer"},qe=e("Nx"),ze=e("\uFF1A\u4F7F\u7528 NestJS\u3001Express\u3001"),Ge={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},Oe=e("React"),Ke=e("\u3001"),Qe={href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"},Ue=e("Angular"),De=e(" \u7B49\u8FDB\u884C\u5168\u6808 monorepo \u5F00\u53D1\u7684\u5DE5\u5177\u5305\uFF01 Nx \u6709\u52A9\u4E8E\u5C06\u60A8\u7684\u5F00\u53D1\u4ECE\u4E00\u4E2A\u6784\u5EFA\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u56E2\u961F\u6269\u5C55\u5230\u591A\u4E2A\u56E2\u961F\u534F\u4F5C\u5F00\u53D1\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF01"),Xe={href:"https://sapper.svelte.dev/",target:"_blank",rel:"noopener noreferrer"},Ye=e("Sapper"),Ze=e("\uFF1ASapper \u662F\u4E00\u4E2A\u7528\u4E8E\u6784\u5EFA\u5404\u79CD\u89C4\u6A21\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u6846\u67B6\uFF0C\u5177\u6709\u4F18\u7F8E\u7684\u5F00\u53D1\u4F53\u9A8C\u548C\u7075\u6D3B\u7684\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\u3002\u63D0\u4F9B SSR \u7B49\uFF01"),$e={href:"https://socket.io/",target:"_blank",rel:"noopener noreferrer"},et=e("Socket.io"),tt=e("\uFF1A\u6784\u5EFA\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u7684\u5B9E\u65F6\u901A\u4FE1\u5F15\u64CE\u3002"),ot={href:"https://strapi.io/",target:"_blank",rel:"noopener noreferrer"},st=e("Strapi"),nt=e("\uFF1AStrapi \u662F\u4E00\u4E2A\u7075\u6D3B\u7684\u5F00\u6E90 Headless CMS\uFF0C\u8BA9\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u81EA\u7531\u9009\u62E9\u4ED6\u4EEC\u559C\u6B22\u7684\u5DE5\u5177\u548C\u6846\u67B6\uFF0C\u540C\u65F6\u8FD8\u5141\u8BB8\u7F16\u8F91\u4EBA\u5458\u8F7B\u677E\u7BA1\u7406\u548C\u5206\u53D1\u4ED6\u4EEC\u7684\u5185\u5BB9\u3002\u901A\u8FC7\u63D2\u4EF6\u7CFB\u7EDF\u4F7F\u7BA1\u7406\u9762\u677F\u548C API \u53EF\u6269\u5C55\uFF0CStrapi \u4F7F\u4E16\u754C\u4E0A\u6700\u5927\u7684\u516C\u53F8\u80FD\u591F\u5728\u6784\u5EFA\u7CBE\u7F8E\u7684\u6570\u5B57\u4F53\u9A8C\u7684\u540C\u65F6\u52A0\u901F\u5185\u5BB9\u4EA4\u4ED8\u3002");function rt(at,_t){const n=a("RouterLink"),s=a("ExternalLinkIcon");return p(),c(d,null,[h,t("nav",u,[t("ul",null,[t("li",null,[o(n,{to:"#\u5E9E\u5927\u7684\u4ED3\u5E93"},{default:r(()=>[f]),_:1})]),t("li",null,[o(n,{to:"#\u4E00\u4E2A\u793A\u4F8B-node-js-\u5E94\u7528\u7A0B\u5E8F"},{default:r(()=>[g]),_:1})]),t("li",null,[o(n,{to:"#node-js-\u6846\u67B6\u548C\u5DE5\u5177"},{default:r(()=>[j]),_:1})])])]),b,t("p",null,[k,t("a",m,[v,o(s)]),N]),t("p",null,[S,t("a",x,[T,o(s)]),y]),w,C,t("p",null,[J,t("a",E,[R,o(s)]),A,H,I,W,F]),L,t("p",null,[t("a",M,[P,o(s)]),V]),t("p",null,[t("a",B,[q,o(s)]),z]),t("p",null,[t("a",G,[O,o(s)]),K]),t("p",null,[t("a",Q,[U,o(s)]),D]),t("p",null,[t("a",X,[Y,o(s)]),Z]),t("p",null,[t("a",$,[ee,o(s)]),te,t("a",oe,[se,o(s)]),ne,t("a",re,[ae,o(s)]),_e]),t("p",null,[t("a",pe,[ce,o(s)]),de]),t("p",null,[t("a",ie,[le,o(s)]),he]),t("p",null,[t("a",ue,[fe,o(s)]),ge]),t("p",null,[t("a",je,[be,o(s)]),ke,t("a",me,[ve,o(s)]),Ne,t("a",Se,[xe,o(s)]),Te,t("a",ye,[we,o(s)]),Ce]),t("p",null,[t("a",Je,[Ee,o(s)]),Re]),t("p",null,[t("a",Ae,[He,o(s)]),Ie]),t("p",null,[t("a",We,[Fe,o(s)]),Le,t("a",Me,[Pe,o(s)]),Ve]),t("p",null,[t("a",Be,[qe,o(s)]),ze,t("a",Ge,[Oe,o(s)]),Ke,t("a",Qe,[Ue,o(s)]),De]),t("p",null,[t("a",Xe,[Ye,o(s)]),Ze]),t("p",null,[t("a",$e,[et,o(s)]),tt]),t("p",null,[t("a",ot,[st,o(s)]),nt])],64)}var dt=i(l,[["render",rt]]);export{dt as default};
