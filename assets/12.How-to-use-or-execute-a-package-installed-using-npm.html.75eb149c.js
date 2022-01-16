import{r as o,o as c,c as d,a as e,b as p,F as t,e as s,d as a}from"./app.6c8a6d5d.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=s(`<h1 id="\u5982\u4F55\u4F7F\u7528\u6216\u6267\u884C\u4F7F\u7528-npm-\u5B89\u88C5\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u6216\u6267\u884C\u4F7F\u7528-npm-\u5B89\u88C5\u7684\u5305" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u6216\u6267\u884C\u4F7F\u7528 npm \u5B89\u88C5\u7684\u5305</h1><nav class="table-of-contents"><ul></ul></nav><p>\u5F53\u60A8\u4F7F\u7528 <code>npm</code> \u6216\u5168\u5C40\u5B89\u88C5\u5305\u5230 <code>node_modules</code> \u6587\u4EF6\u5939\u65F6\uFF0C\u60A8\u5982\u4F55\u5728 Node.js \u4EE3\u7801\u4E2D\u4F7F\u7528\u5B83\uFF1F</p><p>\u5047\u8BBE\u60A8\u5B89\u88C5\u4E86\u6D41\u884C\u7684 JavaScript \u5B9E\u7528\u7A0B\u5E8F\u5E93 <code>lodash</code>\uFF0C\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> lodash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u5C06\u5728\u672C\u5730 <code>node_modules</code> \u6587\u4EF6\u5939\u4E2D\u5B89\u88C5\u5305\u3002</p><p>\u8981\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u4F7F\u7528\u5B83\uFF0C\u4F60\u53EA\u9700\u8981\u4F7F\u7528 <code>require</code> \u5C06\u5B83\u5BFC\u5165\u5230\u4F60\u7684\u7A0B\u5E8F\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u60A8\u7684\u5305\u662F\u53EF\u6267\u884C\u6587\u4EF6\u600E\u4E48\u529E\uFF1F</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u653E\u5728 <code>node_modules/.bin/</code> \u6587\u4EF6\u5939\u4E0B\u3002</p>`,10),u=a("\u8BC1\u660E\u8FD9\u4E00\u70B9\u7684\u4E00\u79CD\u7B80\u5355\u65B9\u6CD5\u662F "),m={href:"https://www.npmjs.com/package/cowsay",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"cowsay",-1),h=a("\u3002"),b=s(`<p>cowsay \u5305\u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4\u884C\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u6267\u884C\u8BE5\u7A0B\u5E8F\u4F7F\u725B\uFF08\u548C\u5176\u4ED6\u52A8\u7269\uFF09\u8BF4\u4E9B\u4EC0\u4E48\u3002</p><p>\u5F53\u60A8\u4F7F\u7528 <code>npm install cowsay</code> \u5B89\u88C5\u5305\u65F6\uFF0C\u5B83\u4F1A\u5728 <code>node_modules</code> \u6587\u4EF6\u5939\u4E2D\u5B89\u88C5\u81EA\u8EAB\u548C\u4E00\u4E9B\u4F9D\u8D56\u9879\uFF1A</p><img src="https://nodejs.dev/static/b245c50f5080dae16a2525fae0ba2c91/d2c2a/node_modules-content.png"><p>\u6709\u4E00\u4E2A\u9690\u85CF\u7684 <code>.bin</code> \u6587\u4EF6\u5939\uFF0C\u5176\u4E2D\u5305\u542B\u6307\u5411 cowsay \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u7B26\u53F7\u94FE\u63A5\uFF1A</p><img src="https://nodejs.dev/static/99830aefa055e247397de544ad7b7744/d2c2a/binary-files.png"><p>\u4F60\u5982\u4F55\u6267\u884C\u8FD9\u4E9B\uFF1F</p><p>\u4F60\u5F53\u7136\u53EF\u4EE5\u8F93\u5165 <code>./node_modules/.bin/cowsay</code> \u6765\u8FD0\u884C\u5B83\uFF0C\u5B83\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u4F46\u662F\u5305\u542B\u5728 <code>npm</code> \u7684\u6700\u65B0\u7248\u672C\uFF08\u81EA 5.2 \u8D77\uFF09\u4E2D\u7684 <code>npx</code> \u662F\u4E00\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002\u4F60\u53EA\u9700\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx cowsay take me out of here
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>npx</code> \u4F1A\u627E\u5230\u5305\u7684\u4F4D\u7F6E\u3002</p><img src="https://nodejs.dev/static/ad4f3d3a7464bb0f8a2845fe8e6588c2/d2c2a/cow-say.png">`,10);function g(v,f){const n=o("ExternalLinkIcon");return c(),d(t,null,[i,e("p",null,[u,e("a",m,[_,p(n)]),h]),b],64)}var w=l(r,[["render",g]]);export{w as default};
