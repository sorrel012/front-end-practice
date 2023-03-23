var memberArray = ['banana', 'strawberry', 'grape'];
console.log("memberArray[0] : ", memberArray[0]);
console.log("memberArray[1] : ", memberArray[1]);
console.log("memberArray[2] : ", memberArray[2]);

console.log();

var memberObject = {
    yellow:'banana',
    red:'strawberry',
    purple:'grape'
}
console.log("memberObject.yellow : ", memberObject.yellow)
console.log("memberObject.red : ", memberObject.red)
console.log("memberObject.purple : ", memberObject.purple)

memberObject.yellow = 'mango';
console.log("memberObject.yellow : ", memberObject.yellow)

delete memberObject.red
console.log(memberObject);
