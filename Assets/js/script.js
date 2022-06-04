//variables
var currentQuestionIndex = 0;
var time = question.length * 15;
var timerId;

var questions = document.getElementById("questions");
var timer = document.getElementById("timer");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var startButton = document.getElementById("startbutton");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");



//clicking button to start quiz
function startQuiz() {
  var startScreen = document.getElementById("quizinfo");
  startScreen.setAttribute("class", "hide");
 
  questions.removeAttribute("class");

  //timerId = setInterval(timer, 1000);

timer.textContent = time;

  nextQuestion();
}


// function to start questions after starting quiz.
function nextQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var title = document.getElementById("question-name");
  title.textContent = currentQuestion;   //DEBUG

  choices.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {

    var quizSelection = document.createElement("button");
    quizSelection.setAttribute("class", "choice");
    quizSelection.setAttribute("value", choice);

    quizSelection.textContent = i + 1 + "." + choice;
    
    quizSelection.onclick = selectQuestion;

    choices.appendChild(quizSelection);

  });
}

function quizEnd() {
  clearInterval(timerId);

  var endscreen = document.getElementById("ending-quiz");
  endscreen.removeAttribute("class");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

  questions.setAttribute("class", "hide");

}


function saveHighscore () {
  var initials = initials.value.trim();


  if (initials !== "") {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";

  }
}

function checkForEnter (event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

startButton.onclick = startQuiz;

initials.onkeyup = checkForEnter;

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var twoMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(twoMinutes, display);
};