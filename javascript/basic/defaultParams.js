// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'Hey there') {
  return `${msg}, ${person}`;
}