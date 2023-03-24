console.log('Math.PI:', Math.PI);
console.log('Math.random():', Math.random());
console.log('Math.floor(3.9):', Math.floor(3.9));

console.log();

// Math 객체와 동일한 기능을 하는 객체 만들기

 var MyMath = {
    PI:3.141592653589793,
    random:function() {
        return Math.random(); //random 활용..
    },
    floor:function(val) {
        return Math.floor(val);
    }
 }

 console.log('MyMath.PI:', MyMath.PI);
 console.log('MyMath.random():', MyMath.random());
 console.log('MyMath.floor(5.8):', MyMath.floor(5.8));
 