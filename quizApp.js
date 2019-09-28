// question: options, text, correct answer //


var questions = [
    {
        options: ['Elendil', 'Isildur', 'Arathorn', 'Elessar'],
        text: `What is Aragorn's elven name?`,
        correctAnswer: 3
    },
    {
        options: ['Celeborn', 'Thranduil', 'Haldir', 'Elrond'],
        text: `Who was Legolas' father?`,
        correctAnswer: 1,
    },
    {
        options: ['Olórin', 'Radagast', 'Melian', 'Mithrandir'],
        text: `What was Gandalf's name before arriving in Middle-earth?`,
        correctAnswer: 0,
    },
    {
        options: ['33', '53', '111', '50'],
        text: 'How old was Frodo when he left the Shire?',
        correctAnswer: 3,
    },
    {
        options: ['Sting', 'Glamdring', 'Andúril', 'Orcrist'],
        text: 'What name did Aragorn give to Narsil after it was reforged?',
        correctAnswer: 2
    }
]

var currentScreen = 'start'

var userScore = 0

var currentQuestion = 0

var displayFeedback = false

let lastAnswerFeedback = ''


function startGame(){
// set currentScreen to 'in progress'//
    currentScreen = 'question'
}

function submitAnswer(answerPicked){
// if correct, increment user score and start timer. setTimeOut(function(){}, 5000)//
    if (answerPicked == questions[currentQuestion].correctAnswer){
        userScore++
        lastAnswerFeedback=`You're right!`
    } else {
       
       let curQ = questions[currentQuestion]

        lastAnswerFeedback=`That's incorrect. The correct answer is ` + curQ.options[curQ.correctAnswer] + '.'
        
    }
        displayFeedback = true
    setTimeout(function(){
        continueToNextQuestion()
        renderMain()
    }, 4000)

}

function continueToNextQuestion(){
 /* if currentQuestion === 5 change currentScreen to game over, 
 when click increment currentQuestion  */
 if (currentQuestion===4){
     currentScreen='game over'
 } else if (currentQuestion<4){
     currentQuestion++
     displayFeedback=false
    
 } 
}

function resetGame(){
 /* reset currentQuestion to 0,
  reset userScore to 0,
  reset currentScreen to 'start'  */
    currentQuestion=0
    currentScreen='start'
    userScore=0
    displayFeedback=false

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

 $('.main').html(`<div>User Score: ${userScore}</div>
    <div>Question: ${currentQuestion+1}/5</div>
    <p>${questions[currentQuestion].text}</p>
    <form class ="questionForm">
    <div><input type="radio" name ="question1" value = "0">${questions[currentQuestion].options[0]}</input></div>
    <div><input type="radio" name ="question1" value = "1">${questions[currentQuestion].options[1]}</input></div>
    <div><input type="radio" name ="question1" value = "2">${questions[currentQuestion].options[2]}</input></div>
    <div><input type="radio" name ="question1" value = "3">${questions[currentQuestion].options[3]}</input></div>
    ${!displayFeedback ?'<button type="submit">Submit</button>' : " "}
    </form><p>${displayFeedback ? lastAnswerFeedback: " "}</p>`)
$('.questionForm').on('submit', function(e){
    e.preventDefault()
   var selectedRadioButton = $('input[name=question1]:checked').val()
    submitAnswer(selectedRadioButton)
    renderMain()

})

}


function renderGameOver(){
 $('.main').html(`<p>Game Over</p>
 <button type="reset" class="resetButton">Reset the Quiz!</button>
 `)
 $('.resetButton').on('click',function(e){
    e.preventDefault()
    resetGame()
    renderMain()
 })

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