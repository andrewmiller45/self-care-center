//variables, querySelectors
var submitBtn = document.querySelector('#receive-msg')
var radios = document.getElementsByName('action')
var messageView = document.querySelector('.message-section')
var messageContainer = document.querySelector('.message-container')
var meditationImage = document.querySelector('img')
var advice

//event listeners

submitBtn.addEventListener('click', displayText)

//functions

function displayText(){
    if (radios[0].checked) {
        advice = affirmations[getRandomIndex(affirmations)]
    } else
        advice = mantras[getRandomIndex(mantras)];

    meditationImage.classList.add('hidden')
    messageContainer.classList.remove('hidden')
    messageView.innerHTML = ""
    messageView.innerHTML += 
        `<section class="message-section"><h2>${advice}</h2></section>`

    setTimeout(resetState, 5000)
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function resetState(){
    meditationImage.classList.remove('hidden')
    messageContainer.classList.add('hidden')
    radios[0].checked = false
    radios[1].checked = false
}