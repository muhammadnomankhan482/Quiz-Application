
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

var currentQuestion = 0
var score = 0
var correctCount = 0 //
var wrongCount = 0 //
var scoreElement = document.getElementById("score")

function renderQuestions(){
    if(currentQuestion >=quiz.length){  //
        showFinalResult()           //
        return              //
    }                        //
    var questionElement = document.getElementById("question")
    questionElement.innerHTML = quiz[currentQuestion].question
    
    var quizOptions = document.getElementById("quizOption")
    
    quizOptions.innerHTML = ''
    for(var i = 0; i < quiz[currentQuestion].options.length ; i++){
        quizOptions.innerHTML += `<li onclick="checkCorrect(event)" style="padding-bottom: 20px">${quiz[currentQuestion].options[i]}</li>`
    }
}


function goToNext(){
    currentQuestion++
    // if(currentQuestion >= quiz.length){
    //     var changeButton =document.getElementById("next")
    //     changeButton.innerHTML = "Check Result"
    // }
    renderQuestions()
}
function checkCorrect(event){
    if (quiz[currentQuestion].correctAnswer == event.target.innerHTML){
        event.target.style.backgroundColor = "green"
        event.target.style.color = "white"
        score += 10
        correctCount ++   //
    } else{
        event.target.style.backgroundColor = "red"
        event.target.style.color = "white"
        wrongCount ++  //
    }
    scoreElement.innerHTML = score
}

function showFinalResult(){   //
    var container = document.getElementById("container")
    container.innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Total Questions: ${quiz.length}</p>
        <p>Correct Answers: ${correctCount}</p>
        <p>Wrong Answers: ${wrongCount}</p>
        <p>Your Score: ${score} / ${quiz.length * 10}</p>

    `
}
renderQuestions()

