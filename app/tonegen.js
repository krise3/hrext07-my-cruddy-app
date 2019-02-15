var Tonematrix = function (length, notesheet) {
  this.sequenceLength = length;
  this.notesheet = notesheet;
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

Tonematrix.prototype.scanNote = function (callback, index, context) {
  for (let note in this.notesheet) {
    if (this[note][index] === 1) {
      callback(note, this.notesheet[note], context)
    }
  }
}

Tonematrix.prototype.export = function () {
  return JSON.stringify(this);
}

Tonematrix.prototype.import = function(string) {
  obj = JSON.parse(string);
  for (let note in this.notesheet) {
    this[note] = obj[note].slice();
  }
}
