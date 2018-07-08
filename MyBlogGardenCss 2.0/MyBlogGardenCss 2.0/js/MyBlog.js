$(function () {
    $("#homepage_top_pager").remove();
    $("#navList").children("li").eq(2).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007682.html">C#文字</a>');
    $("#navList").children("li").eq(3).append('<a class="menu" href="http://www.cnblogs.com/qixinbo/category/1007681.html">Javascript</a>');
    $("#navList").children("li").eq(4).after('<li><a class="menu" href="http://www.cnblogs.com/qixinbo/category/1086024.html">数据结构</a></li>');
    $("#navList").children("li").eq(5).after('<li><a class="menu" href="http://www.cnblogs.com/qixinbo/category/1012821.html">杂谈</a></li>');
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

//目录组建
var Dragging = function (validateHandler) { //参数为验证点击区域是否为可移动区域，如果是返回欲移动元素，否则返回null
    var draggingObj = null; //dragging Dialog
    var diffX = 0;
    var diffY = 0;
    function mouseHandler(e) {
        switch (e.type) {
            case 'mousedown':
                draggingObj = validateHandler(e);//验证是否为可点击移动区域
                if (draggingObj != null) {
                    diffX = e.clientX - draggingObj.offsetLeft;
                    diffY = e.clientY - draggingObj.offsetTop;
                    e.preventDefault();
                }
                break;
            case 'mousemove':
                if (draggingObj) {
                    draggingObj.style.left = (e.clientX - diffX) + 'px';
                    draggingObj.style.top = (e.clientY - diffY) + 'px';
                }
                break;
            case 'mouseup':
                if (draggingObj != null) {
                    $("a", "#box").toggle("fast", function () {
                        if ($("#boxSideA").text() == "显示目录") {
                            $("#boxSideA").text("").append('<span class="dot-top boxSideA"></span>');

                        } else {
                            $("#boxSideA").text("显示目录");
                        }
                    });
                }
                draggingObj = null;
                diffX = 0;
                diffY = 0;
                break;
        }
    };
    return {
        enable: function () {
            document.addEventListener('mousedown', mouseHandler);
            document.addEventListener('mousemove', mouseHandler);
            document.addEventListener('mouseup', mouseHandler);
        },
        disable: function () {
            document.removeEventListener('mousedown', mouseHandler);
            document.removeEventListener('mousemove', mouseHandler);
            document.removeEventListener('mouseup', mouseHandler);
        }
    }
}

$(function () {
    if ($("#cnblogs_post_body").children("h3").length > 1) {
        $("body").append('<div id="box" class="box"><span id="boxSideA" class="boxSideA" onclick="">显示目录</span></div>');
        $("#cnblogs_post_body").children("h3").each(function (i) {
            $(this).attr("id", "chapter" + i);
            $(this).css("font-weight", "bold");
            var text = $(this).text();
            $("#box").append('<br /><a class="navTitle" href="#chapter' + i + '" title="' + text + '">' + text + '</a>');
        });
        $("#box").children("a").first().addClass("Active");
        Dragging(getDraggingDialog).enable();
    }
});

window.onscroll = function () {
    if ($(".day").length > 0 || $(".entrylistItem").length > 0) {
        return;
    }
    //already scrolled height $(document).scrollTop() is also can do this
    var nowScrolledHeight = document.documentElement.scrollTop || document.body.scrollTop;

    var maxCount = $(".navTitle").length - 1;
    var maxId = $(".navTitle").eq(maxCount).attr("href");
    maxId = maxId.substring(1, maxId.length);
    var maxHeight = $("#" + maxId).offset().top;
    for (var i = 0; i < $(".navTitle").length; i++) {
        var hrefTarget = $(".navTitle").eq(i).attr("href");
        hrefTarget = hrefTarget.substring(1, hrefTarget.length);
        //get element height
        var elementHeight = $("#" + hrefTarget).offset().top;
        var elementHeightAdd = elementHeight - 10;
        if (elementHeightAdd < nowScrolledHeight) {
            continue;
        } else {
            $(".Active").removeClass("Active");
            if (i == 0) {
                $(".navTitle").eq(0).addClass("Active");
            } else {
                $(".navTitle").eq(i - 1).addClass("Active");
            }
            break;
        }
    }
    if (nowScrolledHeight > (maxHeight - 10)) {
        $(".Active").removeClass("Active"); $(".navTitle").eq(maxCount).addClass("Active");
    }
}

function getDraggingDialog(e) {
    var target = e.target;
    while (target && target.className.indexOf('boxSideA') == -1) {
        target = target.offsetParent;
    }
    if (target != null) {
        return target.offsetParent;
    } else {
        return null;
    }
}
