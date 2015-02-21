var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }

  Stack.prototype.push = function(item) {
    this.dataStore[this.top] = item;
    this.top += 1;
  }

  Stack.prototype.pop = function() {
    this.top -= 1;
    return this.dataStore[this.top];
  }

  Stack.prototype.display = function() {
    for(var i = 0; i < this.top; i++) {
      console.log(this.dataStore[i]);
    }
  }

  return Stack;
})();

module.exports = Stack;