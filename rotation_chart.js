$(document).ready(function(e){
    var index = 0, // 图片索引 
        max = 3, // 最大图片数量 
        t = true, // 用于实现函数递归
        time; // 用于存放定时器ID，方便关闭自动播放 
    zidongbofang();
    // 自动播放函数
    function zidongbofang() {
        $(".rotation_chart img").hide();
        $(".rotation_chart img:eq("+index+")").show();
        index = index<(max-1) ? (++index) : 0;
        if(t){
            time = setTimeout(zidongbofang,4000);
        }
    };
    // 鼠标进入和退出轮播图执行的操作
    $("rotation_chart").hover(function(){
        clearTimeout(time);
    },function(){
        t = true;
        zidongbofang();
    });
    // 左箭头点击事件
    $(".left_arrow").click(function(){
        clearTimeout(time);
        index = index>0 ? (--index) : (max-1);
        $(".rotation_chart img").hide();
        $(".rotation_chart img:eq("+index+")").show();
    });
    // 右箭头点击事件
    $(".right_arrow").click(function(){
        clearTimeout(time);
        index = index<(max-1) ? (++index) : (0);
        $(".rotation_chart img").hide();
        $(".rotation_chart img:eq("+index+")").show();
    });
    // 小圆点点击事件
    $(".round_dot li").click(function(){
        clearTimeout(time);
        index = $(this).index();
        $(".rotation_chart img").hide();
        $(".rotation_chart img:eq("+index+")").show();
    });
    
});