function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function() {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype
PersonPlus.prototype = Object.create(Person.prototype); //PersonPlus의 객체의 생성자는 Person을 가리킴
PersonPlus.prototype.constructor = PersonPlus //이제PersonPlus의 객체의 생성자는 PersonPlus를 가리킴

PersonPlus.prototype.avg = function() {
    return (this.first + this.second + this.third) / 3;
}

var hanee = new PersonPlus('hanee', 10, 20, 30);
console.log('hanee.sum()', hanee.sum());
console.log('hanee.avg()', hanee.avg());
console.log('hanee.constructor', hanee.constructor);
