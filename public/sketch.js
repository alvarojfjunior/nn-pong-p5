const ball = new Ball(200, 10, 10, 15, 30)

const player = new Player(400, 90, 0)

function setup() {
    createCanvas(400, 400);
    frameRate(30);
}

function draw() {
    background(0);
    player.draw();

    ball.draw();
    ball.move();
}