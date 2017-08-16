$(document).ready(startHere);

function startHere() {



    $("#btnSquare").on('click', function() {
        var mySide = 0;
        mySide = $("#inptSideSquare").val();
        calculateSquare(mySide);
    });


    $("#btnRectangle").on('click', function() {
        var Aside = $("#inptSideArct").val();
        var Bside = $("#inptSideBrct").val();
        var recHeight = $("#inptHeightrct").val();
        calculateRectangle(Aside, Bside, recHeight);


    })
}

function calculateSquare (side) {
    var mySide = Number(side);
    var sqrArea = mySide * mySide;
    var sqrPerimeter = mySide * 4;
    var sqrCube = sqrArea * mySide;


    $("#resultSqrArea").html("Area is " + sqrArea + " square cm");
    $("#resultsSqr3D").html("Volume is " + sqrCube + " cm^3");
    $("#resultSqrPerimeter").html("Perimeter is " + sqrPerimeter + " cm");

}


function calculateRectangle (sideA, sideB, Height) {
    var thisA = Number(sideA);
    var thisB = Number(sideB);
    var thisheight = Number(Height);

    rctArea = thisA * thisB;
    rctPerimeter = (2 * thisA) + (2*thisB);
    rctVolume = thisA * thisB * thisheight;

    $("#resultRctArea").html("Area is " + rctArea + " square cm");
    $("#resultsRct3D").html("Volume is " + rctVolume + " cm^3");
    $("#resultRctPerimeter").html("Perimeter is " + rctPerimeter + " cm");
}
