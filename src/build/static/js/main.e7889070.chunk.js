(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(24);var s=n(1),i=n.n(s),a=n(18),c=n.n(a),u=(n(29),n(19)),r=n(20),l=n(23),o=n(22),d=n(8),m=n(2),j=n(0),b=function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("h1",{children:"Hello, welcome to my blog"}),Object(j.jsx)("p",{children:" asdlkf jasldkf asd fasdf "}),Object(j.jsx)("p",{children:" dflkgdasfl kgjsdfg kl;dsf gl;ksdfg l;ksdjfg l;kj dfgsgsdfg sdfg "}),Object(j.jsx)("p",{children:" dsfagasdf asdasdf as fasd "})]})},p=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"About me"}),Object(j.jsx)("p",{children:" asdlkf jasldkf asd fasdf "}),Object(j.jsx)("p",{children:" dflkgdasfl kgjsdfg kl;dsf gl;ksdfg l;ksdjfg l;kj dfgsgsdfg sdfg "}),Object(j.jsx)("p",{children:" dsfagasdf asdasdf as fasd "})]})},f=n(7),h=n.n(f),g=n(10),v=n(12),x=function(e){var t=e.articles;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsxs)(d.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})},O=function(e){var t=e.comments;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(j.jsxs)("div",{className:"comment",children:[Object(j.jsx)("h4",{children:e.username}),Object(j.jsx)("p",{children:e.text})]},t)}))]})},N=function(e){var t=e.articleName,n=e.upvotes,s=e.setArticleInfo,i=function(){var e=Object(g.a)(h.a.mark((function e(){var n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,s(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"upvotes-section",children:[Object(j.jsx)("button",{onClick:function(){return i()},children:"Add Upvote"}),Object(j.jsxs)("p",{children:["This post has been upvoted ",n," times."]})]})},q=function(e){var t=e.articleName,n=e.setArticleInfo,i=Object(s.useState)(""),a=Object(v.a)(i,2),c=a[0],u=a[1],r=Object(s.useState)(""),l=Object(v.a)(r,2),o=l[0],d=l[1],m=function(){var e=Object(g.a)(h.a.mark((function e(){var s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:c,text:o}),headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:i=e.sent,n(i),u(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"add-comment-form",children:[Object(j.jsx)("h3",{children:"Add a Comment"}),Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("label",{children:["Comment:",Object(j.jsx)("textarea",{rows:"4",cols:"50",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){return m()},children:"Add Comment"})]})},k=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],y=function(){return Object(j.jsx)("h1",{children:"404: Page Not Found"})},A=function(e){var t=e.match.params.name,n=k.find((function(e){return e.name===t})),i=Object(s.useState)({upvotes:0,comments:[]}),a=Object(v.a)(i,2),c=a[0],u=a[1];if(Object(s.useEffect)((function(){(function(){var e=Object(g.a)(h.a.mark((function e(){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,u(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return Object(j.jsx)(y,{});var r=k.filter((function(e){return e.name!==t}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)(N,{articleName:t,upvotes:c.upvotes,setArticleInfo:u}),n.content.map((function(e,t){return Object(j.jsx)("p",{children:e},t)})),Object(j.jsx)(O,{comments:c.comments}),Object(j.jsx)(q,{articleName:t,setArticleInfo:u}),Object(j.jsx)("h3",{children:"Other Articles"}),Object(j.jsx)(x,{articles:r})]})},w=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Articles"}),Object(j.jsx)(x,{articles:k})]})},S=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/articles-list",children:"Articles"})})]})})},M=(n(37),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(S,{}),Object(j.jsx)("div",{id:"page-body",children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",component:b,exact:!0}),Object(j.jsx)(m.a,{path:"/about",component:p}),Object(j.jsx)(m.a,{path:"/articles-list",component:w}),Object(j.jsx)(m.a,{path:"/article/:name",component:A}),Object(j.jsx)(m.a,{component:y})]})})]})})}}]),n}(s.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.e7889070.chunk.js.map