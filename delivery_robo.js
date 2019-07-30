const { upload } = require("./uploadFile");

 var moves = upload('data/moves.txt');

//    var moves = '^v'; 

    class Supplier {
        constructor(type) { this.type = type;
            this.house = { x:1, y:1 };
            this.x = 1;
            this.y = 1;
            this.iWasHere = 0 }
                };
      
    var santa = new Supplier('Santa');
    var  robo = new Supplier('Robo');
    
    var houses = [];
    houses[0] = santa.house;

for (var i = 0; i < moves.length; i++ )
{   

    if (i % 2 == 0)
        { countMoves( i, santa ); }
    else
        { countMoves( i, robo ); };

}

function countMoves( move, object ){

    switch (moves.charAt(i)) {
        case '^': 
        object.x += 1;     
            break;
        case 'v': 
        object.x -= 1;     
            break;
        case '>': 
        object.y += 1;     
            break;
        case '<': 
        object.y -= 1;     
            break;
        default:
            break;
    }   

    var elementFound = false;  

    houses.forEach(element => {

        // console.log("X "+element.x);
        // console.log("x "+x+" y "+y);

        if ( element.x == object.x && element.y == object.y )
        {
            object.iWasHere += 1;
             elementFound = true; 
        }
        
    });

   if ( elementFound == false )
   {
    houses.push( { x: object.x, y: object.y } );
   }

}

console.log( houses.length );