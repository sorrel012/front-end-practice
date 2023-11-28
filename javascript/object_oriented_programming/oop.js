String.prototype.yell = function () {
  console.log(this.toUpperCase());
};

Array.prototype.pop = function () {
  return 'I will never pop it off';
};

const nums = [2, 3, 4];
console.log(nums);
