const { upload } = require("./uploadFile");

const input = upload('data/mass.txt').split('\n');

const massTest = [12, 14, 1969, 100756];
const massRecursive = [14, 1969, 100756];

 let counter = 0;

 let sum = input.map(x => Math.floor(parseInt(x) / 3) - 2)
                .reduce((totalFuel, currentCalculation) => totalFuel += currentCalculation);
// input.forEach( x => { counter += ( Math.trunc( parseInt(x) / 3 ) - 2 ) } );

const calculateFuel = (x) => { return ( Math.trunc( x / 3 ) - 2 ) };

input.forEach( el => { 

        let result = parseInt(el); 
        let total = 0;

        while ( result > 0 ) {
            result = calculateFuel(result);  
            
            result > 0 ? total += result : total; 
        }


    return counter += total;

} );

console.log(counter);
console.log(sum);
