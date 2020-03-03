function getTime() {
	var calendar_time = document.getElementById('calendar_time');
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var data = d.getDate();
	console.log(year);
	console.log(month);
	console.log(data);
	var string = data + "/" + month + "/" + year;
	calendar_time.innerHTML = string;
}
window.onload = getTime();

$('#width_965_bt').click(function(){
	$('#sidebar_mobile').addClass("sidebar_mobile_show");
	$('#list_sidebar').addClass("list_sidebar_show")
});
$(".nav_tat").click(function(){
	$('#sidebar_mobile').removeClass("sidebar_mobile_show");
	$('#list_sidebar').removeClass("list_sidebar_show")
});
$("#tat").click(function(){
	$('#sidebar_mobile').removeClass("sidebar_mobile_show");
	$('#list_sidebar').removeClass("list_sidebar_show")
});

$('#close_item_gt').click(function(){
	if($('#close_item_gt').attr("class") == "fas fa-chevron-down"){
		$('#list_item_gt').removeClass("hiden_menu_sidebar");
		$('#close_item_gt').removeClass("fa-chevron-down");
		$('#close_item_gt').addClass("fa-angle-up");
	}else{
		$('#list_item_gt').addClass("hiden_menu_sidebar");
		$('#close_item_gt').addClass("fa-chevron-down");
		$('#close_item_gt').removeClass("fa-angle-up");
	}

});
$('#close_item_tt').click(function(){
	if($('#close_item_tt').attr("class") == "fas fa-chevron-down"){
		$('#list_item_tt').removeClass("hiden_menu_sidebar");
		$('#close_item_tt').removeClass("fa-chevron-down");
		$('#close_item_tt').addClass("fa-angle-up");
	}else{
		$('#list_item_tt').addClass("hiden_menu_sidebar");
		$('#close_item_tt').addClass("fa-chevron-down");
		$('#close_item_tt').removeClass("fa-angle-up");
	}

});
$('#close_item_nv').click(function(){
	if($('#close_item_nv').attr("class") == "fas fa-chevron-down"){
		$('#list_item_nv').removeClass("hiden_menu_sidebar");
		$('#close_item_nv').removeClass("fa-chevron-down");
		$('#close_item_nv').addClass("fa-angle-up");
	}else{
		$('#list_item_nv').addClass("hiden_menu_sidebar");
		$('#close_item_nv').addClass("fa-chevron-down");
		$('#close_item_nv').removeClass("fa-angle-up");
	}

});
$('#close_item_hd').click(function(){
	if($('#close_item_hd').attr("class") == "fas fa-chevron-down"){
		$('#list_item_hd').removeClass("hiden_menu_sidebar");
		$('#close_item_hd').removeClass("fa-chevron-down");
		$('#close_item_hd').addClass("fa-angle-up");
	}else{
		$('#list_item_hd').addClass("hiden_menu_sidebar");
		$('#close_item_hd').addClass("fa-chevron-down");
		$('#close_item_hd').removeClass("fa-angle-up");
	}

});
$('#close_item_bc').click(function(){
	if($('#close_item_bc').attr("class") == "fas fa-chevron-down"){
		$('#list_item_bc').removeClass("hiden_menu_sidebar");
		$('#close_item_bc').removeClass("fa-chevron-down");
		$('#close_item_bc').addClass("fa-angle-up");
	}else{
		$('#list_item_bc').addClass("hiden_menu_sidebar");
		$('#close_item_bc').addClass("fa-chevron-down");
		$('#close_item_bc').removeClass("fa-angle-up");
	}

});
$('#close_item_sp').click(function(){
	if($('#close_item_sp').attr("class") == "fas fa-chevron-down"){
		$('#list_item_sp').removeClass("hiden_menu_sidebar");
		$('#close_item_sp').removeClass("fa-chevron-down");
		$('#close_item_sp').addClass("fa-angle-up");
	}else{
		$('#list_item_sp').addClass("hiden_menu_sidebar");
		$('#close_item_sp').addClass("fa-chevron-down");
		$('#close_item_sp').removeClass("fa-angle-up");
	}

});
$count = 1;
$new_tintuc1 = $("#new_tintuc1");
$new_tintuc2 = $("#new_tintuc2");
$new_tintuc3 = $("#new_tintuc3");
$new_tintuc4 = $("#new_tintuc4");
function slide_show_tintuc($_count){
	if($count > 3){
		$count = 0;
	}
	if($count < 0){
		$count =  3;
	}
	if($_count == 0){
		$new_tintuc1.addClass("show_tintuc");
		$new_tintuc2.removeClass("show_tintuc");
		$new_tintuc3.removeClass("show_tintuc");
		$new_tintuc4.removeClass("show_tintuc");
	}else if($_count == 1){
		$new_tintuc1.removeClass("show_tintuc");
		$new_tintuc2.addClass("show_tintuc");
		$new_tintuc3.removeClass("show_tintuc");
		$new_tintuc4.removeClass("show_tintuc");
	}else if($_count ==2){
		$new_tintuc1.removeClass("show_tintuc");
		$new_tintuc2.removeClass("show_tintuc");
		$new_tintuc3.addClass("show_tintuc");
		$new_tintuc4.removeClass("show_tintuc");
	}else{
		$new_tintuc1.removeClass("show_tintuc");
		$new_tintuc2.removeClass("show_tintuc");
		$new_tintuc3.removeClass("show_tintuc");
		$new_tintuc4.addClass("show_tintuc");
	}
	$count++;
}
$("#slide_show_tintuc_left").click(function(){
	$count -= 2;
	slide_show_tintuc($count);
});
$("#slide_show_tintuc_right").click(function(){
	slide_show_tintuc($count);
});
$run_slideshow = setInterval(function(){
	if($count > 3){
		$count = 0;
	}
	if($count < 0){
		$count =  3;
	}
	slide_show_tintuc($count);
	
}, 3000);
// setInterval(slide_show_tintuc, 5000);
$right_st1 = $('.right_st1');
$count_right = 1;
$run_right_st1 = function(){
	if($count_right > $right_st1.length - 1){
		$count_right = 0;
	}
	$right_st1[$count_right].classList.add('right_st1_show');
	for($j = 0; $j < $right_st1.length; $j++){
		if($j != $count_right){
			$right_st1[$j].classList.remove('right_st1_show');
		}
	}
	$count_right++;
}
$setTime = setInterval($run_right_st1, 3000);
$('#right_video').click(function(){
	for($j = 0; $j < $right_st1.length; $j++){
		$right_st1[$j].classList.remove('right_st1_show');
	}
	clearInterval($setTime);
	$('.right_st1_video').addClass('right_st1_show');
});

$('#right_image').click(function(){
	setInterval($setTime);
	$('.right_st1_video').removeClass('right_st1_show');
});
$right_slt1 = $("#right_st_slt1");
for($i = 1; $i < 10; $i++){
	$link = "http://www.hhtp.gov.vn/";
	$s = '<option value="' + $link + '">Ban Quản lý Khu Công nghệ cao Hòa Lạc</option>';
	$right_slt1.append($s);
}
$right_slt2 = $("#right_st_slt2");
for($i = 1; $i < 10; $i++){
	$link = "http://dangcongsan.vn/";
	$s = '<option value="' + $link + '">Đảng Cộng sản Việt Nam</option>';
	$right_slt2.append($s);
}
$lbr_item = $('.lbr_item');
$count_lbr = 0;
$('#lbr_show_bt_right').click(function(){
	if($count_lbr > $lbr_item.length - 1){
		$count_lbr = 0;
	}
	console.log($count_lbr);
	$lbr_item[$count_lbr].classList.remove('lbr_show_item');
	if($count_lbr == $lbr_item.length - 3){
		$lbr_item[0].classList.add('lbr_show_item');
	}else if($count_lbr == $lbr_item.length - 2){
		$lbr_item[1].classList.add('lbr_show_item');
	}else if($count_lbr == $lbr_item.length - 1){
		$lbr_item[2].classList.add('lbr_show_item');
	}else{
		$lbr_item[$count_lbr + 3].classList.add('lbr_show_item');
	}
	$count_lbr++;
});

$('#lbr_show_bt_left').click(function(){
	if($count_lbr < 0){
		$count_lbr = $lbr_item.length - 1;
	}
	console.log($count_lbr);
	if($count_lbr == 0){
		$lbr_item[$lbr_item.length - 1].classList.add('lbr_show_item');
	}else{
		$lbr_item[$count_lbr - 1].classList.add('lbr_show_item');
	}
	if($count_lbr == $lbr_item.length - 2){
		$lbr_item[0].classList.remove('lbr_show_item');
	}else if($count_lbr == $lbr_item.length - 1){
		$lbr_item[1].classList.remove('lbr_show_item');
	}else{
		$lbr_item[$count_lbr + 2].classList.remove('lbr_show_item');
	}
	$count_lbr--;
});
// js trang tin tức

for($i = 0; $i < 10; $i++){
	$s = '<option value="tintuc.html">' + $i +'</option>';
	$('#slt_tt').append($s);
}

for($i = 0; $i < 10; $i++){
	$s = '<option value="hoptacphattrien.html">' + $i +'</option>';
	$('#slt_htpt').append($s);
}
$('.hdnv_cv_t_s').click(function(){
	// console.log($('.hdnv_cv_t').attr('class'));
	if($('.hdnv_cv_t').attr('class') == "hdnv_cv_t"){
		$('.hdnv_cv_t').addClass('hdnv_cv_t_show');
		$('#hdnv_cv_t_a').text('Thu gọn');
	}else{
		$('.hdnv_cv_t').removeClass('hdnv_cv_t_show');
		$('#hdnv_cv_t_a').text('Xem thêm');
	}
});