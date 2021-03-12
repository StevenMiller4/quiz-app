function generateNewQuestionForm(item, counter) {
    return `
    <input name="answer" type="radio" value="${item}" id="answer-${counter}">
    <label for="answer-${counter}">${item}</label><br>`;
  }