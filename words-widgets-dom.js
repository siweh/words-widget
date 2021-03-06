let inputElem = document.querySelector('.analyze');
let displaySentence = document.querySelector('.displayWords');
let lengthOfWords = document.querySelector('.lengthOfWords');
let analyzeBtn = document.querySelector('.analyzing');
let checkBox = document.querySelector(".shortWords");
let sentences = document.querySelector('.wordList').innerHTML;
let lastPreviousSentencesBtn = document.querySelector(".lastSentences");
let previousSentences = document.querySelector(".previousSentences");
let showDetailsOfSentences = document.querySelector('.detailsOfSentences');

var theTemplate = Handlebars.compile(sentences);

let storeEnteredSentences = getStoredSentences();
console.log(storeEnteredSentences);
const wordsList = WordsWidget(storeEnteredSentences);

let inputValue;

document.querySelector(".previousSentences").innerHTML = theTemplate({
  storedSentences: storeEnteredSentences,
});

function clickedAddBtn() {
  inputValue = inputElem.value;
 // console.log(inputValue);
 let longestWords = wordsList.highliteLongWords(inputValue);
  //console.log(longestWords);
  let getSizeOfSentence = wordsList.getLengthOfWords(inputValue);
  //console.log(getSizeOfSentence);
  lengthOfWords.innerHTML = getSizeOfSentence;
  displaySentence.innerHTML = longestWords;
  let errors = wordsList.getErrorMessages();

  document.querySelector('.errorMsg').innerHTML = theTemplate({
    displayErrors: errors
  });

  setTimeout(() => {
    document.querySelector('.errorMsg').innerHTML = '';
  }, 3000);

  storeSentencesEntered(wordsList.showPreviousSentences());

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
  let showDetails = wordsList.getDetailsOfSentences();
  document.querySelector(".previousSentences").innerHTML = theTemplate({
    storedSentences: showLastSentences,
  });
  
  showDetailsOfSentences.innerHTML = theTemplate({
    storedSentences: showDetails,
  });
}

analyzeBtn.addEventListener('click', clickedAddBtn);
checkBox.addEventListener('change', checkBoxClicked)
lastPreviousSentencesBtn.addEventListener('click', showingLastSentences);