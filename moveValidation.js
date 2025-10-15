const newCoordinate = require('./newCoordinate');


function moveValidation(fieldObject, Dir){
    console.log('your direction is'+ Dir);
    console.log(fieldObject.startPos);
    newCoordinate(fieldObject, Dir);
    
}




module.exports = moveValidation;