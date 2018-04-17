
const reloadCode = require('../src/method');

const code = `function square(n) {
    return n * n;
  }`;

reloadCode('test',code);