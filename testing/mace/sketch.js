var maze;

var tileSize = 18;
var tilesX = 40;
var tilesY = 20;

var i = 0;

function setup() {
    // make sure walls will fit properly
    tileSize = Math.floor(tileSize/3)*3;

    createCanvas(tilesX*tileSize,tilesY*tileSize);
    
    maze = new Maze(tilesX,tilesY);
    maze.init();
}

function draw() {
    maze.render();
    if(!maze.extend()) {
        noLoop();
    }
    maze.render();
    
    if(i > 1) {
        noLoop();
    }
    i++;
}
