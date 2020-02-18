$('.slide_home').slick({
  slidesToShow: 1,
  arrows: true,  
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  draggable: true,
    fade: true,
    speed: 1200,
    infinite: true,
    touchThreshold: 100,
    responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
});


$('.slider_service').slick({
   slidesToShow: 5,
   rows: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   infinite:false,
   dots: false,
   responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
 });

// Slide 3d
$('.slider2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  prevArrow:'<button class="slick-prev"> <img src="/images/slide/prev_1.svg"> </button>',
  nextArrow:'<button class="slick-next"> <img src="/images/slide/next_1.svg"> </button>',
  
  //         responsive: [                        
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
});

$('.slider_reviews').slick({
   slidesToShow: 2,
   rows: 1,
   slidesToScroll: 2,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   infinite:false,
   dots: true,
   responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
 });

$('.slider_other_tour').slick({
   slidesToShow: 4,
   rows: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   infinite:false,
   dots: false,
   responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
 });


$('.slider_other_car').slick({
   slidesToShow: 3,
   rows: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   infinite:false,
   dots: false,
   responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
 });