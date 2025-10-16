const newCoordinate = require('./newCoordinate');

//returns loopLogic to continue or end game
function movePosition(newPosition, myField){
    
    
    if(newPosition[0] === myField.winPos[0] &&
       newPosition[1]=== myField.winPos[1]
    ){
        console.log('Congrats you Found the Hat !!!');
        console.log('You Win!!!');
        return false;
    }

    let hole1 = myField.holePos[0];
    let hole2 = myField.holePos[1];
     if((newPosition[0] === hole1[0]  &&
        newPosition[1] === hole1[1]) |
        (newPosition[0] === hole2[0] &&
        newPosition[1] === hole2[1]
        )
     ){
        console.log('Whoops you fell into a hole.');
        return false;
     }
    

    return true;

    
}

module.exports = movePosition;