let questions = [{
    question: "Q1",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 0
},

{
    question: "Q2",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 2
},
{
    question: "Q3",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 2
},
{
    question: "Q4",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 3
}


]

let currentQuestion = 0;
let countdownTimer = 0;
let questionArea = document.querySelector("#question-box")

function renderQuestions() {

    let quest1 = document.createElement("p");
    quest1.textContent = questions[questionIndex].question;
    questionArea.appendChild(quest1);

    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        let answerButton = document.createElement["button"];
        answerButton.textContent = questions[questionIndex].answers[i];
        
        
    }
    
}