function sing() {
  console.log('Do');
  console.log('RE');
  console.log('MI');
}

// sing();
// sing();
// sing();

function greet(frstName, lastname) {
  console.log(`My name is: ${frstName} ${lastname}`);
}

// greet('Hana', 'Han');

function repeat(str, numTimes) {
  for(let i = 0; i < numTimes; i++) {
    console.log(str);
  }
}

function add(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return false;
  }
  return num1+num2;
}