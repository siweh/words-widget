let inputElem = document.querySelector('.addSentence');
let displaySentence = document.querySelector('.displayWords');
let lengthOfWords = document.querySelector('.sentence');
let counterBtn = document.querySelector('.counter');
let addBtn = document.querySelector('.add-btn');

const wordsList = WordsWidget();

let inputValue;

function clickedAddBtn() {
  inputValue = inputElem.value;
  console.log(inputValue);
 let longestWords = wordsList.getLongestWords(inputValue);
  console.log(longestWords);
  displaySentence.innerHTML = longestWords;
  inputElem.value = '';
}

function clickedCounterBtn() {
  let getSizeOfSentence = wordsList.getLengthOfWords(inputValue);
  console.log(getSizeOfSentence);
  lengthOfWords.innerHTML = getSizeOfSentence;
}

addBtn.addEventListener('click', clickedAddBtn);
counterBtn.addEventListener('click', clickedCounterBtn); 
