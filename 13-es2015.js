(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{edur:function(s,r,e){"use strict";e.r(r),e.d(r,"ResetPasswordModule",(function(){return l}));var t=e("ofXK"),o=e("3Pt+"),i=e("Lw2Y"),a=e("fXoL"),n=e("LWby"),c=e("tyNb"),b=e("6uu6"),d=e("4ioC");let u=(()=>{class s{constructor(s,r,e,t,a){this.config=s,this.router=r,this.activatedRoute=e,this.authService=t,this.fBuilder=a,this.formErrors={error:null,success:null},this.showLoader=!1,this.token=null,this.config.config={showHeader:!1},this.token=this.activatedRoute.snapshot.paramMap.get("token"),this.resetPasswordForm=this.fBuilder.group({password:[null,o.n.compose([o.n.required])],confirm_password:[null,o.n.compose([o.n.required])]},{validator:i.b.passwordValidation()})}ngOnInit(){this.authService.checkResetPasswordToken(this.token).subscribe(s=>{s.success||this.router.navigateByUrl("/link-expired")},s=>{this.router.navigateByUrl("/link-expired")})}submitForm(){this.resetPasswordForm.valid&&(this.showLoader=!0,this.authService.resetPassword(this.token,{password:this.resetPasswordForm.value.password,confirm_password:this.resetPasswordForm.value.confirm_password}).subscribe(s=>{this.showLoader=!1,s.success?(this.formErrors.success="* "+s.message,i.a.resetForm(this.resetPasswordForm),setTimeout(()=>{this.router.navigateByUrl("/login")},3e3)):this.formErrors.error="* "+s.error},s=>{this.formErrors.error="* "+s.error,this.showLoader=!1}))}}return s.\u0275fac=function(r){return new(r||s)(a.Kb(n.b),a.Kb(c.e),a.Kb(c.a),a.Kb(b.a),a.Kb(o.b))},s.\u0275cmp=a.Eb({type:s,selectors:[["app-reset-password"]],decls:28,vars:0,consts:[[1,"my_account_area","pt--80","pb--55","bg--white"],[1,"container"],[1,"row"],[1,"col-lg-9","col-12"],[1,"my__account__wrapper"],[1,"account__title"],[1,"text-center","m-b-20","text-muted"],["action","#"],[1,"account__form"],[1,"input__box"],["type","password"],[1,"form__btn"],["routerLink","/forgot-password",1,"forget_pass"]],template:function(s,r){1&s&&(a.Qb(0,"section",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"div",4),a.Qb(5,"h3",5),a.Ac(6,"Forgotten Password?"),a.Pb(),a.Qb(7,"p",6),a.Ac(8,"Enter your email address below, and we'll email instructions for setting a new one."),a.Pb(),a.Qb(9,"form",7),a.Qb(10,"div",8),a.Qb(11,"div",9),a.Qb(12,"label"),a.Ac(13,"New Password"),a.Qb(14,"span"),a.Ac(15,"*"),a.Pb(),a.Pb(),a.Lb(16,"input",10),a.Pb(),a.Qb(17,"div",9),a.Qb(18,"label"),a.Ac(19,"Password"),a.Qb(20,"span"),a.Ac(21,"*"),a.Pb(),a.Pb(),a.Lb(22,"input",10),a.Pb(),a.Qb(23,"div",11),a.Qb(24,"button"),a.Ac(25,"Reset Password"),a.Pb(),a.Pb(),a.Qb(26,"a",12),a.Ac(27,"Lost your password?"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb())},directives:[o.o,o.i,o.j,d.a,c.g],encapsulation:2}),s})();var p=e("Eqhp");const h=[{path:"",component:u,data:{title:"reset_password"}}];let l=(()=>{class s{}return s.\u0275mod=a.Ib({type:s}),s.\u0275inj=a.Hb({factory:function(r){return new(r||s)},providers:[b.a],imports:[[t.b,o.e,o.m,p.a,c.h.forChild(h)]]}),s})()}}]);