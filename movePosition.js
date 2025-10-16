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
    return true;

    
}

module.exports = movePosition;