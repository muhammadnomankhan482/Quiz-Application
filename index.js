const quiz = [
    {
        question: "What is your name ?",
        options: ["Hassan", "Kaif", "Arham", "Muneeb"], 
        correctAnswer: "Arham"
    },
    {
        question: "What is your age ?",
        options: [24, 22, 21, 20],
        correctAnswer: 24
    },
    {
        question: "What is your nationality ?",
        options: ["Pakistani", "Afghani", "Indian", "Bangladeshi"],
        correctAnswer: "Pakistani"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correctAnswer: "Islamabad"
    },
    {
        question: "Which is the national sport of Pakistan?",
        options: ["Hockey", "Cricket", "Football", "Squash"],
        correctAnswer: "Hockey"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "How many continents are there in the world?",
        options: [5, 6, 7, 8],
        correctAnswer: 7
    },
    {
        question: "Who was the founder of Pakistan?",
        options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Ayub Khan"],
        correctAnswer: "Quaid-e-Azam"
    },
    {
        question: "Which is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which is the fastest animal on land?",
        options: ["Tiger", "Cheetah", "Horse", "Lion"],
        correctAnswer: "Cheetah"
    }
    
]

var currentQuestion = 0;
var score = 0;
var correctCount = 0   
var wrongCount = 0     
var scoreElement = document.getElementById("score");
var quizOptions = document.getElementById("quizOption");
let currentSelection = null;
let nextQuestionButton = document.getElementById("next");
function renderQuestions(){
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz[currentQuestion].question;

    quizOptions.innerHTML = ''
    for(var i = 0; i < quiz[currentQuestion].options.length ; i++){
        quizOptions.innerHTML += `<li class = "non-active" onclick="checkCorrect(event)" style="padding-bottom: 20px">${quiz[currentQuestion].options[i]}</li>`
    }  
}


function goToNext(){
    if(quiz[currentQuestion].correctAnswer == currentSelection.innerHTML){
        score += 10;
        correctCount ++ ;  
    }else{
        wrongCount ++ ;    
    }

    scoreElement.innerHTML = score; 
    if(currentQuestion === quiz.length -1){
        showFinalResult()
        return;    
    }
    currentQuestion ++;
    renderQuestions()
    nextQuestionButton.disabled = true;
       
    if(currentQuestion === quiz.length - 1){
        nextQuestionButton.innerHTML = "Check Result";
    }
}

function checkCorrect(event){
    event.target.classList.add("active")    
    for(var i=0; i<quizOptions.children.length; i++){
        if(event.target !== quizOptions.children[i]){
            quizOptions.children[i].classList.remove("active")    
        }
    }

    currentSelection = event.target
    nextQuestionButton.disabled = false
    scoreElement.innerHTML = score  
}

function showFinalResult(){   
    var container = document.getElementById("container")
    container.innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Total Questions: ${quiz.length}</p>
        <p>Correct Answers: ${correctCount}</p>
        <p>Wrong Answers: ${wrongCount}</p>
        <p>Your Score: ${score} / ${quiz.length * 10}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>  
    `
}
renderQuestions();

// restarting the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;

    nextQuestionButton.innerHTML = "Next";

    document.getElementById("container").innerHTML = `
        <div class="header">
            <p id="question"></p>
            <button onclick="goToNext()" id="next" disabled>Next</button>
        </div>
        <ul id="quizOption"></ul>
        <div id="final"></div>
        <div id="score">Score </div>
    `;

    scoreElement = document.getElementById("score");
    quizOptions = document.getElementById("quizOption");
    nextQuestionButton = document.getElementById("next");

    renderQuestions();
}

