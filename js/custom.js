// nav seach
$('.nav_serch i').click(function(){
    $('.nav_srchh').toggleClass('srch_bar')
  })
// ban_slick
$('.ban_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow:'.next',
    prevArrow:'.prev',
    vertical:true,
  });
// logo part slick 
$('.inner_logo_main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay:true,
  speed:1000,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
});
// mixitup strt
var mixer = mixitup('.main_mix');
// mixitup end
// client part slick
$('.client_slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  nextArrow:'<i class="fa-solid fa-arrow-right nextt"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left prevv"></i>',
});
// client part slick