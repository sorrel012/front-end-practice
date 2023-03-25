class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return 'class: ' + (this.first+ this.second)
    }
}

// Person.prototype.sum = function() {
//     return 'prototype: ' + (this.first+ this.second)
// }

var hanee = new Person('hanee', 10, 20);
console.log('hanee', hanee);
console.log('hanee.sum()', hanee.sum());

console.log();
