var map;
var subjects = [];
var counter = 0;
var increment = 0;
var reinforce = 0;
function setup() {
    
    createCanvas(800,500);
    map = new Map();
    subjects = new Subjects(map.start.x,map.start.y);
}

function draw() {
    map.renderMap();
    for(var i = 0; i < booster; i++) {
        subjects.moveSubjects(map,counter);
    }
    subjects.renderSubjects();
    
    if(counter > 0 && counter % (initialSteps+(incrementStepping*increment)) == 0) {
        subjects.fitness(map);
        var leader = subjects.leader();
        subjects.generateOffsprings(leader);
        counter = 0;
        if(reinforce > reinforceGenerations) {
            increment ++;
            reinforceGenerations = 0;
        }
        reinforce ++;
        
    }
    
    if(subjects.winner != null) {
        console.log("steps :" + subjects.winner.mind.directions.length);
        console.log("steps :" + subjects.winner.mind.directions);
        
        noLoop();  
    }
    counter ++;
    //noLoop();
}
