(this.webpackJsonpdevkeep=this.webpackJsonpdevkeep||[]).push([[0],{108:function(e,t,n){e.exports={Container:"NoteListItem_Container__r2JWf"}},112:function(e,t,n){e.exports={AddButton:"AddButton_AddButton__30BPI"}},114:function(e,t,n){e.exports={SaveButton:"SaveButton_SaveButton__2O9dh"}},115:function(e,t,n){e.exports={DeleteButton:"DeleteButton_DeleteButton__2C7Kk"}},117:function(e,t,n){e.exports={Container:"Notes_Container__UZmK7"}},118:function(e,t,n){e.exports={NavigationItems:"Navigation_NavigationItems__eQ6OA"}},119:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},120:function(e,t,n){e.exports={Content:"Layout_Content__365f3"}},121:function(e,t,n){},14:function(e,t,n){e.exports={Container:"Signup_Container__E7Fk3",CardBody:"Signup_CardBody__3HhCl",FormGroup:"Signup_FormGroup__3bRuf",BtnSubmit:"Signup_BtnSubmit__3V8Ng",Login:"Signup_Login__1WLSr"}},147:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),o=n(1),l=n(12),u=n(10),s=n(122),d=Object(s.a)("https://goicbjtvqjoyibzexvky.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMDQ4NTgzMiwiZXhwIjoxOTI2MDYxODMyfQ.9PpOUtOcFsQfAnXk2WrjzV-OOtGc0azIPfL1AwuyMTc"),m=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n,a,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.from("notes").select().eq("user_id",t);case 3:if(n=e.sent,a=n.data,!(r=n.error)){e.next=8;break}throw new Error(r);case 8:return e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n,a,r,c){var i,l,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.from("notes").insert([{title:t,description:n,code:a,user_id:c,language:r}]);case 3:if(i=e.sent,l=i.data,!(u=i.error)){e.next=8;break}throw new Error(u);case 8:return e.abrupt("return",l);case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n){var a,r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.from("notes").delete().match({id:t,user_id:n});case 3:if(a=e.sent,r=a.data,!(c=a.error)){e.next=8;break}throw new Error(c);case 8:return e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n,a,r,c){var i,l,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.from("notes").update({title:n,description:a,code:r,language:c}).match({id:t});case 3:if(i=e.sent,l=i.data,!(u=i.error)){e.next=8;break}throw new Error(u);case 8:return e.abrupt("return",l);case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),v=Object(a.createContext)(),b=function(){return Object(a.useContext)(v)},g=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),m=Object(u.a)(s,2),p=m[0],f=m[1],E=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n){var a,r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.auth.signUp({email:t,password:n});case 3:if(a=e.sent,r=a.user,!(c=a.error)){e.next=8;break}throw new Error(c);case 8:return i(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0);case 15:return e.prev=15,f(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n){var a,r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.auth.signIn({email:t,password:n});case 3:if(a=e.sent,r=a.user,!(c=a.error)){e.next=8;break}throw new Error(c);case 8:return i(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0);case 15:return e.prev=15,f(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.auth.signOut();case 3:if(t=e.sent,!(n=t.error)){e.next=7;break}throw new Error(n);case 7:i(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:return e.prev=13,f(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){return d.auth.onAuthStateChange((function(e,t){t&&i(t.user),f(!1)}))}),[]);var h={currentUser:c,signup:E,login:b,logout:g};return r.a.createElement(v.Provider,{value:h},!p&&e.children)},h=n(21),I=(n(147),n(9)),O=n(75),R=n(286),C=n(108),x=n.n(C),A=function(e){return r.a.createElement("div",{className:x.a.Container},r.a.createElement(R.a,{onClick:e.noteClicked,"data-id":e.noteId,selected:e.selected,button:!0},function(e){var t=function(e){return e.replace(/<[^>]*?/gm,"")}(e);return t.length>=30?t.substring(0,30)+"...":t}(e.title)))},y=n(280),j=n(112),w=n.n(j),k=function(e){return r.a.createElement("div",{className:w.a.AddButton},r.a.createElement("button",{title:"addBtn"},r.a.createElement(y.a,{onClick:e.clicked})))},N=n(281),S=n(41),P=n.n(S),L=function(e){var t=r.a.createElement("div",null,"Loading Notes..");return e.notes&&e.notes.length>0&&(t=e.notes.map((function(t){return r.a.createElement(A,{key:t.id,noteId:t.id,title:t.title,noteClicked:e.noteClicked,selected:t.id===e.noteId})}))),0===e.notes.length&&(t=r.a.createElement("div",null,"No Notes Found")),r.a.createElement("div",{className:P.a.Container},r.a.createElement("div",{className:P.a.HeaderContainer},r.a.createElement("h4",{className:P.a.Header},"Notes"),r.a.createElement(k,{clicked:e.addNoteClicked})),r.a.createElement("div",{className:P.a.List},r.a.createElement(N.a,null,t)))},D=n(113),T=n.n(D),B=n(282),H=n(114),Q=n.n(H),_=function(e){return r.a.createElement("div",{className:Q.a.SaveButton},r.a.createElement("button",{title:"saveBtn"},r.a.createElement(B.a,{style:{fontSize:"35px"},onClick:e.clicked})))},U=n(283),q=n(115),z=n.n(q),Z=function(e){return r.a.createElement("div",{className:z.a.DeleteButton},r.a.createElement("button",{title:"deleteBtn"},r.a.createElement(U.a,{style:{fontSize:"35px"},onClick:e.clicked})))},M=n(59),G=n.n(M),F=(n(250),function(e){return r.a.createElement("div",{className:G.a.Container},r.a.createElement("input",{autoFocus:"autofocus",value:e.noteTitle,type:"text",onChange:e.noteTitleChanged,placeholder:"Title...",tabIndex:"1",ref:e.inputRef}),r.a.createElement(T.a,{value:e.noteDescription||"",onChange:e.noteDescriptionChanged,placeholder:"Note description...",tabIndex:parseInt(2),style:{height:"55vh"},className:G.a.EditingArea}),r.a.createElement("div",{className:G.a.ActionsContainer},r.a.createElement(Z,{clicked:e.deleteClicked}),r.a.createElement(_,{clicked:e.saveClicked})))}),J=(n(36),n(116)),V=n.n(J),X=n(284),K=function(e){return r.a.createElement("div",null,r.a.createElement(X.a,null))},W=n(285),Y=function(e){return r.a.createElement("div",null,r.a.createElement(W.a,null))},$=(n(103),n(104),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(42)),ee=n.n($),te=["javascript","python","java"],ne=["monokai","github","twilight","xcode","solarized_dark","terminal"],ae=function(e){var t=te.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})),n=ne.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}));return r.a.createElement("div",{className:ee.a.Container},r.a.createElement("div",{className:ee.a.DropdownContainer},r.a.createElement("div",{className:ee.a.LanguagesContainer},r.a.createElement("label",null,r.a.createElement(K,null)),r.a.createElement("select",{onChange:e.LanguageChanged,value:e.language},t)),r.a.createElement("div",{className:ee.a.ThemeContainer},r.a.createElement("label",null,r.a.createElement(Y,null)),r.a.createElement("select",{onChange:e.ThemeChanged,value:e.theme},n))),r.a.createElement(V.a,{mode:e.language,theme:e.theme,value:e.value,onChange:e.codeChanged,name:"ID of Div",editorProps:{$blockScrolling:!0},style:{width:"50%",height:"59vh"}}))},re=n(31),ce=(n(263),n(117)),ie=n.n(ce);function oe(){var e=(b()||{}).currentUser,t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(0),d=Object(u.a)(s,2),v=d[0],g=d[1],h=Object(a.useState)(null),I=Object(u.a)(h,2),R=I[0],C=I[1],x=Object(a.useState)(""),A=Object(u.a)(x,2),y=A[0],j=A[1],w=Object(a.useState)(""),k=Object(u.a)(w,2),N=k[0],S=k[1],P=Object(a.useState)(""),D=Object(u.a)(P,2),T=D[0],B=D[1],H=Object(a.useState)("javascript"),Q=Object(u.a)(H,2),_=Q[0],U=Q[1],q=Object(a.useState)("github"),z=Object(u.a)(q,2),Z=z[0],M=z[1],G=Object(a.useState)(!1),J=Object(u.a)(G,2),V=J[0],X=J[1],K=Object(a.useState)(!1),W=Object(u.a)(K,2),Y=W[0],$=W[1],ee=Object(a.useRef)();Object(a.useEffect)((function(){var t=!0;if(e){var n=[];m(e.id).then((function(e){t&&e.length>0&&(n=e.sort((function(e,t){return t.id-e.id})),i(n),C(n[v].id),j(n[v].title),S(n[v].description),B(n[v].code),U(n[v].language))}))}return function(){return t=!1}}),[]),Object(a.useEffect)((function(){ee.current.focus(),c&&c.length>0&&!Y&&(C(c[v].id),j(c[v].title),S(c[v].description),B(c[v].code),U(c[v].language))}),[c,i,v]);var te=function(){re.b.dark("Note successfully saved!",{position:"bottom-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},ne=function(){re.b.error("There was an issue saving your note, please try again!",{position:"bottom-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},ce=function(){var t=Object(l.a)(Object(o.a)().mark((function t(n){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return X(!1),t.next=3,f(n,e.id);case 3:t.sent?(re.b.dark("Note successfully deleted!",{position:"bottom-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i(c.filter((function(e){return e.id!==n})))):re.b.error("There was an issue deleting your note, please try again!",{position:"bottom-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=Object(l.a)(Object(o.a)().mark((function t(){var n,a,r,l;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!V){t.next=12;break}return g(0),n="",n=""===y?"Untitled":y,t.next=6,p(n,N,T,_,e.id);case 6:(a=t.sent)?(te(),i([{id:a[0].id,title:a[0].title,description:a[0].description,code:a[0].code,language:a[0].language,user_id:a[0].user_id}].concat(Object(O.a)(c)))):ne(),X(!1),$(!1),t.next=18;break;case 12:return t.next=14,E(R,y,N,T,_);case 14:(r=t.sent)?(te(),(l=Object(O.a)(c))[v]={id:r[0].id,title:r[0].title,description:r[0].description,code:r[0].code,language:r[0].language,user_id:r[0].user_id},i(l)):ne(),$(!1);case 18:case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=setTimeout((function(){Y&&oe(),$(!1)}),3e3);return function(){clearTimeout(e)}}),[V,Y,y,N,T,_]),r.a.createElement("div",null,r.a.createElement("div",{className:ie.a.Container},r.a.createElement(L,{notes:c,noteClicked:function(e){ee.current.focus(),X(!1),g(c.findIndex((function(t){return t.id===parseInt(e.target.dataset.id)})))},addNoteClicked:function(){X(!0),$(!1),C(null),j(""),S(""),B(""),U("javascript"),ee.current.focus()},noteId:R}),r.a.createElement(F,{inputRef:ee,noteTitle:y,noteDescription:N,noteTitleChanged:function(e){j(e.target.value),$(!0)},noteDescriptionChanged:function(e,t,n){S(e),"user"===n&&$(!0)},deleteClicked:function(){return ce(R)},saveClicked:function(){return oe()}}),r.a.createElement(ae,{value:T,codeChanged:function(e){B(e),$(!0)},LanguageChanged:function(e){U(e.target.value),$(!0)},language:_,ThemeChanged:function(e){M(e.target.value)},theme:Z}),r.a.createElement(re.a,null)))}var le=n(14),ue=n.n(le),se=function(e){return r.a.createElement("div",{className:ue.a.Container},r.a.createElement("div",null,r.a.createElement("div",{className:ue.a.Card},r.a.createElement("div",{className:ue.a.CardBody},r.a.createElement("h2",null,"Sign Up"),e.error,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{id:"email",className:ue.a.FormGroup},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",ref:e.emailRef,required:!0})),r.a.createElement("div",{id:"password",className:ue.a.FormGroup},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",ref:e.passwordRef,required:!0})),r.a.createElement("div",{id:"password-confirm",className:ue.a.FormGroup},r.a.createElement("label",null,"Password Confirmation"),r.a.createElement("input",{type:"password",ref:e.passwordConfirmRef,required:!0})),r.a.createElement("button",{disabled:e.btnDisabled,type:"submit",className:ue.a.BtnSubmit},"Sign Up")))),r.a.createElement("div",{className:ue.a.Login},"Already have an account? ",r.a.createElement(h.b,{to:"/login"},"Log In"))))},de=function(e){return r.a.createElement("div",{className:ue.a.Container},r.a.createElement("div",null,r.a.createElement("div",{className:ue.a.Card},r.a.createElement("div",{className:ue.a.CardBody},r.a.createElement("h2",null,"Log In"),e.error,r.a.createElement("form",{onSubmit:e.onSubmit,"data-testid":"form"},r.a.createElement("div",{className:ue.a.FormGroup},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",label:"email",type:"email",ref:e.emailRef,required:!0})),r.a.createElement("div",{className:ue.a.FormGroup},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",label:"password",type:"password",ref:e.passwordRef,required:!0})),r.a.createElement("button",{disabled:e.btnDisabled,type:"submit",className:ue.a.BtnSubmit},"Log In")))),r.a.createElement("div",{className:ue.a.Login},"Need an account? ",r.a.createElement(h.b,{to:"/signup"},"Sign Up"))))},me=n(60),pe=n.n(me),fe=function(){var e=b().currentUser,t=r.a.createElement("div",null);return e&&(t=r.a.createElement("div",{className:pe.a.Container},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User Information"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:pe.a.Uppercase},"User ID"),r.a.createElement("td",null,r.a.createElement("input",{value:e.id,type:"text",readOnly:!0}))),r.a.createElement("tr",null,r.a.createElement("td",{className:pe.a.Uppercase},"Email"),r.a.createElement("td",null,r.a.createElement("input",{value:e.email,type:"text",readOnly:!0}))))))),r.a.createElement("div",null,t)},Ee=n(74),ve=n.n(Ee),be=function(e){return r.a.createElement("li",{className:ve.a.NavigationItem},r.a.createElement(h.c,{to:e.link,exact:e.exact,onClick:e.clicked,activeClassName:ve.a.active,tabIndex:"-1"},e.children))},ge=n(118),he=n.n(ge),Ie=function(e){var t=b()||{},n=t.currentUser,c=t.logout,i=Object(I.g)(),s=Object(a.useState)(""),d=Object(u.a)(s,2),m=d[0],p=d[1],f=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(""),e.prev=1,e.next=4,c();case 4:i.push("/#/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),p("Failed to logout"),alert(m);case 11:case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{basename:"/"},r.a.createElement("ul",{className:he.a.NavigationItems},n?r.a.createElement(be,{exact:!0,link:"/"},"Notes"):null,n?r.a.createElement(be,{link:"/profile"},"Profile"):null,n?r.a.createElement(be,{link:"/login",clicked:f},"Log Out"):null))},Oe=n(61),Re=n.n(Oe),Ce=n(119),xe=n.n(Ce),Ae=function(e){return r.a.createElement("div",{className:xe.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA9PSURBVHhe7Z0L0G1lWccBJUTCGyCKiTmlgnbTULSpUJzJGa9jSXjNMLHARLPwgiJiBomig6aTDqECXlBMvDYFBYENEU4qigRWeEVDzXPknMM55zvn0O+/fPZu72+vffu+vb/vm+/8fjPPvHs9z/O+611rr2et97b23kNERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER2J3bt2nXAHXfc8Zekn0YuX2fyKeSNHN/d63BFJoeL5wHI95D/zcXEhfSR9SQc02eRjch/I/euwxaZjJ07d+ap8R/IvUq17uDY7ofcgpxXKpHJ4KK5DTmlNtctHOPbkK/Vpshk0Ay5gwvnxNpct3CMp/G0vLk2RSbDABEZgQEiMgIDRGQEBojICAwQkRGshQDZsWPHq6jDxbU5FwwQWRKrHSDsfm8u3P+hDn9VqrkwSYDgc1/koRPImp6Rp34H9NaXc/xTZWol9l7/Htm3XHZfVjtA2Pczqg6/VKq5QPkjA4Qq7IXP91OXScB3C/JR5ElVxJqB4/xiVbOBJ/TIiWCO4dRy7QP92eWy+1InYiYBQjkPR55TmxPBl3kpea6uzT7Q/x7y0NpcFpQzyRPkE8hXkG/UeckatWx3hTJuIr0t9g5sX0Jynypm1aE+76r63pz6UeezytTKwsLCM/C9Ib6BzznGr/Dx98tl96VOyLIChPz3R85HdiL/Uuqx4PtzSHhBqbpQrT3RfxVZQP4aObhMS4L8E/dB8H1inZeTSzUAthzzK5HmqUN6PbKmml7U56jUbVyABHxfVr7/TLJXqSUnhZOzpAAh392QNyJpbtzKo/zFFHfnMo+FPGfyhWwgz11L1Qf2fbG9Cp+sxv0x8pphvuMg70wDpAM+ByP/WP7/SnKnMq061GeiAMHvgcgmZDPy4FJLqC92qgDJRUCeE5B0rm9HzkQ31fsW+E/cOcfnoPgh25FvIc8n/1R3OfLMJUAC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",alt:"DevKeep"}))},ye=function(e){return r.a.createElement("header",{className:Re.a.Toolbar},r.a.createElement("div",{className:Re.a.Logo},r.a.createElement(Ae,null)),r.a.createElement("div",null),r.a.createElement("nav",{className:Re.a.DesktopOnly},r.a.createElement(Ie,null)))},je=n(120),we=n.n(je),ke=function(e){return r.a.createElement("div",null,r.a.createElement(ye,null),r.a.createElement("main",{className:we.a.Content},e.children))},Ne=n(121),Se=n.n(Ne);var Pe=function(){var e=b()||{},t=e.currentUser,n=e.login,c=e.signup,i=Object(a.useRef)(),s=Object(a.useRef)(),d=Object(a.useRef)(),m=Object(a.useState)(""),p=Object(u.a)(m,2),f=p[0],E=p[1],v=Object(a.useState)(!1),g=Object(u.a)(v,2),h=g[0],O=g[1],R=Object(I.g)(),C=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,E(""),O(!0),e.next=6,n(i.current.value,s.current.value);case 6:O(!1),R.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),E("Failed to sign in");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s.current.value===d.current.value){e.next=3;break}return e.abrupt("return",E("Passwords do not match"));case 3:return e.prev=4,E(""),O(!0),e.next=9,c(i.current.value,s.current.value);case 9:O(!1),R.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),E("Failed to create an account");case 16:case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),A=r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/signup",component:function(){return r.a.createElement(se,{onSubmit:x,emailRef:i,passwordRef:s,passwordConfirmRef:d,btnDisabled:h,error:f})}}),r.a.createElement(I.b,{path:"/login",component:function(){return r.a.createElement(de,{onSubmit:C,emailRef:i,passwordRef:s,isLoading:h,error:f})}}),r.a.createElement(I.a,{to:"/login"}));return t&&(A=r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/profile",component:fe}),r.a.createElement(I.b,{path:"/",exact:!0,component:oe}),r.a.createElement(I.a,{to:"/"}))),r.a.createElement("div",{className:Se.a.Container},r.a.createElement(ke,null,A))},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,287)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null,r.a.createElement(h.a,{basename:"/"},r.a.createElement(Pe,null)))),document.getElementById("root")),Le()},41:function(e,t,n){e.exports={Container:"NotesList_Container__3meJr",HeaderContainer:"NotesList_HeaderContainer__3K6TG",List:"NotesList_List__2-NvA"}},42:function(e,t,n){e.exports={Container:"CodeEditor_Container__1jheT",DropdownContainer:"CodeEditor_DropdownContainer__3JJzh",LanguagesContainer:"CodeEditor_LanguagesContainer__1Pkx4",ThemeContainer:"CodeEditor_ThemeContainer__27-Af"}},59:function(e,t,n){e.exports={Container:"NoteEditor_Container__2K5on",ActionsContainer:"NoteEditor_ActionsContainer__EtMYK",EditingArea:"NoteEditor_EditingArea__2du2Z"}},60:function(e,t,n){e.exports={Container:"Profile_Container__3s49E",Uppercase:"Profile_Uppercase__ixAH1"}},61:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},74:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__FKtYE",active:"NavigationItem_active__2MiNG"}}},[[265,1,2]]]);
//# sourceMappingURL=main.590a6449.chunk.js.map