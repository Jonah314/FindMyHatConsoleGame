// newCoordinate returns a new Coordinate
function newCoordinate(fieldObject, Dir){
    const x = fieldObject.startPos[0];
    const y = fieldObject.startPos[1];
    
    if(Dir== 'w' | Dir == 'W'){
        // The X value should decrease by 1 Since we are going up.
        fieldObject.startPos= [x-1,y];
    }else if ( Dir == 'a'| Dir == 'A'){
        // The Y value should decrease by 1 Since we are moving left
        fieldObject.startPos = [x, y-1];
    }else if ( Dir == 's'| Dir == 'S'){
        //The x Value should increase by 1
        fieldObject.startPos = [x+1, y];
    }else if (Dir =='d'| Dir == 'D'){
        // The y value should increase by 1 since we are moving right
        fieldObject.startPos = [x, y+1];
    }
    
    console.log( 'your new position is ' + fieldObject.startPos + ' !!!');
    const newPos = fieldObject.startPos;
    return newPos;
}


module.exports = newCoordinate;