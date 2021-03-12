function generateNewQuestionForm(item, counter) {
  return `
  <input name="answer" type="radio" value="${item}" id="answer-${counter}">
  <label for="answer-${counter}">${item}</label><br>`;
}

function generateQuestionFormString(item) {
  console.log("Generating question form element");
  let counter = item.questionNumber;
  let return_array = [`<h3>${item.questions[counter].question}</h3>`];
  for(let i = 0; i < item.questions[counter].answers.length; i++) {
    return_array.push(
      generateNewQuestionForm(item.questions[counter].answers[i], i)
    )
  }
  return return_array.join("");
}

function renderQuizQuestion() {
  console.log('`renderQuizQuestion` ran');
  const quizQuestionFormString = generateQuestionFormString(store);
  $('#js-quiz').html(quizQuestionFormString);
}

function handleStartQuizClicked() {
  // toggle store.quizStarted to true
  // Hide Start Quiz Button
  // Hide Introduction Class
  // untoggle Hide on Submit button
  // untoggle Hide on question container
  // call function renderQuizQuestion
  $('.start-button').on('click', event => {
    renderQuizQuestion();
  });
  
}

function handleSubmitButtonClicked() {
  // Hide Submit Button
  // untoggle Hide on Next Button
  // Check whether the user's submitted answer is equal to the correct answer
  // if the answer is the same, say "Correct!" and increment Score by 1
  // if the answer is any of the others, say "Sorry, the correct answer is: Correct Answer"
  // Check whether if there are any more questions in the array, if yes:
  // If not, then call function quizResults
}

function quizResults() {
  // Hide quiz container
  // Hide next button
  // untoggle hide on Restart Quiz button
  // untoggle hide on quiz-results
}

function handleNextButtonClicked() {
  // Hide Next button
  // untoggle Hide on Submit Button
  // increment the questionNumber
  // call function renderQuizQuestion
}

function handleRestartQuizClicked() {
  // Hide 
}



function initialize() {
  renderQuizQuestion();
  handleStartQuizClicked();
}


$(initialize);







/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)