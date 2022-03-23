function WordsWidget() {
  let storeSentences = []

  function highliteLongWords(sentence) {
    //console.log(sentence);
    storeSentences.push(sentence);
    console.log(storeSentences);
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
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length < 5){
        let updatedSentence = sentence.replace(
          word, ' '
        )
        sentence = updatedSentence;
      }else {
        let updatedSentence = sentence.replace(
          word, ` <mark>${word}</mark> `
        ) 
        sentence = updatedSentence;
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
    highliteLongWords,
    getLengthOfWords,
    hideShortWords
  };
}
