const quizData = [
    {
        question: "Bagian otak manakah yang berfungsi sebagai pusat pengolahan informasi dan koordinasi tubuh?",
        options: ["Sumsum tulang belakang", "Otak", "Saraf Tepi", "Otot"],
        answer: 1
    },
    {
        question: "Alat gerak aktif pada sistem gerak manusia adalah...",
        options: ["Tulang", "Sendi", "Otot", "Ligamen"],
        answer: 2
    },
    {
        question: "Manakah di bawah ini yang merupakan contoh dari gerak refleks?",
        options: ["Menulis buku catatan", "Berjalan menuju kantin", "Menarik tangan saat menyentuh benda panas", "Mengerjakan soal ujian"],
        answer: 2
    },
    {
        question: "Pusat pengendali cepat pada gerak refleks tanpa menunggu perintah sadar dari otak adalah...",
        options: ["Sumsum tulang belakang", "Jari tangan", "Tulang rusuk", "Otot lengan"],
        answer: 0
    },
    {
        question: "Jaringan saraf yang bertugas menghubungkan sistem saraf pusat ke seluruh bagian tubuh adalah...",
        options: ["Saraf tepi", "Tulang rawan", "Sendi geser", "Otak besar"],
        answer: 0
    }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("result-feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
    let q = quizData[currentQ];
    questionEl.textContent = `Soal ${currentQ + 1}: ${q.question}`;
    optionsEl.innerHTML = "";
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "opt-btn";
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let q = quizData[currentQ];
    const buttons = document.querySelectorAll(".opt-btn");
    buttons.forEach(b => b.disabled = true);

    if (selected === q.answer) {
        feedbackEl.textContent = "Benar! Hebat sekali 🎉";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = `Kurang tepat. Jawaban yang benar adalah: ${q.options[q.answer]}`;
        feedbackEl.style.color = "red";
    }

    currentQ++;
    if (currentQ < quizData.length) {
        nextBtn.style.display = "block";
    } else {
        setTimeout(() => {
            questionEl.textContent = "Kuis Selesai!";
            optionsEl.innerHTML = `Skor akhir kamu: ${score} dari ${quizData.length}`;
            feedbackEl.textContent = "Terima kasih sudah menjelajahi Digital Human Body Explorer!";
            nextBtn.style.display = "none";
        }, 1500);
    }
}

function nextQuestion() {
    loadQuiz();
}

loadQuiz();