(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BjQp:function(e,o,t){"use strict";t.r(o),t.d(o,"ContactModule",(function(){return f}));var r=t("ofXK"),i=t("3Pt+"),a=t("fXoL"),n=t("Qvvb"),b=t("tyNb"),c=t("5eHb"),s=t("4ioC"),l=t("9LzP");let m=(()=>{class e{constructor(e,o,t,r){this.generalService=e,this.router=o,this.fBuilder=t,this.toast=r,this.formErrors={apierror:null},this.feedbackForm=this.fBuilder.group({emaill:[null,i.q.compose([i.q.required,i.q.email])],firstname:[null,i.q.compose([i.q.required])],lastname:[null,i.q.compose([i.q.required])],phone:[null,i.q.compose([i.q.required])],feedback_subject:[null,i.q.compose([i.q.required])],feedback_massage:[null,i.q.compose([i.q.required])]})}ngOnInit(){}submitForm(){this.feedbackForm.valid&&this.generalService.addFeedback(this.feedbackForm.value).subscribe(e=>{e.success?(this.toast.success("feedback sent successfully"),this.feedbackForm.reset(),this.router.navigateByUrl("/home")):(this.toast.error("feedback not sent"),this.formErrors.apierror="* "+e.error)},e=>{console.log("In error",e),this.toast.error("feedback not sent"),this.formErrors.apierror="* "+e.error.error})}}return e.\u0275fac=function(o){return new(o||e)(a.Mb(n.a),a.Mb(b.e),a.Mb(i.b),a.Mb(c.b))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-contact"]],decls:60,vars:7,consts:[[1,"wn_contact_area","bg--white","pt--80","pb--80"],[1,"container"],[1,"row"],[1,"col-lg-8","col-12"],[1,"contact-form-wrap"],[1,"contact__title"],[1,"shadow-none",3,"formGroup","ngSubmit"],[1,"single-contact-form","space-between"],["type","text","placeholder","First Name*",3,"formControl"],["type","text","placeholder","Last Name*",3,"formControl"],["type","email","placeholder","Email*",3,"formControl"],["type","text","placeholder","Contact number*",3,"formControl"],[1,"single-contact-form"],["type","text","placeholder","Subject*",3,"formControl"],[1,"single-contact-form","message"],["placeholder","Type your message here..",3,"formControl"],[1,"contact-btn"],["type","submit"],[1,"form-output"],[1,"form-messege"],[1,"col-lg-4","col-12","md-mt-40","sm-mt-40"],[1,"wn__address"],[1,"wn__addres__wreapper"],[1,"single__address"],[1,"icon-location-pin","icons"],[1,"content"],[1,"icon-phone","icons"],[1,"icon-envelope","icons"],[1,"icon-globe","icons"]],template:function(e,o){1&e&&(a.Sb(0,"section",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"div",4),a.Sb(5,"h2",5),a.Ic(6,"Get in touch"),a.Rb(),a.Sb(7,"p"),a.Ic(8,"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. "),a.Rb(),a.Sb(9,"form",6),a.ec("ngSubmit",(function(){return o.submitForm()})),a.Sb(10,"div",7),a.Nb(11,"input",8),a.Nb(12,"input",9),a.Rb(),a.Sb(13,"div",7),a.Nb(14,"input",10),a.Nb(15,"input",11),a.Rb(),a.Sb(16,"div",12),a.Nb(17,"input",13),a.Rb(),a.Sb(18,"div",14),a.Nb(19,"textarea",15),a.Rb(),a.Sb(20,"div",16),a.Sb(21,"button",17),a.Ic(22,"Send Email"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(23,"div",18),a.Nb(24,"p",19),a.Rb(),a.Rb(),a.Sb(25,"div",20),a.Sb(26,"div",21),a.Sb(27,"h2",5),a.Ic(28,"Get office info."),a.Rb(),a.Sb(29,"p"),a.Ic(30,"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. "),a.Rb(),a.Sb(31,"div",22),a.Sb(32,"div",23),a.Nb(33,"i",24),a.Sb(34,"div",25),a.Sb(35,"span"),a.Ic(36,"address:"),a.Rb(),a.Sb(37,"p"),a.Ic(38,"666 5th Ave New York, NY, United"),a.Rb(),a.Rb(),a.Rb(),a.Sb(39,"div",23),a.Nb(40,"i",26),a.Sb(41,"div",25),a.Sb(42,"span"),a.Ic(43,"Phone Number:"),a.Rb(),a.Sb(44,"p"),a.Ic(45,"716-298-1822"),a.Rb(),a.Rb(),a.Rb(),a.Sb(46,"div",23),a.Nb(47,"i",27),a.Sb(48,"div",25),a.Sb(49,"span"),a.Ic(50,"Email address:"),a.Rb(),a.Sb(51,"p"),a.Ic(52,"716-298-1822"),a.Rb(),a.Rb(),a.Rb(),a.Sb(53,"div",23),a.Nb(54,"i",28),a.Sb(55,"div",25),a.Sb(56,"span"),a.Ic(57,"website address:"),a.Rb(),a.Sb(58,"p"),a.Ic(59,"716-298-1822"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.zb(9),a.lc("formGroup",o.feedbackForm),a.zb(2),a.lc("formControl",o.feedbackForm.controls.firstname),a.zb(1),a.lc("formControl",o.feedbackForm.controls.lastname),a.zb(2),a.lc("formControl",o.feedbackForm.controls.emaill),a.zb(1),a.lc("formControl",o.feedbackForm.controls.phone),a.zb(2),a.lc("formControl",o.feedbackForm.controls.feedback_subject),a.zb(2),a.lc("formControl",o.feedbackForm.controls.feedback_massage))},directives:[i.s,i.j,s.a,i.d,i.a,i.i,i.c,l.a],encapsulation:2}),e})();var d=t("PCNd"),u=t("Eqhp");const p=[{path:"",component:m,data:{title:"dashboard"}}];let f=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(o){return new(o||e)},imports:[[r.b,i.e,i.o,u.a,d.a,b.i.forChild(p)]]}),e})()}}]);