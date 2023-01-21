var timerEl = document.getElementById("timer");
var correctAnswerEL = document.getElementById("correctAnswer");
var wrongAnswerEL = document.querySelector(".wrong");
var startButton = document.getElementById("start-btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function startGame() {
  console.log("start");
  startButton.classList.add("hide");
  correctAnswerEL.classList.remove("hide");
}

(function () {
  var sec = 50;
  timerEl = setInterval(() => {
    timerEl.textContent = "50:" - sec;
    sec--;
  }, 1000);
})();

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
];

//Eventlisteners
startButton.addEventListener("click", startGame);
