/*
Init app
interact with DOM
interact with localstorage
*/


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

  var soundbank = {};

  var context = new AudioContext();
  var matrix = new Tonematrix(16, notesheet);

  var tonebuttonstyle = [{'background-color': 'midnightblue'}, {'background-color': 'white'}];

  matrix.buildReverse(function (value, step, note, array, obj) {
    $('.tonecontainer').prepend('<div class="tonebutton" id="' + note + ' ' + step + '"></div>');
  });

  $('.tonecontainer').on('click', '.tonebutton', function(e) {
    var [note, step] = [...this.id.split(' ')];

    if (matrix[note][step] === 1) {
      matrix[note][step] = 0;
      $(this).css(tonebuttonstyle[0]);
    } else {
      matrix[note][step] = 1;
      $(this).css(tonebuttonstyle[1]);
    }

    console.log(note + ' at ' + step + ' is now ' + matrix[note][step]);
  });

  //var keyData = 'ourKey'; // going to need to make this dynamic?
  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    localStorage.setItem(keyData, valueData);                           // write to db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);  // read from db                               // this only displays the last one? might want to switch to html
    $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');    // and append a div
    $('.input-key').val('');                                                                                          // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    $('.input-value').val('');                                                                                        // if you use backticks ` you can use ${templateLiterals}
  });                                                                                                                 // TODO make this vars make sense across the app

  // update db
  // need to expand when more than 1 item is added
  $('.container-data').on('click', '.display-data-item', function(e){ // delete item
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });

  $('.btn-clear').click(function(){ // delete all?
    localStorage.clear();
    $('.container-data').text('');
  });

});
