(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),i=(a(88),a(21)),m=a(22),o=a(25),s=a(23),u=a(24),d=a(7),E=a(140),b=a(144),h=a(143),f=a(141),p=a(48),v=a(26),y=a(78),g=a(54),N=a.n(g),S=a(139),k=a(79),j=a(82),O=a(137),I=a(18),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={searchTerm:"",redirect:!1},a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a.onKeyPress=a.onKeyPress.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onClick",value:function(){this.props.search(this.state.searchTerm),this.setState({redirect:!0})}},{key:"onKeyPress",value:function(e){"Enter"!==e.key&&13!==e.keyCode||(e.preventDefault(),this.onClick())}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-item"},this.state.redirect&&r.a.createElement(f.a,{to:"/search"}),r.a.createElement(O.a,{inline:!0,className:"form--search form--search--header"},r.a.createElement(I.a,{icon:"search"}),r.a.createElement(O.a.Label,{className:"sr-only sr-only-focusable"},"Search"),r.a.createElement("input",{type:"text",placeholder:"Search members",value:this.state.searchTerm,onChange:this.onChange,onKeyPress:this.onKeyPress}),r.a.createElement(k.a,{onClick:this.onClick},"Search")))}}]),t}(n.Component),M=a(138),D=[{alert:"Danielle Sloan accepted your request.",time:"30 seconds ago",action:""},{alert:"Housing Home left a note for Dennis Arthur.",time:"15 minutes ago",action:""},{alert:"Stephanie McNab hasn't accepted your request yet.",time:"",action:"Send reminder"}],w=function(){return r.a.createElement(M.a,{title:"Notifications",className:"alerts"},D.map(function(e,t){return r.a.createElement(S.a.Text,{key:t},r.a.createElement("p",{className:"alert-item__text"},e.alert),e.time&&r.a.createElement("p",{className:"alert-item__time"},e.time),e.action&&r.a.createElement("p",{className:"alert-item__action"},e.action))}))},A=a(134),V=function(e){var t=e.logout;return r.a.createElement(M.a,{title:"Account"},r.a.createElement(S.a.Text,{href:"/",onClick:function(){document.dispatchEvent(new MouseEvent("click"))}},r.a.createElement(A.a,{to:"/"},"Dashboard")),r.a.createElement(M.a.Divider,null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"/"},"Settings")),r.a.createElement(M.a.Divider,null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"/",onClick:t},"Log Out")))},R=function(){return r.a.createElement(S.a.Brand,{href:"/"},"Share My Health")},x=function(){return r.a.createElement("div",{className:"nav-item"},r.a.createElement(k.a,{href:"#",variant:"primary"},"Create Account"))},T=function(e){var t=e.auth,a=e.logout,n=e.search;return"true"===t?r.a.createElement("header",{className:"header"},r.a.createElement(S.a,{expand:"lg",className:"container"},r.a.createElement(R,null),r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(C,{search:n}),r.a.createElement(j.a,{className:"mr-auto"},r.a.createElement(x,null),r.a.createElement(w,null),r.a.createElement(V,{logout:a}))))):r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(N.a,{to:"/"},"Log In")))},L=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9 Share My Health ",e),r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu--footer"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Help")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Updates")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Policy"))))))},_=a(35),K=a.n(_),q=a(55),F=a.n(q),P=function(e){var t=e.login;return r.a.createElement(K.a,{className:"form--login"},r.a.createElement(K.a.Group,{controlId:"loginEmail"},r.a.createElement(K.a.Label,null,"Email address"),r.a.createElement(K.a.Control,{type:"email",placeholder:"Enter email"})),r.a.createElement(K.a.Group,{controlId:"loginPassword"},r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(F.a,{variant:"primary",type:"submit",onClick:t},"Log In"),r.a.createElement(K.a.Text,null,r.a.createElement(N.a,{to:"/reset-password"},"Forgot password?")))},Y=function(e){var t=e.auth,a=e.login;return"true"===t?r.a.createElement(f.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("h1",null,"Agent Portal Log In"),r.a.createElement(P,{login:a}))},B=a(142),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onClick=function(e){e.preventDefault(),a.resetForm.reset(),a.setState({message:!0})},a.state={message:!1},a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h1",null,"Reset Password"),this.state.message&&r.a.createElement(B.a,{variant:"success"},"We'll send you a link to reset your password."),r.a.createElement(O.a,{ref:function(t){return e.resetForm=t},className:"mb-3"},r.a.createElement(O.a.Group,{controlId:"loginEmail"},r.a.createElement(O.a.Label,null,"Email address"),r.a.createElement(O.a.Control,{type:"email",placeholder:"Enter email"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:this.onClick},"Reset")),r.a.createElement(A.a,{to:"/"},"Back to Log In"))}}]),t}(n.Component),H=function(e){return r.a.createElement("div",{className:"page-heading"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e.title),e.subtitle&&r.a.createElement("p",{className:"page-heading__subtitle"},e.subtitle),e.ctaText&&r.a.createElement(F.a,{variant:"light",className:"page-heading__cta",onClick:function(){return e.onSelect(e.ctaActiveTab)}},e.ctaText)))},W=a(135),J=function(e){return r.a.createElement("div",{className:"content-block"},r.a.createElement("div",{className:"content-block__title"},r.a.createElement(I.a,{icon:e.icon,size:"2x"}),r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"content-block__content"},e.children,e.link&&r.a.createElement(A.a,{to:e.link,className:"content-block__link"},"View All")))},z=function(){return r.a.createElement(J,{title:"Notifications",icon:"bell"},r.a.createElement(W.a,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(I.a,{icon:"bell"}),"Housing Home left a note for ",r.a.createElement(A.a,{to:"/member/5"},"Dennis Arthur"),"."),r.a.createElement("td",{className:"font-italic"},"2 minutes ago")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(I.a,{icon:"bell"}),r.a.createElement(A.a,{to:"/member/2"},"Stephanie McNab")," hasn't accepted your request."),r.a.createElement("td",{className:"font-italic"},"Send Reminder")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(I.a,{icon:"bell"}),r.a.createElement(A.a,{to:"/member/3"},"Weston Smith")," denied your request."),r.a.createElement("td",{className:"font-italic"},"1 day ago")))))},U=a(1),$=a.n(U);$.a.UserLink={item:$.a.object.isRequired};var Q=function(e){var t=e.item;return r.a.createElement("li",null,r.a.createElement(I.a,{icon:["far","user-circle"],className:"mr-2"}),r.a.createElement(A.a,{to:"/member/"+t.id},t.name))},X={1:{id:1,name:"Danielle Sloan",firstName:"Danielle",lastName:"Sloan",dob:"01/07/1987",age:"32",gender:"Female",email:"dsloan92@yahoo.com",joined:"02/13/2019",idVerified:!1,medVerified:!1,accessRecords:!1},2:{id:2,name:"Stephanie McNab",firstName:"Stephanie",lastName:"McNab",dob:"01/07/1955",age:"64",gender:"Female",email:"smcnab@yahoo.com",joined:"02/13/2019",idVerified:!0,medVerified:!0,accessRecords:!1},3:{id:3,name:"Weston Smith",firstName:"Weston",lastName:"Smith",dob:"01/07/1947",age:"72",gender:"Male",email:"wsmith@yahoo.com",joined:"02/13/2019",idVerified:!0,medVerified:!1,accessRecords:!1},4:{id:4,name:"Michael Tran",firstName:"Michael",lastName:"Tran",dob:"01/07/1987",age:"32",gender:"Male",email:"mtran@yahoo.com",joined:"02/23/2019",idVerified:!1,medVerified:!1,accessRecords:!1},5:{id:5,name:"Dennis Arthur",firstName:"Dennis",lastName:"Arthur",dob:"01/07/1955",age:"64",gender:"Male",email:"darthur@yahoo.com",joined:"02/24/2019",idVerified:!0,medVerified:!0,accessRecords:!0},6:{id:6,name:"Joanna Fink",firstName:"Joanna",lastName:"Fink",dob:"01/07/1947",age:"72",gender:"Female",email:"jfink@yahoo.com",joined:"02/25/2019",idVerified:!1,medVerified:!1,accessRecords:!1}},Z=function(){var e=Object.assign([],X).reverse().slice(0,3);return r.a.createElement(J,{title:"Recent Members",icon:"clock",link:"/search"},r.a.createElement("ul",{className:"list--formatted"},e.map(function(e,t){return r.a.createElement(Q,{key:t,item:e})})))},ee=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{title:"Welcome back, Cheryl!"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Here is what you missed..."),r.a.createElement(z,null),r.a.createElement(Z,null)))}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={sort:null},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.searchTerm,a=Object.assign([],X);return e=t?a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())?e:null}):a,r.a.createElement("div",null,r.a.createElement(H,{title:"Search Results"}),r.a.createElement("div",{className:"container"},t&&r.a.createElement("h2",null,'Search results for "',t,'"'),r.a.createElement("ul",{className:"list--formatted"},e.map(function(e,t){return r.a.createElement(Q,{key:t,item:e})}))))}}]),t}(n.Component),ae=a(81),ne=a(40),re=a.n(ne),le=function(e){var t=e.member,a=e.accessRecords,n=e.onSelect;return r.a.createElement("div",{className:"member-sidebar col-md-3"},r.a.createElement("img",{src:"/avatar.png",alt:t.name,className:"member-avatar"}),r.a.createElement(re.a,{defaultActiveKey:"memberInfo",className:"flex-column",onSelect:function(e){return n(e)}},r.a.createElement(re.a.Link,{eventKey:"memberInfo"},"Basic Information"),r.a.createElement(re.a.Link,{eventKey:"memberId"},"Identification"),a&&r.a.createElement("div",null,r.a.createElement(re.a.Link,{eventKey:"memberRecords"},"Records"),r.a.createElement(re.a.Link,{eventKey:"memberNotes"},"Notes"),r.a.createElement(re.a.Link,{eventKey:"memberLockbox"},"Lockbox"))))},ce=a(145),ie=a(136),me=function(e){var t=e.member;return r.a.createElement("div",null,r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Basic Information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"First Name: "),t.firstName),r.a.createElement("li",null,r.a.createElement("strong",null,"Last Name: "),t.lastName),r.a.createElement("li",null,r.a.createElement("strong",null,"DOB: "),t.dob)),r.a.createElement("h3",null,"Contact Information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Email: "),t.email),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone Number: "),"555-555-5555"),r.a.createElement("li",null,r.a.createElement("strong",null,"Address: "),"26 Fairway Blvd, Albany, NY")),r.a.createElement("h3",null,"Emergency Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name: "),"Stephanie Walters"),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone: "),"555-555-5555")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Member Since: "),t.joined)))},oe=function(e){var t=e.member;return r.a.createElement(ce.a,{defaultActiveKey:"basicInfo"},r.a.createElement(ie.a,{eventKey:"basicInfo",title:"Basic Information"},r.a.createElement(me,{member:t})))},se=function(e){var t=e.memberId,a=(e.idVerified,e.updateMemberState);return r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{controlId:"verifyIdType"},r.a.createElement(O.a.Label,null,"Document Type"),r.a.createElement(O.a.Control,{as:"select"},r.a.createElement("option",null,"Driver's License"))),r.a.createElement(O.a.Group,{controlId:"verifyExpiration"},r.a.createElement(O.a.Label,null,"Expiration Date"),r.a.createElement(O.a.Control,{type:"text",placeholder:"mm/dd/yyyy"})),r.a.createElement(O.a.Group,{controlId:"verifyCertify"},r.a.createElement(O.a.Check,{type:"checkbox",label:"I certify that I can verify this member\u2019s identity."})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t,"idVerified")}(e)}},"Verify"))},ue=function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Document Type")),r.a.createElement("p",null,"Driver's License"),r.a.createElement("p",null,r.a.createElement("strong",null,"Expiration Date:")),r.a.createElement("p",null,"02/13/2020"),r.a.createElement("p",null,r.a.createElement("strong",null,"Verification Details")),r.a.createElement("p",null,"Cheryl Deggins (Interfaith) verified this member\u2019s identity on 2/13/2019."))},de=function(e){var t=e.memberId,a=e.idVerified,n=e.updateMemberState;return a?r.a.createElement(ue,null):r.a.createElement(se,{memberId:t,idVerified:a,updateMemberState:n})},Ee=function(e){var t=e.memberId,a=(e.medVerified,e.updateMemberState);return r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{controlId:"verifyMedId"},r.a.createElement(O.a.Label,null,"Medicaid/Medicare ID"),r.a.createElement(O.a.Control,{type:"text",placeholder:"5A5-5A-5A5A-AA"})),r.a.createElement(O.a.Text,null,"OR"),r.a.createElement(O.a.Group,{controlId:"verifySsn"},r.a.createElement(O.a.Label,null,"Social Security Number"),r.a.createElement(O.a.Control,{type:"text",placeholder:"555-55-5555"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t,"medVerified")}(e)}},"Save"))},be=function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Medicaid/Medicare ID")),r.a.createElement("p",null,"5A5-5A-5A5A-AA"),r.a.createElement("p",null,r.a.createElement("strong",null,"Social Security Number")),r.a.createElement("p",null,"xxx-xx-5555"))},he=function(e){var t=e.memberId,a=e.medVerified,n=e.updateMemberState;return a?r.a.createElement(be,null):r.a.createElement(Ee,{memberId:t,medVerified:a,updateMemberState:n})},fe=function(e){var t=e.member,a=e.idVerified,n=e.medVerified,l=e.updateMemberState;return r.a.createElement(ce.a,{defaultActiveKey:"idVerification"},r.a.createElement(ie.a,{eventKey:"idVerification",title:"ID Verification"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"ID Verification"),r.a.createElement(de,{memberId:t.id,idVerified:a,updateMemberState:l})),r.a.createElement(ie.a,{eventKey:"medicalId",title:"Medical ID"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Medical ID"),r.a.createElement(he,{memberId:t.id,medVerified:n,updateMemberState:l})))},pe=[{name:"Allergies",icon:"allergies"},{name:"Demographics",icon:"female"},{name:"Diagnoses",icon:"file-medical"},{name:"Discharge Summaries",icon:"notes-medical"},{name:"ED Reports",icon:"hospital"},{name:"Family History",icon:"users"},{name:"Immunizations",icon:"syringe"},{name:"Lab Results",icon:"vials"},{name:"Medications",icon:"prescription-bottle-alt"}],ve=function(e){var t=e.record,a=e.back;return r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"button--reset"},r.a.createElement(I.a,{icon:"arrow-left",className:"mr-2"}),"Back to All Records"),r.a.createElement("div",{className:"d-flex mt-3"},r.a.createElement(I.a,{icon:t.icon,className:"mr-2",size:"2x"}),r.a.createElement("h2",null,t.name)))},ye=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={activeRecord:null},a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a.back=a.back.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(e){this.setState({activeRecord:e})}},{key:"back",value:function(){this.setState({activeRecord:null})}},{key:"render",value:function(){var e=this,t=this.state.activeRecord;return t?r.a.createElement(ve,{record:t,back:this.back}):r.a.createElement("ul",{className:"records__list"},pe.map(function(t,a){return r.a.createElement("li",{key:a,className:"records__list__item",onClick:function(){return e.onClick(t)}},r.a.createElement(I.a,{icon:t.icon,size:"4x"}),r.a.createElement("p",null,t.name))}))}}]),t}(n.Component),ge=[{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"},{name:"New York Medicaid",dataType:"Medical",dateImported:"02/20/2019"}],Ne=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Current Data Sources"),r.a.createElement(W.a,{striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Data Source Name"),r.a.createElement("th",null,"Data Type"),r.a.createElement("th",null,"Date Imported"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,ge.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.dataType),r.a.createElement("td",null,e.dateImported),r.a.createElement("td",null,r.a.createElement(k.a,{variant:"light"},r.a.createElement(I.a,{icon:"times"}))))}))))},Se=[{name:"NY Medicaid (New 1)",dataType:"Medical"},{name:"NY Medicaid (New 2)",dataType:"Medical"},{name:"NY Medicaid (New 3)",dataType:"Medical"},{name:"NY Medicaid (New 4)",dataType:"Medical"}],ke=function(){return r.a.createElement("div",null,r.a.createElement(O.a,{inline:!0,className:"mb-3 form--search"},r.a.createElement(I.a,{icon:"search"}),r.a.createElement(O.a.Control,{type:"text",placeholder:"Search data sources"}),r.a.createElement(k.a,{type:"submit"},"Search")),r.a.createElement("h3",null,"All Available Data Sources"),r.a.createElement(O.a,null,r.a.createElement(W.a,{striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Data Source Name"),r.a.createElement("th",null,"Data Type"),r.a.createElement("th",null,"Import"))),r.a.createElement("tbody",null,Se.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.dataType),r.a.createElement("td",null,r.a.createElement(O.a.Group,{controlId:t},r.a.createElement(O.a.Check,{type:"checkbox",label:"Import",className:"label--hidden"}))))}))),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Import Selected")))},je=function(e){e.member;return r.a.createElement(ce.a,{defaultActiveKey:"records"},r.a.createElement(ie.a,{eventKey:"records",title:"Records"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Records"),r.a.createElement(ye,null)),r.a.createElement(ie.a,{eventKey:"sources",title:"Data Sources"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Data Sources"),r.a.createElement(Ne,null)),r.a.createElement(ie.a,{eventKey:"addSource",title:"Add Data Source"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},'Add Data Source"'),r.a.createElement(ke,null)))},Oe=function(e){var t=e.date,a=e.note,n=e.user;return r.a.createElement("li",null,r.a.createElement("p",{className:"note__date"},t),r.a.createElement("p",{className:"note__content"},a),r.a.createElement("p",{className:"note__user"},"By ",n))},Ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a.getMemberNotes=a.getMemberNotes.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onClick",value:function(e){e.preventDefault();var t=this.props.member.id,a=new Date,n={date:a.getMonth()+"/"+a.getDate()+"/"+a.getFullYear(),note:this.state.value,user:"Cheryl Sloan (Interfaith)"},r=this.getMemberNotes()||[];r.push(n),sessionStorage.setItem("notes"+t,JSON.stringify(r))}},{key:"getMemberNotes",value:function(){var e=this.props.member.id;return JSON.parse(sessionStorage.getItem("notes"+e))}},{key:"render",value:function(){var e=this.props.member,t=this.getMemberNotes();return r.a.createElement("div",null,r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(O.a.Group,{controlId:"newNote"},r.a.createElement(O.a.Label,null,"Write a note about ",e.name),r.a.createElement("textarea",{rows:"3",value:this.state.value,onChange:this.onChange})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:this.onClick},"Submit")),r.a.createElement("ul",{className:"notes__list"},t&&t.map(function(e,t){return r.a.createElement(Oe,{key:t,date:e.date,note:e.note,user:e.user})}),r.a.createElement(Oe,{date:"2/26/2019",note:e.firstName+" is food insecure and needs to be able to access the local pantry.",user:"Cheryl Sloan (Interfaith)"}),r.a.createElement(Oe,{date:"2/25/2019",note:e.firstName+" is food insecure and needs to be able to access the local pantry.",user:"Cheryl Sloan (Interfaith)"})))}}]),t}(n.Component),Ce=function(e){var t=e.member;return r.a.createElement(ce.a,{defaultActiveKey:"notes"},r.a.createElement(ie.a,{eventKey:"notes",title:"Notes"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Notes"),r.a.createElement(Ie,{member:t})))},Me=function(e){var t=e.member;return r.a.createElement(ce.a,{defaultActiveKey:"lockbox"},r.a.createElement(ie.a,{eventKey:"lockbox",title:"Lockbox"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Lockbox"),r.a.createElement(me,{member:t})))},De=function(e){var t=e.member,a=(e.idVerified,e.updateMemberState);return r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(O.a.Group,{controlId:"newNote"},r.a.createElement(O.a.Label,null,"Note to ",t.name),r.a.createElement(O.a.Control,{as:"textarea",rows:"3"})),r.a.createElement(k.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(t.id,"accessRecords")}(e)}},"Send Request"))},we=function(){var e=new Date,t=e.getMonth()+"/"+e.getDate()+"/"+e.getFullYear();return r.a.createElement("div",null,r.a.createElement("h3",null,"Request Sent!"),r.a.createElement("p",null,t),r.a.createElement("p",null,"Send Request Reminder"),r.a.createElement("p",null,"Cancel Request"))},Ae=function(e){var t=e.member,a=e.accessRecords,n=e.updateMemberState,l=a?r.a.createElement(we,null):r.a.createElement(De,{member:t,idVerified:a,updateMemberState:n});return r.a.createElement(ce.a,{defaultActiveKey:"requestAccess"},r.a.createElement(ie.a,{eventKey:"requestAccess",title:"Request Access"},r.a.createElement("h2",{className:"sr-only sr-only-focusable"},"Request Access"),l))},Ve=function(e){var t=e.member,a=e.active,n=e.idVerified,l=e.medVerified,c=e.accessRecords,i=e.updateMemberState;return r.a.createElement("div",{className:"member-tabs col-md-9"},function(e){switch(e){case"memberId":return r.a.createElement(fe,{member:t,idVerified:n,medVerified:l,updateMemberState:i});case"memberRecords":return r.a.createElement(je,{member:t});case"memberNotes":return r.a.createElement(Ce,{member:t});case"memberLockbox":return r.a.createElement(Me,{member:t});case"requestAccess":return r.a.createElement(Ae,{member:t,accessRecords:c,updateMemberState:i});default:return r.a.createElement(oe,{member:t})}}(a))},Re=function(e){var t=e.member,a=e.subtitle,n=e.onSelect;return r.a.createElement(H,{title:t.name,subtitle:a,ctaText:"Verify Identity",ctaActiveTab:"memberId",onSelect:n})},xe=function(e){var t=e.member,a=e.subtitle,n=e.onSelect;return r.a.createElement(H,{title:t.name,subtitle:a,ctaText:"Request Access",ctaActiveTab:"requestAccess",onSelect:n})},Te=function(e){var t=e.member,a=e.subtitle;return r.a.createElement(H,{title:t.name,subtitle:a})},Le=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).updateMemberState=function(e,t){sessionStorage.setItem(t+e,"true"),a.setState(Object(ae.a)({},t,"true"))};var n=a.props.match.params.id;return a.member=X[n],a.state={active:"MemberInfo",idVerified:!!a.member&&a.getInitialState("idVerified",n),medVerified:!!a.member&&a.getInitialState("medVerified",n),accessRecords:!!a.member&&a.getInitialState("accessRecords",n)},a.onSelect=a.onSelect.bind(Object(d.a)(Object(d.a)(a))),a.updateMemberState=a.updateMemberState.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"getInitialState",value:function(e,t){return sessionStorage.getItem(e+t)?sessionStorage.getItem(e+t):this.member[e]}},{key:"onSelect",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this.member;if(!e)return r.a.createElement("p",null,"404 Not Found");var t=this.state,a=t.active,n=t.idVerified,l=t.medVerified,c=t.accessRecords,i=e.gender+" | "+e.age;return r.a.createElement("div",null,!n&&r.a.createElement(Re,{member:e,subtitle:i,onSelect:this.onSelect}),n&&!c&&r.a.createElement(xe,{member:e,subtitle:i,onSelect:this.onSelect}),n&&c&&r.a.createElement(Te,{member:e,subtitle:i}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(le,{member:e,accessRecords:c,onSelect:this.onSelect}),r.a.createElement(Ve,{member:e,active:a,idVerified:n,medVerified:l,accessRecords:c,updateMemberState:this.updateMemberState}))))}}]),t}(n.Component);p.b.add(v.c,v.d,v.l,v.j,y.a,v.a,v.e,v.f,v.h,v.g,v.m,v.k,v.n,v.i,v.b);var _e=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={auth:sessionStorage.getItem("auth")||!1,searchTerm:null},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a.logout=a.logout.bind(Object(d.a)(Object(d.a)(a))),a.search=a.search.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"login",value:function(){sessionStorage.setItem("auth","true"),this.setState({auth:"true"})}},{key:"logout",value:function(){return sessionStorage.setItem("auth","false"),this.setState({auth:"false"}),r.a.createElement(f.a,{to:"/"})}},{key:"search",value:function(e){this.setState({searchTerm:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(T,{auth:this.state.auth,logout:this.logout,search:this.search}),r.a.createElement("main",null,r.a.createElement(b.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(Y,Object.assign({},t,{auth:e.state.auth,login:e.login}))}}),r.a.createElement(h.a,{path:"/reset-password",component:G}),r.a.createElement(h.a,{path:"/dashboard",component:ee}),r.a.createElement(h.a,{path:"/search",render:function(t){return r.a.createElement(te,Object.assign({},t,{searchTerm:e.state.searchTerm}))}}),r.a.createElement(h.a,{path:"/member/:id",component:Le}),r.a.createElement(h.a,{render:function(){return r.a.createElement("p",null,"Page Not Found")}}))),r.a.createElement(L,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(133)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.d0cf9295.chunk.js.map