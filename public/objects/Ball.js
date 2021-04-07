const ballColor = Math.floor(Math.random() * 300) + 10;
class Ball {
    constructor(x, y, xVelocity, yVelocity, size) {
        this.x = x;
        this.y = y;
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
        this.size = size
    }

    draw() {
        ellipse(this.x, this.y, this.size, this.size)
        fill(ballColor)
    }

    move() {
        if (this.x > width) {
            this.xVelocity *= -1
        }
        if (this.x < 0) {
            this.xVelocity *= -1
        }

        if (this.y > height - 40) {
            this.yVelocity *= -1
        }
        if (this.y < 0) {
            this.yVelocity *= -1
        }
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
}