var timerEl = document.querySelector("#timer");
var correctAnswerEL = document.querySelector("#correctAnswer");
var wrongAnswerEL = document.querySelector(".wrong");
var startButton = document.querySelector(".startButton");

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
