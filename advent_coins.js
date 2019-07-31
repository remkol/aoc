md5 = require('js-md5');

var hash = md5('abcdef609043');

var hex = md5.hex(hash);

console.log(hash);


var zeroString = '';

var secretNumber = 0; 

var input = 'bgvyzdsv';

do {

    // var concat = input + secretNumber;

    // var test = md5( concat );

    secretNumber++;

    zeroString = md5( input + secretNumber ).slice(0,6);

}
while ( zeroString != '000000' );

console.log(secretNumber);


