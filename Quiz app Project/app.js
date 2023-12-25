const quizQuestions = [
 
  {
    question: "რას ნიშნავს ოპერატორი ===",
    options: ["მინიჭებას", "ტიპისა და მნიშვნელობის ტოლობას", "ტოლობას", "უტოლობას"],
    correctAnswer: 1
  },
  
  {
    question: "Javascript ენაზე დაწერილი კოდი მოთავსებულია ტეგებს შორის:",
    options: ["<script> ... </script>","<source> ... <source>" , "<js> ... <js>", "<app> ... <app>"],
    correctAnswer: 0
  },
  {
    question: "JavaScript-ში 'null' რას ნიშნავს??",
    options: ["0", "ფუნქცია", "სიცარიელე", "შეცდომა"],
    correctAnswer: 2
  },
  {
    question: "JavaScript-ში რას აკეთებს 'console.log()' მეთოდი?",
    options: ["არაფერს არ ნიშნავს", "დაგვიბეჭდავს სასურველ ტექსტს კონსოლში", "იძახებს ლოგინის ფუნქციას", "გაგვიხსნის კონსოლს"],
    correctAnswer: 1
  },
  {
    question: "რომელია სწორი ჩანაწერი უტოლობისთვის",
    options: ["!=!", "!=", "<>", "!!"],
    correctAnswer: 1
  },
  {
    question:"JavaScript-ში რას ნიშნავს '|| ოპერატორი'?",
    options: ["ლოგიკურ ან-ს", "ლოგიკურ კი-ს", "ლოგიკურ და-ს", "ლოგიკურ არა-ს"],
    correctAnswer: 0
  },
  {
    question: "JavaScript-ში რას ნიშნავს '&& ოპერატორი'?",
    options: ["ლოგიკურ კი-ს", "ლოგიკურ და-ს", "ლოგიკურ არა-ს", "ლოგიკურ ან-ს"],
    correctAnswer: 1
  },
  {
    question: "რომელია სწორი ჩანაწერი იმისთვის რომ ავირჩიოთ HTML ელემენტი 'Class' საშუალებით?",
    options: ["document.getElementByClassName", "document.getElementByWithName", "document.getElementAfterClassName", "document.getElementByClass"],
    correctAnswer: 0
  },

  {
    question: "JavaScript-ში რას ნიშნავს '!== ოპერატორი'?",
    options: ["უტოლობას", "ტიპისა და მნიშვნელობის უტოლობას", "ტიპის უტოლობას", "ზუსტ ტოლობას"],
    correctAnswer: 1
  },
  {
    question: "JavaScript-ში 'NaN' მნიშვნელობა რას ნიშნავს?",
    options: ["რიცხვი არ მოიძებნა", "მეტია ან ტოლი", "Null", "მსგავსი ჩანაწერი არ არსებობს"],
    correctAnswer: 0
  },
  {
    question: "რას ნიშნავს const ",
    options: ["მუდმივს ცვლადს", "დროებით ცვლადს", "განუსაზღვრელ ცვლადს", "ბლოკურ ცვლადს"],
    correctAnswer: 0
  },
  {
    question: "JavaScript-ში რას ნიშნავს '++ ოპერატორი'?",
    options: ["კვადრატში აყვანას", "მნიშვნელობის ზრდას 1-ით", "1-ზე გამრავლებას", "გაორმაგებას"],
    correctAnswer: 1
  },
  {
    question: "როგორ განვსაზღვროთ მასივის ზომა",
    options: ["Array.size", "Array.allelements", "Array.length", "Array.sum"],
    correctAnswer: 2
  },
  {
    question: "JavaScript-ში რას ნიშნავს '-- ოპერატორი'?",
    options: ["ანულირებას", "თავის თავზე გაყოფას", "მნიშვნელობის შემცირებას 1-ით", "სტრიქონის გაყოფას დეფისით"],
    correctAnswer: 2
  },
  {
    question: "რომელია სწორი ჩანაწერი იმისთვის რომ ავირჩიოთ HTML ელემენტი 'id' საშუალებით?",
    options: ["document.getElementById", "document.getElementWithId", "document.getElementAfterId", "document.getElementByTagName"],
    correctAnswer: 0
  },

  {
    question: "var a = '5',b = 5  a===b რა იქნება პასუხი ამ გამოსახულებაზე?",
    options: ["True", "Nan", "Undefined", "false"],
    correctAnswer: 3
  },
  {
    question: "var a = '5',b = 5  a==b რა იქნება პასუხი ამ გამოსახულებაზე?",
    options: ["True", "Nan", "Undefined", "false"],
    correctAnswer: 0
  },
  {
    question: "რას გვაძლევს ფუნქცია Math.Random()?",
    options: ["შემთხვევით რიცხვს 1000-მდე", "არასწორი ჩანაწერია", "ასეთი მეთოდი არ არსებობს", "შემთხვევით რიცხვს 0-დან 1-მდე ინტერვალში"],
    correctAnswer: 3
  },
  {
    question: "რას გვაძლევს ფუნქცია Math.ceil()?",
    options: ["მითითებულ რიცხვს დაამრგვალებს მთელი ნაკლები მნიშვნელობისთვის", "ასეთი მეთოდი არ არსებობს", "მითითებულ რიცხვს დაამრგვალებს მთელი მეტი მნიშვნელობისთვის", 
    "მოცემულ რიცხვს დაამრგვალებს უახლოესი მთელი მნიშვნელობისთვის"],
    correctAnswer: 2
  },
  {
  question: "რას გვაძლევს ფუნქცია Math.floor()?",
  options: ["მითითებულ რიცხვს დაამრგვალებს მთელი ნაკლები მნიშვნელობისთვის", "ასეთი მეთოდი არ არსებობს", "მითითებულ რიცხვს დაამრგვალებს მთელი მეტი მნიშვნელობისთვის", 
  "მოცემულ რიცხვს დაამრგვალებს უახლოესი მთელი მნიშვნელობისთვის"],
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

//starting Game Phase Ends
//Game proccess
const Question = document.querySelector('.question');
const Answers = document.querySelectorAll('.answer');
const ScoreBoard = document.querySelector('.ctr');
const GameContainer = document.querySelector('.game-container');

//event listeners
Answers.forEach(function(answer,index){
  answer.addEventListener('click',function (){
    if(checkAnswer(index)){
      Score++;
      ScoreBoard.textContent = Score;
      answer.classList.add('correct-btn','tingle');
    }
    else{
      answer.classList.add('wrong-btn','tingle');
    }
    Answers.forEach(function(answer){
      answer.disabled = true;
    })
     answerClicked  = true;
     QuestionIndex++;
    if(QuestionIndex === quizQuestions.length){
      if(Score>highScore){
        highScore = Score;
        localStorage.setItem('highScore',highScore);
        showHighScore.textContent = `უმაღლესი ქულა:${highScore}`;
      }
      StartOver();
    }
    
    setTimeout(function(){
      restartBtnColors(answer);
      Answers.forEach(function(answer){
        answer.disabled = false;
      })
      answer.classList.remove('tingle');
    },500);
    if(QuestionIndex < quizQuestions.length){
      setTimeout(fillQuestions,500);
    
    }
    else{
      ScoreBoard.textContent = `თქვენ აიღეთ ${Score} ქულა`;
    }
   
  })
  
  showBtn(highScore);
});

restartScoreBtn.addEventListener('click',function(){
  resetscore();
  restartScoreBtn.classList.add('hide-element');
});
startButton.addEventListener('click',function(){
  startingMenu.classList.add('hide-element');
  GameContainer.classList.remove('hide-element');
  showBtn(highScore);
  fillQuestions();
});


//functions
function restartBtnColors(item){
  item.classList.remove('correct-btn');
  item.classList.remove('wrong-btn');
  }

 
  function checkAnswer(CurrentIndex){
     return CurrentIndex === quizQuestions[QuestionIndex].correctAnswer; 
  }

function StartOver(){
    index = 0;
        QuestionIndex =0;
        Score =0;
        ScoreBoard.textContent = 0;
        startingMenu.classList.remove('hide-element');
        GameContainer.classList.add('hide-element');
}


highScore = localStorage.getItem('highScore') || 0;
showHighScore.textContent = `უმაღლესი ქულა:${highScore}`;


function resetscore(){
  localStorage.removeItem('highScore');
  highScore = 0;
  showHighScore.textContent = `უმაღლესი ქულა: ${highScore}`;
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

  
  
  