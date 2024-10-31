// console.log(arguments);
// console.log(require("module").wrapper);

// Modules.exports
const C = require("./test-modul-1");

const calcul1 = new C();
console.log(calcul1.add(2, 5));

// exports

const { add, multiple, divide } = require("./test-modul-2");
console.log(multiple(2, 5));

// Caching

require("./test-modul-3")();
require("./test-modul-3")();
require("./test-modul-3")();
