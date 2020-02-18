$('.slider_doitac').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: false,
    responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 4,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
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
    prevArrow: '<button class="slick-prev"> <img src="images/slide/prev_1.svg"> </button>',
    nextArrow: '<button class="slick-next"> <img src="images/slide/next_1.svg"> </button>',
});