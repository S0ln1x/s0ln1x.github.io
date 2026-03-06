let questions = []

const card = document.getElementById("card")
const questionEl = document.getElementById("question")
const answerEl = document.getElementById("answer")
const nextBtn = document.getElementById("nextBtn")

fetch("./questions.json")
.then(res => res.json())
.then(data => {

questions = data
newQuestion()

})

function newQuestion(){

card.classList.remove("flip")

const random = Math.floor(Math.random()*questions.length)
const q = questions[random]

questionEl.innerText = q.question
answerEl.innerText = q.answer

}

card.addEventListener("click", () => {
card.classList.toggle("flip")
})

nextBtn.addEventListener("click", newQuestion)