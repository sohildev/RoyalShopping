(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{lu3c:function(o,r,e){"use strict";e.r(r),e.d(r,"LoginModule",(function(){return R}));var t=e("ofXK"),i=e("3Pt+"),n=e("Lw2Y"),s=e("fXoL"),a=e("LWby"),c=e("tyNb"),b=e("6uu6"),l=e("8cFx"),u=e("AwSQ"),m=e("5eHb"),p=e("4ioC"),h=e("/SVk"),d=e("9LzP");function f(o,r){if(1&o&&s.Lb(0,"span",23),2&o){const o=s.ac(2);s.fc("innerHTML",o.formErrors.phone_number,s.tc)}}const g=function(o){return{"has-error":o}},P=function(o){return{"qt-loader qt-loader-mini qt-loader-left":o}};function y(o,r){if(1&o){const o=s.Rb();s.Qb(0,"div",3),s.Qb(1,"div",4),s.Qb(2,"div",5),s.Qb(3,"h3",6),s.Ac(4,"Login (get mobile no)"),s.Pb(),s.Qb(5,"p",7),s.Ac(6,"Hi! Please enter your login information below to send submissions as contacts."),s.Pb(),s.Qb(7,"p",8),s.Qb(8,"a",9),s.Yb("click",(function(){return s.sc(o),s.ac().changeLoginType("email")})),s.Ac(9,"Login with email?"),s.Pb(),s.Pb(),s.Qb(10,"form",10),s.Yb("ngSubmit",(function(){return s.sc(o),s.ac().submitForm()})),s.Qb(11,"div",11),s.Qb(12,"div",12),s.Qb(13,"label"),s.Ac(14,"Phone Number "),s.Qb(15,"span"),s.Ac(16,"*"),s.Pb(),s.Pb(),s.Qb(17,"div",13),s.Qb(18,"div",14),s.Qb(19,"span",15),s.Ac(20),s.Pb(),s.Lb(21,"input",16),s.Pb(),s.yc(22,f,1,1,"span",17),s.Pb(),s.Pb(),s.Qb(23,"div",18),s.Qb(24,"button",19),s.Ac(25,"Sign In"),s.Pb(),s.Qb(26,"label",20),s.Lb(27,"input",21),s.Qb(28,"span"),s.Ac(29,"Remember me"),s.Pb(),s.Pb(),s.Pb(),s.Qb(30,"a",22),s.Ac(31,"Lost your password?"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&o){const o=s.ac();s.zb(10),s.fc("formGroup",o.loginForm),s.zb(8),s.fc("ngClass",s.jc(7,g,o.formErrors.phone_number)),s.zb(2),s.Bc(null!=o.currentCompany&&o.currentCompany.dial_code?null==o.currentCompany?null:o.currentCompany.dial_code:"+91"),s.zb(1),s.fc("formControl",o.loginForm.controls.phone_number),s.zb(1),s.fc("ngIf",o.formErrors.phone_number),s.zb(2),s.fc("ngClass",s.jc(9,P,o.showLoader))("disabled",o.showLoader)}}function v(o,r){if(1&o){const o=s.Rb();s.Qb(0,"div",3),s.Qb(1,"div",4),s.Qb(2,"div",5),s.Qb(3,"h3",6),s.Ac(4,"Verify otp"),s.Pb(),s.Qb(5,"form",24),s.Yb("ngSubmit",(function(){return s.sc(o),s.ac().submitOtpForm()})),s.Qb(6,"div",11),s.Qb(7,"div",12),s.Qb(8,"label"),s.Ac(9,"Enter OTP "),s.Qb(10,"span"),s.Ac(11,"*"),s.Pb(),s.Pb(),s.Lb(12,"input",25),s.Pb(),s.Qb(13,"div",18),s.Qb(14,"button",26),s.Ac(15," Sign In"),s.Pb(),s.Qb(16,"div",27),s.Qb(17,"a",28),s.Yb("click",(function(){return s.sc(o),s.ac().resendOTP()})),s.Ac(18,"Resend OTP?"),s.Pb(),s.Pb(),s.Pb(),s.Qb(19,"a",22),s.Ac(20,"Lost your password?"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&o){const o=s.ac();s.zb(5),s.fc("formGroup",o.otpForm),s.zb(9),s.fc("ngClass",s.jc(3,P,o.showLoader))("disabled",o.showLoader)}}let _=(()=>{class o{constructor(o,r,e,t,n,a,c){this.router=o,this.config=r,this.activatedRoute=e,this.authService=t,this.fBuilder=n,this.toastrService=a,this.dataService=c,this.currentCompany=[],this.setLoginType=new s.n,this.formErrors={phone_number:null,otp:null,login_pin:null,apierror:null},this.phone_number=null,this.dial_code=null,this.company_id=null,this.showLoader=!1,this.loginPinType=1,this.loginForm=this.fBuilder.group({phone_number:[null,i.n.compose([i.n.required])]}),this.otpForm=this.fBuilder.group({otp:[null,i.n.compose([i.n.required])]}),this.pinForm=this.fBuilder.group({login_pin:[null,i.n.compose([i.n.required,i.n.minLength(4),i.n.maxLength(4)])]})}ngOnInit(){this.currentCompany&&(this.dial_code=this.currentCompany.dial_code,this.company_id=this.currentCompany.company_id)}changeLoginType(o){this.setLoginType.emit(o)}resetForm(){n.a.resetForm(this.otpForm),n.a.resetForm(this.loginForm),this.formErrors.login_pin=null,this.formErrors.otp=null,this.formErrors.phone_number=null,this.formErrors.apierror=null}submitForm(){this.loginForm.valid&&(this.loginPinType=2,this.showLoader=!0,this.phone_number=this.loginForm.value.phone_number,this.authService.phonelogin({phone_number:this.phone_number,dial_code:this.dial_code,company_id:this.company_id}).subscribe(o=>{this.showLoader=!1,o.success?(this.resetForm(),o.data.verify_otp&&(this.loginPinType=2),o.data.login_pin&&(this.loginPinType=3)):this.formErrors.apierror="* "+o.error},o=>{this.formErrors.apierror="* "+o.error,this.showLoader=!1}))}submitOtpForm(){if(this.otpForm.valid){this.showLoader=!0;const o={phone_number:this.phone_number,dial_code:this.dial_code,company_id:this.company_id,otp:parseInt(this.otpForm.value.otp)};this.authService.otpverify(o).subscribe(o=>{this.showLoader=!1,o.success?(this.resetForm(),o.data.login_pin&&(this.loginPinType=4)):this.formErrors.apierror="* "+o.error},o=>{this.formErrors.apierror="* "+o.error,this.showLoader=!1})}}resendOTP(){this.showLoader=!0,this.authService.resendotp({phone_number:this.phone_number,dial_code:this.dial_code,company_id:this.company_id}).subscribe(o=>{this.showLoader=!1,o.success?(this.resetForm(),this.toastrService.success("OTP sent successfully","")):this.formErrors.apierror="* "+o.error},o=>{this.formErrors.apierror="* "+o.error,this.showLoader=!1})}}return o.\u0275fac=function(r){return new(r||o)(s.Kb(c.e),s.Kb(a.b),s.Kb(c.a),s.Kb(b.a),s.Kb(i.b),s.Kb(m.b),s.Kb(u.a))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-pin"]],inputs:{currentCompany:"currentCompany"},outputs:{setLoginType:"setLoginType"},decls:4,vars:2,consts:[[1,"my_account_area","pt--80","pb--55","bg--white"],[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-lg-6","col-12"],[1,"my__account__wrapper"],[1,"account__title"],[1,"text-center","text-muted"],[1,"text-center","m-b-20"],[1,"",2,"color","#399AF2",3,"click"],[1,"sign-in-form",3,"formGroup","ngSubmit"],[1,"account__form"],[1,"input__box"],[1,"form-group"],[1,"input-group",3,"ngClass"],[1,"input-group-addon"],["number","","type","text","placeholder","Enter Phone Number",1,"form-control",3,"formControl"],["class","help-block",3,"innerHTML",4,"ngIf"],[1,"form__btn"],[3,"ngClass","disabled"],[1,"label-for-checkbox"],["id","rememberme","name","rememberme","value","forever","type","checkbox",1,"input-checkbox"],["routerLink","/forgot-password",1,"forget_pass"],[1,"help-block",3,"innerHTML"],[3,"formGroup","ngSubmit"],["type","text"],["type","submit",3,"ngClass","disabled"],[1,"checkbox","m-b-10","m-t-20"],[1,"float-right","m-b-20",3,"click"]],template:function(o,r){1&o&&(s.Qb(0,"section",0),s.Qb(1,"div",1),s.yc(2,y,32,11,"div",2),s.yc(3,v,21,5,"div",2),s.Pb(),s.Pb()),2&o&&(s.zb(2),s.fc("ngIf",1==r.loginPinType),s.zb(1),s.fc("ngIf",2==r.loginPinType))},directives:[t.l,i.o,i.i,p.a,i.d,t.j,i.a,h.a,i.h,i.c,d.a,c.g],encapsulation:2}),o})();function Q(o,r){if(1&o){const o=s.Rb();s.Qb(0,"app-pin",2),s.Yb("setLoginType",(function(r){return s.sc(o),s.ac().getLoginType(r)})),s.Pb()}if(2&o){const o=s.ac();s.fc("currentCompany",o.currentCompany)}}const w=function(o){return{"qt-loader qt-loader-mini qt-loader-left":o}};function L(o,r){if(1&o){const o=s.Rb();s.Qb(0,"section",3),s.Qb(1,"div",4),s.Qb(2,"div",5),s.Qb(3,"div",6),s.Qb(4,"div",7),s.Qb(5,"h3",8),s.Ac(6,"Login"),s.Pb(),s.Qb(7,"p",9),s.Qb(8,"a",10),s.Yb("click",(function(){return s.sc(o),s.ac().changeLoginType("phone")})),s.Ac(9,"Login with phone?"),s.Pb(),s.Pb(),s.Qb(10,"form",11),s.Yb("ngSubmit",(function(){return s.sc(o),s.ac().submitForm()})),s.Qb(11,"div",12),s.Qb(12,"div",13),s.Qb(13,"label"),s.Ac(14,"Email Address "),s.Qb(15,"span"),s.Ac(16,"*"),s.Pb(),s.Pb(),s.Lb(17,"input",14),s.Pb(),s.Qb(18,"div",13),s.Qb(19,"div",15),s.Qb(20,"label"),s.Ac(21,"Password"),s.Qb(22,"span"),s.Ac(23,"*"),s.Pb(),s.Pb(),s.Lb(24,"input",16),s.Pb(),s.Pb(),s.Qb(25,"div",17),s.Qb(26,"button",18),s.Ac(27," Sign In "),s.Pb(),s.Qb(28,"label",19),s.Lb(29,"input",20),s.Qb(30,"span"),s.Ac(31,"Remember me"),s.Pb(),s.Pb(),s.Pb(),s.Qb(32,"a",21),s.Ac(33,"Lost your password?"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(34,"div",6),s.Qb(35,"div",7),s.Qb(36,"h3",8),s.Ac(37,"Register"),s.Pb(),s.Qb(38,"form",22),s.Yb("ngSubmit",(function(){return s.sc(o),s.ac().submitRegisterForm()})),s.Qb(39,"div",12),s.Qb(40,"div",13),s.Qb(41,"label"),s.Ac(42,"Usename "),s.Qb(43,"span"),s.Ac(44,"*"),s.Pb(),s.Pb(),s.Lb(45,"input",23),s.Pb(),s.Qb(46,"div",13),s.Qb(47,"label"),s.Ac(48,"Email address "),s.Qb(49,"span"),s.Ac(50,"*"),s.Pb(),s.Pb(),s.Lb(51,"input",14),s.Pb(),s.Qb(52,"div",13),s.Qb(53,"label"),s.Ac(54,"Password"),s.Qb(55,"span"),s.Ac(56,"*"),s.Pb(),s.Pb(),s.Lb(57,"input",16),s.Pb(),s.Qb(58,"div",17),s.Qb(59,"button",18),s.Ac(60," Register "),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&o){const o=s.ac();s.zb(10),s.fc("formGroup",o.loginForm),s.zb(7),s.fc("formControl",o.loginForm.controls.email),s.zb(7),s.fc("formControl",o.loginForm.controls.password),s.zb(2),s.fc("ngClass",s.jc(11,w,o.showLoader))("disabled",o.showLoader),s.zb(12),s.fc("formGroup",o.RegisterForm),s.zb(7),s.fc("formControl",o.RegisterForm.controls.name),s.zb(6),s.fc("formControl",o.RegisterForm.controls.email),s.zb(6),s.fc("formControl",o.RegisterForm.controls.password),s.zb(2),s.fc("ngClass",s.jc(13,w,o.showLoader))("disabled",o.showLoader)}}let F=(()=>{class o{constructor(o,r,e,t,s,a,c){this.config=o,this.router=r,this.activatedRoute=e,this.authService=t,this.commonService=s,this.fBuilder=a,this.dataService=c,this.formErrors={apierror:null},this.showLoader=!1,this.currentCompany=null,this.loginType="email",this.config.config={showHeader:!1},this.loginForm=this.fBuilder.group({email:[null,i.n.compose([i.n.required,n.e])],password:[null,i.n.compose([i.n.required])]}),this.RegisterForm=this.fBuilder.group({email:[null,i.n.compose([i.n.required,n.e])],password:[null,i.n.compose([i.n.required])],name:[null,i.n.compose([i.n.required])]})}ngOnInit(){}changeLoginType(o){this.loginType=o}getLoginType(o){this.loginType=o}submitForm(){if(this.loginForm.valid){this.showLoader=!0;const o={email:this.loginForm.value.email.toLowerCase(),password:this.loginForm.value.password,remember_me:this.loginForm.value.remember_me};this.authService.login(o).subscribe(o=>{if(console.log("In success",o),this.showLoader=!1,o.success){n.a.resetForm(this.loginForm),this.dataService.setAuth(o.data),this.config.config={showHeader:!0},this.activatedRoute.snapshot.queryParamMap.get("next");const r=this.activatedRoute.snapshot.queryParamMap.get("next")?this.activatedRoute.snapshot.queryParamMap.get("next"):"/home";this.router.navigateByUrl(r)}else this.formErrors.apierror="* "+o.error},o=>{this.formErrors.apierror="* "+o.error,this.showLoader=!1})}}submitRegisterForm(){if(this.RegisterForm.valid){this.showLoader=!0;const o={email:this.RegisterForm.value.email.toLowerCase(),password:this.RegisterForm.value.password,name:this.RegisterForm.value.name,type:{value:0,label:"normal_user"}};this.authService.register(o).subscribe(o=>{if(console.log("In success",o),this.showLoader=!1,o.success){n.a.resetForm(this.RegisterForm),this.dataService.setAuth(o.data),this.config.config={showHeader:!0},this.activatedRoute.snapshot.queryParamMap.get("next");const r=this.activatedRoute.snapshot.queryParamMap.get("next")?this.activatedRoute.snapshot.queryParamMap.get("next"):"/home";this.router.navigateByUrl(r)}else this.formErrors.apierror="* "+o.error},o=>{this.formErrors.apierror="* "+o.error,this.showLoader=!1})}}}return o.\u0275fac=function(r){return new(r||o)(s.Kb(a.b),s.Kb(c.e),s.Kb(c.a),s.Kb(b.a),s.Kb(l.a),s.Kb(i.b),s.Kb(u.a))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-login"]],decls:2,vars:2,consts:[[3,"currentCompany","setLoginType",4,"ngIf"],["class","my_account_area pt--80 pb--55 bg--white",4,"ngIf"],[3,"currentCompany","setLoginType"],[1,"my_account_area","pt--80","pb--55","bg--white"],[1,"container"],[1,"row"],[1,"col-lg-6","col-12"],[1,"my__account__wrapper"],[1,"account__title"],[1,"text-center","m-b-20"],[1,"",2,"color","#399AF2",3,"click"],[1,"sign-in-form",3,"formGroup","ngSubmit"],[1,"account__form"],[1,"input__box"],["type","text","autofocus","","placeholder","Email ID",1,"form-control","input-lg",3,"formControl"],[1,"form-group"],["type","password","placeholder","Password",1,"form-control","input-lg",3,"formControl"],[1,"form__btn"],["type","submit",3,"ngClass","disabled"],[1,"label-for-checkbox"],["id","rememberme","name","rememberme","value","forever","type","checkbox",1,"input-checkbox"],["routerLink","/forgot-password",1,"forget_pass"],[3,"formGroup","ngSubmit"],["type","text","autofocus","","placeholder","Username",1,"form-control","input-lg",3,"formControl"]],template:function(o,r){1&o&&(s.yc(0,Q,1,1,"app-pin",0),s.yc(1,L,61,15,"section",1)),2&o&&(s.fc("ngIf","phone"==r.loginType),s.zb(1),s.fc("ngIf","email"==r.loginType))},directives:[t.l,_,i.o,i.i,p.a,i.d,i.a,i.h,i.c,d.a,t.j,c.g],encapsulation:2}),o})();var C=e("Eqhp"),A=e("PCNd");const T=[{path:"",component:F,data:{title:"login"}},{path:"pin",component:_,data:{title:"login"}}];let R=(()=>{class o{}return o.\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(r){return new(r||o)},providers:[b.a],imports:[[t.b,i.e,i.m,C.a,A.a,c.h.forChild(T)]]}),o})()}}]);