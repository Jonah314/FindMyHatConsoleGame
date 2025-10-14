const validate = require('./validateInput');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// directionPrompt recieves a direction to move in, and return that direction
function directionPrompt(){
    readline.question('\n Which Direction Would You like to Go?', Dir => {
    console.log(`You chose ${Dir}`);
    const result = validate(Dir);
    if(result===true){
        readline.close();
        return Dir;
    }else {
        directionPrompt();
        
    }
    
    
    
});
}

module.exports = directionPrompt;