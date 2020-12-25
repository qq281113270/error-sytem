const { defaultFieldResolver } = require("graphql");

// add.js
function add(x, y) {
  return x + y;
}

export default  add