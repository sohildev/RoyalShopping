function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,o){return r&&_defineProperties(e.prototype,r),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3cAV":function(e,r,o){"use strict";o.r(r),o.d(r,"ForgotPasswordModule",(function(){return w}));var t,n,i=o("ofXK"),s=o("tyNb"),a=o("3Pt+"),c=o("Lw2Y"),u=o("fXoL"),b=o("6uu6"),l=o("LWby"),f=o("AwSQ"),d=o("4ioC"),m=((t=function(){function e(r,o,t,n,i){_classCallCheck(this,e),this.router=r,this.authService=o,this.fBuilder=t,this.config=n,this.dataService=i,this.formErrors={error:null,success:null},this.showLoader=!1,this.currentCompany=null,this.config.config={showHeader:!1},this.forgotForm=this.fBuilder.group({email:[null,a.o.compose([a.o.required,c.f])]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"submitForm",value:function(){var e=this;this.forgotForm.valid&&(this.showLoader=!0,this.authService.forgotPassword({email:this.forgotForm.value.email,company_id:this.currentCompany?this.currentCompany.company_id:null}).subscribe((function(r){e.showLoader=!1,r.success?(e.formErrors.success="* "+r.message,c.a.resetForm(e.forgotForm),setTimeout((function(){e.router.navigateByUrl("/login")}),3e3)):e.formErrors.error="* "+r.error}),(function(r){e.formErrors.error="* "+r.error,e.showLoader=!1})))}}]),e}()).\u0275fac=function(e){return new(e||t)(u.Kb(s.e),u.Kb(b.a),u.Kb(a.b),u.Kb(l.b),u.Kb(f.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-forgot-password"]],decls:24,vars:0,consts:[[1,"my_account_area","pt--80","pb--55","bg--white"],[1,"container"],[1,"row"],[1,"col-lg-12","col-12"],[1,"my__account__wrapper"],[1,"account__title"],[1,"text-center","m-b-20","text-muted"],["action","#"],[1,"account__form"],[1,"input__box"],["type","text"],[1,"form__btn"],[1,"text-muted","m-t-25","m-b-0","p-0","text-center"],["routerLink","/login"]],template:function(e,r){1&e&&(u.Qb(0,"section",0),u.Qb(1,"div",1),u.Qb(2,"div",2),u.Qb(3,"div",3),u.Qb(4,"div",4),u.Qb(5,"h3",5),u.Ac(6,"Forgotten Password?"),u.Pb(),u.Qb(7,"p",6),u.Ac(8,"Enter your email address below, and we'll email instructions for setting a new one."),u.Pb(),u.Qb(9,"form",7),u.Qb(10,"div",8),u.Qb(11,"div",9),u.Qb(12,"label"),u.Ac(13," Email address "),u.Qb(14,"span"),u.Ac(15,"*"),u.Pb(),u.Pb(),u.Lb(16,"input",10),u.Pb(),u.Qb(17,"div",11),u.Qb(18,"button"),u.Ac(19,"Submit"),u.Pb(),u.Pb(),u.Qb(20,"p",12),u.Ac(21,"Remember Password?"),u.Qb(22,"a",13),u.Ac(23," Sign In"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb())},directives:[a.p,a.i,a.j,d.a,s.g],encapsulation:2}),t),p=o("Eqhp"),h=[{path:"",component:m,data:{title:"forgot_password"}}],w=((n=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:n}),n.\u0275inj=u.Hb({factory:function(e){return new(e||n)},providers:[b.a],imports:[[i.b,a.e,a.m,p.a,s.h.forChild(h)]]}),n)}}]);