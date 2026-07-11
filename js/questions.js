// ===============================
// PrepPulse Placement Readiness Questions
// ===============================

const questions = [

    // ================= DSA (5) =================

    {
        category: "DSA",
        question: "In the last 30 days, how often have you solved DSA or coding problems?",
        options: [
            "I have not practiced recently",
            "I solved a few problems occasionally",
            "I practiced 2–4 days per week",
            "I practiced consistently most days of the week"
        ]
    },

    {
        
        category: "DSA",
        question: "What level of coding problems can you usually solve independently before looking at a solution?",
        options: [
            "I struggle with most basic problems",
            "I can solve many easy problems",
            "I can solve most easy and some medium problems",
            "I can solve medium-level interview problems using common patterns"
        ]
    },

    {
        category: "DSA",
        question: "When solving an array or string problem, what do you usually do?",
        options: [
            "I do not know how to begin",
            "I try random logic until something works",
            "I first think of common patterns such as hashing, two pointers, or sliding window",
            "I compare possible approaches and choose one based on time and space complexity"
        ]
    },

    {
        category: "DSA",
        question: "How do you handle a solution that passes sample test cases but fails hidden test cases?",
        options: [
            "I usually do not know how to debug it",
            "I change code randomly and retry",
            "I test edge cases such as empty input, duplicates, and large values",
            "I systematically dry-run, test edge cases, and check complexity or overflow issues"
        ]
    },

    {
        category: "DSA",
        question: "If an interviewer asks why your solution is efficient, how well can you answer?",
        options: [
            "I usually cannot explain it",
            "I can say whether it is fast or slow",
            "I can state the time complexity for common solutions",
            "I can explain time and space complexity and compare it with a brute-force approach"
        ]
    },

    // ================= CORE CS (5) =================

    {
        category: "Core CS",
        question: "If asked about OOP in an interview, what can you currently explain without notes?",
        options: [
            "Only a few definitions",
            "The four pillars but with limited examples",
            "The four pillars with simple code or real-life examples",
            "The four pillars, differences between related concepts, and practical examples"
        ]
    },

    {
        category: "Core CS",
        question: "Which SQL tasks can you perform without searching for syntax?",
        options: [
            "I have not practiced SQL enough",
            "Simple SELECT, WHERE, and ORDER BY queries",
            "Joins, GROUP BY, aggregate functions, and subqueries",
            "Interview-style SQL questions involving joins, grouping, and multiple conditions"
        ]
    },

    {
        category: "Core CS",
        question: "When asked about DBMS concepts, what can you explain clearly?",
        options: [
            "I am not comfortable with DBMS concepts yet",
            "Basic terms such as primary key and foreign key",
            "Keys, normalization, joins, and transactions with examples",
            "Concepts with examples plus why they are used in real applications"
        ]
    },

    {
        
    category: "Core CS",
    question: "How confident are you in explaining Operating System concepts during a technical interview?",
    options: [
    "I have not revised Operating Systems yet",
    "I know only basic concepts",
    "I can explain processes, threads, scheduling, deadlocks, and memory management",
    "I can confidently explain these concepts with examples and answer follow-up questions"
]
    },

    {
        category: "Core CS",
        question: "How well can you connect Computer Networks concepts to real applications?",
        options: [
            "I have not studied networks enough",
            "I know terms such as HTTP, DNS, and TCP",
            "I can explain common concepts such as DNS, HTTP/HTTPS, TCP, and IP",
            "I can explain what happens when a user opens a website using practical networking concepts"
        ]
    },

    // ================= APTITUDE (3) =================

    {
        category: "Aptitude",
        question: "How often do you solve aptitude questions under a timer?",
        options: [
            "I rarely practice aptitude",
            "I practice sometimes without tracking time",
            "I practice at least one timed set every week",
            "I regularly take timed tests and review my mistakes"
        ]
    },

    {
        category: "Aptitude",
        question: "What is your current ability in quantitative aptitude topics such as percentages, ratio, averages, and time-work?",
        options: [
            "I need to learn the basics",
            "I can solve simple questions slowly",
            "I can solve common questions with reasonable accuracy",
            "I can solve most common questions accurately within time limits"
        ]
    },

    {
        category: "Aptitude",
        question: "When you get an aptitude question wrong, what do you usually do?",
        options: [
            "I move on without checking why",
            "I see the answer but do not revisit it",
            "I understand the solution and note the concept",
            "I analyze the mistake, note the shortcut or concept, and retry similar questions"
        ]
    },

    // ================= PROJECTS (4) =================

    {
        category: "Projects",
        question: "How clearly can you explain your best project in 60 seconds?",
        options: [
            "I cannot explain it clearly yet",
            "I can mention what the project does",
            "I can explain the problem, features, and technologies used",
            "I can explain problem, users, solution, tech stack, key features, and outcome clearly"
        ]
    },

    {
        category: "Projects",
        question: "How much of your project code do you understand and can modify yourself?",
        options: [
            "I mostly copied it and cannot modify it confidently",
            "I understand some parts but need help for changes",
            "I understand the main flow and can make common changes",
            "I understand the full flow, can debug issues, and can add meaningful features"
        ]
    },

    {
        category: "Projects",
        question: "How well is your project portfolio presented to recruiters?",
        options: [
        "I do not have a presentable project yet",
        "My projects are available only on my local system",
        "My projects are uploaded on GitHub",
        "My projects include GitHub, a clear README, screenshots or demo, and proper documentation"
    ]
    },

    {
        category: "Projects",
        question: "If asked about a challenge in your project, what can you explain?",
        options: [
            "I do not know what challenge to mention",
            "I can mention one small issue",
            "I can explain a challenge and how I solved it",
            "I can explain the challenge, alternatives considered, solution chosen, and future improvement"
        ]
    },

    // ================= COMMUNICATION (3) =================

    {
        category: "Communication",
        question: "How prepared is your 60-second self-introduction for an interview?",
        options: [
            "I have not prepared one yet",
            "I can introduce myself but it is unstructured",
            "I can give a clear introduction covering education, skills, and projects",
            "I can give a concise, confident introduction tailored to a software role"
        ]
    },

    {
        category: "Communication",
        question: "How prepared are you to answer behavioural interview questions such as teamwork, conflict, or failure?",
        options: [
            "I have not prepared any examples",
            "I know only general answers",
            "I can share one or two real experiences",
            "I can answer confidently using structured real examples with clear outcomes"
    ]
    },

    {
        category: "Communication",
        question: "How comfortable are you explaining a coding solution while someone asks follow-up questions?",
        options: [
            "I struggle to explain technical work",
            "I can explain only after finishing the solution",
            "I can explain my approach step by step",
            "I can think aloud, explain trade-offs, answer follow-ups, and stay clear under pressure"
        ]
    }
];