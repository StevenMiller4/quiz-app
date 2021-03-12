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
  $('.start-button').on('click', event => {
    store.quizStarted == true;
    $('.start-button').toggleClass('hide');
    $('.introduction').toggleClass('hide');
    $('.submit-button').toggleClass('hide');
    $('#question-container').toggleClass('hide');
    renderQuizQuestion();
  });
  
}

function handleSubmitButtonClicked() {
    $('#js-quiz').submit(function (event) {
      event.preventDefault();
      $('.submit-button').toggleClass('hide');
      $('.next-button').toggleClass('hide');
      const userAnswer = $('input[name="answer"]:checked').val();
      generateQuestionResultsForm(userAnswer);
    });
}

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

function quizResults() {
  $('#question-container').addClass('hide');
  $('.next-button').addClass('hide');
  $('.submit-button').addClass('hide');
  $('.restart-button').toggleClass('hide');
  $('.quiz-results').toggleClass('hide');
  const quizResults = generateQuizResultsForm();
  $('.quiz-results').html(quizResults);
}

function handleRestartQuizClicked() {
  $('.restart-button').on('click', event => {
    store.quizStarted == false;
    $('.start-button').toggleClass('hide');
    $('.introduction').toggleClass('hide');
    $('.restart-button').toggleClass('hide');
    $('.results').remove();
    store.questionNumber = 0;
    store.score = 0;
  });
}



function initialize() {
  renderQuizQuestion();
  handleStartQuizClicked();
  handleSubmitButtonClicked();
  handleNextButtonClicked();
  handleRestartQuizClicked();
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