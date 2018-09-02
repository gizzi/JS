class Tile {

    constructor(type,xPos,yPos,uid) {
        this.uid = uid;
        this.id = yPos+""+xPos;
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.background = this.evalBackground();
        this.left = false;
        this.top = false;
        this.right = false;
        this.bottom = false;
    }
    evalBackground() {
        // standard background (white)
        var bg = color(255, 255, 255);
        
        if(this.type == TileEnum.start) {
            // green background
            bg = color(180, 255, 180);
        }
        if(this.type == TileEnum.playground) {
            // checkerpattern playground
            if( (this.xPos+this.yPos) %2 == 0) {
                bg = color(220, 220, 220);
            } else {
                bg = color(180, 180, 180);
            }
        }
        if(this.type == TileEnum.end) {
            // red endzone
            bg = color(255, 180, 180);
        }
        return bg;
    }

    center() {
        var x = offsetLeft + ((this.xPos+0.5) * tilesize);
        var y = offsetTop + ((this.yPos+0.5) * tilesize);
        return createVector(x,y);
    }

    renderTile() {
        
        fill(this.background)
        stroke(this.background)
        strokeWeight(borderWidth);

        rect(offsetLeft+(this.xPos*tilesize)+borderWidth,offsetTop+(this.yPos*tilesize)+borderWidth,tilesize-borderWidth,tilesize-borderWidth);
        
        stroke(0)
        
        if(this.left) {
            line(offsetLeft+(this.xPos*tilesize),offsetTop+(this.yPos*tilesize),offsetLeft+(this.xPos*tilesize),offsetTop+((this.yPos+1)*tilesize))
        }

        if(this.right) {
            line(offsetLeft+((this.xPos+1)*tilesize),offsetTop+(this.yPos*tilesize),offsetLeft+((this.xPos+1)*tilesize),offsetTop+((this.yPos+1)*tilesize))
        }

        if(this.top) {
            line(offsetLeft+((this.xPos)*tilesize),offsetTop+(this.yPos*tilesize),offsetLeft+((this.xPos+1)*tilesize),offsetTop+(this.yPos*tilesize))
        }


        if(this.bottom) {
            line(offsetLeft+((this.xPos)*tilesize),offsetTop+((this.yPos+1)*tilesize),offsetLeft+((this.xPos+1)*tilesize),offsetTop+((this.yPos+1)*tilesize))
        }
        
        
    }
}