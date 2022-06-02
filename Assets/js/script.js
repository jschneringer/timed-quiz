var time = question.length * 15;
var timer2 
var questions = document.getElementById("questions");
var timer = document.getElementById("timer");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var startButton = document.getElementById("startbutton");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");


function startquiz () {
    var quiz = document.getElementById ("quiz");
    quiz.setAttribute("class", "hide"); 
    questions.removeAttribute("class");

    timer2 = setInterval (clock,1000);
    timer.textContent = time;
    
    nextquestion ();

}; 

function nextquestion (){
var currentQuestion = questions [0];
var name = document.getElementById("questionsname");
name.textContent = currentQuestion.name;
choices.innerHTML = "";

currentQuestion.choices.array.forEach((option, i) => { 
    var quizselection = document.createElement ("button");
    quizselection.setAttribute = ("class", "choice");
    quizselection.setAttribute = ("value", option);
    quizselection.textContent = i + 1 + "." + option;
    quizselection.onclick = selectQuestion;
    choices.appendChild (quizselection) 
});

}
function selectQuestion () {

    
}


startButton.onclick = startquiz;