const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('DONE WITH REQUEST!');
      } else {
        reject('REQUEST ERROR');
      }
    }, 1000);
  });
};

fakeRequest('/dogs/1')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
