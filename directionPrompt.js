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
            const validateResult = validate(Dir);
            const moveValidateResult = moveValidation(fieldObject, Dir);
            
            if(validateResult===true & moveValidateResult === true){
                console.log('congrats both validations passed')
                resolve(fieldObject.startPos);
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


function closeInput(){
    readline.close();
}

module.exports = {
    directionPrompt,
    closeInput
};