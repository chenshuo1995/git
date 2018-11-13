$(function(){
	// 监听输入框是否有值 改变提交按钮状态
	var phone_value = $(".phone").val();
	var idCard_value = $(".idCard").val();
	$('.phone,.idCard').bind('input propertychange', function() {
	    var phone_value = $(".phone").val();
		var idCard_value = $(".idCard").val();
		if (phone_value  && idCard_value) {
			$(".submit").css({
				"background":"rgba(25,51,77,1)",
				"color": "rgba(255,255,255,1)",
				"border" :"1px solid rgba(25,51,77,1);"
			})
		}
	});
	// 手机号输入框离开
	$(".phone").blur(function(){
		window.phone_value = $(".phone").val();
		var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
		var result = reg.test(window.phone_value);
		if (result == false) {
			$(".phone-error").css("display","block");
		}else{
			$(".phone-error").css("display","none");
		}
	})
	// 身份证号输入框离开
	$(".idCard").blur(function(){
		window.idCard_value = $(".idCard").val();
		var reg = (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/)||(/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/);
		var result = reg.test(window.idCard_value);
		if (result == false) {
			$(".card-error").css("display","block");
		}else{
			$(".card-error").css("display","none");
		}
	})
	// 根据是否有值进行提交
	$(".submit").click(function(){
		var pblcok = $(".phone-error").css("display");
		var cblock = $(".card-error").css("display");
		if (window.phone_value && window.idCard_value && pblcok == "none" && cblock == "none") {
			/*$.ajax({
				type:"post",
				url:url,
				data:data,
				success:function(res){
					console.log(res);
				},
				error:function(){
					
				}
			})*/
			setTimeout(function(){
				window.location.href = "login_success.html"
			},500)
		}else{
			if (!window.phone_value && !window.idCard_value) {
				$(".form-box li p").css("display","block");
			}else if(!window.idCard_value){
				$(".card-error").css("display","block");
			}else if(!window.phone_value){
				$(".phone-error").css("display","block");
			}else{

			}
		}		
	})
	$(".back").click(function(){
		window.location.href = "index.html"
	})
})