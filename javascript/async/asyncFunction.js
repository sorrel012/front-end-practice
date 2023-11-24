// async function hello() {}

const sing = async () => {
  return 'LA LA LA LA';
};

// sing()
//   .then(data => {
//     console.log('PROMISE RESOVOLVED WITH: ', data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentaials';
  if (password === 'sorrel012') return 'WELCOME';
  throw 'Invalid Password';
};

// login('asdfasdf', 'sorrel012')
//   .then(msg => {
//     console.log('LOGGED IN!');
//     console.log(msg);
//   })
//   .catch(error => {
//     console.log('ERROR!');
//     console.log(error);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('violet', 1000);
  return 'All DONE!';
}

// rainbow().then(() => console.log('END OF RAINBOW'));

async function printRainbow() {
  await rainbow();
  console.log('END OF RAINBOW');
}

// printRainbow();

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout : ');
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  let data1 = await fakeRequest('/page1');
  console.log(data1);
}
