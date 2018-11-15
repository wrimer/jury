import slick from 'slick-carousel';

$('.js-flip-controls').each(function(index) {
  $(this).find('.js-slider-prev').addClass('js-slider-prev-' + index);
  $(this).find('.js-slider-next').addClass('js-slider-next-' + index);
});

$('.js-slider').each(function( index ) {

  $(this).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.js-slider-prev-' + index),
    nextArrow: $('.js-slider-next-' + index),
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });
});
