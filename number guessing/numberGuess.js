const minNum=1;
const maxNum=100;
const answer=Math.round(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess the number between ${minNum} and ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter the valid number`);
    }
    else if(guess<minNum||guess>maxNum){
        window.alert(`Enter the valid number`);
    }
    else {
        attempts++;
        if(guess<answer){
            window.alert(`TOO LOW TRY AGAIN`);
        }
        else if(guess>answer){
            window.alert(`TOO HIGH TRY AGAIN`);
        }
        else{
            window.alert(`CORRECT the answer is ${answer}. It took you ${attempts} number of attempts `)
            running=false;
        }
    }
}