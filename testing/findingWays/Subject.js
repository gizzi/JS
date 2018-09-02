

class Subject {
    constructor(spawnX,spawnY) {
        this.spawnX = spawnX;
        this.spawnY = spawnY;
        this.mind = new Mind();
        this.position = createVector(offsetLeft + ((spawnX+0.5) * tilesize),offsetTop + ((spawnY+0.5) * tilesize));
        this.done = false;
        this.currentFitness = -1;
    }

    moveSubject(map,step) {
        var direction = this.mind.getDirection(step);
        
        var planned = createVector(direction.x,direction.y);
        planned.normalize();
        planned.mult(subjectSpeed);

        planned = this.verifyMove(map,this.position,planned);


        this.position.add(planned);
    }

    mutate() {
        this.mind.mutate();
    }

    fitness(map) {
        var minDist = -1; 
        for(var i = 0; i < map.tiles.length; i ++) {
            for(var j = 0; j < map.tiles[0].length; j ++) {
                var tile = map.tile(j,i);
                if(tile.type == TileEnum.end) {
                    var tileCenter = tile.center();
                    var currentDist = dist(this.position.x,this.position.y,tileCenter.x,tileCenter.y);
                    if(minDist < 0 || currentDist < minDist) {
                        minDist = currentDist;
                    }
                }
            }
        }
        this.currentFitness = minDist;
    }


    verifyMove(map, position, direction) {
        var validMove = true;
        var target = p5.Vector.add(position,direction);
        var tileX = Math.floor((target.x-offsetLeft)/tilesize);
        var tileY = Math.floor((target.y-offsetTop)/tilesize);
        var targetTile = map.tile(tileX,tileY);
        if(targetTile == null) {
            validMove = false;
        }
        if(validMove) {
            if(targetTile.type == TileEnum.blank) {
                validMove = false;
            }
            if(targetTile.type == TileEnum.end) {
                this.done = true;
            }
        }
        if(validMove) {
            return direction;
        } else {
            return createVector(0,0);
        }
    }

    renderSubject() {
        fill(color(255,100,100))
        ellipse(this.position.x,this.position.y,subjectSize);
    }

    clone() {
        var subject = new Subject(this.spawnX,this.spawnY);
        subject.mind = this.mind.clone();
        return subject
    }
}