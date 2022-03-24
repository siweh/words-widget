function WordsWidget() {
  let storeSentences = []

  function highliteLongWords(sentence) {
    storeSentences.push(sentence);
    //console.log(storeSentences);
    let words = sentence.split(' ');
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      //console.log(word);
      if (word.length > 4) {
        words[i] = ` <mark style="background-color:yellow">${word}</mark> `;
      }
    }
    let updatedSentence = words.join(" ")
    return updatedSentence;
  }

  function hideShortWords(sentence) {
    let words = sentence.split(' ');
    console.log(words);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length < 5){
        words[i] = '';
      }else {
        words[i] = ` <mark>${word}</mark> `;
      }
    }
    let updatedSentence = words.join(" ");
    return updatedSentence;
  }

  function showPreviousSentences(){
    return storeSentences.join("<br />");
  }

  function getLengthOfWords(sentence) {
    //console.log(sentence);
    let lengthOfSentence = sentence.split(' ').length;
    //console.log(lengthOfSentence);
    if (sentence === ''){
      lengthOfSentence = 0;
    }
      
    return `There are:  ${lengthOfSentence} words`;
  }

  return {
    highliteLongWords,
    getLengthOfWords,
    hideShortWords,
    showPreviousSentences
  };
}
