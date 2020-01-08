function get_href_loc(href) {
    var filename = "default"
    var loc = ""
    var l = href.split("://")
    if (l.length > 1) {
        l = l[l.length-1]
    } else {
        l = href
    }
    
    if (l.split("#").length <= 1) {
        return [filename, loc]
    }
    
    l = l.split("#")
    l = l[l.length-1].split("/")

    if (l.length >= 2) {
        loc = l[l.length-1]
        l.pop()
    }
    l = l.filter((item) => item != "").join("/")
    if (l != "") {
        filename = l
    }
    // console.log(l)
    return [filename, loc]
}

function get_click_loc(href) {
    var h = href.split("#")
    if (h.length >= 2) {
        return [h[0], h[h.length-1]]
    } else if (h.length == 0) {
        return [h[0], ""]
    }
    return ["", ""]
}

function highlight_index(cur_select, cur) {
    var find = false
    $("#left").find("a").each(function(i,item){
        var dest = get_click_loc($(item).attr("href"))
        if (dest[0] == decodeURI(cur[0]) && dest[1] == decodeURI(cur[1])) {
            if (cur_select) {
                cur_select.removeClass("selected")
            }
            cur_select = $(item)
            $(item).addClass("selected")
            find = true
        }
    })

    var node = cur_select
    var p = null
    while (p = node.parent()) {
        if (p[0].tagName == "DETAILS") {
            if (p.attr("open")) {
                // p.removeAttr("open")
            } else {
                p.attr("open", "")
            }
            break
        }
        node = node.parent()
    }
    return cur_select
}

$(document).ready(function(){
    var pre_loc = ""
    var loc = get_href_loc(window.location.href)
    var cur_select = null
    // console.log(loc)

    $("#left").empty().load("navbar.html", function(response,status,xhr) {
        $("#left a").click(function(){
            // console.log($(this).parent())
            if ($(this).parent() && $(this).parent().parent()) {
                var p = $(this).parent().parent()
                // console.log(p)
                if (p[0].tagName == "DETAILS") {
                    if (p.attr("open")) {
                        // p.removeAttr("open")
                    } else {
                        p.attr("open", "")
                    }
                    // console.log(p.attr("open"))
                }
            }
            if (cur_select) {
                cur_select.removeClass("selected")
            }
            cur_select = $(this)
            $(this).addClass("selected")
            // var a_href = $(this).attr("href")
            var loc = get_click_loc($(this).attr("href"))
            var loc_cur = get_href_loc(window.location.href)
            
            if (loc[0] == loc_cur[0]) {
                // if (loc[1] != "")
                //     location.href = "#"+loc[1]
                pre_loc = location.href
                location.href = "#/" + loc[0] + "/" + loc[1]
                return false
            }

            pre_loc = location.href
            location.href = "#/" + loc[0] + "/" + loc[1]
            
            return false;
        })
    })

    $("#right").empty().load(/*default_file*/loc[0]+".html", function(response,status,xhr) {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        });
        // if (loc[1] != "") {
        //     location.href = "#"+loc[1]
        // }
        pre_loc = location.href
        if (loc[0] != "default") {
            location.href = "#/" + loc[0] + "/" + loc[1]
        } else {
            location.href = "#"+loc[1]
        }
        cur_select = highlight_index(cur_select, loc)
        var top = cur_select.offset().top-parseInt($(".inner-wrapper").css("paddingTop")) - 20
        $("#left").animate({scrollTop: top}, 200)
        if (loc[1]) {
            top = $("[id='"+decodeURI(loc[1])+"']").offset().top-parseInt($(".inner-wrapper").css("paddingTop"))
            top -= parseInt($("[id='"+decodeURI(loc[1])+"']").css("marginTop"))
            $("html,body").animate({scrollTop: top}, 200)
        }
    });


    $(window).on('hashchange', function(e) {
        // console.log(pre_loc)
        // console.log(location.href);
        var pre = get_href_loc(pre_loc)
        var cur = get_href_loc(location.href)
        pre_loc = location.href
        cur_select = highlight_index(cur_select, cur)

        
        if (pre[0] == cur[0] && cur[1]) {
            // console.log(decodeURI($("[id='"+decodeURI(cur[1])+"']'").offset()))
            var top = $("[id='"+decodeURI(cur[1])+"']").offset().top-parseInt($(".inner-wrapper").css("paddingTop"))
            top -= parseInt($("[id='"+decodeURI(cur[1])+"']").css("marginTop"))
            $("html,body").animate({scrollTop: top}, 200)
            return
        }

        $('#right').empty().load(/*file*/cur[0]+".html",function(response,status,xhr){
                // hljs.initHighlighting()
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block)
            });
            if (cur[1]) {
                var top = $("[id='"+decodeURI(cur[1])+"']").offset().top-parseInt($(".inner-wrapper").css("paddingTop"))
                top -= parseInt($("[id='"+decodeURI(cur[1])+"']").css("marginTop"))
                $("html,body").animate({scrollTop: top}, 200)
            }
        });
    });
    
    var margin_top = parseInt($("body").css("marginTop")) + $("header").height()
    var left_height = $(window).height() - margin_top - 5
    $(".wrapper-left").height(left_height)
    $("#left").height(left_height - parseInt($("#left").css("paddingTop")) - parseInt($("#left").css("paddingBottom")))
    // if ($(".wrapper-right").height() < $(".wrapper-left").height()) {
    //     $(".wrapper-right").height($(".wrapper-left").height())
    // }

})