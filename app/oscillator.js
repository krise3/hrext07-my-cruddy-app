var playNote = function (time, index, context, matrix) {
  matrix.scanNote(function(note, freq, context) {
    var h1 = note + '-h1';

    matrix.soundbank[note] = context.createOscillator();
    matrix.soundbank[h1] = context.createOscillator();

    matrix.soundbank[note].frequency.value = freq;
    matrix.soundbank[h1].frequency.value = freq * 3;

    matrix.soundbank[note].connect(context.destination);
    matrix.soundbank[h1].connect(context.destination);

    matrix.soundbank[note].start(time);
    matrix.soundbank[h1].start(time);

    matrix.soundbank[note].stop(time + 0.5);
    matrix.soundbank[h1].stop(time + 0.5);
    
  }, index, context);
}
