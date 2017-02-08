/*
This is a slightly more advanced version of the CodeAcademy exercise for while and loop statements.
There's room to turn this into a text based RPG or CYOA type game.
*/

var slaying = true;
var totalDamage = 0;
var totalHealth = 10;
while(slaying){
    var youHit = Math.floor(Math.random()*2);
    if (youHit){
        console.log("You hit the Dragon!");
        var damageThisRound = Math.floor(Math.random()*5 + 1);
        totalDamage = totalDamage + damageThisRound;
        if(totalDamage >= 10){ 
            console.log("Awesome, you killed the Dragon!");
            slaying = false;
        } else { 
            console.log("Keep fighting!");
        }
    } else {
        console.log("Argh! The Dragon roasts your face!!!");
        totalHealth = totalHealth - Math.floor(Math.random()*4);
        if (totalHealth <= 0){
            console.log("Hrmph! The Dragon bested you. Better luck next time...");
            slaying = false;
        }
    } 
}