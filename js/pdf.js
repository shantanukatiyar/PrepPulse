// ===============================
// PrepPulse Single Page PDF Report
// ===============================

const downloadReportBtn = document.getElementById("downloadReport");

if (downloadReportBtn) {
    downloadReportBtn.addEventListener("click", () => {
        const report = JSON.parse(localStorage.getItem("report"));
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));

        if (!report) {
            alert("No assessment report found.");
            return;
        }

        const insightText = document.getElementById("aiMessage").textContent;

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        const pageWidth = pdf.internal.pageSize.getWidth();

        function addWrappedText(text, x, y, maxWidth, lineHeight) {
            const lines = pdf.splitTextToSize(text, maxWidth);
            pdf.text(lines, x, y);
            return y + lines.length * lineHeight;
        }

        function getStatus(score) {
            if (score >= 75) return "Strong";
            if (score >= 50) return "Improving";
            return "Needs Focus";
        }

        const today = new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        const studentName = userProfile?.fullName || "PrepPulse Student";
        const college = userProfile?.college || "Not provided";
        const branch = userProfile?.branch || "Not provided";
        const year = userProfile?.year || "Not provided";

        // Header
        pdf.setFillColor(24, 24, 27);
        pdf.rect(0, 0, pageWidth, 38, "F");

        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(21);
        pdf.text("PrepPulse", 15, 19);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);
        pdf.text("Personalized Placement Readiness Report", 15, 28);

        pdf.setTextColor(90, 90, 100);
        pdf.setFontSize(9);
        pdf.text(`Generated on: ${today}`, 15, 48);

        // Profile
        pdf.setTextColor(30, 30, 35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Student Profile", 15, 62);

        pdf.setFillColor(245, 245, 250);
        pdf.roundedRect(15, 67, 180, 23, 4, 4, "F");

        pdf.setTextColor(35, 35, 40);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text(studentName, 21, 77);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.5);
        pdf.text(`${college} | ${branch} | ${year}`, 21, 85);

        // Overall score
        pdf.setTextColor(30, 30, 35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Placement Readiness Score", 15, 105);

        pdf.setFillColor(139, 92, 246);
        pdf.roundedRect(15, 110, 180, 27, 5, 5, "F");

        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(22);
        pdf.text(`${report.overall}%`, 24, 128);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9.5);
        pdf.text(`Overall score: ${report.totalMarks} out of 80 marks`, 65, 121);
        pdf.text("Based on 20 placement readiness questions", 65, 129);

        // Skills
        pdf.setTextColor(30, 30, 35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Skill Breakdown", 15, 151);

        const skills = [
            ["DSA", report.dsa, 20],
            ["Core CS", report.core, 20],
            ["Aptitude", report.aptitude, 12],
            ["Projects", report.projects, 16],
            ["Communication", report.communication, 12]
        ];

        let y = 157;

        skills.forEach(([name, data, maxMarks]) => {
            pdf.setFillColor(245, 245, 250);
            pdf.roundedRect(15, y, 180, 13, 3, 3, "F");

            pdf.setTextColor(35, 35, 40);
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(9);
            pdf.text(name, 21, y + 8.5);

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(8);
            pdf.text(`${data.marks}/${maxMarks} marks`, 91, y + 8.5);

            pdf.setFont("helvetica", "bold");
            pdf.setTextColor(139, 92, 246);
            pdf.text(`${data.percentage}%`, 144, y + 8.5);

            pdf.setTextColor(80, 80, 85);
            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(7.5);
            pdf.text(getStatus(data.percentage), 167, y + 8.5);

            y += 15;
        });

        // Personalized insight
        pdf.setTextColor(30, 30, 35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Your Next Best Step", 15, y + 10);

        pdf.setTextColor(75, 75, 85);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.5);

        addWrappedText(insightText, 15, y + 19, 180, 5);

        // Footer
        pdf.setDrawColor(220, 220, 225);
        pdf.line(15, 278, 195, 278);

        pdf.setTextColor(120, 120, 130);
        pdf.setFontSize(7.5);
        pdf.text("PrepPulse - Smart Placement Readiness Self-Assessment", 15, 285);

        const safeName = studentName.replace(/[^a-z0-9]/gi, "-").toLowerCase();

        pdf.save(`${safeName}-PrepPulse-Report.pdf`);
    });
}