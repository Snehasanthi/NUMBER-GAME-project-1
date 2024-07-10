var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess==random){
        display("Congratulation! You guessed the number in"+attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Too low!,don't give up")
    }
    else if(guess>random){
        display("Too high!,be calm and think");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;
}


