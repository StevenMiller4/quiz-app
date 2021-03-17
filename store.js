// Moved the object, store, to a seperate store.js file to reduce clutter.

const store = {
    questions: [
      {
        question: 'What is the brew cadence for Customer Support during peak when decaf is on pour over?',
        answers: [
          '30 minutes',
          '15 minutes',
          '10 minutes',
          '8 minutes'
        ],
        correctAnswer: '10 minutes'
      },
      {
        question: 'How long can an espresso shot sit idle before it "dies?"',
        answers: [
          '10 seconds',
          '12 seconds',
          '15 seconds',
          'Shots never die'
        ],
        correctAnswer: '10 seconds'
      },
      {
        question: 'A Flat White has all the following, EXCEPT:',
        answers: [
          'Whole Milk',
          'Blonde Shots',
          'Ristretto Shots',
          'An Additional Shot'
        ],
        correctAnswer: 'Blonde Shots'
      },
      {
        question: 'Which of the following drinks come sweetened by default?',
        answers: [
          'Cold Brew',
          'Shaken Ice Teas',
          'Iced Coffee',
          'Green Tea Lattes'
        ],
        correctAnswer: 'Iced Coffee'
      },
      {
        question: 'Which of the following Frappuccinos receive Classic Syrup?',
        answers: [
          'Caramel Ribbon Crunch Frappuccino',
          'Coffee Frappuccino',
          'Vanilla Bean Frappuccino',
          'Strawberries and Cream Frappuccino'
        ],
        correctAnswer: 'Strawberries and Cream Frappuccino'
      },
      {
        question: 'Using a full dose Vanilla pump, how many pumps of Vanilla would go in a Venti Vanilla Sweet Cream Cold Brew?',
        answers: [
          'Six pumps of Vanilla',
          'Five pumps of Vanilla',
          'Three pumps of Vanilla',
          'It comes with Classic, not Vanilla'
        ],
        correctAnswer: 'Three pumps of Vanilla'
      },
      {
        question: '“At what point during beverage routine for a Cinnamon Dolce Latte would you start the next drink?',
        answers: [
          'Steam Milk',
          'Queue Shots',
          'Pump Syrup',
          'Finish and Connect'
        ],
        correctAnswer: 'Pump Syrup'
      },
      {
        question: "You are allowed to ring on another persons' till when:",
        answers: [
          'You are marking out your drink / food',
          'The partner went to the bathroom',
          'The partner is currently warming food',
          'You are not allowed to ring on their till'
        ],
        correctAnswer: 'You are not allowed to ring on their till'
      },
      {
        question: 'Which of the following is not part of the dish washing cycle?',
        answers: [
          'Wash',
          'Rinse',
          'Sanitize',
          'Towel Dry'
        ],
        correctAnswer: 'Towel Dry'
      },
      {
        question: 'When is the best time to wash your hands?',
        answers: [
          'After touching something dirty, like trash',
          'After handling money',
          'After coming back from break',
          'All of the above'
        ],
        correctAnswer: 'All of the above'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };  