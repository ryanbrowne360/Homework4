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


startButton.addEventListener("click", startQuiz)


function startQuiz() {
    var timeInterval = setInterval(startTimer, 1000)
    score = 0
    startScreen.classList.add("hide")
    q1.classList.remove("hide")
}

q1.addEventListener("click", checkAnswer1)


function checkAnswer1(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion2()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion2()
    }
}

function askQuestion2() {
    q1.classList.add("hide")
    q2.classList.remove("hide")
}


q2.addEventListener("click", checkAnswer2)


function checkAnswer2(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion3()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion3()
    }
}


function askQuestion3() {
    q2.classList.add("hide")
    q3.classList.remove("hide")
}

q3.addEventListener("click", checkAnswer3)


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


function askQuestion4() {
    q3.classList.add("hide")
    q4.classList.remove("hide")
}

q4.addEventListener("click", checkAnswer4)


function checkAnswer4(event) {
    if (event.target.classList.contains("correct")) {
        score++
        askQuestion5()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion5()
    }
}


function askQuestion5() {
    q4.classList.add("hide")
    q5.classList.remove("hide")
}

q5.addEventListener("click", checkAnswer5)


function checkAnswer5(event) {
    if (event.target.classList.contains("correct"))
        score++
    console.log("your score is " + score)
    showFinalPage()
}


function showFinalPage() {
    q5.classList.add("hide")
    results.classList.remove("hide")
    doneQuiz = true
}

document.querySelector(".submit").addEventListener("click", submitScore)

function submitScore() {
    var userName = document.querySelector(".form-control").value
    var scoreList = JSON.parse(localStorage.score || "[]")
    var userList = JSON.parse(localStorage.userName || "[]")
    scoreList.push(score)
    userList.push(userName)
    localStorage.score = JSON.stringify(scoreList)
    localStorage.userName = JSON.stringify(userList)

  
    document.querySelector(".input-username").textContent = userName
    document.querySelector(".input-score").textContent = score
}