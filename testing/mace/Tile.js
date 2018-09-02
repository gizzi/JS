

class Tile {


    constructor(posX,posY,left, top, right, bottom) {

        this.posX = posX;
        this.posY = posY;
        this.actual = {};
        this.possible = {};

        this.actual.left = left;
        this.actual.right = right;
        this.actual.top = top;
        this.actual.bottom = bottom; 

    }

    render() {
        noStroke();
        fill(0);

        // fixed
        rect(this.posX*tileSize,this.posY*tileSize,tileSize/3,tileSize/3);
        rect(this.posX*tileSize+(tileSize*2/3),this.posY*tileSize,tileSize/3,tileSize/3);
        rect(this.posX*tileSize,this.posY*tileSize+(tileSize*2/3),tileSize/3,tileSize/3);
        rect(this.posX*tileSize+(tileSize*2/3),this.posY*tileSize+(tileSize*2/3),tileSize/3,tileSize/3);
        
        if(!this.actual.left) {
            if(this.possible.left) {
                fill(100,100,250)
        
            } else {
                fill(0)
            }
        } else {
            fill(255)
        }
        rect(this.posX*tileSize,this.posY*tileSize+(tileSize*1/3),tileSize/3,tileSize/3);
        
        if(!this.actual.top) {
            if(this.possible.top) {
                fill(100,100,250)
            } else {
                fill(0)
            }
        } else {
            fill(255)
        }
        rect(this.posX*tileSize+(tileSize*1/3),this.posY*tileSize,tileSize/3,tileSize/3);
        if(!this.actual.right) {
            if(this.possible.right) {
                fill(100,100,250)
            } else {
                fill(0)
            }
        } else {
            fill(255)
        }
        rect(this.posX*tileSize+(tileSize*2/3),this.posY*tileSize+(tileSize*1/3),tileSize/3,tileSize/3);
        
        if(!this.actual.bottom) {
            if(this.possible.bottom) {
                fill(100,100,250)
            } else {
                fill(0)
            }
        } else {
            fill(255)
        }
        rect(this.posX*tileSize+(tileSize*1/3),this.posY*tileSize+(tileSize*2/3),tileSize/3,tileSize/3);
    }

}