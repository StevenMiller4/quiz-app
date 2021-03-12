function generateNewQuestionForm(item, counter) {
    return `
    <input name="answer" required type="radio" value="${item}" id="answer-${counter}">
    <label for="answer-${counter}">${item}</label><br>`;
  }

function generateQuestionResultsForm(answer) {
  if (answer == store.questions[store.questionNumber].correctAnswer) {
    store.score += 1;
    $('#question-container').append(
      `<p class="reply">Correct!</p>`
    );
  } else {
    $('#question-container').append(
      `<p class="reply">Sorry, the correct answer is: ${store.questions[store.questionNumber].correctAnswer}</p>`
    );
  }
}

function generateQuizResultsForm() {
  if (store.score == 10) {
    return `<p class="results">Congratulations, you answered all the questions correctly!</p>`;
  } else if (store.score >= 7 && store.score < 10) {
    return `<p class="results">Nice job! You answered ${store.score} questions correctly! You should try again for a perfect score!</p>`;
  } else if (store.score < 7) {
    return `<p class="results">You answered ${store.score} questions correctly. You may want to ask your Barista Trainer if you have any questions.</p>`;
  }
}