const fs = require('fs');
const path = require('path');
const os = require('os');
const logdir = path.join(__dirname,"logs");
if(!fs.existsSync(logdir)) fs.mkdirSync(logdir);

const logfile = path.join(logdir,'app.log');

function writelog(message) {
    const time = new Date().toISOString();
    const line = `[${time}] [${os.platform()}] ${message}\n`;
    fs.appendFile(logfile,line,(err)=>{
        if(err) console.log("failed",err);
    });
}
//demo data
writelog("server started");
writelog("user login in:  userid=101");
writelog("log file: ",logfile);