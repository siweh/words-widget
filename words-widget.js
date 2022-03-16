function WordsWidget() {
  function getLongestWords(sentence) {
    //console.log(sentence);
    let words = sentence.split(' ');
    //console.log(words);

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      //console.log(word);
      if (word.length > 4) {
        let highlitedSentence = sentence.replace(
          word,
          `<mark> ${word} </mark>`
        );
        //console.log(highlitedSentence);
        sentence = highlitedSentence;
      }
    }
    return sentence;
  }

  function hideShortWords(sentence) {
    console.log(sentence);
    for (let i = 0; i < sentence.length; i++) {
      const word = sentence[i];
      
    }
  }

  function getLengthOfWords(sentence) {
    console.log(sentence);
    let lengthOfSentence = sentence.split(' ').length;
    //console.log(lengthOfSentence);
    return `There are ${lengthOfSentence} words`;
  }

  return {
    getLongestWords,
    getLengthOfWords,
  };
}
