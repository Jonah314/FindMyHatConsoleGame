const validate = require('./validateInput');
const moveValidation = require('./moveValidation');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function directionPromise(fieldObject){
    return new Promise ((resolve)=> {
        function ask(){
            readline.question('Which Direction Would You like to Go?', Dir =>{
            const result = validate(Dir);
            
            
            if(result===true){
                moveValidation(fieldObject, Dir);
                resolve(Dir);
            }else {
                ask();
            }
        });
}

        ask();
        
    });
}

async function directionPrompt(fieldObject){
    const direction = await directionPromise(fieldObject);
    console.log( 'you chose '+ direction);
    return direction;
}

module.exports=directionPrompt;