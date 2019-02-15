var Tonematrix = function (length, notesheet) {
  this.sequenceLength = length;
  this.notesheet = notesheet;
  this.bpm = 80;
  this.reset();
}

Tonematrix.prototype.reset = function () {
  for (let note in this.notesheet) {
    this[note] = [...new Array(this.sequenceLength)].map(x => 0);
  }
}

Tonematrix.prototype.buildReverse = function (callback) {
  for (let note in this.notesheet) {
    for (let step = this.sequenceLength - 1; step >= 0; step--) {
      callback(this[note][step], step, note, this[note], this);
    }
  }
}

Tonematrix.prototype.eachNote = function (callback) {
  for (let note in this.notesheet) {
    callback(note, this.notesheet[note], this[note], this);
  }
}
