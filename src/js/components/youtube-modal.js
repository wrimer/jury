var modal = $('.js-youtube-modal');
var btn = $('.js-youtube-open');
var close = $('.js-youtube-close');
var video = $('.js-youtube-video');

$(window).ready(function() {

  console.log(modal);

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
