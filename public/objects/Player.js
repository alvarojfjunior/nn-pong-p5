var nnTrain = [];
var net;
var atualPosition = 200;

class Player {
    constructor(x, size, score) {
        this.x = x;
        this.size = size
        this.score = score
    }

    draw() {
        if ((ball.y === 370) && (ball.x > mouseX && ball.x < mouseX + this.size)) {
            this.score += 1;
            nnTrain.push({
                input: [parseFloat('0.' + ball.y), parseFloat('0.' + ball.x)], output: [0.99]
            })
        }

        if ((ball.y > 370) && !(ball.x > mouseX && ball.x < mouseX + this.size)) {
            this.score -= 1;
            nnTrain.push({
                input: [parseFloat('0.' + ball.y), parseFloat('0.' + ball.x)], output: [0.0]
            })
        }

        if (nnTrain.length === 10) {
            net = new brain.NeuralNetwork({
                binaryThresh: 0.5,
                hiddenLayers: [3],
                activation: 'sigmoid'
            });
            net.train(nnTrain)
        }


        if (nnTrain.length > 10) {
            const output = net.run([parseFloat('0.' + ball.y), parseFloat('0.' + ball.x)]);
            if (output[0] > 0.5 && atualPosition < 350) {
                atualPosition = atualPosition + output[0];
                console.log('FRENTE -> ', output[0])
            } else if (output[0] < 0.5 && atualPosition > 0) {
                atualPosition = atualPosition - output[0];
                console.log('TRAZ -> ', output[0])
            }
            fill('red');
            rect(atualPosition, height - 20, this.size, 10);
        } else {
            fill('#ffffff');
            rect(mouseX, height - 20, this.size, 10);
        }

        if (ball.y === 370)
            console.log(this.score)
    }

}