// axios
//   .get('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log('RESPONSE: ', res);
//   })
//   .catch((error) => {
//     console.log('ERROR: ', error);
//   });

const getStarWarsPerson = async () => {
  try {
    const res = await axios.get('https://swapi.dev/api/people/1/');
    console.log(res.data);
  } catch (e) {
    console.log('ERROR', e);
  }
};

const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  console.log(res.data.joke);
};
