function WordsWidget() {
  function getLongestWords(sentence) {
    //console.log(sentence);
    let words = sentence.split(' ');
    console.log(words);

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      console.log(word);
      if (word.length > 4) {
        let highlitedSentence = sentence.replace(
          word,
          `<mark> ${word} </mark>`
        );
        console.log(highlitedSentence);
        sentence = highlitedSentence;
      }
    }
    return sentence;
  }

  function getLengthOfWords(sentence) {
    let lengthOfSentence = sentence.split(' ').length;
    return lengthOfSentence;
  }

  return {
    getLongestWords,
    getLengthOfWords,
  };
}
