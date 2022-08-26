function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('your value', 0);
    }
}