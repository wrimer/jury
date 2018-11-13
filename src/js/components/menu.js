var header = $('.js-menu-header');
var nav = $('.js-menu-nav');
var toggle = $('.js-menu-toggle');
var items = $('.js-menu-item');

// var items = $('.nav__item-collapse');


function initNav() {
  function initNavItems(item) {
    if ($(window).outerWidth() > 991 && !item.hasClass('nav__item-dropdown')) {
      item.removeClass('nav__item-collapse nav__item-collapse-opened');
      item.addClass('nav__item-dropdown');
    }
    if ($(window).outerWidth() <= 991 && !item.hasClass('nav__item-collapse')) {
      item.removeClass('nav__item-dropdown');
      item.addClass('nav__item-collapse');
    }
  }

  items.each(function() {
    initNavItems($(this));
  });
  // item.click(function() {
  // });
}

items.each(function() {
  $(this).click(function() {
    if ($(this).hasClass('nav__item-collapse')) {
      $(this).toggleClass('nav__item-collapse-opened');
    }
  });

});
toggle.click(function() {
  header.toggleClass('header_opened');
  nav.toggleClass('nav_opened');
});

$(window).on('resize', function() {
  if ($(window).outerWidth() > 991 && header.hasClass('header_opened')) {
    header.removeClass('header_opened');
    nav.removeClass('nav_opened');
  }
});


$(document).ready(initNav);

$(window).on('resize', initNav);
