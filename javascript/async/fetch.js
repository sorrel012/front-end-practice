fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    console.log('RESOLVED!', res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('ERROR!', err);
  });

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log('ERROR');
    console.log(e);
  }
};
