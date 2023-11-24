//JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`;

//객체
const objectData = JSON.parse(data);
console.log(objectData);

//객체
const dog = {
  breed: 'lab',
  color: 'black',
  isAlive: true,
  owner: undefined,
};

//JSON
const jsonDog = JSON.stringify(dog);
console.log(jsonDog);
