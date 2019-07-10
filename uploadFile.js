const fs = require('fs');

function upload(fileName){
    return fs.readFileSync(fileName).toString();
}
exports.upload = upload; 

// console.log(upload('boxes.txt'));