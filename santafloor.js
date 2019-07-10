const { upload } = require("./uploadFile");

    var str = upload('input.txt');

    var floorLevel = 0;
    var reachedBasement = 0;

    for (var i = 0; i < str.length; i++ )
    {
        if ( str.charAt(i) == '(' )

        { 
            floorLevel++;
        }
         else if ( str.charAt(i) == ')' )
         {
            floorLevel--; 
         }

         if ( floorLevel == -1  && reachedBasement == 0 )
         {    
            reachedBasement = i + 1; 
         }
           
    }

    console.log('Santa took: '+floorLevel+' floor'); 
    console.log('Santa reached basement at '+reachedBasement+' position'); 
