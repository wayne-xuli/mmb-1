function setProduct(o){function e(n){var t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}$.ajax({url:baseUrl+"/api/getcoupon",success:function(n){for(var t=0;t<n.result.length;t++)n.result[t].couponId==e("couponid")&&$(".title").html(n.result[t].couponTitle+"优惠券")}}),$.ajax({type:"get",data:{},url:baseUrl+"/api/getcouponproduct?couponid="+e("couponid"),success:function(n){var t=template("dis_product",n);$(o).append(t),bannerLoop()}})}function setMaskImg(o){$.ajax({url:baseUrl+"/api/getcouponproduct?couponid=0",success:function(n){var t=template("maskInfo",n);$(o).append(t)}})}function showMask(){$(".mask").css({display:"block"})}function closeMask(){$(".error").on("click",function(){$(".mask").css({display:"none"})})}function bannerLoop(){var n=document.querySelector(".maskImg"),t=$(n).width(),o=document.querySelector(".imgBox"),e=$(o).width(),s=0,a=0,c=0,u=0,i=0,r=t-e,l=function(){o.style.transition="all .3s",o.style.webkitTransition="all .3s"},p=function(n){o.style.transform="translateX("+n+"px)",o.style.webkitTransform="translateX("+n+"px)"};o.addEventListener("touchstart",function(n){a=n.touches[0].clientX}),o.addEventListener("touchmove",function(n){c=n.touches[0].clientX,u=c-a,o.style.transition="none",o.style.webkitTransition="none",r<u+i&&u+i<0&&p(u+i)}),o.addEventListener("touchend",function(n){100<Math.abs(u)&&(0<u?s--:u<0&&s++,s<0&&(s=0)),l(),p(-s*t),i=-s*t})}window.onload=function(){setProduct("#coupon"),setMaskImg(".imgBox"),closeMask()};