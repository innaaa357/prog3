var LivingCreature = require("./LivingCreature.js");
module.exports = class kerpar1 extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
        ];
        this.energy = 15 / 2;
    }
    getNewDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
        ];

    }


    chooseCell(character) {
        this.getNewDirection()
        return super.chooseCell(character);
    }

    mult() {
        var arr = this.chooseCell(0);
        var randNum = Math.floor(Math.random() * arr.length);
        var empty = arr[randNum];
        if (empty && this.energy > 7) {
            Kerpar1init++
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4
            var k1 = new kerpar1(x, y);
            kerpar1Arr.push(k1)
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
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    eat1() {
        var arr = this.chooseCell(2);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            for (var i in XotakerArr) {
                if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                    XotakerArr.splice(i, 1)
                }
            }

            this.x = x
            this.y = y
            this.energy++
        }
    }

    eat() {
        var arr = this.chooseCell(3);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy++
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == this.x && kerpar1Arr[i].y == this.y) {
                    kerpar1Arr.splice(i, 1)
                }
            }
        }
    }
}
