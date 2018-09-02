class Maze  {


    
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.validDirections = [];
        this.map = new Map();
    }

    init() {
        var startingNode = {x:0,y:0,nodes:[]};
        this.map.set("00",startingNode);
        this.validateDirections(null,startingNode);
    }

    extend() {
        console.log("extend")
        if(this.validDirections.length == 0) {
            return false;
        }
        var pos = Math.floor(random(this.validDirections.length));
        var newDir = this.validDirections[pos];
        var newNode = {x:newDir.x,y:newDir.x,nodes:[]};
        this.map.set(""+newDir.x+newDir.y,newNode);
        var source = this.map.get(""+newDir.sourceX+newDir.sourceY);
        this.validateDirections(source,newNode);
        this.validDirections.splice(pos,1);
        return true;
    }
    
    validateDirections(sourceNode,newNode) {
        
        console.log(newNode);
        // in the wall, continue in the same direction
        if(newNode.x % 2 != 0 || newNode.y % 2 != 0){
            console.log("eval wall")
            if(!sourceNode) {
                console.log("should not happen")
            } else {
                var x = newNode.x-sourceNode.x+newNode.x;
                var y = newNode.y-sourceNode.y+newNode.y;
                if(x >= 0 && y >= 0 && x < this.sizeX && y < this.sizeY) 
                {
                    this.validDirections.push({x:x,y:y,sourceX:newNode.x,sourceY:newNode.x});
                }
            }
        } 
        // in the room, continue in any valid direction
        else {
            console.log("eval room")
            //left
            console.log(newNode)
            if(newNode.x > 0) {
                var possibleNode = this.map.get(""+(newNode.x-2)+newNode.y);
                if(!possibleNode) {
                    this.validDirections.push({x:newNode.x-1,y:newNode.y,sourceX:newNode.x,sourceY:newNode.x});
                } 
            }
            //right
            if(newNode.x < this.sizeX -1) {
                var possibleNode = this.map.get(""+(newNode.x+2)+newNode.y);
                if(!possibleNode) {
                    this.validDirections.push({x:newNode.x+1,y:newNode.y,sourceX:newNode.x,sourceY:newNode.x});
                } 
            }
            // top
            if(newNode.y > 0) {
                var possibleNode = this.map.get(""+(newNode.x)+newNode.y-2);
                if(!possibleNode) {
                    this.validDirections.push({x:newNode.x,y:newNode.y-1,sourceX:newNode.x,sourceY:newNode.x});
                } 
            }
            // bottom
            if(newNode.y < this.sizeY -1) {
                var possibleNode = this.map.get(""+(newNode.x)+newNode.y+2);
                if(!possibleNode) {
                    this.validDirections.push({x:newNode.x,y:newNode.y+1,sourceX:newNode.x,sourceY:newNode.x});
                } 
            }
        }
    }

    
    render() {
        noStroke();
        fill(0);
        for (var node of this.map.values()) {
            rect(node.x*tileSize,node.y*tileSize,tileSize,tileSize);
        }
        fill(230,100,230);
        for(var i = 0; i < this.validDirections.length; i ++) {
            var element = this.validDirections[i];
            rect(element.x*tileSize,element.y*tileSize,tileSize,tileSize);
        }
    }
}