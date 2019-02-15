var playNote = function (time, index, context, matrix, soundbank) {
  matrix.scanNote(function(note, freq, context) {

    soundbank[note] = context.createOscillator();

    soundbank[note].type = "square";

    soundbank[note].frequency.value = freq;

    soundbank[note].connect(context.destination);

    soundbank[note].start(time);

    soundbank[note].stop(time + 0.25);

  }, index, context);
}
