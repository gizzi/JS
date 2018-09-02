
var values = [];
var stepsize = 10;
var speedUp = 1;
var steps;
var remainingPos;
var currentPos;

function setup() {
    
    createCanvas(800,500);
    steps = width/stepsize;
    values = [steps];
    for(var i = 0; i < steps;i ++) {
        values[i] = random(height);
    }

    remainingPos = steps;
    currentPos = 0;

}

function draw() {
    
    background(255);
    stroke(0);
    fill(160)
    
    
    selectionSort()
    //bubbleSort() 

    

    for(var i = 0; i < steps;i ++) {
        var pos = i * stepsize;
        rect(pos,height,stepsize,-values[i])
    }


    
}

function selectionSort() {
    for(var i = 0; i < speedUp; i++) {
        if(remainingPos > 0) {
            maxPos = 0;
            maxValue = 0;
            for(var j = 0; j <= remainingPos; j++) {
                if(values[j] > maxValue) {
                    maxValue = values[j];
                    maxPos = j;
                }
            } 
             
            swap(values,maxPos,remainingPos);
            
            remainingPos --;
            
        } else {
            noLoop();
        }
    }
}

function bubbleSort() {
    for(var i = 0; i < speedUp; i++) {
        if(remainingPos > 0) {
            if(currentPos > remainingPos -1) {
                remainingPos --;
                currentPos = 0;
            } 
            if(values[currentPos] > values[currentPos+1]) {
                swap(values,currentPos,currentPos+1);
            }
            currentPos ++;
        } else {
            noLoop();
        }
    }
}

function swap(array,oldPos,newPos) {
    var temp = array[oldPos];
    array[oldPos] = array[newPos];
    array[newPos] = temp;
}
