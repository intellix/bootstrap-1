// jasmine matcher for expecting an element to have a css class
// https://github.com/angular/angular.js/blob/master/test/matchers.js
beforeEach(function() {
  this.addMatchers({
    toHaveClass: function(cls) {
      this.message = function() {
        return "Expected '" + this.actual + "'" + (this.isNot ? ' not ' : ' ') + "to have class '" + cls + "'.";
      };

      return this.actual.hasClass(cls);
    },
    toHaveId: function(id) {
      this.message = function() {
        return "Expected '" + this.actual + "'" + (this.isNot ? ' not ' : ' ') + "to have id '" + id + "'.";
      };

      return this.actual.attr('id') === id;
    }
  });
});
