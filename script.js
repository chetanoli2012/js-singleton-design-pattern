function Counter() {
  this.counter = 0;

  this.increment = () => {
    this.counter++;
  };

  this.decrement = () => {
    this.counter--;
  };
}

let singleton = (function () {
  let instance;
  return {
    getInstance: function () {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    },
  };
})();

let counter = singleton.getInstance();
let counter2 = singleton.getInstance();
console.log(counter === counter2);
