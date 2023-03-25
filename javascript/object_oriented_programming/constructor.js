var d1 = new Date('2023-03-25');
console.log('d1.getFullYear:', d1.getFullYear());
console.log('d1.getmonth', d1.getMonth()+1);

console.log();

// function Person() {
//     this.name='hanee';
//     this.first=10;
//     this.second=20;
//     this.third=30;
//     this.sum = function() {
//         return this.first+this.second+this.third;
//     }
// }

console.log('Person()', Person());

console.log();

function Person(name, first, second, third) {
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum = function() {
        return this.first+this.second+this.third;
    }
}
console.log('new Person(hanee)', new Person('hanee',10,20,30));
console.log('new Person(han)', new Person('han',10,60,50));

console.log('new Person(han)', new Person('han',10,60,50).sum());