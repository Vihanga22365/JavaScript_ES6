// callback function

const product = [
  {
    brand: 'Samsung',
    model: 'Galaxy S9',
    price: 45000.0,
  },
  {
    brand: 'Sony',
    model: 'Xperia XA',
    price: 50000.0,
  },
  {
    brand: 'Apple',
    model: 'Iphone 11',
    price: 100000.0,
  },
];

function createPage() {
  let output = '';
  setTimeout(() => {
    product.forEach((pro) => {
      output += `<div>
       <h1>${pro.brand}</h1>
       <p>${pro.model}</p>
       <h2>${pro.price}</h2>
       </div>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function pushElement(item, callback) {
  setTimeout(() => {
    product.push(item);
    callback();
  }, 2000);
}

pushElement({ brand: 'Xiaomi', model: 'Note 9', price: 50000.0 }, createPage);

//Simple promises example

let prm = new Promise((resolve, reject) => {
  let count = 2 + 8;

  setTimeout(() => {
    if (count == 10) {
      resolve('completed');
    } else {
      reject('not completed');
    }
  });
}, 5000);

prm
  .then((msg) => {
    console.log(`Promise ${msg}`);
  })
  .catch((msg) => {
    console.log(`Promise ${msg}`);
  });

const product = [
  {
    brand: 'Samsung',
    model: 'Galaxy S9',
    price: 45000.0,
  },
  {
    brand: 'Sony',
    model: 'Xperia XA',
    price: 50000.0,
  },
  {
    brand: 'Apple',
    model: 'Iphone 11',
    price: 100000.0,
  },
];

function createPage() {
  let output = '';
  setTimeout(() => {
    product.forEach((pro) => {
      output += `<div>
       <h1>${pro.brand}</h1>
       <p>${pro.model}</p>
       <h2>${pro.price}</h2>
       </div>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function pushElement(item) {
  return new Promise((resolve, reject) => {
    let ln = product.length;
    product.push(item);

    if (ln < product.length) {
      resolve('Item Added.');
    } else {
      reject('Item not Added');
    }
  }, 2000);
}

pushElement({ brand: 'Xiaomi', model: 'Note 9', price: 50000.0 })
  .then((msg) => {
    createPage();
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  });

//Call to server using promises

function getUserCountry(url) {
  return new Promise((resolve, reject) => {
    const xmlreq = new XMLHttpRequest();
    xmlreq.open('GET', url);

    xmlreq.onload = () => {
      if (xmlreq.status == 200) {
        resolve(xmlreq.response);
      } else {
        reject(Error(xmlreq.response));
      }
    };
    xmlreq.onerror = () => {
      reject(Error(xmlreq.response));
    };

    xmlreq.send();
  });
}

getUserCountry('https://api.nationalize.io/?name=kasthuri')
  .then((response) => {
    console.log('Success', response);
  })
  .catch((Error) => {
    console.error(Error);
  });

//Call many promises same time

const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 1 success');
  }, 1000);
});

const pr2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 2 success');
  }, 1000);
});

const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 3 success');
  }, 3000);
});

Promise.all([pr1, pr2, pr3]).then((value) => {
  console.log(value);
});
