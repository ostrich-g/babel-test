
const reloadCode = require('./method.js');

const code = `function square(n) {
    return n * n;
  }`;

reloadCode('test',code);