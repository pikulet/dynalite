(this.webpackJsonpdynalite_frontend=this.webpackJsonpdynalite_frontend||[]).push([[0],{186:function(e,t,n){e.exports=n(363)},191:function(e,t,n){},304:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(191),n(32)),u=n(33),l=n(36),s=n(34),m=n(38),p=n(180),d=n(40),h=n(56),f=n(58),y=n(28),v=n.n(y),b=n(57),g=n(90),j=n(23),O=n.n(j),E=n(20),w=n(76),k=n.n(w),x=n(167),C=n.n(x),A=function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",C.a.get("https://www.evantay.com/tech/dynalite-api/occupancy").then((function(e){return e.data})));case 4:e.prev=4,e.t0=e.catch(0),console.error(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=Object(E.times)(7,(function(){return[]}));return Object(E.forEach)(e,(function(e){var n=function(e,t){var n=e.toArray()[2],a=t.toArray()[2];return a<n?a+e.daysInMonth()-n:a-n}(k()([2019,10,28,8]).tz("Asia/Singapore"),k()(e.timestamp).tz("Asia/Singapore"))%7;t[n].push(e)})),Object(E.map)(t,(function(e){return Object(E.sortBy)(e,["timestamp","rpiId"])}))},B=function(e){var t=Object(E.times)(24,(function(){return[]}));return Object(E.forEach)(e,(function(e){var n=function(e,t){var n=e.toArray()[3],a=t.toArray()[3];return a<n?a+24-n:a-n}(k()([2019,10,28,8]).tz("Asia/Singapore"),k()(e.timestamp).tz("Asia/Singapore"))%24;t[n].push(e)})),Object(E.map)(t,(function(e){return Object(E.sortBy)(e,["timestamp","rpiId"])}))},D=function(e){var t=0,n=1;return Object(E.map)(e,(function(e){Object(E.forEach)(e,(function(e){e.isOccupied&&(t+=1),n+=1}));var a=t/n;return t=0,n=1,Object(E.round)(a,2)}))};function I(){var e=Object(h.a)(["\n\twidth: 768px;\n\tmax-width: 90%;\n"]);return I=function(){return e},e}var P=f.a.div(I()),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={labels:["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getUpdatedData",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,e.abrupt("return",D(S(t)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getUpdatedData().then((function(t){return e.setState({datasets:[{label:"Room occupancy (Daily)",backgroundColor:O()(),borderColor:O()(),borderWidth:1,hoverBackgroundColor:O()(),hoverBorderColor:O()(),data:t}]})}))}},{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(g.a,{data:this.state}))}}]),t}(r.a.Component);function W(){var e=Object(h.a)(["\n\twidth: 768px;\n\tmax-width: 90%;\n"]);return W=function(){return e},e}var z=f.a.div(W()),H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={labels:["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getUpdatedData",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,console.log(B(t)),e.abrupt("return",D(B(t)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getUpdatedData().then((function(t){return e.setState({datasets:[{label:"Room Occupancy (Hourly)",backgroundColor:O()(),borderColor:O()(),borderWidth:1,hoverBackgroundColor:O()(),hoverBorderColor:O()(),data:t}]})}))}},{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(g.a,{data:this.state}))}}]),t}(r.a.Component),M=n(364),R=n(366),U=(n(304),M.a.Header),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).handleClick=function(t){e.setState({current:t.key})},e.state={current:1},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(U,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(R.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],selectedKeys:[this.state.current],onClick:this.handleClick,style:{lineHeight:"64px"}},r.a.createElement(R.a.Item,{key:"1"},r.a.createElement("a",{href:"https://www.evantay.com/tech/dynalite-api/",rel:"noopener noreferrer"},"Backend API")),r.a.createElement(R.a.Item,{key:"2"},r.a.createElement("a",{href:"https://github.com/Happytreat/dynalite",rel:"noopener noreferrer"},"Github Repo"))))))}}]),t}(r.a.Component),J=n(365),G=n(367);function K(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n"]);return K=function(){return e},e}var N=J.a.Text,_=J.a.Title,L=f.a.div(K()),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(J.a,{style:{textAlign:"center",paddingTop:"3rem"}},r.a.createElement(_,{level:2},"Project Dynalite"),r.a.createElement(_,{level:4,style:{fontWeight:"normal"}},"A full-stack IoT project on the dynamic visualisation of room occupancy.")),r.a.createElement(L,null,r.a.createElement(T,null)),r.a.createElement(L,null,r.a.createElement(H,null)),r.a.createElement("div",{style:{width:"512px",maxWidth:"90%",margin:"auto",marginBottom:"1.5rem"}},r.a.createElement(N,{style:{fontSize:"1.1rem",lineHeight:"1.6rem"}},"Dynalite is an Internet-of-Things application which performs dynamic visualisation of room occupancy. Dynalite uses one or more Raspberry Pis to measure room occupancy and a NodeJS-Express-PostgreSQL web server to store and visualise the measured data. Communication betwene the Pis and the server is implemented using COAP.")),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"3rem"}},r.a.createElement(G.a,{type:"primary",icon:"api",href:"https://www.evantay.com/tech/dynalite-api/",style:{margin:"0.4rem"}},"Backend API"),r.a.createElement(G.a,{type:"primary",icon:"github",href:"https://github.com/Happytreat/dynalite",style:{margin:"0.4rem"}},"Github repo")))},$=(n(361),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Dynalite client: v0.1.0"),r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{component:Q})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[186,1,2]]]);
//# sourceMappingURL=main.974196e1.chunk.js.map