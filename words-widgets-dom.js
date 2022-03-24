let inputElem = document.querySelector('.analyze');
let displaySentence = document.querySelector('.displayWords');
let lengthOfWords = document.querySelector('.sentence');
let analyzeBtn = document.querySelector('.analyzing');
let checkBox = document.querySelector(".shortWords");
let lastPreviousSentencesBtn = document.querySelector(".lastSentences");
let previousSentences = document.querySelector(".previousSentences");


const wordsList = WordsWidget();

let inputValue;

function clickedAddBtn() {
  inputValue = inputElem.value;
 // console.log(inputValue);
 let longestWords = wordsList.highliteLongWords(inputValue);
  //console.log(longestWords);
  let getSizeOfSentence = wordsList.getLengthOfWords(inputValue);
  //console.log(getSizeOfSentence);
  lengthOfWords.innerHTML = getSizeOfSentence;
  displaySentence.innerHTML = longestWords;

  inputElem.value = '';
}

function checkBoxClicked(){
  //console.log(checkBox.checked);
  if(checkBox.checked){
    let getShortWords = wordsList.hideShortWords(inputValue);
 // console.log(getShortWords);
  displaySentence.innerHTML = getShortWords;
  }else {
    let longestWords = wordsList.highliteLongWords(inputValue);
    //console.log(longestWords);
    displaySentence.innerHTML = longestWords;
  }

  lengthOfWords.innerHTML = '';
}

function showingLastSentences(){
  let showLastSentences = wordsList.showPreviousSentences();
  previousSentences.innerHTML = `<a> ${showLastSentences} </a>`;
}

analyzeBtn.addEventListener('click', clickedAddBtn);
checkBox.addEventListener('change', checkBoxClicked)
lastPreviousSentencesBtn.addEventListener('click', showingLastSentences);