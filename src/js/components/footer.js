var items = $('.js-footer-collapse');

function initCollapse() {
  if ($(window).outerWidth() > 991 && $(items.get(items.length - 1)).hasClass('footer__menu-collapse')) {
    items.each(function() {
      removeCollapse($(this));
    });
  }
  if ($(window).outerWidth() <= 991 && !$(items.get(items.length - 1)).hasClass('footer__menu-collapse')) {
    items.each(function() {
      addCollapse($(this));
    });
  }
}

function removeCollapse(item) {
  item.removeClass('footer__menu-collapse_opened');
  item.removeClass('footer__menu-collapse');
}

function addCollapse(item) {
  item.addClass('footer__menu-collapse');
}

$(document).ready(initCollapse());

$(window).on('resize', function() {
  initCollapse();
});

items.each(function() {
  $(this).click(function() {
    if ($(this).hasClass('footer__menu-collapse')) {
      $(this).toggleClass('footer__menu-collapse_opened');
    }
  });
});
