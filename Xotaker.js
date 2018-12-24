var LivingCreature = require("./LivingCreature.js");
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 17;
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
        if (empty && this.energy > 10) {
            Xotakerinit++
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 2
            var xt = new Xotaker(x, y);
            XotakerArr.push(xt)
        }
    }
    move() {
        var arr = this.chooseCell(0);
        var randNum = Math.floor(Math.random() * arr.length);
        var empty = arr[randNum];
        this.energy--
        if (empty) {
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y

        }
    }
    eat() {
        var arr = this.chooseCell(1);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0];
            var y = food[1];
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                }
            }
            this.x = x
            this.y = y
            this.energy += 3

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == this.x && XotakerArr[i].y == this.y) {
                    XotakerArr.splice(i, 1);
                }
            }
        }
    }

}
