// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
<<<<<<< HEAD
  // use jQuery to create an HTML <span> tag

  this.$node = $('<span class="dancer"></span>');
  
  this.step();
  this.setPosition();
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  window.dancers.push(this);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  var boundPairUp = this.pairUp.bind(this);
  this.$node.on("click",function() {
    boundPairUp();
  });
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
 

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(){
  // this.setPosition(20,20);
  var top = 20, left = 50;
  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].setPosition(top,left);

    if(top > 900){
    top = 20;
    left += 25;
    } else{
      top += 25;
    }
  }
}

makeDancer.prototype.pairUp = function(){
  var closestDancer; //window.dancers[0];
  var closeDistance;
  var calculateMidpoint = function(dancer1, dancer2) {
    var midTop = (dancer1.top + dancer2.top) / 2;
    var midLeft = (dancer1.left + dancer2.left) / 2;

    return([midTop, midLeft]);
  }

  var distance = function(dancer1, dancer2){
    return Math.pow(Math.pow(dancer1.top - dancer2.top, 2) + Math.pow(dancer1.left - dancer2.left, 2), .5);
  };

  for(var i = 0; i< window.dancers.length; i++){

    if(window.dancers[i] !== this){
      var newDistance =distance(this, window.dancers[i]);
      if(!closeDistance){
        closeDistance = newDistance;
        closestDancer = window.dancers[i];
      }else{
        if (newDistance < closeDistance){
          closeDistance = newDistance;
          closestDancer = window.dancers[i]; 
        }
      }
    }
  }

  var midpoint = calculateMidpoint(this, closestDancer);

  this.setPosition(midpoint[0], midpoint[1]);
  closestDancer.setPosition(midpoint[0] + 25,  midpoint[1]);



}


=======

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');


  dancer.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
>>>>>>> 628f80875b142678f13e1cda8aa29facc4f8096d
