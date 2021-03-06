/**
 * @module: 商品品牌排行 brandRanks
 * @api: http://58.218.199.45:14985/api/getbrand
 * @param: brandtitleid
 */
$(function(){
    $.ajax({
        type: "get",
        url: "http://58.218.199.45:14985/api/getbrand",
        data: window.location.search,
        dataType: "json",
        success: function (response) {
            console.log('商品品牌排行',response)
            $('.brandRanks ul').html(template('tmpl-brandRanks',{
                result:response.result
            }))
        }
    });
})

/**
 * @module: 销量排行 brandSales
 * @api: http://58.218.199.45:14985/api/getbrandproductlist 
 * @param: brandtitleid
 * @param: pagesize(默认为4)
 */
$(function(){
    $.ajax({
        type: "get",
        url: "http://58.218.199.45:14985/api/getbrandproductlist",
        data: window.location.search,
        dataType: "json",
        success: function (response) {
            console.log('销量排行',response)
            $('.brandSales ul').html(template('tmpl-brandSales',{
                result:response.result
            })) 
        }
    });
})


/**
 * @module: 最新评论 brandComments
 * @api: http://58.218.199.45:14985/api/getproductcom
 * @param: productid
 */
$(function(){
    $.ajax({
        type: "get",
        url: "http://58.218.199.45:14985/api/getproductcom",
        data: {
            productid:0
        },
        dataType: "json",
        success: function (response) {
            console.log('最新评论',response)
            $('.brandComments ul').html(template('tmpl-brandComments',{
                result:response.result
            }))  
        }
    });
})


 /**
  * @module: tab栏切换
  */
 $(function(){
     $('nav').on('tap','span',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this.dataset.target).show().siblings('section').hide()
     })
 })

// window.onload = function () {
//     window.comment = {
//         getUrlParam: function (t) {
//             var a = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
//                 e = window.location.search.substr(1).match(a);
//             return null != e ? unescape(e[2]) : null
//         },
//         tap: function (t, a) {
//             var e = !1,
//                 n = null;
//             t.addEventListener("touchstart", function (t) {
//                 n = Date.now()
//             }), t.addEventListener("touchmove", function (t) {
//                 e = !0
//             }), t.addEventListener("touchend", function (t) {
//                 !e && Date.now() - n <= 150 && a && a(t), e = !1
//             })
//         }
//     }, 
//     $(function () {
//         var t = comment.getUrlParam("brandtitleid");
//         $.ajax({
//             url: baseUrl + "/api/getbrand",
//             data: {
//                 brandtitleid: t
//             },
//             success: function (t) {
//                 console.log(t);
//                 var a = template("tempBrand", t);
//                 $("#section1 ul").html(a), $.ajax({
//                     url: "http://58.218.199.45:14985/api/getcategorybyid",
//                     data: {
//                         categoryid: t.result[0].categoryId
//                     },
//                     success: function (t) {
//                         console.log(t.result[0].category), $(".such").html(t.result[0].category)
//                     }
//                 })
//             }
//         }), $.ajax({
//             url: baseUrl + "/api/getbrandproductlist",
//             data: {
//                 brandtitleid: t
//             },
//             success: function (t) {
//                 var a = template("tempRange", t);
//                 $("#section2 ul").html(a)
//             }
//         }), $.ajax({
//             url: baseUrl + "/api/getproductcom",
//             data: {
//                 productid: t
//             },
//             success: function (t) {
//                 var a = template("tempComment", t);
//                 $("#section3 ul").html(a)
//             }
//         }), setTimeout(function () {
//             for (var t = 0; t < 5; t++) {
//                 var a = $(".brandRange .pic img").eq(t);
//                 $(".brandComment .commentTitle").eq(t).append(a);
//                 var e = $("<span></span>");
//                 e.html(a.attr("alt")), $(".brandComment .commentTitle").eq(t).append(e)
//             }
//         }, 300);
//         for (var a = $(".brand-content nav"), e = 0; e < a.length; e++) comment.tap(a[0], function (t) {
//             var a = $(".brand-content nav .active");
//             a.removeClass("active"), t.target.classList.add("active"), $(a[0].dataset.target).removeClass("active"), $(t.target.dataset.target).addClass("active")
//         })
//     })
// };