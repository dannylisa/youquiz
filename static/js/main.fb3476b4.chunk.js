(this.webpackJsonpyouquiz=this.webpackJsonpyouquiz||[]).push([[0],{68:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(1),a=n.n(r),i=n(30),s=n.n(i),o=n(13),u=n.n(o),j=n(20),d=n(16),l=n(32);n(63),n(65),n(76);l.a.initializeApp({apiKey:"AIzaSyCMaNAo5wm_-lOYQlRBgGT30ZsWkZMTLAQ",authDomain:"youquiz-9f5ee.firebaseapp.com",databaseURL:"https://youquiz-9f5ee.firebaseio.com",projectId:"youquiz-9f5ee",storageBucket:"youquiz-9f5ee.appspot.com",messagingSenderId:"577615600044",appId:"1:577615600044:web:f174e8ff8050d7e5a8c209",measurementId:"G-GD96BSKTVD"});var b=l.a,h=l.a.auth(),O=l.a.firestore(),x=(l.a.storage(),n(53)),f=n(11),m=(n(68),n(96)),p=n(97),g=n(38),v=function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{id:"auth-form",children:Object(c.jsx)(m.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsxs)(p.a,{variant:"outlined",onClick:e,children:[" ",Object(c.jsx)(g.b,{})," \xa0 \uad6c\uae00\uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778"]})})})})})},w=n(103),y=n(104),S=n(101),k=function(e){var t=e.user,n=Object(r.useState)(t.displayName),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(t.phoneNumber||""),l=Object(d.a)(o,2),b=l[0],h=l[1],x=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?s(c):"tel"===n&&h(c)},f=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("userinfo").add({uid:t.uid,name:i,tel:b,isAdmin:!1});case 2:window.history.go(0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("form",{id:"auth-form",children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:2,alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)("h2",{children:" \uc774\ub984\uacfc \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc774 \uc815\ubcf4\ub294 \ucd94\ucca8\uc744 \ud1b5\ud574 \uc120\ubb3c\uc744 \ubcf4\ub0b4\ub4dc\ub9ac\uae30 \uc704\ud55c \uc815\ubcf4\ub85c, \uaf2d \uc785\ub825\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.  "})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(y.a,{htmlFor:"name-input",children:"\uc774\ub984"}),Object(c.jsx)(S.a,{id:"name-input",type:"text","aria-describedby":"name-helper",name:"name",onChange:x,value:i})]})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(y.a,{htmlFor:"tel-input",children:"\uc804\ud654\ubc88\ud638"}),Object(c.jsx)(S.a,{id:"tel-input",type:"tel","aria-describedby":"tel-helper",name:"tel",onChange:x,value:b})]})}),Object(c.jsx)(m.a,{item:!0,xs:12,md:2,children:Object(c.jsx)(p.a,{onClick:f,variant:"contained",color:"primary",children:"\ud655\uc778"})})]})})},z=n(47),_=n(98),q=function(e){var t=e.quiz,n=e.isAnswerRevealed,r=t.no,a=t.question,i=t.answer;return Object(c.jsxs)(_.a,{id:"quiz",variant:"outlined",elevation:10,children:[Object(c.jsx)("h4",{children:"\uc8fc\uad00\uc2dd"}),Object(c.jsxs)("h1",{children:[" Q ",r,". "]}),Object(c.jsxs)("h3",{children:[" ",a," "]}),Object(c.jsxs)("h2",{className:"answer",children:["\uc815\ub2f5 : \xa0\xa0",n?i[0]:"???"]})]})},I=(n(72),n(52)),A=n(99),W=function(e){var t=e.no,n=e.user,a=e.doc_user_id,i=n.uid,s=n.name,o=Object(r.useState)(""),l=Object(d.a)(o,2),b=l[0],h=l[1],x=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={uid:i,name:s,answer:b},e.next=3,O.collection("quiz_"+t).add(n);case 3:return e.next=5,O.collection("userinfo").doc(a).update(Object(I.a)({},"quiz_"+t,!0));case 5:alert("\uc815\ub2f5\uc774 \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(_.a,{id:"SubmitAnswer",variant:"outlined",elevation:10,children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:3,alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,xs:1}),Object(c.jsx)(m.a,{item:!0,xs:9,children:Object(c.jsxs)(w.a,{fullWidth:!0,children:[Object(c.jsx)(y.a,{htmlFor:"ans-input",children:"\uc815\ub2f5"}),Object(c.jsx)(S.a,{id:"ans-input",type:"text","aria-describedby":"ans-helper",name:"answer",onChange:function(e){var t=e.target.value;h(t)},value:b}),Object(c.jsx)(A.a,{id:"ans-helper",children:" \uc815\ub2f5 \uc81c\ucd9c \ud6c4\uc5d0\ub294 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"})]})}),Object(c.jsx)(m.a,{item:!0,xs:2,children:Object(c.jsx)(p.a,{onClick:x,variant:"contained",color:"primary",children:"\uc81c\ucd9c"})})]})})},C=function(e){var t=e.participants,n=e.corrects;return Object(c.jsx)(_.a,{id:"board",variant:"outlined",elevation:10,children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:2,children:[Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsxs)("div",{className:"board-count",children:[Object(c.jsx)(g.c,{size:"20"}),"\xa0 \ucc38\uc5ec\uc790 ",t]})}),Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsxs)("div",{className:"board-count",children:[Object(c.jsx)(g.a,{size:"20"}),"\xa0 \uc815\ub2f5\uc790 ",n]})})]})})},F=n(100),B=n(105),N=n(102),E=function(e){var t=e.wrongs,n=e.isAdmin,r=e.showWrongs;return Object(c.jsx)(_.a,{id:"wrongs",variant:"outlined",children:Object(c.jsxs)(m.a,{container:!0,direction:"column",spacing:1,children:[Object(c.jsxs)(m.a,{item:!0,container:!0,direction:"row",children:[Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsxs)("h3",{children:["\uc624\ub2f5 ",t.length," "]})}),n&&Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsx)(F.a,{children:Object(c.jsx)(B.a,{control:Object(c.jsx)(N.a,{checked:r,onChange:function(){O.collection("current").doc("current").update({showWrongs:!r})},name:"showWrongs"}),label:r?"\uc624\ub2f5 \uc228\uae30\uae30":"\uc624\ub2f5 \ubcf4\uae30"})})})]}),r?t.map((function(e,t){return Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(_.a,{className:"wrongs-wrong",variant:"elevation",elevation:2,children:Object(c.jsxs)("h3",{children:[" ",e.answer," "]})})},t)})):Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)("h4",{align:"center",children:"\uc5b4\ub5a4 \uc624\ub2f5\ub4e4\uc774 \uc788\uc744\uae4c\uc694?"})})]})})},Q=function(e){var t=e.user,n=e.doc_user_id,a=e.currentInfo,i=(t.uid,t.tel,t.name,t.isAdmin),s=a.currentQuiz,o=a.showWrongs,l=Object(r.useState)([]),b=Object(d.a)(l,2),h=b[0],x=b[1],f=Object(r.useState)(!1),g=Object(d.a)(f,2),v=g[0],w=g[1],y=Object(r.useState)(!1),S=Object(d.a)(y,2),k=S[0],_=S[1],I=Object(r.useState)(0),A=Object(d.a)(I,2),F=A[0],B=A[1],N=Object(r.useState)(0),Q=Object(d.a)(N,2),G=Q[0],L=Q[1],R=Object(r.useState)([]),D=Object(d.a)(R,2),M=D[0],T=D[1],J=function(e){O.collection("current").doc("current").update({currentQuiz:e})},K=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.length){e.next=2;break}return e.abrupt("return");case 2:_(t["quiz_"+h[s].no]);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e,t){return t.includes(e)};return Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("quiz").orderBy("no").get();case 2:t=e.sent,x(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)}))),[]),Object(r.useEffect)((function(){K()}),[h,s,t]),Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.length){e.next=2;break}return e.abrupt("return");case 2:return t=h[s].no,e.next=5,O.collection("quiz").where("no","==",t).get();case 5:n=e.sent.docs[0].data().answer,O.collection("quiz_"+t).onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));B(t.length);var c=[],r=[];t.map((function(e){P(e.answer,n)?c=[].concat(Object(z.a)(c),[e]):r=[].concat(Object(z.a)(r),[e])})),L(c.length),T(r)}));case 7:case"end":return e.stop()}}),e)}))),[h,s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:1,children:[Object(c.jsxs)(m.a,{container:!0,item:!0,xs:12,md:8,direction:"column",spacing:2,children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:h.length?Object(c.jsx)(q,{quiz:h[s],isAnswerRevealed:v}):Object(c.jsx)("h6",{children:"\ud034\uc988\ub97c \uac00\uc838\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."})}),i&&Object(c.jsxs)(m.a,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end",spacing:2,children:[s>0&&Object(c.jsx)(m.a,{item:!0,xs:6,md:3,children:Object(c.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){J(s-1),w(!1),O.collection("current").doc("current").update({showWrongs:!1})},children:"\uc774\uc804 \ubb38\uc81c"})}),Object(c.jsx)(m.a,{item:!0,xs:6,md:3,children:v?s+1<h.length&&Object(c.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){J(s+1),w(!1),O.collection("current").doc("current").update({showWrongs:!1})},children:"\ub2e4\uc74c \ubb38\uc81c"}):Object(c.jsx)(p.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return w(!0)},children:"\uc815\ub2f5 \uacf5\uac1c"})})]}),Object(c.jsx)(m.a,{item:!0,xs:12,children:h.length&&!v&&(k?Object(c.jsx)("h4",{align:"center",children:"\uc815\ub2f5\uc744 \uc81c\ucd9c\ud558\uc168\uc2b5\ub2c8\ub2e4"}):Object(c.jsx)(W,{no:h[s].no,user:t,doc_user_id:n}))}),Object(c.jsx)(m.a,{item:!0,xs:12,children:h.length&&Object(c.jsx)(C,{participants:F,corrects:G})})]}),Object(c.jsx)(m.a,{item:!0,xs:4,children:Object(c.jsx)(E,{wrongs:M,isAdmin:i,showWrongs:o})})]})})},G=function(e){var t=e.isLoggedIn,n=e.user,r=e.hasAccount,a=e.doc_user_id,i=e.currentInfo;return console.log(n,r),Object(c.jsx)(x.a,{children:Object(c.jsx)(f.c,{children:t?r?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(Q,{user:n,doc_user_id:a,currentInfo:i})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(k,{user:n})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})})})})})};var L=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),s=Object(d.a)(i,2),o=s[0],l=s[1],b=Object(r.useState)(!1),x=Object(d.a)(b,2),f=x[0],m=x[1],p=Object(r.useState)(""),g=Object(d.a)(p,2),v=g[0],w=g[1],y=Object(r.useState)({currentQuiz:0,showWrongs:!1}),S=Object(d.a)(y,2),k=S[0],z=S[1];return Object(r.useEffect)((function(){h.onAuthStateChanged(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!t){e.next=7;break}return e.next=4,O.collection("userinfo").where("uid","==",t.uid).get();case 4:n=e.sent,m(Boolean(n.docs.length));try{console("already has acount"),l(n.docs[0].data()),w(n.docs[0].id)}catch(c){console.log("Have to make account"),l(t)}case 7:a(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O.collection("current").doc("current").onSnapshot((function(e){z(e.data())}))}),[]),Object(r.useEffect)((function(){v&&O.collection("userinfo").doc(v).onSnapshot((function(e){l(e.data())}))}),[v]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(G,{isLoggedIn:Boolean(o),user:o,hasAccount:f,doc_user_id:v,currentInfo:k}):"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4!"})};n(74);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.fb3476b4.chunk.js.map