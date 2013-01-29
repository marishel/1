$(function(){	 
	var cur_users=parseInt(Math.random()*150+17263);
	if ($.cookie('cur_users')) cur_users=parseInt($.cookie('cur_users'));
	$('#now').text(cur_users);
	$('#now2').text(cur_users);
	var all_users=parseInt(new Date().getTime()/3000000);
	if ($.cookie('all_users')&&parseInt($.cookie('all_users'))>all_users) all_users=parseInt($.cookie('all_users'));
	else $.cookie('all_users', all_users);
	$('#allc').text(all_users);
	var tM=setInterval(function(){
		cur_users+=parseInt(Math.random()*30-15);
		$.cookie('cur_users', cur_users);
		all_users+=parseInt(Math.random()*5);
		$.cookie('all_users', all_users);
		$('#now').text(cur_users);
		$('#now2').text(cur_users);
		$('#allc').text(all_users);
	},5000);
});