const profileForm = document.getElementById("profileForm");
const formMessage = document.getElementById("formMessage");

const existingProfile = JSON.parse(localStorage.getItem("userProfile"));

if (existingProfile) {
    document.getElementById("fullName").value = existingProfile.fullName || "";
    document.getElementById("email").value = existingProfile.email || "";
    document.getElementById("college").value = existingProfile.college || "";
    document.getElementById("branch").value = existingProfile.branch || "";
    document.getElementById("year").value = existingProfile.year || "";
}

profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const college = document.getElementById("college").value.trim();
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;

    if (!fullName || !email || !college || !branch || !year) {
        formMessage.textContent = "Please complete all fields before continuing.";
        return;
    }

    const userProfile = {
        fullName,
        email,
        college,
        branch,
        year
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    window.location.href = "assessment.html";
});