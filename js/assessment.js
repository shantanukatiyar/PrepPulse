// ===============================
// PrepPulse Assessment Logic
// ===============================

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

const questionElement = document.getElementById("question");
const categoryElement = document.querySelector(".category");
const optionsContainer = document.querySelector(".options");

const currentQuestionText = document.getElementById("currentQuestion");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = questions[currentQuestion];

    categoryElement.textContent = q.category;
    questionElement.textContent = q.question;
    currentQuestionText.textContent = currentQuestion + 1;

    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progressPercent.textContent = Math.round(percentage) + "%";
    progressFill.style.width = percentage + "%";

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        const div = document.createElement("div");

        div.classList.add("option");
        div.textContent = option;

        if (answers[currentQuestion] === index + 1) {
            div.classList.add("selected");
        }

        div.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach((item) => {
                item.classList.remove("selected");
            });

            div.classList.add("selected");
            answers[currentQuestion] = index + 1;
        });

        optionsContainer.appendChild(div);
    });

    prevBtn.disabled = currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1 ? "Submit" : "Next →";
}

function getCategoryScore(start, end, maxMarks) {
    let marks = 0;

    for (let i = start; i <= end; i++) {
        marks += answers[i];
    }

    return {
        marks: marks,
        percentage: Math.round((marks / maxMarks) * 100)
    };
}

function createReport() {
    const dsa = getCategoryScore(0, 4, 20);
    const core = getCategoryScore(5, 9, 20);
    const aptitude = getCategoryScore(10, 12, 12);
    const projects = getCategoryScore(13, 16, 16);
    const communication = getCategoryScore(17, 19, 12);

    const totalMarks =
        dsa.marks +
        core.marks +
        aptitude.marks +
        projects.marks +
        communication.marks;

    return {
        overall: Math.round((totalMarks / 80) * 100),
        totalMarks: totalMarks,
        dsa: dsa,
        core: core,
        aptitude: aptitude,
        projects: projects,
        communication: communication
    };
}

nextBtn.addEventListener("click", () => {
    if (answers[currentQuestion] === null) {
        alert("Please select an option before continuing.");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        return;
    }

    localStorage.setItem("answers", JSON.stringify(answers));

    const report = createReport();
    localStorage.setItem("report", JSON.stringify(report));

    window.location.href = "dashboard.html";
});

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

loadQuestion();