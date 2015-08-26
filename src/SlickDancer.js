var SlickDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="src/Michael_Jackson.svg" alt="cat" height="30" width="30"></span>');
  
};

SlickDancer.prototype = Object.create(MakeDancer.prototype);
SlickDancer.prototype.constructor = SlickDancer;
SlickDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var goLeft = Math.random() * 100;
  if(Math.random() > .5){
    goLeft = -goLeft;
  } 
  this.setPosition(this.top, this.left + goLeft);
}

