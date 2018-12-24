var side = 13;
var socket = io();
var weather = "spring";

function setup() {
    frameRate(100);
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}


function smth(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                
                if(weather == "winter"){
                    fill("#CBFBF9");
                }
               else if(weather == "spring"){
                    fill("#F1B2E7");
                }
               else if(weather == "summer"){
                    fill("#C5FBC5");
                }
               else if(weather == "autumn"){
                    fill("#F5AA69");
                }
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }

            else if (matrix[y][x] == 4) {
                fill("purple");
            }

            else if (matrix[y][x] == 5) {
                fill("blue");
            } 
                   rect(x * side, y * side, side, side);

        }



        /*fill("blue")
        text(x+" "+y, x*side+side/2,y*side+side/2)*/

    }
}



socket.on("matrix", smth);
socket.on("weather", function(w){
    weather = w;
});