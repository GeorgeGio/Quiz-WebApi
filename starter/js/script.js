let timer = 100;




const questSet = [{
    questionE: "Question 1",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 0
},

{
    questionE: "Question 2",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 2
},
{
    questionE: "Questions 3",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 2
},
{
    questionE: "Questions 4",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 3
}


]

let currentQuestion = 0;
let countdownTimer = 0;
let questionTitle = document.querySelector("#question-title");
let choice = document.querySelector('#choices');
let hidePage = document.querySelector('#start');
let startPage = document.querySelector('#start-screen');
let questionArea = document.querySelector('#questions');


hidePage.addEventListener('click', function(){
    startPage.classList.add('hide');
    questionArea.classList.remove('hide');

    

})

renderQuestions(0);

function renderQuestions(i) {

    let quest1 = document.createElement("p");
    quest1.textContent = questSet[currentQuestion].questionE;
    questionTitle.appendChild(quest1);
    // console.log(quest1);
    // let answerButton = document.createElement["button"];
    // answerButton.textContent = questions[currentQuestion].answers[i];
    
    
    for (let i = 0; i < questSet[currentQuestion].answers.length; i++) {
        let answerButton = document.createElement("button");
        // console.log(answerButton);
        answerButton.textContent = questSet[currentQuestion].answers[i];
        choice.appendChild(answerButton);
        
        
    }
}
