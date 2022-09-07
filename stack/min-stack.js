class MinStack {
  /**
   * @constructor
   */
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
   this.mainStack.push(val);
   if (
     !this.minStack.length ||
     val <= this.minStack[this.minStack.length - 1]
   ) {
    this.minStack.push(val);
   }
  }

  /**
   * @return {void}
   */
  pop() {
   this.mainStack.pop();
   if (val == this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
}

  /**
   * @return {number}
   */
  top() {
    return this.mainStack[mainStack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[minStack.length - 1];
  }
}
