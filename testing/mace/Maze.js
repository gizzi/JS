class Maze  {


    
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.tiles = [];
        this.validDirections = [];
        this.done = false;
    }

    init() {
        var startingTile = new Tile(0,0);
        for(var i = 0; i < this.sizeY; i++) {
            var row = [];
            for(var j = 0; j < this.sizeX; j++) {
                row.push(null);
            }
            this.tiles.push(row);
        }
        this.tiles[0][0] = startingTile;
        this.validateDirections(startingTile);
        
    }

    extend() {
        if( this.validDirections.length == 0) {
            return false;
        }
        var newDir = Math.floor(random(this.validDirections.length));
        var sourceTile = this.validDirections[newDir].tile;
        var dir = this.validDirections[newDir].direction;
        console.log(dir)
        if(dir == "bottom") {
            var newTile = new Tile(sourceTile.posX,sourceTile.posY+1,false,true,false,false);
            this.tiles[sourceTile.posY+1][sourceTile.posX] = newTile;
            sourceTile.possible.bottom = false;
            sourceTile.actual.bottom = true;
        }
        if(dir == "right") {
            var newTile = new Tile(sourceTile.posX+1,sourceTile.posY,true,false,false,false);
            this.tiles[sourceTile.posY][sourceTile.posX+1] = newTile;
            sourceTile.possible.right = false;
            sourceTile.actual.right = true;
        }
        if(dir == "top") {
            var newTile = new Tile(sourceTile.posX,sourceTile.posY-1,false,false,false,true);
            this.tiles[sourceTile.posY-1][sourceTile.posX] = newTile;
            sourceTile.possible.top = false;
            sourceTile.actual.top = true;
        }
        if(dir == "left") {
            var newTile = new Tile(sourceTile.posX,sourceTile.posY-1,false,false,true,false);
            this.tiles[sourceTile.posY-1][sourceTile.posX] = newTile;
            sourceTile.possible.left = false;
            sourceTile.actual.left = true;
        }
        this.validDirections.splice(newDir, 1);
        this.validateDirections(newTile);

        return true;
    }
    
    validateDirections(tile) {
        
        tile.possible.top = false;
        if(tile.posY > 0) {
            var topTile = this.findTile(tile.posX,tile.posY-1);
            if(!topTile) {
                tile.possible.top = true;
                this.validDirections.push({tile:tile,direction:"top"})
            } 
        }

        tile.possible.bottom = false;
        if(tile.posY < this.sizeY-1) {
            var bottomTile = this.findTile(tile.posX,tile.posY+1);
            if(!bottomTile) {
                tile.possible.bottom = true;
                this.validDirections.push({tile:tile,direction:"bottom"})
            
            } 
        }

        tile.possible.left = false;
        if(tile.posX > 0) {
            var leftTile = this.findTile(tile.posX-1,tile.posY);
            console.log(leftTile);
            console.log(tile);
            if(!leftTile) {
                
                tile.possible.left = true;
                this.validDirections.push({tile:tile,direction:"left"})
            } 
        }

        tile.possible.right = false;
        if(tile.posY < this.sizeY-1) {
            var rightTile = this.findTile(tile.posX+1,tile.posY);
            if(!rightTile) {
                tile.possible.right = true;
                this.validDirections.push({tile:tile,direction:"right"})
            } 
        }

    }
    findTile(posX,posY) {
        return this.tiles[posY][posX];
    }

    render() {
        for(var i = 0; i < this.tiles.length; i++) {
            for(var j = 0; j < this.tiles[i].length; j++) {
                var tile = this.tiles[i][j];
                if(tile) {
                    tile.render();
                } 
                //console.log("render Tile("+i+"/"+j+")")
                //console.log("possible: "+this.validDirections)
            }
        }

    }
}