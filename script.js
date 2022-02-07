const startButton = document.getElementById('start-btn')


const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')


const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {



  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)


  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {


  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

  questionElement.innerText = question.question
  question.answers.forEach(answer => {

    const button = document.createElement('button')


    button.innerText = answer.text

    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct

    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)

  })
}

function resetState() {


  clearStatusClass(document.body)

  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {


  const selectedButton = e.target

  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)


  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {


  clearStatusClass(element)
  if (correct) {

    
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Where located Denmark?',
    answers: [
        { text: 'Europe', correct: true },
        { text: 'Asia', correct: false },
        { text: 'Africa', correct: false },
        { text: 'America', correct: false }
    ]
  },
  {
    question: 'Capital of Denmark?',
    answers: [
      { text: 'Aalborg', correct: false },
      { text: 'Vejle', correct: false },
      { text: 'Copenhagen', correct: true },
      { text: 'Odense', correct: false }
    ]
  },
  {
    question: 'Denmark currency?',
    answers: [
      { text: 'Pund', correct: false },
      { text: 'Sek', correct: false },
      { text: 'Euro', correct: false },
      { text: 'Dkk', correct: true }
    ]
  },
  {
    question: 'Which one is free in Denmark?',
    answers: [
      { text: 'Education', correct: true },
      { text: 'Transport', correct: false }
    ]
  },
  {
    question: 'Denmark famous writer?',
    answers: [
      { text: 'Charles Dickens', correct: false },
      { text: 'H.C andersen', correct: true },
      { text: 'William Shakespeare', correct: false }
    ]


  },

  
  {
    question: 'Denmark population?',
    answers: [
      { text: '10.5 million', correct: false },
      { text: '4.2 million', correct: true },
      { text: '7.5 million', correct: false },
      { text: '5.8 million', correct: true }
    ]


  }



]