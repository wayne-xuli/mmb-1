function setShopData(e) {
    $.ajax({
        type: "get",
        url: baseUrl + "/api/getgsshop",
        data: {},
        success: function (t) {
            var n = template(e, t);
            $(".option>.shop_option").append(n)
        }
    })
}

function setAreaData(e) {
    $.ajax({
        type: "get",
        url: baseUrl + "/api/getgsshoparea",
        data: {},
        success: function (t) {
            var n = template(e, t);
            $(".option>.area_option").append(n)
        }
    })
}

function setImgData(e, t, n) {
    $.ajax({
        type: "get",
        data: {
            shopid: t || 0,
            areaid: n || 0
        },
        url: baseUrl + "/api/getgsproduct",
        success: function (t) {
            var n = template(e, t);
            $(".coudan_product>.section").html(n)
        }
    })
}

function scroll() {
    var t = $(window).height(),
        n = 0,
        e = !0;
    $(window).on("scroll", function () {
        e && ($(".coudan_product").height() - document.body.scrollTop <= t + 200 && (4 == ++n && (n = 0), e = !1, setImgDataAppend("product_option", n, function () {
            e = !0
        })))
    })
}

function setImgDataAppend(e, t, a) {
    $.ajax({
        type: "get",
        data: {
            shopid: t || 0,
            areaid: 0
        },
        url: baseUrl + "/api/getgsproduct",
        success: function (t) {
            var n = template(e, t);
            $(".coudan_product>.section").append(n), a && a()
        }
    })
}

function myEvent(t, n, e) {
    t.attachEvent ? t.attachEvent("on" + n, e) : t.addEventListener(n, e, !1)
}
window.onload = function () {
    setShopData("shop_option"), setAreaData("area_option"), setImgData("product_option"), scroll()
}, $(".coudan_filter>ul>a").on("click", function () {
    var t = $(this).attr("data-target"),
        n = $(t);
    n.is(":hidden") ? (n.show().siblings().hide(), $(this).find(".caret").css({
        transform: "rotate(180deg)"
    }), $(this).siblings().find(".caret").css({
        transform: "rotate(0deg)"
    })) : (n.hide(), $(".coudan_filter>ul").find(".caret").css({
        transform: "rotate(0deg)"
    }))
}), setTimeout(function () {
    $(".option>ul>li").on("click", function () {
        $(this).parent().find("span").removeClass("font-icon font-icon-zhengque"), $(this).find("span").addClass("font-icon font-icon-zhengque"), $(this).parent().hide(), $(".coudan_filter .caret").css({
            transform: "rotate(0deg)"
        });
        var t = $("." + $(this).attr("mark")),
            n = /[\u4e00-\u9fa5]+/.exec($(this).text())[0];
        $(t).find("i").text(n), "shop" == $(this).attr("mark") ? shopid = $(this).attr("name") : "area" == $(this).attr("mark") && (areaid = $(this).attr("name"))
    })
}, 500), myEvent(window, "load", function () {
    var n, t = document.getElementById("rtt"),
        e = document.documentElement.clientHeight,
        a = null;
    window.onscroll = function () {
        return n = document.documentElement.scrollTop || document.body.scrollTop, t.style.display = e <= n ? "block" : "none", n
    }, t.onclick = function () {
        clearInterval(a), a = setInterval(function () {
            var t = (0 - n) / 10;
            t = 0 < t ? Math.ceil(t) : Math.floor(t), 0 == n && clearInterval(a), document.documentElement.scrollTop = n + t, document.body.scrollTop = n + t
        }, 20)
    }
});