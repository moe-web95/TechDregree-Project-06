
const phrases = [
    "I am studuent",
    "Teamtree house",
    "FrontEnd developer",
    "JavaScript",
    "TechDegree",
]
const qwerty = document.getElementById('qwerty');
const Phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay =  document.getElementById("overlay")
const title = document.querySelector('.title');
const ul = document.querySelector('ul');
let missed = 0;

startGame.addEventListener('click', () =>{
    overlay.style.display = "none";
});
function getRandomPhraseAsArray(arr) {
    let randomNumber =  Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomNumber].toLowerCase();
    let randomSplit = randomPhrase.split('');
    console.log(randomSplit);
    return randomSplit;
};
const PhraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr) {
    for (let i=0; i<arr.length; i++) {
        let li = document.createElement('li');
        li.textContent =arr[i];
        ul.appendChild(li);
        
        if(arr[i]===''){
            li.className = '';
        }else{
            li.className = 'letter';
        }
    }
};
addPhraseToDisplay(PhraseArray);

function checkLetter (button) {
    const listItems = document.querySelectorAll('li');
    let match = null;
    for(let i=0; i<listItems.length; i++){
        if(button.textContent === listItems[i].textContent.toLowerCase()){
            listItems[i].className = 'show';
            match = button.textContent;
        }
    }
        return match;
};

qwerty.addEventListener ('click', (e) =>{
    const btn = e.target;
    if(btn.tagName === 'BUTTON' || btn.className === 'chosen'){
        btn.className = 'chosen';
        btn.disabled = true;
        const letterFound = checkLetter(btn);
        if (letterFound === null) {
            const headLost = document.querySelectorAll('.tries img');
            headLost.src = 'img/lostHeart.png';
            headLost.className = 'lost';
            console.log(headLost);
            missed++;
        }
    }
});

function checkWin() {
    const letter = document.querySelector('.letter');
    const show = document.querySelector('.show');
   

    if (letter.length === show.length) {
        overylay.ClassName = 'win'; 
        title.textContent = 'Your Win';
        overlay.style.display = 'flex';
    } else if (missed > 4 ) {
        overlay.className = 'lose';
        title.textContent = 'Your Lose';
        overlay.style.display = 'flex';
    }
    
};













