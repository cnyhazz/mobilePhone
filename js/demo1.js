//点击热门商城弹出登录框
$(document).ready(function(){
	$(".m_mai_list a").click(function(){
		var index = layer.open({
			type: 1,
			title: false,
			closeBtn: false,

			shadeClose: false,
			content: "<div class='no_login_show'><h1>亲！您还没登录一起惠哦！</h1><a href='login.html'>马上登录</a><a href='register.html'>免费注册</a><a href='javascript:void(0)'>先购物，再返利</a><a href='javascript:layer.closeAll();'>取消</a></div>"
		});
	});
	$(".jg").each(function(){
		$(this).on('click',function(){
			layer.tips('请耐心等待一下，我们正在拼命开发中···','.jg');
			});
		});
	
	$("form").submit(function(e){
	  	var username = $.trim($("#username").val());
		var password = $.trim($("#password").val());
		if(username == ''){
			layer.tips('请输入用户名/邮箱/手机号码','#username', {tips: 1});
			return false;
		}else if(password == ''){
			layer.tips('请输入登录密码','#password', {tips: 1});
			return false;
		}
	});
	
});

//返回顶部
$(document).ready(function(){
	$(window).scroll(function () {
		var scrollHeight = $(document).height();
		var scrollTop = $(window).scrollTop();
		var $windowHeight = $(window).innerHeight();
		scrollTop > 75 ? $(".gotop").fadeIn(200).css("display","block") : $(".gotop").fadeOut(200).css({"background-image":"url(images/iconfont-fanhuidingbu.png)"});
	});
	$('.backtop').click(function (e) {
		$(".gotop").css({"background-image":"url(images/iconfont-fanhuidingbu_up.png)"});
		e.preventDefault();
		$('html,body').animate({ scrollTop:0});
	});
});