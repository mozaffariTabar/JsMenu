var newUl = '<ul><li link="" title="" stat="link"><i>link</i><input type="text" placeholder="http://"><span class="controller"><i class="icon-right-open-3"></i><i class="icon-cancel-3"></i><i class="icon-down-open-2"></i></span></li></ul>';
var newLl = '<li link="" title="" stat="link"><i>link</i><input type="text" placeholder="http://"><span class="controller"><i class="icon-right-open-3"></i><i class="icon-cancel-3"></i><i class="icon-down-open-2"></i></span></li>';

$(document).on("click","li > i",function(){
    if ($(this).parent().attr("stat") == "link") {
        $(this).html("title");
        $(this).siblings().attr("placeholder","...").val($(this).parent().attr("title"));
        $(this).parent().attr("stat","title");
    } else {
        $(this).html("link");
        $(this).siblings().attr("placeholder","http://").val($(this).parent().attr("link"));
        $(this).parent().attr("stat","link");
    }
    $(this).siblings("input").focus();
});

$(document).on("keyup","li input",function(){
    if ($(this).parent().attr("stat") == "link") {
        $(this).parent().attr("link",$(this).val().trim());
    } else
    if ($(this).parent().attr("stat") == "title") {
        $(this).parent().attr("title",$(this).val().trim());
    }
});

$(document).on("focus","li input",function(){
    $(this).parents("ul").css("display","block");
});

$(document).on("blur","li input",function(){
    $(this).parents("ul").css("display","");
});

$(document).on("click",".icon-right-open-3:not(.disable)",function(){
    var li = $(this).addClass("disable").closest("li");
    if (li.find("ul").length == 0) li.append(newUl).find("ul > li > input").focus();
});

$(document).on("click",".icon-down-open-2:not(.disable)",function(){
    $(this).addClass("disable").closest("ul").append(newLl).find("li:last-child > input").focus();
});

$(document).on("click",".icon-cancel-3",function(){
    if ($(this).closest("li").next().length == 0) $(this).closest("li").prev().find(".icon-down-open-2").removeClass("disable");
    if ($(this).closest("li").next().length == 0 && $(this).closest("li").prev().length == 0) {
        $(this).closest("ul").closest("li").find(".icon-right-open-3").removeClass("disable");
        $(this).closest("ul").remove();
    }
    $(this).closest("li").remove();
});