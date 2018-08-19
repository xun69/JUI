// JavaScript Document
//选项卡
function sstab(mDiv){
	$("#" + mDiv).addClass("xfq_sstabs");
	$("#" + mDiv + " >div").hide();
	//默认选中第一个选项卡
	$($("#" + mDiv + ">ul li").get(0)).css("background","#F2F9FF");
	$($("#" + mDiv + ">div").get(0)).show();
	//事件处理程序
	$("#" + mDiv + ">ul li").on("click",function(){
		 ind=$("#" + mDiv + ">ul li").index(this);//获取选项卡的索引值
		 //设置选项卡样式
		 $("#" + mDiv + ">ul li").css("background","#fff");
		 $(this).css("background","#F2F9FF");
		 //显示相应项
		 $("#" + mDiv + ">div").hide();
		 $($("#" + mDiv + ">div").get(ind)).show();
	});
}

//伸缩面板
function ssmb(mDiv){
	$("#" + mDiv).addClass("xfq_ssmb");
	//事件处理程序
	$("#" + mDiv + " >h3").click(function(){
		$(this).next("div").toggle("fast");
	});
}

//伸缩面板
function menu(mDiv){
	$("#" + mDiv).addClass("xfq_menu");
	//事件处理程序
}
    