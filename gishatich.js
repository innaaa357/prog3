var LivingCreature = require("./LivingCreature.js");
module.exports = class gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
        ];
    }


    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }


    mult() {
        var arr = this.chooseCell(0);
        var randNum = Math.floor(Math.random() * arr.length);
        var empty = arr[randNum];
        if (empty && this.energy > 15) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var gish = new gishatich(x, y);
            gishatichArr.push(gish)
        }
    }

    move() {
        var arr = this.chooseCell(0);
        var randNum = Math.floor(Math.random() * arr.length);
        var empty = arr[randNum];
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    eat() {
        
        var arr = this.chooseCell(2);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            for (var i in XotakerArr) {
                if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                    XotakerArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }

}
