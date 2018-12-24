var LivingCreature = require("./LivingCreature.js");
module.exports = class kerpar2 extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 2],
        ];

        this.energy = 9;
    }

    getNewDirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 2],
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
        if (empty && this.energy > 9) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 5
            var k2 = new kerpar2(x, y);
            kerpar2Arr.push(k2)
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
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    eat1() {
        var arr = this.chooseCell(1);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0


            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = x
            this.y = y
            this.energy += 2
        }
    }

    eat() {
        var arr = this.chooseCell(4);
        var randNum = Math.floor(Math.random() * arr.length);
        var food = arr[randNum];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == x && kerpar1Arr[i].y == y) {
                    kerpar1Arr.splice(i, 1)
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
            for (var i in kerpar2Arr) {
                if (kerpar2Arr[i].x == this.x && kerpar2Arr[i].y == this.y) {
                    kerpar2Arr.splice(i, 1)
                }
            }
        }
    }
}