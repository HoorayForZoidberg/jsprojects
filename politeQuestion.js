// practicing control flow with while, if, and case

var answer = prompt("Add your question here!");
var pass = false
while(pass = false)    
    if(answer === "") {  
        console.log("I said add your question here, dammit!");
        answer = prompt("we're not leaving until you ask a question... punk!", "Hint: type a question here");
    } else if ("fuck".match(answer)) {
        console.log("Hey! No profanity please.");
        answer = prompt("Please ask me a question", "Hint: don't be rude");
    } else if (answer.slice(-1) != "?") {
        console.log("Ok but that's not a question though.");
        answer = prompt("Please ask me a question", "Hint: with a question mark");
    } else {
        pass = true;
    }
continue;
}
switch(answer) {
  case "What is your name?":
    console.log("HAL");
    break;
  case "What is your quest?":
    console.log("to seek the Holy Grail!");
    break;
  default:
    console.log("ok that was a nice question, but you don't pass the test...");
}
