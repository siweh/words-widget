let inputElem = document.querySelector('.analyze');
let displaySentence = document.querySelector('.displayWords');
let lengthOfWords = document.querySelector('.sentence');
let analyzeBtn = document.querySelector('.analyzing');
let shortWords = document.querySelector('.shortWords');
let hideBtn = document.querySelector('.hide');

const wordsList = WordsWidget();

let inputValue;

function clickedAddBtn() {
  inputValue = inputElem.value;
 // console.log(inputValue);
 let longestWords = wordsList.getLongestWords(inputValue);
  //console.log(longestWords);
  let getSizeOfSentence = wordsList.getLengthOfWords(inputValue);
  //console.log(getSizeOfSentence);
  lengthOfWords.innerHTML = getSizeOfSentence;
  displaySentence.innerHTML = longestWords;

  inputElem.value = '';
}

function checkBoxClicked(){
  let getShortWords = wordsList.hideShortWords(inputValue);
  //console.log(getShortWords);
  displaySentence.innerHTML = getShortWords;
}

analyzeBtn.addEventListener('click', clickedAddBtn);
hideBtn.addEventListener('click', checkBoxClicked)
