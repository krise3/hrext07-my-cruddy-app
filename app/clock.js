var Clock = function(matrix) {
  this.context = new AudioContext();
  this.matrix = matrix;
  this.soundbank = {};
  this.tempo = 200;
  this.totalBeats = matrix.sequenceLength;
  this.handlers = [];
  this.playing = false;
}

Clock.prototype.tick = function() {
  var now = this.context.currentTime;
  var time = now - this.start;
  var currentBeat = Math.floor(time * this.tempo / 60);

  if (currentBeat >= this.totalBeats) {
    this.start = now;
    this.beat = 0;
    this.trigger(now + 0.1);
  } else if (this.beat < currentBeat) {
    this.beat = currentBeat;
    this.trigger(now + 0.1);
  }

  setTimeout(this._tick, 0);
}

Clock.prototype.trigger = function(now) {
  var clock = this;
  this.handlers.forEach(function(handler) {
    handler(now, clock.beat, clock.context, clock.matrix, clock.soundbank);
  });
}

Clock.prototype.add = function(handler) {
  this.handlers.push(handler);
}

Clock.prototype.play = function() {
  if (this.context.state === "closed") {
    this.context = new AudioContext();
  }
  this.beat = -1;
  this.start = this.context.currentTime;
  this._tick = this.tick.bind(this);
  this._tick();
}

Clock.prototype.stop = function() {
  this._tick = null;
  this.context.close();
}
