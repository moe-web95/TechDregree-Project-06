
const phrases = [
    "I am studuent",
    "Teamtree house",
    "FrontEnd developer",
    "JavaScript",
    "TechDegree",
]
const qwerty = document.getElementById('qwerty');
const Phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn_reset');
const overlay =  document.getElementById("overlay")
const ul = document.querySelector('ul');
let missed = 0;

startGame.addEventListener('click', () =>{
    overlay.style.display = "none";
});
function getRandomPhraseAsArray(arr) {
    let randomNumber =  Math.floor(Math.random() * arr.length);
    let randomPhrase = randomNumber[arr].tolowercase()
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
        if(button.textContent === listItems[i].textContent.tolowercase()){
            listItems[i].className = 'show';
            match = button.textContent;
        }
    }
        return match;
};

qwerty.addEventListener ('click', () =>{
    
});













