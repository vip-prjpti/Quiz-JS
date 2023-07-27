const data = [
  {
    id: 1,
    question: "What is the capital of India?",
    answers: [
      { answer: "Delhi", isCorrect: true },
      { answer: "Mumbai", isCorrect: false },
      { answer: "Punjab", isCorrect: false },
      { answer: "Bangalore", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Despacito is a :",
    answers: [
      { answer: "Indian Song", isCorrect: false },
      { answer: "English Song", isCorrect: false },
      { answer: "Spanish Song", isCorrect: true },
      { answer: "Russian Song", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "What artist has the most streams on Spotify? ",
    answers: [
      { answer: "The Weekend", isCorrect: false },
      { answer: "Drake", isCorrect: true },
      { answer: "Dua Lipa", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "What game studio makes the Red Dead Redemption series? ",
    answers: [
      { answer: "Epic Gamer", isCorrect: false },
      { answer: "Rockstar Games", isCorrect: true },
      { answer: "Battle UnderGround", isCorrect: false },
    ],
  },
];


const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (data.length - wrongCount) * 10
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Select an answer!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();
// const playAgain = () => {
//    qIndex = 0;
//    correctCount = 0;
//    wrongCount = 0;
//    total = 0;
//    selectedAnswer = 0;
//   showQuestions(qIndex);
// };

// play.addEventListener("click",()=>{
//     resultScreen.style.display = "none";
//     gameScreen.style.display = "block";
//     playAgain();
// })

// const showResult = () => {
//   resultScreen.style.display = "block";
//   gameScreen.style.display = "none";

//   resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;
//   resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;
//   resultScreen.querySelector(".score").textContent = `Score: ${
//     (correctCount - wrongCount) * 10
//   }`;
// };

// const showQuestions = (qnumber) => {
//   if (qIndex === data.length) return showResult();
//   selectedAnswer = null;
//   question.textContent = data[qnumber].question;
//   answersContainer.innerHTML = data[qnumber].answers
//     .map(
//       (item, index) =>
//         `<div class="answer">
//         <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
//         <label for=${index}>${item.answer}</label>
//     </div>`
//     )
//     .join("");
//   selectAnswer();
// };

// const selectAnswer = () => {
//   answersContainer.querySelectorAll("input").forEach((el) => {
//     el.addEventListener("click", (e) => {
//       selectedAnswer = e.target.value;
//     });
//   });
// };

// const submitAnswer = () => {
//   submit.addEventListener("click", () => {
//     if (selectedAnswer !== null) {
//       selectedAnswer === true ? correctCount++ : wrongCount++;
//       qIndex++;
//       showQuestions(qIndex);
//     } else {
//       alert("select an answer");
//     }
//   });
// };

// showQuestions(qIndex);
// submitAnswer();
