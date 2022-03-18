function WordsWidget() {
  let storeSentences = []

  function getLongestWords(sentence) {
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

  function hideShortWords(sentences) {
    let highlitedSentence;
    let names; 
    let words = sentences.split(' ');
    //console.log(sentence);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      //console.log(word);
      if (word.length < 5){
        highlitedSentence = sentences.replace(
          word, ' '
        )
      // console.log(highlitedSentence);
        sentences = highlitedSentence;
        //console.log(sentence);
      }else if(word.length > 5){
            highlitedSentence = `<mark>${word}</mark> `;
            console.log(highlitedSentence);
            sentences = highlitedSentence;
      }
    }
    return sentences;
  }

  function getLastEnteredSentences(){
    return `${storeSentences} <br><br /> `;
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
    hideShortWords,
    getLastEnteredSentences
  };
}
