// question: options, text, correct answer //


var questions = [
    {
        options: ['option1', 'option2', 'option3', 'option4'],
        text: '',
        correctAnswer: 1
    },
    {
        options: ['option1', 'option2', 'option3', 'option4'],
        text: '',
        correctAnswer: 1,
    },
    {
        options: ['option1', 'option2', 'option3', 'option4'],
        text: '',
        correctAnswer: 1,
    },
    {
        options: ['option1', 'option2', 'option3', 'option4'],
        text: '',
        correctAnswer: 1,
    },
    {
        options: ['option1', 'option2', 'option3', 'option4'],
        text: '',
        correctAnswer: 1
    }
]

var currentScreen = 'start'

var userScore = 0

var currentQuestion = 0

var displayFeedback = false


function startGame(){
// set currentScreen to 'in progress'//
    currentScreen = 'question'
}

function submitAnswer(answerPicked){
// if correct, increment user score and start timer. setTimeOut(function(){}, 5000)//
    if (answerPicked == questions[currentQuestion].correctAnswer){
        userScore++
    }
        displayFeedback = true
    setTimeout(function(){
        continueToNextQuestion()
    }, 5000)

}

function continueToNextQuestion(){
 /* if currentQuestion === 5 change currentScreen to game over, 
 when click increment currentQuestion  */
}

function resetGame(){
 /* reset currentQuestion to 0,
  reset userScore to 0,
  reset currentScreen to 'start'  */
}


function renderStart(){
 $('.main').html(`<p>Main Start Screen</p>
    <button id="startButton">Start</button>`)
 $('#startButton').on('click', function (){
     startGame()
     renderMain()

 })   
}


function renderQuestion(){
 $('.main').html(`<form class ="questionForm">Question${userScore}
    <input type="radio" name ="question1" value = "0"></input>
    <input type="radio" name ="question1" value = "1"></input>
    <input type="radio" name ="question1" value = "2"></input>
    <input type="radio" name ="question1" value = "3"></input>
    <button type="submit">Submit</button>
    </form><p>feedback</p>`)
$('.questionForm').on('submit', function(e){
    e.preventDefault()
   var selectedRadioButton = $('input[name=question1]:checked').val()
    submitAnswer(selectedRadioButton)
    renderMain()

})

}


function renderGameOver(){
 $('.main').html(`Game Over`)

}


function renderMain(){
    if (currentScreen === 'start'){
        renderStart()  
    } else if (currentScreen === 'question'){
        renderQuestion()
    } else if (currentScreen === 'game over'){
        renderGameOver()
    }
    
}

renderMain()