$(function () {
    $("#navList").children("li").eq(4).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1012821.html">杂谈</a>');
    $("#homepage_top_pager").remove();
    $("#navList").children("li").eq(3).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007682.html">C#文字</a>');
    $("#navList").children("li").eq(2).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007681.html">Javascript</a>');
    $("#navList").children("li").eq(2).after('<li><a class="menu" href="http://www.cnblogs.com/qixinbo/category/1086024.html">数据结构</a></li>');
    //$(".catListTitle").hide();
    $("#lnkBlogLogo").hide();
    $("body").append("<div class='fixed-body-background'></div>");
    
    ////judge if it's homepage
    if ($(".day").length > 0 || $(".entrylistItem").length > 0) {
        $(".postDesc").hide();
    } 

    //加关注
    $("#p_b_follow").hide();
    var addFollow = '<div id="jumpA"><a href="javascript:void(0);" style="margin-top:10px;color:#F0EEF5;font-weight:bold;" onclick="follow(\'9aafb01c-3018-e711-845c-ac853d9f53ac\')">+加关注</a></div>';
    $("#profile_block").append(addFollow);
    $("#jumpA").children("a").addClass("shake-chunk").css("text-decoration", "none");

});