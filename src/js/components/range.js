import ui from 'nouislider';

var slider = document.getElementById('js-range');

$(window).ready(function() {

  if (slider) {
    ui.create(slider, {
      start: [0, 5],
      connect: true,
      range: {
        'min': 0,
        'max': 5
      },
      step: 1,
      pips: {
        mode: 'values',
        values: [0, 1, 2, 3, 4, 5],
        stepped: true
      }
    });

    slider.noUiSlider.on('update', function(values) {

      var pips = $('.noUi-marker-large');
      var numerals = $('.noUi-value-large');
      for (let i = 0; i < pips.length; i++) {
        if (i >= values[0] && i <= values[1]) {
          $(pips.get(i)).css('background', '#D92559');
          $(numerals.get(i)).css('color', '#D92559');
        } else {
          $(pips.get(i)).css('background', '#b1c1d8');
          $(numerals.get(i)).css('color', '#b1c1d8');
        }
      }

    });
  }
});
