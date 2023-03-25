function Person(name, first, second, third) {
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
}

Person.prototype.sum = function() {
    return 'prototype: ' + (this.first+this.second+this.third);
}

var hanee = new Person('hanee',10,20,30);
var han = new Person('han',10,60,50);
han.sum = function() {
    return 'this: ' + (this.first+this.second+this.third);
}

console.log('hanee.sum()', hanee.sum());
console.log('han.sum()', han.sum());
