var startButton = document.getElementById("start-btn");
var wrongAnswerEL = document.querySelector(".wrong");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var correctAnswerEL = document.getElementById("correctAnswer");

var timeLeft;
var timerInterval;
var index;

let shuffleQuestions, currentQuestion;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("start");
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  box.classList.remove("hide");
  startTimer();
  nextQuestion();
}

function renderQuestion() {}

function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.a.b.c.d.forEach((correctAnswerEL) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
    }
    correctAnswerEL.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (correctAnswerEL.firstChild) {
    correctAnswerEL.removeChild(correctAnswerEL.firstChild);
  }
}

function selectAnswer() {}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft -= 1;

    updateTimerValue();

    if (timeLeft <= 0 || currentQuestion === questions.length) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  if (timeLeft < 0) {
    timeLeft = 0;
  }
}
updateTimerValue();

function updateTimerValue() {
  timerEl.textContent = timeLeft;
}
//creating question array
var questions = [
  {
    question: "What data type returns true or false?",
    a: "number",
    b: "boolean",
    c: "string",
    d: "if else",
    correct: "b",
  },
  {
    question: "What is the most used programing language in 2023?",
    a: "Java",
    b: "C/C++",
    c: "Python",
    d: "JavaScript",
    correct: "c",
  },
  {
    question: "What year was JavaScript invented?",
    a: "1967",
    b: "2001",
    c: "1980",
    d: "None of the above",
    correct: "d",
  },
  {
    question: "Which keyword is NOT used to declare a variable?",
    a: "let",
    b: "const",
    c: "store",
    d: "var",
  },
];
