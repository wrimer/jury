var flipItems = $('.js-flip');

function initFlipCards() {
  flipItems.each(function() {
    var currentItem = $(this);
    currentItem.find('.js-flip-card-open').click(function() {
      currentItem.addClass('flip-card_flipped');
    });
    currentItem.find('.js-flip-card-close').click(function() {
      currentItem.removeClass('flip-card_flipped');
    });
  });
}

$('.js-slider').on('breakpoint', function(slick) {
  flipItems = $('.js-flip');
  initFlipCards();
});
$(document).ready(function() {
  flipItems = $('.js-flip');
  initFlipCards();
});

