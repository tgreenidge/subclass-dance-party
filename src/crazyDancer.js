var MakeCrazyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="src/powerpuff.png" alt="cat" height="30" width="30"></span>');
};

MakeCrazyDancer.prototype = Object.create(MakeDancer.prototype);
MakeCrazyDancer.prototype.constructor = MakeCrazyDancer;

MakeCrazyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var random = Math.random() * 100
  if(Math.random() > .5){
    random = -random;
  }
  this.setPosition(this.top + random, this.left + random);

}