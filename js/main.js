
// SWIPER
window.onload = function () {
    var mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 24,
      width: 274,
      speed:1000,
      breakpoints: {
        // 768px以上の場合
        768: {
          spaceBetween: 40,
          width: 400,
        },
      },
       autoplay: {
      delay: 3000, //3秒後に次の画像に代わる
        },
      loop: true,
     loopedSlides: 6,
      //ページネーションをつける場合
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true",
      },
      
    });
  };
// アコーディオン
  jQuery('.faq_q').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.faq_icons').toggleClass( 'is-open' );
  });
// ページトップ
  $(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });  
 