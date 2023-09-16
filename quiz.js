// En liste over spørgsmål og svarmuligheder.
// Hvert spørgsmål har tekst og en liste over svarmuligheder,
// hvor en af dem er markeret som korrekt.
// Dette er vores quizindhold.

const questions = [
  {
    question: "Hvad skal du huske når du sanker i byen?",
    answers: [
      { text: "Dykkerudstyr", correct: false },
      { text: "Undgå trafikerede veje og forureningskilder.", correct: true },
      { text: "En fiskestang", correct: false },
      { text: "Bruge din paraply som skovl", correct: false },
    ],
  },
  {
    question: "I hvilket område kan du finde en Østerhat?",
    answers: [
      { text: "Stranden", correct: false },
      { text: "Skoven", correct: false },
      { text: "Stillehavet", correct: false },
      { text: "Byen", correct: true },
    ],
  },
  {
    question: "Hvor finder man de bedste steder at plukke svampe?",
    answers: [
      { text: "På stranden", correct: false },
      { text: "Skove og skovområder", correct: true },
      { text: "Byparker", correct: false },
      { text: "Landbrugsområder", correct: false },
    ],
  },
  {
    question: "Hvordan renser du blomster uden at fjerne smagen?",
    answers: [
      { text: "Skyller dem i toilettet", correct: false },
      { text: "Tørre dem i ovnen", correct: false },
      { text: "Lade dem ligge under åbent vindue", correct: true },
      { text: "Koge dem i suppe", correct: false },
    ],
  },
  {
    question: "Hvad skal man IKKE gøre når man befinder sig i skoven?",
    answers: [
      { text: "Bygge en rutsjebane til skovens dyr", correct: false },
      { text: "Efterlade affald", correct: true },
      { text: "Udforske naturen", correct: false },
      { text: "Afholde en picnic", correct: false },
    ],
  },

  {
    question: "Hvilken svamp er opkaldt efter en gammel konge?",
    answers: [
      { text: "Skørhat", correct: false },
      { text: "Champignon", correct: false },
      { text: "Fluesvamp", correct: false },
      { text: "Karl-Johan svampen", correct: true },
    ],
  },

  {
    question: "Hvordan ser man om svampen er angrebet af insekter?",
    answers: [
      { text: "Den bliver større", correct: false },
      { text: "Den udvikler en intens lugt", correct: false },
      { text: "Den ændrer farve", correct: false },
      { text: "Den har huller efter bid", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Funktionen, der starter quizzen og nulstiller variablerne.
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"; // Ændrer teksten på næste knap.
  showQuestion(); // Kalder funktionen til at vise det første spørgsmål.
}

// Funktionen, der viser det aktuelle spørgsmål og svarmuligheder.
function showQuestion() {
  resetState(); // Nulstiller tilstand (fjerner tidligere svar og knapper).
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Opretter knapper for svarmuligheder og tildeler korrekte data-attributter.
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Nulstiller tilstand ved at fjerne tidligere svar og knapper.
function resetState() {
  nextButton.style.display = "none"; // Skjuler "Næste" knappen.
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Funktionen til at håndtere valget af svarmulighed.
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct"); // Tilføjer en klasse for korrekt svar.
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); // Tilføjer en klasse for forkert svar.
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Deaktiverer knapperne efter valg.
  });
  nextButton.style.display = "block"; // Viser "Næste" knappen.
}

// Funktionen til at vise resultatet og muligheden for at spille igen.
function showScore() {
  resetState(); // Nulstiller tilstand.
  questionElement.innerHTML = `Du fik ${score} ud af ${questions.length}!`;
  nextButton.innerHTML = "Spil igen"; // Ændrer teksten på næste knap.
  nextButton.style.display = "block"; // Viser "Næste" knappen.
}

// Funktionen til at håndtere næste-knappen.
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Viser næste spørgsmål, hvis der er flere tilbage.
  } else {
    showScore(); // Viser resultatet, hvis der ikke er flere spørgsmål tilbage.
  }
}

// Lytter til klik på "Næste" knappen.
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // Håndterer næste spørgsmål.
  } else {
    startQuiz(); // Starter quizzen igen ved klik på "Spil igen".
  }
});

startQuiz(); // Starter quizzen når siden indlæses.
