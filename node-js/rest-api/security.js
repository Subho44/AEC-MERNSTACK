const crypto = require("crypto");
const fs = require("fs");
const util = require('util');

const APP_NAME = process.env.APP_NAME || "node js";

const readFile = util.promisify(fs.readFile);

//password encrypt

function hashpassword(password) {
  return crypto.createHash("sha256").update(password).digest('hex');
}

//random  token

function  createtoken() {
    return crypto.randomBytes(16).toString('hex');
}

(async()=>{
    console.log("App:",APP_NAME);
    const passhash = hashpassword("123456");
    console.log("password hash: ",passhash);

    const token = createtoken();
    console.log("Token:",token);

    try {
        const data = await readFile("data.txt","utf-8");
        console.log("read file:",data.length);
    } catch(err) {
        console.error(err);
    }
}) ();