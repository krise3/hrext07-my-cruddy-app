var playNote = function (time, index, context, matrix, soundbank) {
  matrix.scanNote(function(note, freq, context) {
    var h1 = note + '-h1';

    soundbank[note] = context.createOscillator();
    soundbank[h1] = context.createOscillator();

    soundbank[note].frequency.value = freq;
    soundbank[h1].frequency.value = freq * 4;

    soundbank[note].connect(context.destination);
    soundbank[h1].connect(context.destination);

    soundbank[note].start(time);
    soundbank[h1].start(time);

    soundbank[note].stop(time + 0.5);
    soundbank[h1].stop(time + 0.5);

  }, index, context);
}
