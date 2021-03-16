// Function to generate the question form to be used in 'renderQuizQuestion', calling on the template function 'generateNewQuestionForm'

function generateQuestionFormString(item) {
  console.log("Generating question form element");
  let counter = item.questionNumber;
  let return_array = [
    `<h2>Question: ${item.questionNumber}/${item.questions.length} Score: ${item.score}/${item.questions.length}</h2>`,
    `<h3>${item.questions[counter].question}</h3>`];
  for(let i = 0; i < item.questions[counter].answers.length; i++) {
    return_array.push(
      generateNewQuestionForm(item.questions[counter].answers[i], i)
    )
  }
  return return_array.join("");
}

// The render function for the app to be called whenever there is a change to the store object to update the DOM

function renderQuizQuestion() {
  console.log('`renderQuizQuestion` ran');
  const quizQuestionFormString = generateQuestionFormString(store);
  $('#js-quiz').html(quizQuestionFormString);
}

// Event handler function to deal with the 'Start Quiz' button

function handleStartQuizClicked() {
  $('.start-button').on('click', event => {
    store.quizStarted == true;
    $('.start-button').toggleClass('hide');
    $('.introduction').toggleClass('hide');
    $('.submit-button').toggleClass('hide');
    $('#js-quiz').toggleClass('hide');
    renderQuizQuestion();
  });
  
}

// Event handler function to deal with the 'Submit' button

function handleSubmitButtonClicked() {
    $('#js-quiz').submit(function (event) {
      event.preventDefault();
      $('.submit-button').toggleClass('hide');
      $('.next-button').toggleClass('hide');
      const userAnswer = $('input[name="answer"]:checked').val();
      generateQuestionResultsForm(userAnswer);
    });
}

// Event handler function to deal with the 'Next' button

function handleNextButtonClicked() {
  $('.next-button').on('click', event => {
    $('.next-button').toggleClass('hide');
    $('.submit-button').toggleClass('hide');
    $(".reply").remove();
    store.questionNumber += 1;
    if (store.questionNumber < store.questions.length) {
      renderQuizQuestion();
    } else {
      quizResults();
    }
  });
}

// Function called if there is no longer any questions in the store object in order to generate the quiz results

function quizResults() {
  $('#js-quiz').addClass('hide');
  $('.next-button').addClass('hide');
  $('.submit-button').addClass('hide');
  $('.restart-button').toggleClass('hide');
  $('.quiz-results').toggleClass('hide');
  const quizResults = generateQuizResultsForm(store);
  $('.quiz-results').html(quizResults);
}

// Event handler function to deal with the 'Restart Quiz' button

function handleRestartQuizClicked() {
  $('.restart-button').on('click', event => {
    store.quizStarted == false;
    $('.start-button').toggleClass('hide');
    $('.introduction').toggleClass('hide');
    $('.restart-button').toggleClass('hide');
    $('.quiz-results').addClass('hide');
    $('.results').remove();
    store.questionNumber = 0;
    store.score = 0;
  });
}

// A jQuery initializing function to call all functions

function initialize() {
  renderQuizQuestion();
  handleStartQuizClicked();
  handleSubmitButtonClicked();
  handleNextButtonClicked();
  handleRestartQuizClicked();
}


$(initialize);