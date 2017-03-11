var form = document.getElementById("draw-form");

function renderPyramid(){
    var height = document.getElementById("slider").value;
    var symbol = document.getElementById("brick_symbol").value;

    form.oninput = function(event) {
      event.preventDefault();
    }
    drawPyramid(height,symbol);
}


function drawPyramid(height,symbol) {
    //clear old content
    document.getElementById("pyramid").innerHTML = "";

    //for each row....
    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var j = 0; j < numBricks; j++) {
            rowStr += symbol;
        }

        //make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

   }
}
