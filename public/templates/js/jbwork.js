var Account=new function __Account(){
	
	this.login=function(ref){
		var $form=$(ref).closest("form");
		
		$('input[name="appkey"]', $form).val(Query.get("app"));
		
		AP.ajaxShow();
		
		AP.submit("#"+$form.attr('id'), function(code){
			AP.ajaxHide();
			
			if (!code.good()){
				if (code.message=="ERROR_2FA_EMPTY"){
					$(".js-2fa").show();
					setTimeout(function(){
						$(".js-2fa input").focus();
					}, 200);
					
					return;
				}
				
				if (code.error_code=="BF_PREVENTED"){
					if (parseInt(code.time)){
						Clog.setCookie("login_failed", code.time);
					}
					
					AP.alertError("LOGIN FAILED - PLEASE TRY AGAIN", function(){
						return AP.refresh();
					});
					
					return;
				}
				
				if (code.error_code=="LOGIN_FAILED" && parseInt(code.time)){
					Clog.setCookie("login_failed", code.time);
					
					AP.alertError(code.message, function(){
						return AP.refresh();
					});
					
					return;
				}
				
				return AP.alertError(code.message);
			}
			
			if (typeof code.appkey !== 'undefined') {
				var http="http";
				if (Client.https){
					http="https";
				}
				var url = http+'://' + code.appkey + '.' + Client.domain;
				var path=Query.get("path");
				if (!path || !path.length){
					path=Query.get("return");
				}
				
				if (path){
					AP.redirect(url+"/"+path);
				}else{
					AP.redirect(url);	
				}
				
			} else {
				AP.toURL("account");
			}
		});
	};
	
	
	
	this.join=function(ref){
		var $form=$(ref).closest("form");
		
		AP.ajaxShow();
		
		AP.submit("#"+$form.attr('id'), function(code){
			AP.ajaxHide();
			
			if (!code.good()){
				return AP.alertError(code.message);
			}
			
			AP.toURL("account");
		});
	};
	
	
	this.setup=function(ref){
		var $form=$(ref).closest("form");
		
		AP.ajaxShow();
		
		AP.submit("#"+$form.attr('id'), function(code){
			AP.ajaxHide();
			
			if (!code.good()){
				return AP.alertError(code.message);
			}
			
			AP.toURL("account");
		});
	};
	
	

	this.recover=function(ref){
		var $form=$(ref).closest("form");
		AP.ajaxShow();
		AP.submit("#"+$form.attr('id'), function(code){
			AP.ajaxHide();
			
			if (!code.good()){
				return AP.alertError(code.message);
			}
			
			AP.alertSuccess("We have sent you an email with instruction about how to recover your password. Please open your email to proceed.");
		});
	};
	
	
	
	
	this.resetPassword=function(ref){
		var $form=$(ref).closest("form");
		AP.ajaxShow();
		AP.submitFrame("#"+$form.attr('id'), function(code){
			AP.ajaxHide();
			
			if (!code.good()){
				return AP.alertError(code.message);
			}
			
			AP.alertSuccess("Password reset successfully.", function(){
				AP.redirect("a/login");
			});
		});
	};
};

Layout.scrollable('.scrollable');