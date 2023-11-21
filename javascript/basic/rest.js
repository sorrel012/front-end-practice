function sum(num1, ...nums) {
  console.log(num1);
  console.log(nums);
}

function raceResults(gold, silver, ...everyone) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyone}`);
}
