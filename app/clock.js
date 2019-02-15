var Clock = function(options) {
  this.context = new AudioContext();
  this.tempo = options.tempo;
  this.totalBeats = options.totalBeats;
  this.handlers = [];
}

Clock.prototype.tick = function() {
  var now = this.context.currentTime;
  var time = now - this.start;
  var currentBeat = Math.floor(time * this.tempo / 60);

  if (currentBeat >= this.totalBeats) {
    this.start = now;
    this.beat = 0;
    this.trigger(now);
  } else if (this.beat < currentBeat) {
    this.beat = currentBeat;
    this.trigger(now);
  }

  setTimeout(this._tick, 0);
}

Clock.prototype.trigger = function(now) {
  var clock = this;
  this.handlers.forEach(function(handler) {
    handler(now, clock.beat, clock.bar);
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

/* testsnippet:

var clock = new Clock({tempo: 80, totalBeats: 16});
var handler = function() { console.log('handler'); }
clock.add(handler);
clock.play();

*/