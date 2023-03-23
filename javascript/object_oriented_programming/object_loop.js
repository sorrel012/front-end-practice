var memberArray = ['banana', 'strawberry', 'grape'];

console.group('array loop')
var i = 0;
while(i < memberArray.length) {
    console.log(memberArray[i]);
    i++;
}
console.groupEnd('array loop')

var memberObject = {
    yellow:'banana',
    red:'strawberry',
    purple:'grape'
}

console.group('object loop');
for(var color in memberObject) {
    console.log(color, memberObject[color]);    
}
console.groupEnd('object loop');
