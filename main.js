//variables, querySelectors
var submitBtn = document.querySelector('#receive-msg')
var radios = document.getElementsByName('action')
var messageView = document.querySelector('.message-section')
var messageContainer = document.querySelector('.message-container')
var meditationImage = document.querySelector('img')
var advice

//event listeners
submitBtn.addEventListener('click', generateMessage)

//functions
function generateMessage(e){
    if (!radios[0].checked && !radios[1].checked){
        e.preventDefault();
        return alert `Choose a mantra or affirmation!`
    }
    if (radios[0].checked) {
        advice = affirmations[getRandomIndex(affirmations)]
    } else
        advice = mantras[getRandomIndex(mantras)];
    renderMessageView()
}

function renderMessageView(){
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