(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"10cd":function(t,e,n){"use strict";var a=n("3d8f"),r=n.n(a);r.a},"188f":function(t,e,n){},"38c8":function(t,e,n){"use strict";var a=n("a927"),r=n.n(a);r.a},"3d8f":function(t,e,n){},"419c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),l=c.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"}),n("div",{staticClass:"col-sm-4 col-sm-offset-4 center"},[n("form",[n("fieldset",{staticClass:"center"},[n("div",{staticClass:"form-group form-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailId,expression:"emailId"}],staticClass:"form-control input-lg center-input",attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.emailId},on:{input:function(e){e.target.composing||(t.emailId=e.target.value)}}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never email you nor share it with anyone else.")])])])]),n("button",{staticClass:"btn btn-info btn-lg center",on:{click:t.signIn}},[t._v("Go to your projects")])]),n("div",{staticClass:"col-sm-4"})])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-3"},[t._v("Project planner")]),n("p",{staticClass:"lead"},[t._v("Simple Gnatt charting to speculate how log it will take to deliver the project")]),n("p")])}],f=n("5530"),m=n("2f62"),h={name:"Home",components:Object(f["a"])({},Object(m["e"])({currentUser:function(t){return t.user}})),data:function(){return{emailId:""}},mounted:function(){this.resetUserStore(),this.resetProjectStore()},methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(m["b"])(["signInUser","getProjects"])),Object(m["d"])(["resetUserStore","resetProjectStore"])),{},{signIn:function(){var t=this;null!=this.emailId&&""!=this.emailId&&this.$store.dispatch("signInUser",{username:this.emailId}).then((function(e){console.log(e),null!=e&&t.$router.push({name:"projects",params:{userId:e.id}})})).catch((function(){console.error("failed")}))}})},v=h,j=(n("ea3b"),Object(i["a"])(v,u,p,!1,null,"2264c281",null)),g=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{div:"col-md-12"}},[n("nav",{staticClass:"navbar navbar-expand "},[n("h1",{staticClass:"navbar-brand"},[t._v("Projects")]),t._v(" "+t._s(t.currentUser.fisrtName||t.currentUser.emailId)+" ")]),n("a",{staticClass:"icon-btn floating-icon bottom-right"},[n("i",{staticClass:"material-icons  ",on:{click:function(e){return t.createProject()}}},[t._v("edit")]),n("small",[t._v("Create Project")])]),n("div",{staticClass:"col-md-12 row"},t._l(t.projects,(function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"card border-default mb-3"},[n("div",{staticClass:"card-header"},[n("h4",{staticClass:"card-title"},[t._v(t._s(e.name))])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v(t._s(e.desc))]),n("router-link",{key:e.id,attrs:{to:{name:"plan",params:{projId:e.id}}}},[n("i",{staticClass:"material-icons "},[t._v(" visibility")])])],1)])])})),0),t.isEditProjectModalOpen?n("EditProjectModal",{attrs:{data:t.projectToEdit},on:{ok:t.editProjectOk,cancel:t.editProjectCancel}}):t._e()],1)},b=[],C=n("2ef0"),_=n.n(C),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{classes:"mod-md",title:t.title},on:{ok:t.ok,cancel:t.cancel}},[n("form",{},[n("fieldset",{},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("div",{staticClass:"filed-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter project name"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})]),n("div",{staticClass:"filed-group "},[n("label",{attrs:{for:"sprintSize"}},[t._v("Sprint length")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.project.sprintSize,expression:"project.sprintSize"}],staticClass:"form-control col-8",attrs:{type:"number",id:"sprintSize",placeholder:""},domProps:{value:t.project.sprintSize},on:{input:function(e){e.target.composing||t.$set(t.project,"sprintSize",e.target.value)}}})])]),n("div",{staticClass:"col-7"},[n("div",{staticClass:"filed-group"},[n("label",{attrs:{for:"desc"}},[t._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.project.desc,expression:"project.desc"}],staticClass:"form-control",attrs:{id:"desc",placeholder:"Enter description"},domProps:{value:t.project.desc},on:{input:function(e){e.target.composing||t.$set(t.project,"desc",e.target.value)}}})])])])])])])},y=[],w=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"mod-window"},[n("div",{staticClass:"mod-backdrop"}),n("div",{staticClass:"mod-content sketchy-border ",class:[t.classes]},[n("div",{staticClass:"mod-header"},[n("h1",[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"mod-body"},[t._t("default")],2),n("div",{staticClass:"mod-footer"},[n("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:t.ok}},[t._v("Ok")]),n("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")])])])])])}),O=[],E={name:"modal",props:{title:String,classes:String},methods:{ok:function(){this.$emit("ok")},cancel:function(){this.$emit("cancel")}}},T=E,x=Object(i["a"])(T,w,O,!1,null,null,null),S=x.exports,D={name:"EditProjectModal",components:{Modal:S},props:{data:Object},data:function(){return{title:"",project:{}}},computed:Object(f["a"])({},Object(m["c"])(["currentUser"])),created:function(){this.project=this.data||{},null!=this.project.id?this.title="".concat(this.project.name):this.title="Create Project"},methods:Object(f["a"])(Object(f["a"])({},Object(m["b"])(["updateProject"])),{},{ok:function(){var t=this,e=this.project.createdBy||this.currentUser;this.project.createdBy=e.ref,this.$store.dispatch("updateProject",this.project).then((function(e){console.log(e),t.$emit("ok",{project:t.project})})),this.project.id},cancel:function(){this.$emit("cancel")}})},I=D,$=(n("72a6"),Object(i["a"])(I,P,y,!1,null,null,null)),M=$.exports,z={name:"Projects",components:{EditProjectModal:M},data:function(){return{title:"Projects",isEditProjectModalOpen:!1,projectToEdit:{}}},computed:Object(f["a"])({},Object(m["c"])(["currentUser","projects"])),created:function(){},mounted:function(){console.log(this.projects)},methods:Object(f["a"])(Object(f["a"])({},Object(m["b"])(["getProjects","leaveProject"])),{},{createProject:function(t){this.isEditProjectModalOpen=!0,this.projectToEdit={},this.projectToEdit=_.a.cloneDeep(t)},editProjectOk:function(){this.isEditProjectModalOpen=!1,this.projectToEdit=null,this.getProjects()},editProjectCancel:function(){this.isEditProjectModalOpen=!1,this.projectToEdit=null},leaveProj:function(t){this.leaveProject(t)}})},U=z,R=Object(i["a"])(U,k,b,!1,null,null,null),N=R.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand "},[n("h1",{staticClass:"navbar-brand"},[t._v(t._s(t.project.name))]),n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"plan",params:{projId:t.projId}}}},[t._v("Plan")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"detail",params:{projId:t.projId}}}},[t._v("Detail")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"projects"}}},[t._v("Back to all projects")])],1)])]),n("h3",[t._v(t._s(t.project.description))]),n("router-view")],1)},A=[],G={name:"Project",data:function(){return{projId:this.$route.params.projId}},computed:{project:function(){return this.$store.getters.projectDetails||{}}},beforeCreate:function(){console.log("before create : "+this.$route.params.projId)},mounted:function(){console.log(this.$route.params.projId)},methods:{}},H=G,q=(n("10cd"),Object(i["a"])(H,B,A,!1,null,null,null)),J=q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"icon-btn floating-icon bottom-right"},[n("i",{staticClass:"material-icons  ",on:{click:function(e){return t.editTask()}}},[t._v("edit")]),n("small",[t._v("Create Task")])]),t._m(0),t.isEditModalOpen?n("EditTaskModal",{attrs:{data:t.taskToEdit,refTasks:t.tasks},on:{ok:t.editTaskOk,cancel:t.editTaskCancel}}):t._e()],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fill"},[n("div",{attrs:{id:"svgConainer"}})])}],K=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("fb6a"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{classes:"mod-lg",title:t.title},on:{ok:t.ok,cancel:t.cancel}},[n("form",{},[n("fieldset",{},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("div",{staticClass:"filed-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter project name"},domProps:{value:t.task.name},on:{input:function(e){e.target.composing||t.$set(t.task,"name",e.target.value)}}})]),n("div",{staticClass:"filed-group "},[n("label",{attrs:{for:"sprintSize"}},[t._v("Size (efforts)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task.size,expression:"task.size"}],staticClass:"form-control col-8",attrs:{type:"number",id:"sprintSize",placeholder:""},domProps:{value:t.task.size},on:{input:function(e){e.target.composing||t.$set(t.task,"size",e.target.value)}}})])]),n("div",{staticClass:"col-7"},[n("div",{staticClass:"filed-group"},[n("label",{attrs:{for:"desc"}},[t._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.desc,expression:"task.desc"}],staticClass:"form-control",attrs:{id:"desc",placeholder:"Enter description"},domProps:{value:t.task.desc},on:{input:function(e){e.target.composing||t.$set(t.task,"desc",e.target.value)}}})])]),n("div",{staticClass:"col-12"},[n("div",{staticClass:"dependency-header"},[n("h4",[t._v("Dependencies:")])]),n("p",[n("strong",[t._v("Note!")]),t._v(" Ensure that there are no circular dependencies. ")]),t.refTasksData.length>0?n("ul",{staticClass:"dependency-list"},t._l(t.refTasksData,(function(e){return n("li",{key:e.id,staticClass:"dependency-list-item"},[n("span",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelected,expression:"t.isSelected"}],attrs:{type:"checkbox",id:e.id},domProps:{value:e,checked:Array.isArray(e.isSelected)?t._i(e.isSelected,e)>-1:e.isSelected},on:{change:function(n){var a=e.isSelected,r=n.target,s=!!r.checked;if(Array.isArray(a)){var i=e,o=t._i(a,i);r.checked?o<0&&t.$set(e,"isSelected",a.concat([i])):o>-1&&t.$set(e,"isSelected",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(e,"isSelected",s)}}}),t._v(" "+t._s(e.name)+" ")])])})),0):t._e()])])])])])}),L=[],Q=(n("c740"),n("a434"),{name:"EditTaskModal",components:{Modal:S},props:{data:Object,refTasks:Array},data:function(){return{title:"",task:{},refTasksData:[]}},computed:{selectedDependencies:function(){var t=_.a.filter(this.refTasksData,{isSelected:!0});return t}},created:function(){var t=this;this.task=this.data||{dependencies:""},null!=this.task.id?this.title="".concat(this.task.name):this.title="Create task",this.refTasksData=_.a.cloneDeep(this.refTasks),_.a.remove(this.refTasksData,{id:this.task.id}),_.a.forEach(this.task.dependencies,(function(e){var n=_.a.find(t.refTasksData,{id:e.id});n&&(n.isSelected=!0)}))},methods:Object(f["a"])(Object(f["a"])({},Object(m["b"])(["updateTask"])),{},{addDependency:function(){if(null!=this.selectedDep&&this.selectedDep.id!=this.task.id){var t=_.a.find(this.task.dependencies,{id:this.selectedDep.id});null==t&&this.task.dependencies.push(this.selectedDep)}this.selectedDep=null},removeDependency:function(t){var e=_.a.findIndex(this.task.dependencies,{id:t});e>=0&&this.task.dependencies.splice(e,1)},ok:function(){var t=this;this.task.dependencies=this.selectedDependencies,this.$store.dispatch("updateTask",this.task).then((function(e){console.log(e),t.$emit("ok",{task:t.task})})),this.task.id},cancel:function(){this.$emit("cancel")}})}),X=Q,V=(n("38c8"),Object(i["a"])(X,K,L,!1,null,null,null)),Y=V.exports,Z=n("5698"),tt={left:100,right:20,top:50,bottom:20},et={name:"Plan",components:{EditTaskModal:Y},data:function(){return{title:"Plan view",svg:null,isEditModalOpen:!1,taskToEdit:null}},computed:Object(f["a"])({},Object(m["c"])(["tasks"])),created:function(){this.svg=null,console.log(this.projectDetails)},mounted:function(){this.svg=Z["e"]("#svgConainer").append("svg").attr("class","chart"),this.drawChart()},methods:{editTask:function(t){this.isEditModalOpen=!0,this.taskToEdit=_.a.cloneDeep(t)},editTaskOk:function(){this.isEditModalOpen=!1,this.taskToEdit=null,this.drawChart()},editTaskCancel:function(){this.isEditModalOpen=!1,this.taskToEdit=null},drawChart:function(){var t=null;try{t=this.buildDepChain(this.tasks)}catch(e){console.error(e)}this.drawGantt(t)},buildDepChain:function(t){var e=this,n=[],a=_.a.filter(t,(function(t){return null==t.dependencies||""==t.dependencies||Array.isArray(t.dependencies)&&0==t.dependencies.length}));return _.a.each(a,(function(t){t.start=0,t.end=+t.size})),_.a.each(t,(function(n){e.updateBounds(n,t)})),n=t.sort((function(t,e){return t.start-e.start})),n},updateBounds:function(t,e){var n=this;e.forEach((function(a){a.id==t.id||null==a.dependencies||""==a.dependencies||Array.isArray(a.dependencies)&&0==a.dependencies.length||(a.dependencies==t.id||_.a.find(a.dependencies,{id:t.id}))&&((null==a.start||a.start<t.end)&&(a.start=t.end||0),a.end=a.start+ +(a.size||1),n.updateBounds(a,e))}))},drawGantt:function(t){var e=this,n=+this.svg.style("width").slice(0,-2),a=+this.svg.style("height").slice(0,-2),r=n-(tt.left+tt.right),s=a-(tt.top+tt.bottom),i=function(t){return+t.size},o=function(t){return t.name},c=_.a.maxBy(t,(function(t){return t.end})),l=c?c.end+1:1,d=Z["d"]().domain([0,l]).range([0,r]),u=Z["b"](d);u.ticks(l).tickSize(-s);var p=Z["c"]().domain(t.map(o)).range([0,s]).padding(.1),f=Z["a"](p);this.svg.selectAll("*").remove();var m=this.svg.append("g").attr("transform","translate(".concat(tt.left,", ").concat(tt.top,")"));m.append("g").call(f),m.append("g").call(u);var h=m.selectAll("rect").data(t).enter().append("rect").attr("padding",1).attr("class","rect").attr("y",(function(t){return p(o(t))})).attr("x",(function(t){return d(t.start)})).attr("width",(function(t){return d(i(t))})).attr("height",p.bandwidth()).on("dblclick",(function(t){console.log(t),e.editTask(t)}));h.append("text").text((function(t){return t.name})).attr("class","text-on-bar"),m.selectAll("rect").exit().remove()}}},nt=et,at=(n("f6d9"),Object(i["a"])(nt,W,F,!1,null,null,null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"proj-details sketchy-border"},[n("div",{staticClass:"props-header"},[n("h1",{staticClass:"display-3"},[t._v(t._s(t.projectDetails.name))]),n("i",{staticClass:"material-icons icon-btn",on:{click:function(e){return t.editProject(t.projectDetails)}}},[t._v("edit")])]),n("p",{staticClass:"lead"},[t._v(t._s(t.projectDetails.desc))]),n("hr",{staticClass:"my-2"}),n("div",{staticClass:"props-container"},[n("span",[t._v("Sprint size: "),n("strong",[t._v(t._s(t.projectDetails.sprintSize))])]),n("span",[t._v("Created by: "),n("strong",[t._v(t._s(t.projectDetails.createdBy.firstName||t.projectDetails.createdBy.emailId))])])])]),n("div",{staticClass:"tasks-container"},[t._l(t.tasks,(function(e){return n("TaskCard",{key:e.id,attrs:{task:e},on:{edit:function(n){return t.editTask(e)}}})})),n("TaskCard",{on:{create:function(e){return t.editTask()}}})],2),t.isEditProjectModalOpen?n("EditProjectModal",{attrs:{data:t.projectToEdit},on:{ok:t.editProjectOk,cancel:t.editProjectCancel}}):t._e(),t.isEditModalOpen?n("EditTaskModal",{attrs:{data:t.taskToEdit,refTasks:t.tasks},on:{ok:t.editTaskOk,cancel:t.editTaskCancel}}):t._e()],1)},it=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card border-secondary mb-3 task-size"},[null!=t.task?n("div",{staticClass:"card-header"},[t._v(" "+t._s(t.task.name)+" "),n("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.task.size))]),n("i",{staticClass:"material-icons icon-btn floating-icon right",on:{click:t.edit}},[t._v("create")])]):t._e(),n("div",{staticClass:"card-body"},[null!=t.task?n("div",[n("p",{staticClass:"card-text"},[t._v(t._s(t.task.desc))]),t.task.dependencies.length>0?n("h6",[t._v("Dependencies")]):t._e(),t.task.dependencies.length>0?n("ul",t._l(t.task.dependencies,(function(e,a){return n("li",{key:a},[null!=e?n("span",[t._v(t._s(e.name))]):t._e()])})),0):t._e()]):t._e(),null==t.task?n("div",{staticClass:"card-create"},[n("i",{staticClass:"material-icons md-36 icon-btn icon-large card-center",on:{click:t.create}},[t._v("add_circle")])]):t._e()])])},ct=[],lt={name:"TaskCard",props:{task:Object},data:function(){return{}},mounted:function(){},methods:{edit:function(){this.$emit("edit")},create:function(){this.$emit("create")}}},dt=lt,ut=(n("676f"),Object(i["a"])(dt,ot,ct,!1,null,null,null)),pt=ut.exports,ft={name:"Detail",components:{TaskCard:pt,EditTaskModal:Y,EditProjectModal:M},data:function(){return{isEditModalOpen:!1,taskToEdit:null,isEditProjectModalOpen:!1,projectToEdit:null}},computed:Object(f["a"])({},Object(m["c"])(["projectDetails","tasks"])),beforeCreate:function(){console.log("before create : "+this.$route.params.projId)},created:function(){console.log(this.$route.params.projId)},methods:{saveProjDetail:function(){},editTask:function(t){this.isEditModalOpen=!0,this.taskToEdit=_.a.cloneDeep(t)},editTaskOk:function(){this.isEditModalOpen=!1,this.taskToEdit=null},editTaskCancel:function(){this.isEditModalOpen=!1,this.taskToEdit=null},editProject:function(t){this.isEditProjectModalOpen=!0,this.projectToEdit={},this.projectToEdit=_.a.cloneDeep(t)},editProjectOk:function(){this.isEditProjectModalOpen=!1,this.projectToEdit=null},editProjectCancel:function(){this.isEditProjectModalOpen=!1,this.projectToEdit=null}}},mt=ft,ht=(n("5f6c"),Object(i["a"])(mt,st,it,!1,null,null,null)),vt=ht.exports,jt=(n("96cf"),n("1da1")),gt=n("2909"),kt=n("59ca"),bt=n.n(kt),Ct=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyDPessTf-a2FWGQzU31w99JkqGo7XrG67o",authDomain:"plans-d08ce.firebaseapp.com",databaseURL:"https://plans-d08ce.firebaseio.com",projectId:"plans-d08ce",storageBucket:"plans-d08ce.appspot.com",messagingSenderId:"255919070950",appId:"1:255919070950:web:14ab9e33664319c803a527"});bt.a.initializeApp(Ct);var _t=bt.a.firestore(),Pt=bt.a.auth(),yt=_t.collection("users"),wt=_t.collection("projects");function Ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log("user "+t),bt.a.auth().signInAnonymously().then((function(){return console.log("anaon signed in"),Pt.currentUser})).catch((function(t){var e=t.code,n=t.message;console.log(e+" "+n)}))}function Et(t){var e=new Promise((function(e){try{yt.where("emailId","==",t).onSnapshot((function(n){console.log(t);var a={emailId:t,firstName:"not set",lastName:"not set"};1==n.empty?yt.add(a).then((function(t){a.id=t.id,a.ref=t.ref,e(a)})):(a=n.docs[0].data(),a.id=n.docs[0].id,a.ref=n.docs[0].ref,e(a))}))}catch(n){console.error(n)}}));return e}function Tt(t){return xt.apply(this,arguments)}function xt(){return xt=Object(jt["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.doc(e).get();case 2:return n=t.sent,a=n.data(),a.id=n.id,a.ref=n.ref,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),xt.apply(this,arguments)}function St(t){var e=new Promise((function(e){try{var n={firstName:t.firstName,lastName:t.lastName};yt.doc(t.id).update(n).then((function(){e(t)}))}catch(a){console.error(a)}}));return e}function Dt(t,e){return It.apply(this,arguments)}function It(){return It=Object(jt["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=null,null!=e){t.next=9;break}return a=wt.doc(),t.next=5,a.set(n);case 5:n.id=a.id,console.log("added"),t.next=13;break;case 9:return a=wt.doc(e),t.next=12,a.update(n);case 12:r=t.sent;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t)}))),It.apply(this,arguments)}function $t(t){console.log(t);var e=new Promise((function(e){var n=yt.doc(t),a=[];Promise.all([wt.where("createdBy","==",n),wt.where("contributors","array-contains",n)]).then((function(t){t.forEach((function(t){var e=new Promise((function(e){t.onSnapshot((function(t){var n=[];t.forEach((function(t){var e=t.data();e.id=t.id,e.ref=t.red,n.push(e)})),e(n)}))}));a.push(e)})),Promise.all(a).then((function(t){var n=_.a.unionBy.apply(_.a,Object(gt["a"])(t).concat(["id"]));console.log(n.length),e(n)}))}))}));return e}function Mt(t){console.log(t);var e={},n=new Promise((function(n){wt.doc(t).get().then((function(t){e=t.data(),e.id=t.id,e.ref=t.ref,e.createdBy.get().then((function(t){var a=t.data();a.id=t.id,a.ref=t.ref,e.createdBy=a,n(e)}))}))}));return n}function zt(t){console.log(t);var e={},n=new Promise((function(n){wt.doc(t).get().then((function(t){e=t.data(),e.id=t.id,Rt(t.id).then((function(t){console.log(e),e.tasks=t,n(e)}))}))}));return n}function Ut(t){console.log(t);var e=new Promise((function(e){var n=[];wt.doc(t).collection("tasks").onSnapshot((function(t){t.forEach((function(t){var e=Nt(t);n.push(e)})),Promise.all(n).then((function(t){e(t)}))}))}));return e}function Rt(t){console.log(t);var e=new Promise((function(e){var n=[];wt.doc(t).collection("tasks").onSnapshot((function(t){t.forEach((function(t){var e=Nt(t);n.push(e)})),Promise.all(n).then((function(t){e(t)}))}))}));return e}function Nt(t){var e=new Promise((function(e){var n=t.data();n.id=t.id,n.ref=t.ref;var a=[];null!=n.dependencies&&n.dependencies.length>0&&_.a.forEach(n.dependencies,(function(t){if(null!=t){var e=new Promise((function(e){t.get().then((function(t){var n=t.data();n.id=t.id,n.ref=t.ref,e(n)}))}));a.push(e)}})),Promise.all(a).then((function(t){n.dependencies=t,e(n)}))}));return e}function Bt(t,e,n){var a=new Promise((function(a){var r,s;null==e?(r=wt.doc(t).collection("tasks").doc(),s=r.set(n)):(r=wt.doc(t).collection("tasks").doc(e),s=r.update(n)),s.then((function(){a()}))}));return a}var At={getUser:Et,getUserDetails:Tt,updateUserDetails:St,getProjects:$t,getProject:zt,updateProject:Dt,getProjectData:Mt,getTasks:Rt,getContributors:Ut,updateTask:Bt},Gt=At,Ht={user:{},projects:[]},qt={SET_USER:function(t,e){t.currentUser=e},updateProjects:function(t,e){t.projects=e},resetUserStore:function(t){t.projects=[],t.user={}}},Jt={getProjects:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Gt.getProjects(e);case 3:r=n.sent,a("updateProjects",r);case 5:case"end":return n.stop()}}),n)})))()},signInUser:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Gt.getUser(e.username);case 3:return r=n.sent,a("SET_USER",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},getUserDetails:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.commit,r=t.state,!r.user){n.next=3;break}return n.abrupt("return",s);case 3:return n.next=5,Gt.getUserDetails(e);case 5:return s=n.sent,a("SET_USER",s),n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})))()}},Wt={projects:function(t){return t.projects},currentUser:function(t){return t.currentUser}},Ft={store:Ht,getters:Wt,actions:Jt,mutations:qt},Kt={project:{},projDetail:{},contributors:[],tasks:[]},Lt={project:function(t){return{id:_.a.get(t,"project.id"),name:_.a.get(t,"project.name"),description:_.a.get(t,"project.description"),sprintSize:_.a.get(t,"project.sprintSize"),tasks:_.a.get(t,"project.tasks"),team:_.a.get(t,"project.team")}},projectDetails:function(t){return t.project},tasks:function(t){return t.tasks},contributors:function(t){return t.contributors}},Qt={resetProjectStore:function(t){t.project={},t.tasks=[],t.contributors=[]},updateProject:function(t,e){t.project=e},updateTasks:function(t,e){t.tasks=e},updateContributors:function(t,e){t.contributors=e}},Xt={getProjectDetails:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Gt.getProjectData(e.projId);case 3:r=n.sent,a("updateProject",r);case 5:case"end":return n.stop()}}),n)})))()},getTasks:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Gt.getTasks(e.projId);case 3:r=n.sent,a("updateTasks",r);case 5:case"end":return n.stop()}}),n)})))()},getContributors:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Gt.getContributors(e.projId);case 3:r=n.sent,a("updateContributors",r);case 5:case"end":return n.stop()}}),n)})))()},updateProject:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,r=t.dispatch,s=a.project.id,i={name:e.name,desc:e.desc||"",size:e.sprintSize||2,createdBy:e.createdBy},n.next=5,Gt.updateProject(s,i);case 5:return o=n.sent,n.next=8,r("getProjectDetails",{projId:o.id});case 8:case"end":return n.stop()}}),n)})))()},leaveProject:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r={createdBy:null},n.next=4,Gt.updateProject(e,r);case 4:return s=n.sent,n.next=7,a("getProjectDetails",{projId:s.id});case 7:case"end":return n.stop()}}),n)})))()},updateTask:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,r=t.dispatch,s=a.project.id,i={name:e.name,desc:e.desc,size:e.size||1,reqSkill:e.reqSkill||[],priority:e.priority||0},i.dependencies=_.a.map(e.dependencies,(function(t){return null!=t?t.ref:null})),n.next=6,Gt.updateTask(s,e.id,i);case 6:return n.next=8,r("getTasks",{projId:s});case 8:case"end":return n.stop()}}),n)})))()}},Vt={state:Kt,getters:Lt,mutations:Qt,actions:Xt};a["a"].use(m["a"]);var Yt=new m["a"].Store({modules:{userStore:Ft,projectStore:Vt}});a["a"].use(d["a"]);var Zt=[{path:"/",name:"Home",component:g},{path:"/:userId/projects",name:"projects",component:N,beforeEnter:function(t,e,n){Promise.all([Yt.dispatch("getUserDetails",t.params.userId),Yt.dispatch("getProjects",t.params.userId)]).then((function(){console.log("proejcts updated in store"),n()})).catch((function(){n()}))}},{path:"/:userId/:projId",component:J,beforeEnter:function(t,e,n){var a=t.params.projId;Promise.all([Yt.dispatch("getProjectDetails",{projId:a}),Yt.dispatch("getTasks",{projId:a})]).then((function(){console.log("proejcts getched in store"),n()})).catch((function(){n()}))},children:[{name:"plan",path:"/",component:rt},{name:"detail",path:"detail",component:vt}]}],te=new d["a"]({mode:"history",base:"/projplanner/",routes:Zt}),ee=te;a["a"].config.productionTip=!1,Ot(),new a["a"]({router:ee,store:Yt,render:function(t){return t(l)}}).$mount("#app")},"5f6c":function(t,e,n){"use strict";var a=n("188f"),r=n.n(a);r.a},"676f":function(t,e,n){"use strict";var a=n("d693"),r=n.n(a);r.a},"72a6":function(t,e,n){"use strict";var a=n("e36e"),r=n.n(a);r.a},"85ec":function(t,e,n){},a927:function(t,e,n){},d693:function(t,e,n){},df38:function(t,e,n){},e36e:function(t,e,n){},ea3b:function(t,e,n){"use strict";var a=n("df38"),r=n.n(a);r.a},f6d9:function(t,e,n){"use strict";var a=n("419c"),r=n.n(a);r.a}});
//# sourceMappingURL=app.697e43ef.js.map