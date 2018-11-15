import slick from 'slick-carousel';

var slider = $('.js-slider');

$(slider).slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.js-slider-prev'),
  nextArrow: $('.js-slider-next'),
  dots: false,
  infinite: false
});
