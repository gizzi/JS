

class Subjects {

    constructor(spawnX,spawnY) {
        this.spawnX = spawnX;
        this.spawnY = spawnY;
        this.subjects = [];
        this.generateSubjects();   
        this.winner = null; 
    }

    generateOffsprings(parent) {
        this.subjects = [];

        for(var i = 0; i < numSubjects ; i ++) {
            var subject = parent.clone();
            subject.mutate();
            this.subjects.push(subject);
        }
    }

    fitness(map) {
        for(var i = 0; i < numSubjects ; i ++) {
            this.subjects[i].fitness(map);
        }
    }

    leader() {
        var leader;
        var fitness = -1;
        for(var i = 0; i < numSubjects ; i ++) {
            var subjectFitness = this.subjects[i].currentFitness;
            if(fitness < 0 || subjectFitness < fitness ) {
                leader = this.subjects[i];
                fitness = subjectFitness;
            }
        }
        return leader;
    }

    generateSubjects() {
        for(var i = 0; i < numSubjects ; i ++) {
            var subject = new Subject(this.spawnX,this.spawnY);
            this.subjects.push(subject);
        }
    }

    moveSubjects(map,step) {
        for(var i = 0; i < this.subjects.length; i ++) {
            this.subjects[i].moveSubject(map,step);
            if(this.subjects[i].done) {
                this.winner = this.subjects[i];
            }
        }
    }

    renderSubjects() {
        for(var i = 0; i < this.subjects.length; i ++) {
            this.subjects[i].renderSubject();
        }
    }
}