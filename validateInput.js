 function validate(input){
    
    const allowed = ['w', 'a', 's', 'd'];
    if (allowed.includes(input.toLowerCase())){
        
        return true;
    } else {
        console.log("Please Input a valid value, To Move: \n          W = Up \n          A = Left \n          S = Down  \n          D = Right");
        return false;
    }

}

module.exports = validate;