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
var count = 0
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
		    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
		    count++;

		    askQuestion();

		  });
	}
};

askQuestion();
//}
// var ReadFile = function(){
// 	// console.log('test');
// 	fs.readFile("questions.json", "utf8", function(error, data){
// 		if(error){
// 			return console.log(error);
// 		}
// 		// console.log(data);
// 		var splitArray = JSON.parse(data);
// 		// console.log(splitArray[0]);
// 	});
// };


// ReadFile();
// var question1 = new BasicCard();
// module.exports = ReadFile;