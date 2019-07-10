const { upload } = require("./uploadFile");

function count_area( length, width, hight ){
    
    var faceA = length * width;
    var faceB = width * hight;
    var faceC = hight * length;

    var extraPaper = Math.min( faceA, faceB, faceC );

    return 2*faceA + 2*faceB + 2*faceC + extraPaper; 

}

function countRibbon(dim1, dim2, dim3) { 

    var ribbon = 2 * dim1 + 2 * dim2;
    var bow = ( dim1 * dim2 * dim3 );

        return ribbon + bow;
     }

    var totalPaperArea = 0;
    var totalRibbon = 0;

    var textByLine = upload('data/boxes.txt').split("\n");

    textByLine.forEach(item => {

        var dms = item.split("x");
        // Wrapping paper
        var area = count_area(dms[0],dms[1],dms[2]);
        
        totalPaperArea += area;

        dms.sort(function(a, b){return a - b});

        // Ribbon
        totalRibbon += countRibbon(dms[0],dms[1], dms[2]);

    })

    // console.log(count_area(14,6,11)); //Last box in the file list
    console.log("Total Paper Area: "+totalPaperArea+" feets");
    console.log("Total Ribbon: "+totalRibbon+" feets");

