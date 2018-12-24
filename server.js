var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});


server.listen(3000);



io.on('connection', function (socket) { });


matrix = [];
grassArr = [];
XotakerArr = [];
gishatichArr = [];
kerpar1Arr = [];
kerpar2Arr = [];
Weather = "spring";
Weatherinit = 0;
Kerpar1init = 0;
Xotakerinit = 0;



var n = 40;
var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
for (var a = 0; a < n; a++) {
    matrix.push([])
    for (var b = 0; b < n; b++) {
        var c = Math.floor(Math.random() * e.length);
        matrix[a].push(e[c]);
    }
}

var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var gishatich = require("./gishatich.js")
var kerpar1 = require("./Kerpar1.js");
var kerpar2 = require("./Kerpar2.js");

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {

        if (matrix[i][j] == 1) {
            var gr1 = new Grass(j, i);
            grassArr.push(gr1);
        }
        else if (matrix[i][j] == 2) {
            var xt = new Xotaker(j, i);
            XotakerArr.push(xt);
            Xotakerinit++
        }
        else if (matrix[i][j] == 3) {
            var gsh = new gishatich(j, i);
            gishatichArr.push(gsh);
        }
        else if (matrix[i][j] == 4) {
            var k1 = new kerpar1(j, i);
            kerpar1Arr.push(k1);
            Kerpar1init++
        }
        else if (matrix[i][j] == 5) {
            var k2 = new kerpar2(j, i);
            kerpar2Arr.push(k2);
        }

    }
}

setInterval(drawServerayin, 1000);

function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in XotakerArr) {
        XotakerArr[i].mult()
        XotakerArr[i].move()
        XotakerArr[i].eat()
        XotakerArr[i].die()
    }
    if (Weather == "winter") {
        for (var i in gishatichArr) {
            gishatichArr[i].mult()
            gishatichArr[i].move()
            gishatichArr[i].eat()
            gishatichArr[i].die()
        }
    }

    for (var i in kerpar1Arr) {
        kerpar1Arr[i].mult()
        kerpar1Arr[i].move()
        kerpar1Arr[i].eat()
        kerpar1Arr[i].eat1()
        kerpar1Arr[i].die()
    }
    for (var i in kerpar2Arr) {
        kerpar2Arr[i].mult()
        kerpar2Arr[i].move()
        kerpar2Arr[i].eat()
        kerpar2Arr[i].eat1()
        kerpar2Arr[i].die()
    }
    io.sockets.emit("matrix", matrix);
}


function changeWeather() {
    Weatherinit++;
    if (Weatherinit == 5) {
        Weatherinit = 1;
    }
    if (Weatherinit == 2) {
        Weather = "summer";
    }
    else if (Weatherinit == 3) {
        Weather = "autumn";
    }
    else if (Weatherinit == 4) {
        Weather = "winter";
    }
    else if (Weatherinit == 1) {
        Weather = "spring";
    }
    io.sockets.emit("weather", Weather);
}

statistics = {"smthg":[]};


setInterval(function(){
    statistics.smthg.push({
        "Kerpar1_Born": Kerpar1init,
        "Xotaker_Born": Xotakerinit,
    })

fs.writeFile("statistics.json", JSON.stringify(statistics),function(err) {
    if (err) throw err;
})
},13000);

setInterval(changeWeather, 10000);

