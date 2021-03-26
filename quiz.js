const quizData = [
    {
        question: "who is the prime minister of India?",
        a: "Narendra modi",
        b: "Ramnath kovind",
        c: "abcd",
        d: "other",
        correct: "a"
    }, {
        question: "who is the father of the nation?",
        a: "Nehru",
        b: "Subash Chandra Bose",
        c: "Mahatma Gandhi",
        d: "Rajeev Gandhi",
        correct: "c"

    }, {
        question: "what is the trending programming language?",
        a: "java",
        b: "javaScript",
        c: "reactjs",
        d: "angular js",
        correct: "d"
    },
    {
        question: "what is the capital of Telengana?",
        a: "Mumbai",
        b: "Chennai",
        c: "Delhi",
        d: "Hyderabad",
        correct: "d"

    }, {
        question: "Multiplication of 45*5?",
        a: "215",
        b: "225",
        c: "230",
        d: "240",
        correct: "b"
    }


];
let currentQuestion = 0;
let score = 0;

const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("next")

let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswer();

    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;

}
function getSelected() {
    let answer=undefined;
answerEl.forEach((answerEl) => {
        if (answerEl.checked) {

            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {


    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });


}



btn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        
        
        if (answer === quizData[currentQuestion].correct) {
            score++;

        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> you answered correctly at  ${score}/${quizData.length} questions, </h2>`;
    }
}

});



   