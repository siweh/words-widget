function WordsWidget() {
  // let storeSentences = []

  function getLongestWords(sentence) {
    //console.log(sentence);
    // let storing = storeSentences.fill(sentence);
    // console.log(storing);
    let words = sentence.split(' ');
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      //console.log(word);
      if (word.length > 4) {
        let highlitedSentence = sentence.replace(
          word,
          ` <mark style="background-color:yellow">${word}</mark> `
        );
        sentence = highlitedSentence;
        //console.log(sentence);
      }
    }
    return sentence;
  }

  function hideShortWords(sentence) {
    let highlitedSentence;
    let names; 
    let words = sentence.split(' ');
    //console.log(sentence);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      //console.log(word);
      if (word.length < 5){
        highlitedSentence = sentence.replace(
          word, ' '
        )
      // console.log(highlitedSentence);
        sentence = highlitedSentence;
        //console.log(sentence);
      }else {
        names = sentence.split(' ');
        for (let i = 0; i < names.length; i++) {
          const longestWord = names[i];
          //console.log(longestWord);
          if(longestWord.length > 5){
            highlitedSentence = ` <mark>${longestWord}</mark> `;
            sentence = highlitedSentence;
          }
        }
      }
    }
    return sentence;
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
    getLongestWords,
    getLengthOfWords,
    hideShortWords
  };
}
