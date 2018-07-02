$(function () {
    $("#navList").children("li").eq(4).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1012821.html">杂谈</a>');
    $("#homepage_top_pager").remove();
    $("#navList").children("li").eq(3).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007682.html">C#文字</a>');
    $("#navList").children("li").eq(2).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007681.html">Javascript</a>');
    $("#navList").children("li").eq(2).after('<li><a class="menu" href="http://www.cnblogs.com/qixinbo/category/1086024.html">数据结构</a></li>');
    //$(".catListTitle").hide();
    $("#lnkBlogLogo").hide(); 
});