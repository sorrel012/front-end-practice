// var superObj = {superVal:'super'};
// var subObj = {subVal:'sub'};
// subObj.__proto__ = superObj;

//  var subObj = Object.create(superObj);
//  subObj.subVal = 'sub';

// console.log('subObj.subVal =>', subObj.subVal);
// console.log('subObj.superVal =>', subObj.superVal);

// subObj.superVal = 'sub';

// console.log('superObj.subVal =>', superObj.subVal);
// console.log('superObj.superVal =>', superObj.superVal);

hanee = {
    name:'hanee',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
var han = Object.create(hanee);
han.name = 'lee';
han,first = 10;
han.second = 10;
han.avg = function() {
    return (this.first + this.second) / 2;
}
// han = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){return (this.first + this.second) / 2}
// }
// han.__proto__ = hanee;
console.log('han.sum() ', han.sum())
console.log('han.avg() ', han.avg())