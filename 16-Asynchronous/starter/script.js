'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
          </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
// const getCountryData = function (country) {
//   // As soon as fetch request's PromiseState is fulfilled, use then(callback)
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     // To read the data from response, we need to call .json(), which itself returns also promise
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })

//     // response.json() = data
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`); // to chain new .then methods
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('croatia');
});

// getCountryData('qf-9-uqsd');
*/

/*
//////////////////////////////////////////////////
// Coding challenge 1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      //   console.log(response);

      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// Test data
// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
*/

/*
//////////////////////////////////////////////////
console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 5 - even time is set as 0, this might be excuted later than 0
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100; i++) console.log(res);
}); // 4
console.log('Test end'); // 2
*/

/*
//////////////////////////////////////////////////
// Create a Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮'); // 2

  // 3
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // 1

// Promisifying setTimeout() - more like real world example
const wait = function (seconds) {
  return new Promise(function (resolve) {
    // No reject bc setTimeout() will never be failed
    setTimeout(resolve, seconds * 1000); // resolve value is not mandatory
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds'); // resolve has no value above so no value in .then()
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// Easy way
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Error!')).catch(x => console.error(x));
*/

/*
//////////////////////////////////////////////////
// Promisifying Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    // Thoes callbacks with position and err is automatically done like this
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(response => {
      //   console.log(response);

      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);
*/

/*
//////////////////////////////////////////////////
// Coding challenge 2

const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    // No reject bc setTimeout() will never be failed
    setTimeout(resolve, seconds * 1000); // resolve value is not mandatory
  });
};

let img;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Failed to load images!'));
    });
  });
};

createImage('./img/img-1.jpg')
  .then(img => {
    console.log(img);
    return wait(2);
  })
  .then(() => {
    img.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    console.log(img);
    return wait(2);
  })
  .then(() => {
    img.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

/*
//////////////////////////////////////////////////
// Consuming promises with async/await, returnning data from async function

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    //   console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥　(${err.message})`);

    // Reject promise returned from async function
    throw err; // to throw error at whereAmI() below, rethrow error here, or .then() is executed and .catch() is not
  }
};

console.log('1: Will get location'); // 1

// 3 - if this is a normal function and there's CL inside of it then this will be executed befire #2
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`💥 2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));
// console.log('2: Finished getting location'); // 2

// Rewrite with IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
    // console.log('3: Finished getting location');
  } catch (err) {
    console.error(`💥 2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

/*
//////////////////////////////////////////////////
// Running async function in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // Parellel, executed at the same time
    const datas = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(datas.map(data => data[0].capital));

    // Sequence order, executed from GER -> JPN -> HR
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // ); // destructured so that no need to use [0] to get data
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(`💥 2: ${err.message}`);
  }
};

get3Countries('germany', 'japan', 'croatia ');
*/

/*
//////////////////////////////////////////////////
// Other promise combinators

// Promise.race()
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/china`),
    getJSON(`https://restcountries.eu/rest/v2/name/taiwan`),
    getJSON(`https://restcountries.eu/rest/v2/name/japan`),
  ]);
  console.log(res[0]);
})();

// If user's connection is too slow, set timeout
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error('Requet took too long!')), sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/belgium`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled()
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.any() - ES2021!
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

//////////////////////////////////////////////////
// Coding challenge 3

const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    // No reject bc setTimeout() will never be failed
    setTimeout(resolve, seconds * 1000); // resolve value is not mandatory
  });
};

// let img;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Failed to load images!'));
    });
  });
};

// const loadNPause = async function () {
//   try {
//     let img = await createImage('./img/img-1.jpg');
//     // console.log(img);
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage('./img/img-2.jpg');
//     // console.log(img);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs); // logs [Promise, Promise, Promise]

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);

    imgEl.forEach(el => el.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
