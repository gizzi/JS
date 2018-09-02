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
       console.log("done");
        noLoop();
    }
    if(i >= 0) {
        noLoop();
        console.log(maze.map)
        console.log(maze.validDirections)
    }
    i++;
    
}
