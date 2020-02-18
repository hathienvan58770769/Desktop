// // YouTube IFrame Player API の読み込み
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // YouTubeの埋め込み
// var ytPlayer;
// function onYouTubeIframeAPIReady() {
//   ytPlayer = new YT.Player(
//     'background-movie-player', // Id div kết nối
//     {
//       playerVars: {
//         playsinline: 1,
//         autoplay: 1, // Tự động chạy
//         loop: 1, // Vòng lặp
//         listType: 'playlist', // Kiểu danh sách
//         list: 'PLONc6uQOvOz5eEHJMpNVIKnBS_wnpyRHu', // danh sách phát
//         controls: 0, // Nút điều khiển
//         enablejsapi: 1, //JavaScript API 
//         iv_load_policy: 3, //
//         disablekb:1, //
//         showinfo:0, // Hiển thị thông tin liên quan
//         rel:0, //
//       },
//       events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange,
//         'onError': onPlayerError
//       }
//     }
//   );
// }

// // Play auto
// function onPlayerReady(event) {
//   const player = event.target;
//   // player.mute();
//   player.playVideo();
// }

// // onStateChangeのコールバック関数
// function onPlayerStateChange(event) {
//   var status = event.data;
//   var playerWrap = $('#header .background-wrap');
//   var names = {
//     '-1' : '未開始',
//     '0' : '終了',
//     '1' : '再生中',
//     '2' : '停止',
//     '3' : 'バッファリング中',
//     '5' : '頭出し済み'
//   };
//   //バッファリングの完了後、動画背景を表示させる
//   if (status == 1) {
//     $(playerWrap).css('opacity','1');
//   } else {
//     $(playerWrap).css('opacity','0');
//   }
// }

// // errorの発生時
// function onPlayerError(event) {
//   var errorstatus = event.data;
//   var playerWrap = $('#header .background-wrap');
//   //何らかのエラーステータスが渡された場合、youtubeプレイヤーを削除する
//   if (errorstatus !== '') {
//     $(playerWrap).remove();
//   }
// }

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// Up number
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="/images/up.svg"></div><div class="quantity-button quantity-down"><img src="/images/down.svg"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

//Menu header
jQuery(document).ready(function($) {
  $('.menu').responsiveMenu({
    breakpoint: '1100'
  });
});

//LOad More
$(function () {
    $(".load_ne").slice(0, 5).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load_ne:hidden").slice(0, 5).slideDown();
        if ($(".load_ne:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});


// Facebook chat show hide
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Slide product
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});

  
// Giá VND
Array.from(document.getElementsByClassName('money')).forEach(money=>{
    money.innerHTML+= ' VNĐ';
  })

// Sticky menu //
var w = window.innerWidth;
  if(w>1200){
      var $document = $(document)
      $document.scroll(function() {
        if ($document.scrollTop() >= 1) {
            $('#navbar').addClass('sticky');
          } else {
            $('#navbar').removeClass('sticky');
          }
      }); 

}
// 

// Show hide tabs slide
$(document).ready(function(){
    $(".click_show").click(function(){
         $(".show_h").toggleClass("hien_than");
    });
});

$(function () {
    $('.click_share').click(function () {
        $(this).siblings('.show_share').slideToggle('fast')
    })
})
// Date




// Money .
function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}


