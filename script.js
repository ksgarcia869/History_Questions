//Function to check each question, using the question name as a parameter
//I still want to find a more optimal way of approaching this, planning to look
//into it more next iteration
function checkQuestion(elID) {
    //Setting the boolean variable 'correct' to false
    var correct = false;
    //Making a variable for each question input value 
    var question1 = document.WordMultChoice.question1.value;
    var question2 = document.WordMultChoice.question2.value;
    var question3 = document.WordMultChoice.question3.value;
    var question4 = document.WordMultChoice.question4.value;
    var question5 = document.WordMultChoice.question5.value;
    var question6 = document.FillInTheBlank.question6.value;
    var question7 = document.FillInTheBlank.question7.value;
    var question8 = document.FillInTheBlank.question8.value;
    //Using a switch case based on which question they're on
    //if the answer is correct to its corresponding question, correct
    //is now true
    switch (elID) {
        case "question1":
            if (question1 == "Austria-Hungary") { correct = true; }
            break;
        case "question2":
            if (question2 == "Q3") { correct = true; }
            break;
        case "question3":
            if (question3 == "Q3") { correct = true; }
            break;
        case "question4":
            if (question4 == "Q3") { correct = true; }
            break;
        case "question5":
            if (question5 == "Q4") { correct = true; }
            break;
        case "question6":
            if (question6 == "Romania") { correct = true; }
            break; 
        case "question7":
            if (question7 == "Mexico") { correct = true; }
            break; 
        case "question8":
            if (question8 == "April 6, 1917") { correct = true; }
            break; 
        default:
            break;
    }

    //Checking if correct is true, and if so notifies the user of results
    if (correct == true) {
        alert("Correct!");
    } else {
        alert("The Wrong Answer!!");
    }
}
