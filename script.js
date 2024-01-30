const elements = {
    startBtn: document.querySelector('.start-btn'),
    popupInfo: document.querySelector('.popup-info'),
    exitBtn: document.querySelector('.exit-btn'),
    main: document.querySelector('.main'),
    continueBtn: document.querySelector('.continue-btn'),
    quizSection: document.querySelector('.quiz-section'),
    quizBox: document.querySelector('.quiz-box'),
    resultBox: document.querySelector('.result-box'),
    tryAgainBtn: document.querySelector('.tryAgain-btn'),
    goHomeBtn: document.querySelector('.goHome-btn'),
    nextBtn: document.querySelector('.next-btn'),
    optionList: document.querySelector('.option-list'),
  };
  
  let questionCount = 0;
  let questionNumb = 1;
  let userScore = 0;
  
  elements.startBtn.onclick = () => showPopup();
  elements.exitBtn.onclick = () => closePopup();
  elements.continueBtn.onclick = () => startQuiz();
  elements.tryAgainBtn.onclick = () => restartQuiz();
  elements.goHomeBtn.onclick = () => goHome();
  elements.nextBtn.onclick = () => nextQuestion();
  
  function showPopup() {
    elements.popupInfo.classList.add('active');
    elements.main.classList.add('active');
  }
  
  function closePopup() {
    elements.popupInfo.classList.remove('active');
    elements.main.classList.remove('active');
  }
  
  function startQuiz() {
    elements.quizSection.classList.add('active');
    elements.popupInfo.classList.remove('active');
    elements.main.classList.remove('active');
    elements.quizBox.classList.add('active');
  
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
  }
  
  function restartQuiz() {
    elements.quizBox.classList.add('active');
    elements.nextBtn.classList.remove('active');
    elements.resultBox.classList.remove('active');
  
    resetQuiz();
  }
  
  function goHome() {
    elements.quizSection.classList.remove('active');
    elements.nextBtn.classList.remove('active');
    elements.resultBox.classList.remove('active');
  
    resetQuiz();
  }
  
  function nextQuestion() {
    if (questionCount < questions.length - 1) {
      questionCount++;
      showQuestions(questionCount);
  
      questionNumb++;
      questionCounter(questionNumb);
  
      elements.nextBtn.classList.remove('active');
    } else {
      showResultBox();
    }
  }
  
  function resetQuiz() {
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
  }
  
  function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
  
    let optionTag = '';
  
    questions[index].options.forEach((option) => {
      optionTag += `<div class="option">${option}</div>`;
    });
  
    elements.optionList.innerHTML = optionTag;
  
    const option = document.querySelectorAll('.option');
  
    option.forEach((el) => el.setAttribute('onclick', 'optionSelected(this)'));
  }
  
  function optionSelected(answer) {
    let userAnswer = answer.textContent.trim();
    let correctAnswer = questions[questionCount].answer.trim();
    let allOptions = elements.optionList.children.length;
  
    if (userAnswer == correctAnswer) {
      answer.classList.add('correct');
      userScore += 1;
      headerScore();
    } else {
      answer.classList.add('incorrect');
  
      for (let i = 0; i < allOptions; i++) {
        if (elements.optionList.children[i].textContent.trim() == correctAnswer) {
          elements.optionList.children[i].classList.add('correct');
        }
      }
    }
  
    for (let i = 0; i < allOptions; i++) {
      elements.optionList.children[i].classList.add('disabled');
    }
  
    elements.nextBtn.classList.add('active');
  }
  
  function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
  }
  
  function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
  }
  
  function showResultBox() {
    elements.quizBox.classList.remove('active');
    elements.resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your score: ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    function updateProgress() {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue < progressEndValue) {
            requestAnimationFrame(updateProgress);
        }
    }

    updateProgress();
}

  