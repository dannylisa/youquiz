(this.webpackJsonpyouquiz=this.webpackJsonpyouquiz||[]).push([[0],{68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(1),a=n.n(r),i=n(30),s=n.n(i),o=n(13),u=n.n(o),j=n(20),d=n(16),l=n(32);n(63),n(65),n(76);l.a.initializeApp({apiKey:"AIzaSyCMaNAo5wm_-lOYQlRBgGT30ZsWkZMTLAQ",authDomain:"youquiz-9f5ee.firebaseapp.com",databaseURL:"https://youquiz-9f5ee.firebaseio.com",projectId:"youquiz-9f5ee",storageBucket:"youquiz-9f5ee.appspot.com",messagingSenderId:"577615600044",appId:"1:577615600044:web:f174e8ff8050d7e5a8c209",measurementId:"G-GD96BSKTVD"});var h=l.a,b=l.a.auth(),O=l.a.firestore(),x=(l.a.storage(),n(45)),f=n(11),p=(n(68),n(96)),m=n(97),g=n(38),w=function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.auth.GoogleAuthProvider,e.next=3,b.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{id:"auth-form",children:Object(c.jsx)(p.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsxs)(m.a,{variant:"outlined",onClick:e,children:[" ",Object(c.jsx)(g.b,{})," \xa0 \uad6c\uae00\uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778"]})})})})})},v=n(103),y=n(104),z=n(101),S=function(e){var t=e.user,n=Object(r.useState)(t.displayName),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(t.phoneNumber||""),l=Object(d.a)(o,2),h=l[0],b=l[1],x=Object(f.f)(),g=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?s(c):"tel"===n&&b(c)},w=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("userinfo").add({uid:t.uid,name:i,tel:h,isAdmin:!1});case 2:alert("\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),x.go(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("form",{id:"auth-form",children:Object(c.jsxs)(p.a,{container:!0,direction:"row",spacing:2,alignItems:"center",children:[Object(c.jsx)(p.a,{item:!0,xs:12,children:Object(c.jsx)("h2",{children:" \uc774\ub984\uacfc \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc774 \uc815\ubcf4\ub294 \ucd94\ucca8\uc744 \ud1b5\ud574 \uc120\ubb3c\uc744 \ubcf4\ub0b4\ub4dc\ub9ac\uae30 \uc704\ud55c \uc815\ubcf4\ub85c, \uaf2d \uc785\ub825\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.  "})}),Object(c.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{htmlFor:"name-input",children:"\uc774\ub984"}),Object(c.jsx)(z.a,{id:"name-input",type:"text","aria-describedby":"name-helper",name:"name",onChange:g,value:i})]})}),Object(c.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{htmlFor:"tel-input",children:"\uc804\ud654\ubc88\ud638"}),Object(c.jsx)(z.a,{id:"tel-input",type:"tel","aria-describedby":"tel-helper",name:"tel",onChange:g,value:h})]})}),Object(c.jsx)(p.a,{item:!0,xs:12,md:2,children:Object(c.jsx)(m.a,{onClick:w,variant:"contained",color:"primary",children:"\ud655\uc778"})})]})})},k=n(48),A=n(98),I=function(e){var t=e.quiz,n=e.showAnswer,r=t.no,a=t.question,i=t.answer;return Object(c.jsxs)(A.a,{id:"quiz",variant:"outlined",children:[Object(c.jsx)("h4",{children:"\uc8fc\uad00\uc2dd"}),Object(c.jsxs)("h1",{children:[" Q ",r,". "]}),Object(c.jsxs)("h3",{children:[" ",a," "]}),Object(c.jsxs)("h2",{className:"answer",children:["\uc815\ub2f5 : \xa0\xa0",n?i[0]:"???"]})]})},_=(n(73),n(53)),q=n(99),W=function(e){var t=e.no,n=e.user,a=e.doc_user_id,i=n.uid,s=n.name,o=Object(r.useState)(""),l=Object(d.a)(o,2),h=l[0],b=l[1],x=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={uid:i,name:s,answer:h},e.next=3,O.collection("quiz_"+t).add(n);case 3:return e.next=5,O.collection("userinfo").doc(a).update(Object(_.a)({},"quiz_"+t,!0));case 5:alert("\uc815\ub2f5\uc774 \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(A.a,{id:"SubmitAnswer",variant:"outlined",children:Object(c.jsxs)(p.a,{container:!0,direction:"row",spacing:2,alignItems:"center",children:[Object(c.jsx)(p.a,{item:!0,xs:9,children:Object(c.jsxs)(v.a,{fullWidth:!0,children:[Object(c.jsx)(y.a,{htmlFor:"ans-input",children:"\uc815\ub2f5"}),Object(c.jsx)(z.a,{id:"ans-input",type:"text","aria-describedby":"ans-helper",name:"answer",onChange:function(e){var t=e.target.value;b(t)},value:h}),Object(c.jsx)(q.a,{id:"ans-helper",children:" \uc81c\ucd9c \ud6c4\uc5d0\ub294 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"})]})}),Object(c.jsx)(p.a,{item:!0,xs:3,children:Object(c.jsx)(m.a,{onClick:x,fullWidth:!0,variant:"contained",color:"primary",children:"\uc81c\ucd9c"})})]})})},C=function(e){var t=e.participants,n=e.corrects;return Object(c.jsx)(A.a,{id:"board",variant:"outlined",children:Object(c.jsxs)(p.a,{container:!0,direction:"row",spacing:2,children:[Object(c.jsx)(p.a,{item:!0,xs:6,children:Object(c.jsxs)("div",{className:"board-count",children:[Object(c.jsx)(g.c,{size:"20"}),"\xa0 \ucc38\uc5ec\uc790 ",t]})}),Object(c.jsx)(p.a,{item:!0,xs:6,children:Object(c.jsxs)("div",{className:"board-count",children:[Object(c.jsx)(g.a,{size:"20"}),"\xa0 \uc815\ub2f5\uc790 ",n]})})]})})},F=n(100),B=n(105),N=n(102),E=function(e){var t=e.wrongs,n=e.isAdmin,r=e.showWrongs;return Object(c.jsx)("div",{id:"wrongs",children:Object(c.jsxs)(p.a,{container:!0,direction:"column",spacing:1,children:[Object(c.jsxs)(p.a,{item:!0,container:!0,direction:"row",children:[Object(c.jsx)(p.a,{item:!0,xs:6,children:Object(c.jsxs)("h3",{children:["\uc624\ub2f5 ",t.length," "]})}),n&&Object(c.jsx)(p.a,{item:!0,xs:6,children:Object(c.jsx)(F.a,{children:Object(c.jsx)(B.a,{control:Object(c.jsx)(N.a,{checked:r,onChange:function(){O.collection("current").doc("current").update({showWrongs:!r})},name:"showWrongs"}),label:r?"\uc624\ub2f5 \uc228\uae30\uae30":"\uc624\ub2f5 \ubcf4\uae30"})})})]}),r?t.map((function(e,t){return Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)(A.a,{className:"wrongs-wrong",variant:"elevation",elevation:2,children:Object(c.jsxs)("h3",{children:[" ",e.answer," "]})})},t)})):Object(c.jsx)(p.a,{item:!0,children:Object(c.jsx)("h4",{align:"center",children:"\uc5b4\ub5a4 \uc624\ub2f5\ub4e4\uc774 \uc788\uc744\uae4c\uc694?"})})]})})},Q=function(e){var t=e.user,n=e.doc_user_id,a=e.currentInfo,i=t.isAdmin,s=a.currentQuiz,o=a.showAnswer,l=a.showWrongs,h=Object(r.useState)([]),b=Object(d.a)(h,2),x=b[0],f=b[1],g=Object(r.useState)(!1),w=Object(d.a)(g,2),v=w[0],y=w[1],z=Object(r.useState)(0),S=Object(d.a)(z,2),A=S[0],_=S[1],q=Object(r.useState)(0),F=Object(d.a)(q,2),B=F[0],N=F[1],Q=Object(r.useState)([]),G=Object(d.a)(Q,2),L=G[0],D=G[1],M=function(e){O.collection("current").doc("current").update({currentQuiz:e})},T=function(e){O.collection("current").doc("current").update({showAnswer:e})},J=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.length){e.next=2;break}return e.abrupt("return");case 2:y(t["quiz_"+x[s].no]);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e,t){return t.includes(e)};return Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("quiz").orderBy("no").get();case 2:t=e.sent,f(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)}))),[]),Object(r.useEffect)((function(){J()}),[x,s,t]),Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.length){e.next=2;break}return e.abrupt("return");case 2:return t=x[s].no,e.next=5,O.collection("quiz").where("no","==",t).get();case 5:n=e.sent.docs[0].data().answer,O.collection("quiz_"+t).onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));_(t.length);var c=[],r=[];t.map((function(e){K(e.answer,n)?c=[].concat(Object(k.a)(c),[e]):r=[].concat(Object(k.a)(r),[e])})),N(c.length),D(r)}));case 7:case"end":return e.stop()}}),e)}))),[x,s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a,{container:!0,direction:"row",spacing:2,alignItems:"stretch",children:[Object(c.jsxs)(p.a,{container:!0,item:!0,xs:12,md:8,direction:"row",children:[Object(c.jsx)(p.a,{item:!0,xs:12,children:x.length?Object(c.jsx)(I,{quiz:x[s],showAnswer:o}):Object(c.jsx)("h6",{children:"\ud034\uc988\ub97c \uac00\uc838\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."})}),i&&Object(c.jsxs)(p.a,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end",spacing:2,children:[s>0&&Object(c.jsx)(p.a,{item:!0,xs:6,md:3,children:Object(c.jsx)(m.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){M(s-1),T(!1),O.collection("current").doc("current").update({showWrongs:!1})},children:"\uc774\uc804 \ubb38\uc81c"})}),Object(c.jsx)(p.a,{item:!0,xs:6,md:3,children:o?s+1<x.length&&Object(c.jsx)(m.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){M(s+1),T(!1),O.collection("current").doc("current").update({showWrongs:!1})},children:"\ub2e4\uc74c \ubb38\uc81c"}):Object(c.jsx)(m.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return T(!0)},children:"\uc815\ub2f5 \uacf5\uac1c"})})]}),Object(c.jsx)(p.a,{item:!0,xs:12,children:x.length&&!o&&(v?Object(c.jsx)("h4",{align:"center",children:"\uc815\ub2f5\uc744 \uc81c\ucd9c\ud558\uc168\uc2b5\ub2c8\ub2e4"}):Object(c.jsx)(W,{no:x[s].no,user:t,doc_user_id:n}))}),Object(c.jsx)(p.a,{item:!0,xs:12,children:x.length&&Object(c.jsx)(C,{participants:A,corrects:B})})]}),Object(c.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(c.jsx)(E,{wrongs:L,isAdmin:i,showWrongs:l})})]})})},G=function(e){var t=e.isLoggedIn,n=e.user,r=e.hasAccount,a=e.doc_user_id,i=e.currentInfo;return Object(c.jsx)(x.a,{children:Object(c.jsx)(f.c,{children:t?r?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(Q,{user:n,doc_user_id:a,currentInfo:i})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(S,{user:n})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{})})})})})};var L=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),s=Object(d.a)(i,2),o=s[0],l=s[1],h=Object(r.useState)(!1),x=Object(d.a)(h,2),f=x[0],p=x[1],m=Object(r.useState)(""),g=Object(d.a)(m,2),w=g[0],v=g[1],y=Object(r.useState)({currentQuiz:0,showWrongs:!1}),z=Object(d.a)(y,2),S=z[0],k=z[1];return Object(r.useEffect)((function(){b.onAuthStateChanged(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,O.collection("userinfo").where("uid","==",t.uid).get();case 3:n=e.sent,console.log(n),p(Boolean(n.docs.length));try{l(n.docs[0].data()),v(n.docs[0].id)}catch(c){l(t)}case 7:a(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O.collection("current").doc("current").onSnapshot((function(e){k(e.data())}))}),[]),Object(r.useEffect)((function(){w&&O.collection("userinfo").doc(w).onSnapshot((function(e){l(e.data())}))}),[w]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(G,{isLoggedIn:Boolean(o),user:o,hasAccount:f,doc_user_id:w,currentInfo:S}):"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4!"})};n(74);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.4fc5a71b.chunk.js.map