const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

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
//this is where you can modifies the time amount.
  var twoMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(twoMinutes, display);
};



const questions = [ 
  {
    question: "HTML stands for ",
    answers: [
        { text: "HighText Machine Language", correct: false},
        { text: "HyperSpeed Minecraft Language", correct: false},
        { text: "HyperText and links Markup Language", correct: false},
        { text: "HyperText Markup Language", correct: true}
    ]
},

{
  question: "The correct sequence of HTML tags for starting a webpage is  ",
  answers: [
      { text: "Head, Title, HTML, body", correct: false},
      { text: "HTML, Body, Title, Head", correct: false},
      { text: "HTML, Head, Title, Body", correct: false},
      { text: "HTML, Head, Title, Body", correct: true}
  ]
},

{
  question: "Which of the following element is responsible for making the text bold in HTML ",
  answers: [
      { text: "<pre>", correct: false},
      { text: "<a>", correct: false},
      { text: "<b>", correct: true},
      { text: "<br>", correct: false}
  ]
},

{
  question: "Which of the following tags have the largest heading in HTML ",
  answers: [
      { text: "<h1>", correct: true},
      { text: "<h3>", correct: false},
      { text: "<h5>", correct: false},
      { text: "<h6>", correct: false}
  ]
},

{
  question: "Which of the following tags are used to insert a line-break in HTML",
  answers: [
      { text: "<a>", correct: false},
      { text: "<pre>", correct: false},
      { text: "<br>", correct: true},
      { text: "<p>", correct: false}
  ]
},

{
  question: "Which of the following tag is used to define options in a drop-down selection list? ",
  answers: [
      { text: "<select>", correct: false},
      { text: "<list>", correct: false},
      { text: "<dropdown>", correct: false},
      { text: "<option>", correct: true}
  ]
},]