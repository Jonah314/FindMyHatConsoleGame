const validate = require('./validateInput');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function directionPromise(){
    return new Promise ((resolve)=> {
        function ask(){
            readline.question('Which Direction Would You like to Go?', Dir =>{
            const result = validate(Dir);
            if(result===true){
                resolve(Dir);
            }else {
                ask();
            }
        });
}

        ask();
    });
}

async function directionPrompt(){
    const direction = await directionPromise();
    console.log(`You chose  ${direction} as your direction`);
}

module.exports=directionPrompt;