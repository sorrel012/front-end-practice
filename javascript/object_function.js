var hanee = {name:'hanee', first:10, second:20}
var han = {name:'han', first:10, second:10}

function sum(prefix) {
    return prefix + (this.first + this.second);
}

// console.log("sum.call(hanee) " + sum.call(hanee, '=> '));
// console.log("sum.call(han) " + sum.call(han, ': '));

var haneeSum = sum.bind(hanee, '-> ');
console.log('haneeSum()', haneeSum());
