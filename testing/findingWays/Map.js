
class Map {
    constructor() {
        this.start = {};
        this.start.x = 1; 
        this.start.y = 1;
        /*
        this.map =  [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 2, 2, 2, 0, 0],
            [0, 0, 0, 0, 2, 2, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 2, 0, 0, 2, 2, 0],
            [0, 2, 2, 0, 0, 2, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 0],
            [0, 3, 3, 3, 3, 3, 3, 0],
            [0, 3, 3, 3, 3, 3, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
            ];
        */ 
        this.map =  [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 3, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    
        this.dimensionY = this.map.length;
        this.dimensionX = this.map[0].length;
        this.generateTiles();
        this.initTiles();
    }
    
    renderMap() {
        // rows
        for(var i = 0; i < this.map.length; i++) {
            // cols
            for(var j = 0; j < this.map[i].length; j++) {
                var currentTile = this.tiles[i][j];
                currentTile.renderTile();
            }
        }
    }

    generateTiles() {
        this.tiles = [];
        var uid = 0;
        for(var i = 0; i < this.map.length; i++) {
            var currentRow = [];
            for(var j = 0; j < this.map[i].length; j++) {
                uid ++;
                currentRow.push(new Tile(this.map[i][j],j,i,uid));
            }
            this.tiles.push(currentRow);
        }
        console.log("width: "+this.dimensionX);
        console.log("height: "+this.dimensionY);
    
    }

    initTiles() {
        //rows
        for(var i = 0; i < this.map.length; i++) {
            //cols
            for(var j = 0; j < this.map[i].length; j++) {
                var currentTile = this.tiles[i][j];
                this.analyseNeighbors(currentTile);
            }
        }
    }

    tile(x,y) {
        if(y >= 0 && y < this.tiles.length && x >= 0 && x < this.tiles[0].length ){
            return this.tiles[y][x];
        } 
        return null;       
    }

    analyseNeighbors(tile) {
       
        // check for left
        if(tile.xPos > 0) {
            var left = this.tiles[tile.yPos][tile.xPos-1];
            if(left.type != tile.type) {
                if(tile.type == TileEnum.blank) {
                    tile.left = true;
                }
            }
        } else {
            if(tile.type != TileEnum.blank) {
                tile.left = true;
            }
        }
        // check for right
        if(tile.xPos < this.tiles[0].length-1) {
            var right = this.tiles[tile.yPos][tile.xPos+1]
            if(right.type != tile.type) {
                if(tile.type == TileEnum.blank) {
                    tile.right = true;
                }
            }
        } else {
            if(tile.type != TileEnum.blank) {
                tile.right = true;
            }
        }

        // check for top
        if(tile.yPos > 0) {
            var top = this.tiles[tile.yPos-1][tile.xPos]
            if(top.type != tile.type) {
                if(tile.type == TileEnum.blank) {
                    tile.top = true;
                }
            }
        } else {
            if(tile.type != TileEnum.blank) {
                tile.top = true;
            }
        }

        // check for bottom
        if(tile.yPos < this.tiles.length-1) {
            var bottom = this.tiles[tile.yPos+1][tile.xPos]
            if(bottom.type != tile.type) {
                if(tile.type == TileEnum.blank) {
                    tile.bottom = true;
                }
            }
        } else {
            if(tile.type != TileEnum.blank) {
                tile.bottom = true;
            }
        }
    }
}

