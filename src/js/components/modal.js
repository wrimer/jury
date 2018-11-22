var modal = $('.js-modal');
var btn = $('.js-modal-open');
var close = $('.js-modal-close');

$(window).ready(function() {

  btn.click(function() {
    modal.css('display', 'block');
  });

  close.click(function() {
    modal.css('display', 'none');
  });

  $(window).click(function(event) {
    if (event.target === modal.get(0)) {
      modal.css('display', 'none');
    }
  });
});
