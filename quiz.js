let quiz = [];
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startBtn");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

const questionCount = document.getElementById("questionCount");
const categoryName = document.getElementById("categoryName");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressBar = document.getElementById("progressBar");

const finalScore = document.getElementById("finalScore");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const reviewContainer = document.getElementById("reviewContainer");
const analysisContent = document.getElementById("analysisContent");


startBtn.addEventListener("click", function() {

    startNewQuiz();

    homePage.style.display = "none";
    quizPage.style.display = "flex";
    resultPage.style.display = "none";

    loadQuestion();

});


function startNewQuiz() {

    quiz = [...questionBank]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quiz.length).fill(null);

}


function loadQuestion() {

    const current = quiz[currentQuestion];

    questionCount.textContent =
        "Question " + (currentQuestion + 1) + " / " + quiz.length;

    categoryName.textContent = current.category;

    questionText.textContent = current.question;

    progressBar.style.width =
        ((currentQuestion + 1) / quiz.length) * 100 + "%";

    optionsContainer.innerHTML = "";


    current.options.forEach(function(option, index) {

        const label = document.createElement("label");

        label.className = "option";


        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;


        if(userAnswers[currentQuestion] === index) {

            radio.checked = true;

            label.classList.add("selected");

        }


        radio.addEventListener("change", function() {

            userAnswers[currentQuestion] = index;


            document.querySelectorAll(".option").forEach(function(item) {

                item.classList.remove("selected");

            });


            label.classList.add("selected");

        });


        label.appendChild(radio);


        const span = document.createElement("span");

        span.textContent = option;


        label.appendChild(span);

        optionsContainer.appendChild(label);

    });


    previousBtn.disabled = currentQuestion === 0;


    if(currentQuestion === quiz.length - 1) {

        nextBtn.textContent = "Submit";

    } else {

        nextBtn.textContent = "Next";

    }

}


previousBtn.addEventListener("click", function() {

    if(currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});


nextBtn.addEventListener("click", function() {

    if(userAnswers[currentQuestion] === null) {

        alert("Please select an answer.");

        return;

    }


    if(currentQuestion < quiz.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        calculateResult();

    }

});


function calculateResult() {

    score = 0;


    quiz.forEach(function(question, index) {

        if(userAnswers[index] === question.answer) {

            score++;

        }

    });


    quizPage.style.display = "none";

    resultPage.style.display = "flex";


    finalScore.textContent = score + " / " + quiz.length;


    const percent = Math.round((score / quiz.length) * 100);


    percentage.textContent = percent + "%";


    if(percent >= 90) {

        grade.textContent = "Grade : A+";

    } else if(percent >= 80) {

        grade.textContent = "Grade : A";

    } else if(percent >= 70) {

        grade.textContent = "Grade : B";

    } else if(percent >= 60) {

        grade.textContent = "Grade : C";

    } else {

        grade.textContent = "Grade : Fail";

    }


    createPieChart();

    showAnalysis();

    showReview();

}


function getCategoryResults() {

    const results = {

        HTML: {
            correct: 0,
            total: 0
        },

        CSS: {
            correct: 0,
            total: 0
        },

        JavaScript: {
            correct: 0,
            total: 0
        },

        Basics: {
            correct: 0,
            total: 0
        }

    };


    quiz.forEach(function(question, index) {

        results[question.category].total++;


        if(userAnswers[index] === question.answer) {

            results[question.category].correct++;

        }

    });


    return results;

}


function createPieChart() {

    const results = getCategoryResults();


    const oldChart = Chart.getChart("pieChart");


    if(oldChart) {

        oldChart.destroy();

    }


    new Chart(document.getElementById("pieChart"), {

        type: "pie",


        data: {

            labels: [
                "HTML",
                "CSS",
                "JavaScript",
                "Basics"
            ],


            datasets: [{

                data: [

                    results.HTML.correct,

                    results.CSS.correct,

                    results.JavaScript.correct,

                    results.Basics.correct

                ],


                backgroundColor: [

                    "#1565C0",
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"

                ]

            }]

        },


        options: {

            responsive: true,


            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}


function showAnalysis() {

    const results = getCategoryResults();


    analysisContent.innerHTML = `

        <div class="analysis-card">

            <h3>HTML</h3>

            <p>
                ${results.HTML.correct} /
                ${results.HTML.total} Correct
            </p>

        </div>


        <div class="analysis-card">

            <h3>CSS</h3>

            <p>
                ${results.CSS.correct} /
                ${results.CSS.total} Correct
            </p>

        </div>


        <div class="analysis-card">

            <h3>JavaScript</h3>

            <p>
                ${results.JavaScript.correct} /
                ${results.JavaScript.total} Correct
            </p>

        </div>


        <div class="analysis-card">

            <h3>Web Basics</h3>

            <p>
                ${results.Basics.correct} /
                ${results.Basics.total} Correct
            </p>

        </div>

    `;

}


function escapeHTML(text) {

    return text

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;");

}


function showReview() {

    let html = "";


    quiz.forEach(function(question, index) {


        html += `

            <div class="review-question">

                <h3>
                    Q${index + 1}.
                    ${escapeHTML(question.question)}
                </h3>

        `;


        question.options.forEach(function(option, optionIndex) {


            let className = "review-option";


            if(optionIndex === question.answer) {

                className += " correct";

            }


            if(

                userAnswers[index] === optionIndex &&

                optionIndex !== question.answer

            ) {

                className += " wrong";

            }


            html += `

                <div class="${className}">

                    ${escapeHTML(option)}

                </div>

            `;

        });


        html += `

            </div>

        `;

    });


    reviewContainer.innerHTML = html;

}


retryBtn.addEventListener("click", function() {

    startNewQuiz();

    resultPage.style.display = "none";

    quizPage.style.display = "flex";

    loadQuestion();

});