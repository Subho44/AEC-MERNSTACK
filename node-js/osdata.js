const os = require("os");

console.log("cpu:",os.cpus().length);
console.log("fm:",os.freemem());
console.log("tm:",os.totalmem());