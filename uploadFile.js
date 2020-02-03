const fs = require('fs');

function upload(fileName){
    return fs.readFileSync(fileName, 'utf-8').toString();
}
exports.upload = upload; 

// console.log(upload('boxes.txt'));