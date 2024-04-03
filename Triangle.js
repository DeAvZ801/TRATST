'use strict';
class Triangle {
    constructor(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;

        if (this._isValidNumber(x, true) && this._isValidNumber(y, true) && this._isValidNumber(z, true)) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
        _isValidNumber(num, strictPositive = false) {
            return typeof num === 'number' && !Number.isNaN(num) && (strictPositive ? num > 0 : num >= 0);
    }

    isValidNumber(num) {
        return typeof num === 'number' && num > 0 && !Number.isNaN(num);
    }

    updateSize(xx, yy, zz) {
        if (this._isValidNumber(xx) && this._isValidNumber(yy) && this._isValidNumber(zz) &&
            this._isValidNumber(this.x + xx, true) &&
            this._isValidNumber(this.y + yy, true) &&
            this._isValidNumber(this.z + zz, true)) {
          this.x += xx;
          this.y += yy;
          this.z += zz;
        }
    }
    

    getPerimeter() {
        return this.x + this.y + this.z;
    }

    getLongestEdge() {
        return Math.max(this.x, this.y, this.z);
    }

    getEdgeNameAndLength() {
        const map = new Map();
        map.set("x", this.x);
        map.set("y", this.y);
        map.set("z", this.z);
        return map;
    }

    isEquilateral() {
        return this.x === this.y && this.y === this.z;
    }

    isIsosceles() {
        if (this.isEquilateral()) {
            return false;
        }
        return this.x === this.y || this.y === this.z || this.x === this.z;
    }
}


module.exports = Triangle;