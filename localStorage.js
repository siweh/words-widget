function storeSentencesEntered(sentences = []){
    let wordsList = JSON.stringify(sentences);
    console.log(wordsList);
    localStorage.setItem('listOfSentences', wordsList);
}

function getStoredSentences(){
    let storingSentences = localStorage.getItem('listOfSentences');
    console.log(storingSentences);
    return JSON.parse(storingSentences);
}