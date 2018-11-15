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

$(document).ready(initFlipCards());

