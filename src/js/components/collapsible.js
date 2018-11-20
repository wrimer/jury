var items = $('.js-collapsible');

$(window).ready(function() {
  items.each(function() {
    $(this).click(function() {
      $(this).toggleClass('collapsible__inner_opened');
    });
  });
});
