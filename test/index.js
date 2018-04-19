
const { reloadCode } = require('../src/untils');
const code = `function square(n) {
    return n * n;
  }`;

reloadCode('test',code);