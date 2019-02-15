//Init app
//interact with DOM
//interact with localstorage

$(document).ready(function(){ // this is where we jquery

  var notesheet = {
    'c': 261.6,
    'd': 293.7,
    'e': 329.6,
    'f': 349.2,
    'g': 392.0,
    'a': 440.0,
    'b': 493.9
  }

  var steps = 16;
  var matrix = new Tonematrix(steps, notesheet);
  var clock = new Clock(matrix);
  clock.add(playNote);

  var tonebuttonstyle = [{'background-color': 'midnightblue'}, {'background-color': 'white'}];

  matrix.buildReverse(function (value, step, note, array, obj) {
    $('.tonecontainer').prepend('<div class="tonebutton" id="' + note + '-' + step + '"></div>');
  });

  $('.tonecontainer').on('click', '.tonebutton', function(e) {
    var [note, step] = [...this.id.split('-')];

    if (matrix[note][step] === 1) {
      matrix[note][step] = 0;
      $(this).css(tonebuttonstyle[0]);
    } else {
      matrix[note][step] = 1;
      $(this).css(tonebuttonstyle[1]);
    }
  });

  $('#play-stop').on('click', function(e) {
    if (!clock.playing) {
      clock.playing = true;
      clock.play();
    } else {
      clock.playing = false;
      clock.stop();
    }
  });

  $('#save').on('click', function(e) {
    var keyData = $('#sequence-name').val();
    var valueData = matrix.export();
    localStorage.setItem(keyData, valueData);
  });

  $('#load').on('click', function(e) {
    var keyData = $('#sequence-name').val();
    matrix.import(localStorage.getItem(keyData));

    matrix.buildReverse(function(value, step, note) {
      var buttonid = '#' + note + '-' + step;
      if (value === 1) {
        $(buttonid).css(tonebuttonstyle[1]);
      } else {
        $(buttonid).css(tonebuttonstyle[0]);
      }
    });

  });

  $('#delete').on('click', function(e){
    var keyData = $('#sequence-name').val();
    localStorage.removeItem(keyData);
  });

});
