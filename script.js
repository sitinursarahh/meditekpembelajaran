function submitQuiz() {
  let answers = {
    answer1: document.querySelector('input[name="answer1"]:checked'),
    answer2: document.querySelector('input[name="answer2"]:checked'),
    answer3: document.querySelector('input[name="answer3"]:checked'),
    answer4: document.querySelector('input[name="answer4"]:checked'),
    answer5: document.querySelector('input[name="answer5"]:checked'),
    answer6: document.querySelector('input[name="answer6"]:checked'),
    answer7: document.querySelector('input[name="answer7"]:checked'),
    answer8: document.querySelector('input[name="answer8"]:checked'),
    answer9: document.querySelector('input[name="answer9"]:checked'),
    answer10: document.querySelector('input[name="answer10"]:checked'),
  };

  let results = document.getElementById("quiz-results");
  results.innerHTML = "";

  let correctAnswers = {
    answer1: "c",
    answer2: "d",
    answer3: "d",
    answer4: "a",
    answer5: "d",
    answer6: "e",
    answer7: "d",
    answer8: "d",
    answer9: "c",
    answer10: "b",
  };

  let score = 0;

  // Memeriksa jawaban pengguna
  let questionNumber = 1;
  for (let key in answers) {
    if (answers[key] === null) {
      results.innerHTML += `<p>Anda belum menjawab soal ${questionNumber}</p>`;
    } else {
      let answerValue = answers[key].value;
      if (answerValue === correctAnswers[key]) {
        results.innerHTML += `<p>Jawaban Anda untuk soal ${questionNumber} <span class="correct-answer">${answerValue}</span> adalah benar.</p>`;
        score += 10;
      } else {
        results.innerHTML += `<p>Jawaban Anda untuk soal ${questionNumber} <span class="wrong-answer">${answerValue}</span> adalah salah. Jawaban yang benar adalah <span class="correct-answer">${correctAnswers[key]}</span>.</p>`;
      }
    }
    questionNumber++;
  }

  // Menampilkan total nilai
  results.innerHTML += `<p><strong>Total nilai Anda: <span style="font-weight: bold;">${score}</span> / ${
    Object.keys(answers).length * 10
  }</strong></p>`;

  // Menampilkan hasil quiz
  results.style.display = "block";
}
