var header = $('.js-menu-header');
var nav = $('.js-menu-nav');
var toggle = $('.js-menu-toggle');

var navAbout = $('.nav__item-about');
var navNews = $('.nav__item-news');
var navService = $('.nav__item-services');
navAbout.linkId = '#about';
navNews.linkId = '#news';
navService.linkId = '#services';


function initNav() {
  if ($(window).outerWidth() > 991) {
    initDropwond(navAbout);
    initDropwond(navNews);
    initDropwond(navService);
  } else {
    initCollapse(navAbout);
    initCollapse(navNews);
    initCollapse(navService);
  }
}

function initDropwond(object) {
  object.find('.nav__link').removeAttr('href');
  object.find('.nav__link').removeAttr('data-toggle');
  object.find('.nav__sublist-wrapper').removeClass('collapse');

  object.addClass('dropdown');
  object.find('.nav__link').addClass('dropdown-toggle');
  object.find('.nav__link').attr('data-toggle', 'dropdown');
  object.find('.nav__sublist-wrapper').addClass('dropdown-menu');
}

function initCollapse(object) {
  object.removeClass('dropdown');
  object.removeClass('open');
  object.find('.nav__link').removeClass('dropdown-toggle');
  object.find('.nav__link').removeAttr('data-toggle');
  object.find('.nav__sublist-wrapper').removeClass('dropdown-menu');

  object.find('.nav__link').attr('href', object.linkId);
  object.find('.nav__link').attr('data-toggle', 'collapse');
  object.find('.nav__sublist-wrapper').addClass('collapse');

}

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
