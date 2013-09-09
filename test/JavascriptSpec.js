define(['test', 'jquery'], function(test, $) {
  describe('testing suite', function() {
    it('should work', function() {
      expect(test.sayHello()).to.equal("hello");
    });
  });
});
