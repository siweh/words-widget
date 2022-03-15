let inputElem = document.querySelector('.addSentence');
let displayWord = document.querySelector('.displayWords');
let lengthOfWords = document.querySelector('.sentence');
let addBtn = document.querySelector('.add-btn');

const wordsList = WordsWidget();
function clickedAddBtm() {
  let inputValue = inputElem.value;
  //console.log(inputValue);
  let longestWords = wordsList.getLongestWords(inputValue);
  //console.log(longestWords);
  displayWord.innerHTML = longestWords;
  let getSizeOfSentence = wordsList.getLengthOfWords(inputValue);
  //console.log(getSizeOfSentence);
  lengthOfWords.innerHTML = getSizeOfSentence;
  inputElem.value = '';
}
addBtn.addEventListener('click', clickedAddBtm);
