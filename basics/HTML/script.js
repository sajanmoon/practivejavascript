Array.prototype.myFilter = function (cbFunc) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cbFunc(this[i])) {
      temp.push(this[i]);
    }
  }
  return temp;
};
