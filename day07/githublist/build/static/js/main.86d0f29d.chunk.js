(this.webpackJsonpgithublist=this.webpackJsonpgithublist||[]).push([[0],{25:function(t,e,a){t.exports=a(55)},30:function(t,e,a){},36:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(23),i=a.n(s),o=(a(30),a(11)),l=a.n(o),c=a(24),u=a(5),m=a(6),h=a(7),d=a(8),g=a(3),p=a(4),b=(a(36),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).ToGithubPage=function(){window.location.href=n.props.htmlUrl},n}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props,e=t.listNum,a=t.avatar,n=t.name,s=t.stargazersCount,i=t.forksCount,o=t.openIssuesCount;return r.a.createElement("div",{className:"github-item",onClick:this.ToGithubPage},r.a.createElement("span",{style:{fontSize:"25px",padding:"15px 0"}},"#",e),r.a.createElement("img",{src:a,alt:"",style:{width:"80%",margin:"0 auto"}}),r.a.createElement("p",{style:{color:"indianred",fontWeight:"500"}},n),r.a.createElement("div",{style:{textAlign:"left",margin:"0 auto"}},r.a.createElement("div",null,r.a.createElement(g.a,{style:{color:"orange",marginRight:"9px"},icon:p.b}),r.a.createElement("span",{style:{fontWeight:"500"}},n)),r.a.createElement("div",null,r.a.createElement(g.a,{style:{color:"#FFD700",marginRight:"9px"},icon:p.c}),r.a.createElement("span",null,s,"stars")),r.a.createElement("div",null,r.a.createElement(g.a,{style:{color:"skyblue",marginRight:"9px"},icon:p.a}),r.a.createElement("span",null,i,"forks")),r.a.createElement("div",null,r.a.createElement(g.a,{style:{color:"#EDA1A7",marginRight:"9px"},icon:p.d}),r.a.createElement("span",null,o,"openissues"))))}}]),a}(r.a.Component)),v=a(9),f=a.n(v),E=(a(53),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).switchTab=function(t,e){var a=e.name,r=e.url,s=t.target;s.getAttribute("data-filter")&&(document.querySelectorAll(".tab-list.active").forEach((function(t){return t.classList.remove("active")})),s.classList.add("active")),n.setState({tabName:a,tabUrl:r}),localStorage.setItem("name",a),localStorage.setItem("url",r),setTimeout((function(){n.FetchGit()}),200)},n.state={tabList:[{name:"java",url:"q=stars:%3E11+language:java&sort=stars&order=desc&type=Repositories"},{name:"javascript",url:"q=stars:%3E11+language:javascript&sort=stars&order=desc&type=Repositories"},{name:"css",url:"q=stars:%3E11+language:css&sort=stars&order=desc&type=Repositories"},{name:"ruby",url:"q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories"},{name:"python",url:"q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories"}],tabName:"All",tabUrl:"q=stars:%3E11&sort=stars&order=desc&type=Repositories",url:"https://api.github.com/search/repositories?",githubData:[],count:0},n}return Object(m.a)(a,[{key:"FetchGit",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,a,n,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({githubData:[]}),0!==this.state.count){t.next=20;break}if(!localStorage.getItem("name")){t.next=12;break}return t.next=6,f.a.get(this.state.url+localStorage.getItem("url"));case 6:e=t.sent,this.setState({githubData:e.data.items.slice(0,10),count:this.state.count+1,name:localStorage.getItem("name"),tabUrl:localStorage.getItem("url")}),(a=document.getElementById(localStorage.getItem("name")))&&(document.querySelectorAll(".tab-list.active").forEach((function(t){return t.classList.remove("active")})),a.classList.add("active")),t.next=18;break;case 12:return t.next=14,f.a.get(this.state.url+this.state.tabUrl);case 14:n=t.sent,this.setState({githubData:n.data.items.slice(0,10)}),(r=document.getElementById("All"))&&(document.querySelectorAll(".tab-list.active").forEach((function(t){return t.classList.remove("active")})),r.classList.add("active"));case 18:t.next=24;break;case 20:return t.next=22,f.a.get(this.state.url+this.state.tabUrl);case 22:s=t.sent,this.setState({githubData:s.data.items.slice(0,10)});case 24:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.FetchGit()}},{key:"render",value:function(){var t=this,e=this.state.githubData;return r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:"25px",fontWeight:"500",paddingTop:"20px",display:"block",width:"100vw"}},"Github\u70ed\u95e8\u9879\u76ee"),r.a.createElement("div",{style:{marginTop:"14px",marginBottom:"18px",width:"100vw"}},r.a.createElement("button",{className:"tab-list","data-filter":"All",id:"All",onClick:function(e){return t.switchTab(e,{name:"All",url:"q=stars:%3E11&sort=stars&order=desc&type=Repositories"})}},"All"),this.state.tabList.map((function(e,a){return r.a.createElement("button",{key:a,className:"tab-list","data-filter":e.name,id:e.name,onClick:function(a){return t.switchTab(a,e)}},e.name)}))),r.a.createElement("div",{className:"list-content"},0!==e.length?e.map((function(t,e){return r.a.createElement(b,{key:e,listNum:++e,avatar:t.owner.avatar_url,name:t.name,stargazersCount:t.stargazers_count,forksCount:t.forks_count,openIssuesCount:t.open_issues_count,htmlUrl:t.html_url})})):r.a.createElement("div",null,"\u5237\u65b0\u4e2d...")))}}]),a}(r.a.Component));a(54);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.86d0f29d.chunk.js.map