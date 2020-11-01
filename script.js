// Assigned Variables
var startButton = document.querySelector(".start-btn")
var startScreen = document.querySelector("#beginQuiz")
var questions = [
    q1,
    q2,
    q3,
    q4,
    q5
]
var q1 = document.querySelector("#q1")
var q2 = document.querySelector("#q2")
var q3 = document.querySelector("#q3")
var q4 = document.querySelector("#q4")
var q5 = document.querySelector("#q5")
var score = 0
var timeLeft = 30
var results = document.querySelector("#results")
var timer = document.querySelector("#timer")
var doneQuiz = false

function startTimer() {
    timer.textContent = timeLeft
    timeLeft--

 
    if (timeLeft <= 0) {
        clearInterval(setInterval)
        for (var i = 0; i < 5; i++) {
            questions[i].classList.add("hide")
        }
        results.classList.remove("hide")
        timer.classList.add("hide")
    }

    if (doneQuiz) {
        clearInterval(setInterval)
        timer.classList.add("hide")
    }
}
