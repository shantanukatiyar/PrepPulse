// ===============================
// PrepPulse Smart Personalized Insights
// ===============================

const insightReport = JSON.parse(localStorage.getItem("report"));
const insightProfile = JSON.parse(localStorage.getItem("userProfile"));

const aiMessage = document.getElementById("aiMessage");

if (insightReport && aiMessage) {
    const skills = [
        {
            name: "DSA",
            score: insightReport.dsa.percentage,
            advice: "Practice arrays, strings, linked lists, recursion, and common interview patterns regularly."
        },
        {
            name: "Core CS",
            score: insightReport.core.percentage,
            advice: "Revise OOP, DBMS, OS, Computer Networks, and SQL with short notes and interview questions."
        },
        {
            name: "Aptitude",
            score: insightReport.aptitude.percentage,
            advice: "Work on percentages, ratios, time and work, logical reasoning, and timed practice sets."
        },
        {
            name: "Projects",
            score: insightReport.projects.percentage,
            advice: "Improve project explanations: problem statement, features, tech stack, challenges, and future scope."
        },
        {
            name: "Communication",
            score: insightReport.communication.percentage,
            advice: "Practice self-introduction, HR answers, project explanation, and speaking clearly in mock interviews."
        }
    ];

    const weakestSkill = skills.reduce((lowest, skill) =>
        skill.score < lowest.score ? skill : lowest
    );

    const strongestSkill = skills.reduce((highest, skill) =>
        skill.score > highest.score ? skill : highest
    );

    const namePrefix = insightProfile?.fullName
        ? `${insightProfile.fullName.split(" ")[0]}, `
        : "";

    let message = "";

    if (insightReport.overall >= 75) {
        message =
            `${namePrefix}your strongest area is ${strongestSkill.name} at ${strongestSkill.score}%. ` +
            `You are showing strong placement readiness. Keep this strength consistent and now focus on improving ${weakestSkill.name}, currently at ${weakestSkill.score}%. ` +
            weakestSkill.advice;
    } else if (insightReport.overall >= 50) {
        message =
            `${namePrefix}you have a good base for placement preparation. Your strongest area is ${strongestSkill.name} at ${strongestSkill.score}%. ` +
            `Your next priority should be ${weakestSkill.name}, currently at ${weakestSkill.score}%. ` +
            weakestSkill.advice;
    } else {
        message =
            `${namePrefix}start by focusing on ${weakestSkill.name}, currently at ${weakestSkill.score}%. ` +
            weakestSkill.advice +
            ` Your strongest current area is ${strongestSkill.name} at ${strongestSkill.score}%, so keep practicing it while improving one weak category at a time.`;
    }

    aiMessage.textContent = message;
}