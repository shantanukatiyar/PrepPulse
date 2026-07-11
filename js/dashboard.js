// ===============================
// PrepPulse Dashboard Logic
// ===============================

const report = JSON.parse(localStorage.getItem("report"));
const userProfile = JSON.parse(localStorage.getItem("userProfile"));

if (!report) {
    alert("No assessment data found. Please complete the assessment first.");
    window.location.href = "profile.html";
} else {
    const overallScore = document.getElementById("overallScore");
    const totalMarks = document.getElementById("totalMarks");
    const readinessTitle = document.getElementById("readinessTitle");
    const overallMessage = document.getElementById("overallMessage");
    const scoreRing = document.querySelector(".score-ring");

    const welcomeTitle = document.getElementById("welcomeTitle");
    const welcomeText = document.getElementById("welcomeText");
    const profileDetails = document.getElementById("profileDetails");

    if (userProfile) {
        const firstName = userProfile.fullName.split(" ")[0];

        welcomeTitle.textContent = `${firstName}, here is your preparation snapshot`;

        welcomeText.textContent =
            "Review your current readiness, identify strong areas, and focus on the skills that need more attention.";

        profileDetails.innerHTML = `
            <span><i class="fa-solid fa-building-columns"></i> ${userProfile.college}</span>
            <span><i class="fa-solid fa-code"></i> ${userProfile.branch}</span>
            <span><i class="fa-solid fa-graduation-cap"></i> ${userProfile.year}</span>
        `;
    }

    overallScore.textContent = report.overall + "%";
    totalMarks.textContent = report.totalMarks;

    function getStatus(score) {
        if (score >= 75) return "Strong";
        if (score >= 50) return "Improving";
        return "Needs focus";
    }

    function getMaxMarks(skill) {
        const maxMarks = {
            dsa: 20,
            core: 20,
            aptitude: 12,
            projects: 16,
            communication: 12
        };

        return maxMarks[skill];
    }

    function updateSkill(skill, scoreId, marksId, statusId, barId) {
        const data = report[skill];

        document.getElementById(scoreId).textContent = data.percentage + "%";
        document.getElementById(marksId).textContent =
            data.marks + " / " + getMaxMarks(skill);

        document.getElementById(statusId).textContent =
            getStatus(data.percentage);

        setTimeout(() => {
            document.getElementById(barId).style.width =
                data.percentage + "%";
        }, 150);
    }

    updateSkill("dsa", "dsaScore", "dsaMarks", "dsaStatus", "dsaBar");
    updateSkill("core", "coreScore", "coreMarks", "coreStatus", "coreBar");
    updateSkill("aptitude", "aptitudeScore", "aptitudeMarks", "aptitudeStatus", "aptitudeBar");
    updateSkill("projects", "projectScore", "projectMarks", "projectStatus", "projectBar");
    updateSkill("communication", "communicationScore", "communicationMarks", "communicationStatus", "communicationBar");

    if (report.overall >= 75) {
        readinessTitle.textContent = "You are on a strong placement track.";
        overallMessage.textContent =
            "Your preparation is looking solid. Keep practicing consistently and focus on explaining your projects and solutions clearly in interviews.";
    } else if (report.overall >= 50) {
        readinessTitle.textContent = "You are building good placement readiness.";
        overallMessage.textContent =
            "You have a useful foundation. Strengthen your lowest-scoring categories with focused practice to become more interview-ready.";
    } else {
        readinessTitle.textContent = "You have a clear starting point.";
        overallMessage.textContent =
            "Start with fundamentals, practice regularly, and improve one category at a time. Small consistent steps can improve your readiness quickly.";
    }

    const progressDegree = report.overall * 3.6;

    scoreRing.style.background =
        `conic-gradient(#8b5cf6 0deg, #ec4899 ${progressDegree}deg, rgba(255,255,255,.1) ${progressDegree}deg)`;
}