// (2). Path
// file / directory paths.

const path = require("path");
// Get the directory name of the current module
console.log("Directory name: ",__dirname);
console.log(path.basename(__dirname + "/myfile.txt"));
console.log("Full path: ",path.resolve(__dirname,"myfile.txt"));
const moment = require("moment");
