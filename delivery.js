const { upload } = require("./uploadFile");

var moves = upload('moves.txt');

    // var moves = '^v^v^v^v^v'; 

    var house = { x:1, y:1 };

    var x = 1;
    var y = 1;

    var iWasHere = 0;

    var hauses = [];
     hauses[0] = house;

for (var i = 0; i < moves.length; i++ )
{

    switch (moves.charAt(i)) {
        case '^': 
        x += 1;     
            break;
        case 'v': 
        x -= 1;     
            break;
        case '>': 
        y += 1;     
            break;
        case '<': 
        y -= 1;     
            break;
        default:
            break;
    }   

    var elementFound = false;  

    hauses.forEach(element => {

        // console.log("X "+element.x);
        // console.log("x "+x+" y "+y);

        if ( element.x == x && element.y == y )
        {
             iWasHere += 1;
             elementFound = true; 
        }
        
    });

   if ( elementFound == false )
   {
       hauses.push( { x: x, y: y } );
   }

//    console.log(iWasHere);

}

console.log(hauses.length);