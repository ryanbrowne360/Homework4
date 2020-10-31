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

var results = document.querySelector("#results")
var timer = document.querySelector("#timer")
var doneQuiz = false
var score = 0
var timeLeft = 30

// Functin created to start timer countdown
function startTimer() {
    timer.textContent = timeLeft
    timeLeft--

    // If there is no time left the timer disappears and you will see the final page
    if (timeLeft <= 0) {
        clearInterval(setInterval)
        for (var i = 0; i < 5; i++) {
            questions[i].classList.add("hide")
        }
        results.classList.remove("hide")
        timer.classList.add("hide")
    }

    // If on the final page the timer will disappear
    if (doneQuiz) {
        clearInterval(setInterval)
        timer.classList.add("hide")
    }
}

// Button that starts quiz
startButton.addEventListener("click", startQuiz)

// Function that sets score, activates timer and switches to next question
function startQuiz() {
    var timeInterval = setInterval(startTimer, 1000)
    score = 0
    startScreen.classList.add("hide")
    q1.classList.remove("hide")
}

// Activating clicking
q1.addEventListener("click", checkAnswer1)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer1(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion2()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion2()
    }
}

// Switch to next question
function askQuestion2() {
    q1.classList.add("hide")
    q2.classList.remove("hide")
}

// Activating clicking
q2.addEventListener("click", checkAnswer2)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer2(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion3()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion3()
    }
}

// Switch to next question
function askQuestion3() {
    q2.classList.add("hide")
    q3.classList.remove("hide")
}

// Activating clicking
q3.addEventListener("click", checkAnswer3)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer3(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion4()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion4()
    }
    console.log(score)
    console.log("ask question 4")
}

// Switch to next question
function askQuestion4() {
    q3.classList.add("hide")
    q4.classList.remove("hide")
}

// Activating clicking
q4.addEventListener("click", checkAnswer4)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer4(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion5()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion5()
    }
}

// Switch to next question
function askQuestion5() {
    q4.classList.add("hide")
    q5.classList.remove("hide")
}

// Activating clicking
q5.addEventListener("click", checkAnswer5)

// Listening for clicks and adding to score if correct answer chosen
function checkAnswer5(event) {
    if (event.target.classList.contains("correct"))
        score++
    console.log("your score is " + score)
    showFinalPage()
}

// Switch to final page / results
function showFinalPage() {
    q5.classList.add("hide")
    results.classList.remove("hide")
    doneQuiz = true
}

// Make submit button clickable
document.querySelector(".submit").addEventListener("click", submitScore)

// When you click submit it will store your score and initials and display them on the screen
function submitScore() {
    var userName = document.querySelector(".form-control").value
    var scoreList = JSON.parse(localStorage.score || "[]")
    var userList = JSON.parse(localStorage.userName || "[]")
    scoreList.push(score)
    userList.push(userName)
    localStorage.score = JSON.stringify(scoreList)
    localStorage.userName = JSON.stringify(userList)

    // This chooses where to place the info gathered
    document.querySelector(".input-username").textContent = userName
    document.querySelector(".input-score").textContent = score
}