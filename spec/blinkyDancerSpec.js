describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
<<<<<<< HEAD
    blinkyDancer =  new makeBlinkyDancer(10, 20, timeBetweenSteps);
=======
    blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
>>>>>>> 628f80875b142678f13e1cda8aa29facc4f8096d
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
<<<<<<< HEAD
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

=======
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
>>>>>>> 628f80875b142678f13e1cda8aa29facc4f8096d
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
