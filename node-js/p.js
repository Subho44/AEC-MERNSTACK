const path = require("path");

const filepath = path.join(__dirname,"public","index.html");
console.log(filepath);
console.log(path.extname(filepath));
console.log(path.basename(filepath));

