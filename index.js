const questions = [
    {
        id:1,
        question: 'PHP stand for ?',
        answers: [
            {
                text: 'Hypertext Preprocessor',
                correct: true
            },
            {
                text: 'Personal Home Page',
                correct: false
            },
            {
                text: 'Perl Hypertext Preprocessor',
                correct: false
            },
            {
                text: 'Professional Home Page ',
                correct: false
            }
        ]
    },
    {
        id:2,
        question: 'JS stand for ?',
        answers: [
            {
                text: 'JavaScript',
                correct: true
            },
            {
                text: 'Java Secure',
                correct: false
            },
            {
                text: 'JavaScript Secure',
                correct: false
            },
            {
                text: 'JavaScript Senior',
                correct: false
            }
        ]
    }
]

let total = 0;
let fal = 1;
let bar1R = 0;
let bar2R = 0;

const question = questions.map(x => {return `<p correct="${x.id}">${x.question}</p> ${x.answers.map(x => {return `<li correct="${x.correct}">${x.text}</li>`})}`});
const questionContent = questions.map((x, index) => {return `<p id="${x.id}">Câu ${index+1}: ${x.question}</p>`})
const answersContent = questions.map(x => {return `${x.answers.map(x => {return `<button class="col-5 m-3  rounded mt-3" correct="${x.correct}">${x.text}</button>`})}`});
const questionHead = document.querySelector("h1");
const answer = document.querySelector(".answer")
const li = document.querySelectorAll("li")
const test = document.querySelector(".answer")
const ponit = document.querySelector("h2")
const myTimeout = setTimeout(myGreeting, 5000);
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const tooltiptext = document.querySelector(".tooltiptext")

function incrementSeconds() {
    bar1R += 20;
    bar2.style.width = `${bar1R}%`
    tooltiptext.innerHTML = `${bar1R/20} Giây`
    if (bar1R === 100) {
        bar1R = 0
    }
    console.log(test.childNodes[1])
}

let bar1Run = setInterval(incrementSeconds, 1000);


const checkAnswer = () => {
    for(let i = 0; i < test.childNodes.length; i++) {
        test.childNodes[i].addEventListener("click", () => {
            if(test.childNodes[i].getAttribute("correct") === "true") {
                bar1R = 0
                ponit.innerHTML = total += 10;
                myGreeting();
                fal++
            } else if(test.childNodes[i].getAttribute("correct") === "false") {
                bar1R = 0
                myGreeting();
                fal++
            } 
        })
    }
    if(fal >= 2) {
        result();
        clearInterval(bar1Run)
        clearTimeout(showPoin)
    }
}
const run = () => {
    checkAnswer()
}
const myTime = setTimeout(run, 100)

questionHead.innerHTML = questionContent[0]
answer.innerHTML = answersContent[0]
function myGreeting() {
    questionHead.innerHTML = questionContent[1]
    answer.innerHTML = answersContent[1]
    checkAnswer();
}

const result = () => {
    alert(`Số điểm bạn đạt được là ${total}`)
}

const showPoin = setTimeout(() => {
    result();
    clearInterval(bar1Run)
},10100)