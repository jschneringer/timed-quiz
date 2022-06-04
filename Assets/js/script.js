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
  var startButton = document.getElementById("quizinfo");
  startButton.setAttribute("class", "hide");
 
  questions.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);

timer.textContent = time;

  nextQuestion();
}


// function to start questions after starting quiz.
function nextQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var title = document.getElementById("questions");
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

function selectQuestion() {
  if (this.value !== questions [currentQuestionIndex].answer) {
    time-+15;

    if (time< 0) {
      time = 0;
    }
    timer.textContent=time;

    feedback.textContent = "Wrong!"
    }
     else {
       feedback.textContent = "Correct!";
     }

      feedback.setAttribute("class", "feeback");
      setTimeout(function() {
        feedback.setAttribute("class", "feedback hide");
      }, 1000);

      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        quizEnd();
      } else {
        getQuestion();
      }
    }

function quizEnd() {
  clearInterval(timerId);

  var endscreen = document.getElementById("ending-quiz");
  endscreen.removeAttribute("class");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

  questions.setAttribute("class", "hide");

}

function clockTick() {
  // update time
  time--;
  timerId.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
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