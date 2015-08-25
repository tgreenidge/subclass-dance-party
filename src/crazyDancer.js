var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top,left,timeBetweenSteps);

};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.slideDown(2000);
}