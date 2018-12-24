var LivingCreature = require("./LivingCreature.js");
module.exports = class Grass extends LivingCreature {
    mult() {
        this.multiply+= 2;
        var arr = this.chooseCell(0);
        var randNum = Math.floor(Math.random() * arr.length);
        var empty = arr[randNum];
        if (empty && this.multiply > 5) {
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 1
            var gr = new Grass(x, y);
            grassArr.push(gr)
        }
    }
}