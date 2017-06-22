var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var fs = require("fs");

//split questions.js into an array of objects
//create new card objects
var questionsArray = [];

var question1 = new BasicCard("Whose face is on the $5 bill", "lincoln");
var question2 = new BasicCard("Who had the largest signature on the Declaration of Independence?", "john hancock");
var question3 = new BasicCard("What was the last state to join the United States?", "Hawaii");
var question4 = new BasicCard("How many colonies were originally in America", "13");
var question5 = new BasicCard("Who was the 4th president of the US", "james madison");

questionsArray.push(question1);
questionsArray.push(question2);
questionsArray.push(question3);
questionsArray.push(question4);
questionsArray.push(question5);

// for(var key in questionsArray){
// 	console.log(questionsArray[key].front);
var count = 0;
var score = 0;
//do recursion stuff here var 
var askQuestion = function(){
	if(count < 5){
		inquirer
		  .prompt([
		    // Here we create a basic text prompt.
		    {
		      type: "input",
		      message: questionsArray[count].front,
		      name: "question1"
		    }
		  ])
		  .then(function(inquirerResponse) {
		    //checks answers
		    // questionNum = "question" + count;
		    var response = inquirerResponse.question1.toLowerCase();
		    // console.log(response);
		    if(response == questionsArray[count].back){
		    	console.log(response + " is equal to " + questionsArray[count].back);
		    	score ++;
		    }
		    else{
		    	console.log(response + " is not equal to " + questionsArray[count].back);
		    }

		    count++;

		    askQuestion();
		    console.log("You scored " + score + " out of 5");
		  });
	}
};

askQuestion();


