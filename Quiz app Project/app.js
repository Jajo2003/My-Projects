const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: 2
  },
  {
    question: "Which famous scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: 1
  },
  {
    question: "Which element has the chemical symbol 'H'?",
    options: ["Helium", "Hydrogen", "Hafnium", "Hassium"],
    correctAnswer: 1
  },
  {
    question: "Which novel by George Orwell features the concept of 'Big Brother'?",
    options: ["1984", "Brave New World", "Fahrenheit 451", "The Catcher in the Rye"],
    correctAnswer: 0
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Hg"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
    correctAnswer: 1
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: 1
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1907", "1912", "1921", "1930"],
    correctAnswer: 1
  },
  {
    question: "Which famous playwright wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
    correctAnswer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "Which element is essential for human bone health?",
    options: ["Iron", "Calcium", "Potassium", "Sodium"],
    correctAnswer: 1
  },
  {
    question: "Which famous scientist is known for the theory of evolution?",
    options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Nikola Tesla"],
    correctAnswer: 2
  },
  {
    question: "What is the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
    correctAnswer: 0
  },
  {
    question: "Which natural disaster is measured using the Richter scale?",
    options: ["Hurricane", "Tornado", "Earthquake", "Volcanic Eruption"],
    correctAnswer: 2
  },
  {
    question: "Which artist is famous for painting the 'Starry Night'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: 1
  },
  {
    question: "What is the largest species of shark?",
    options: ["Tiger Shark", "Great White Shark", "Hammerhead Shark", "Whale Shark"],
    correctAnswer: 3
  },
  {
    question: "Which gas is responsible for the Earth's ozone layer?",
    options: ["Carbon Dioxide", "Oxygen", "Methane", "Ozone"],
    correctAnswer: 3
  },
  {
    question: "Which famous scientist developed the laws of motion and gravity?",
    options: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Stephen Hawking"],
    correctAnswer: 1
  },
  {
    question: "In which continent is the Sahara Desert primarily located?",
    options: ["North America", "South America", "Africa", "Asia"],
    correctAnswer: 2
  },
  {
    question: "What is the largest land mammal?",
    options: ["African Elephant", "Grizzly Bear", "Giraffe", "Hippopotamus"],
    correctAnswer: 0
  },
];//Array of Elements

//starting Game Phase
let Score =0;
let index = 0;
let QuestionIndex=0;

const startingMenu = document.querySelector('.starting-menu');

const startButton = document.querySelector('.start');

const restartScoreBtn = document.querySelector('.resetScore');

let highScore = localStorage.getItem('highScore') || 0;
const showHighScore = document.getElementById('highScore');

index = 0;
QuestionIndex =0;
Score =0;
//starting Game Phase Ends
//Game proccess
const Question = document.querySelector('.question');
const Answers = document.querySelectorAll('.answer');
const ScoreBoard = document.querySelector('.ctr');
const GameContainer = document.querySelector('.game-container');


//event listeners
Answers.forEach(function(answer,index){
  answer.addEventListener('click',function(){
    if(checkAnswer(index)){
      Score++;
      ScoreBoard.textContent = Score;
    }
     QuestionIndex++;
    if(QuestionIndex === quizQuestions.length){
      if(Score>highScore){
        highScore = Score;
        localStorage.setItem('highScore',highScore);
        showHighScore.textContent = `Current High Score:${highScore}`;
      }
      StartOver();
    }
    if(QuestionIndex < quizQuestions.length){
      fillQuestions();
    }
    else{
      ScoreBoard.textContent = `You have scored ${Score} points`;
    }
   
  })
  
  function checkAnswer(CurrentIndex){
     return CurrentIndex === quizQuestions[QuestionIndex].correctAnswer; 
  }
  showBtn(highScore);
});
restartScoreBtn.addEventListener('click',function(){
  resetscore();
});
startButton.addEventListener('click',function(){
  startingMenu.classList.add('hide-element');
  GameContainer.classList.remove('hide-element');
  showBtn(highScore);
  fillQuestions();
});
//functions
function StartOver(){
    index = 0;
        QuestionIndex =0;
        Score =0;
        ScoreBoard.textContent = 0;
        startingMenu.classList.remove('hide-element');
        GameContainer.classList.add('hide-element');
}
highScore = localStorage.getItem('highScore') || 0;
showHighScore.textContent = `Current High Score:${highScore}`;


function resetscore(){
  localStorage.removeItem('highScore');
  highScore = 0;
  showHighScore.textContent = `Current High Score: ${highScore}`;
}

function showBtn(par){
  if(par!=0){
    restartScoreBtn.classList.remove('hide-element');
  }
}

function fillQuestions(){
  Question.textContent = quizQuestions[QuestionIndex].question;
  for(let i =0;i<quizQuestions[QuestionIndex].options.length;i++){
    Answers[i].textContent = quizQuestions[QuestionIndex].options[i];
  }
  }