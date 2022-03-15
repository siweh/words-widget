let inputElem = document.querySelector('.addSentence');
let displayWord = document.querySelector('.displayWords');
let addBtn = document.querySelector('.add-btn');

const wordsList = WordsWidget();
function clickedAddBtm() {
  let inputValue = inputElem.value;
  console.log(inputValue);
  let getSentense = wordsList.getWords(inputValue);
  console.log(getSentense);
  displayWord.innerHTML = getSentense;
}
addBtn.addEventListener('click', clickedAddBtm);
