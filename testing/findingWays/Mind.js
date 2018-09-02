

class Mind {
    constructor() {
        this.directions = []
        this.newDirection = true;
        this.stepsRemaining = stepCount;
        this.currentDirection = createVector(0,0);
    }

    mutate() {
        for(var i = 0; i < this.directions.length; i ++) {
            if(Math.random() < 0.05) {
                this.directions[i] = this.randomDirection();
            }
        }
    }

    getDirection(step) {
        if(step < this.directions.length) {
            this.currentDirection = this.directions[step];
            return this.directions[step];
        }
        if(this.newDirection) {
            this.currentDirection = this.randomDirection();
            this.directions.push(this.currentDirection);
            this.newDirection = false;
            this.stepsRemaining = stepCount;
        }
        if(this.stepsRemaining > 0 ) {
            this.stepsRemaining --;
        } else {
            this.newDirection = true;
        }

        return this.currentDirection;
    }

    randomDirection() {
        var dirX = Math.floor(Math.random() * 3) -1; 
        var dirY = Math.floor(Math.random() * 3) -1; 
        return createVector(dirX,dirY);
    }

    clone() {
        var mind = new Mind();
        mind.directions = Array.from(this.directions);
        return mind;
    }
}