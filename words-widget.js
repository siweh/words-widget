function WordsWidget(sentences) {
  let storeSentences = sentences !== null ? sentences : [];
  console.log(storeSentences);
  let errorMessage = "";

  function highliteLongWords(sentence) {
    if (storeSentences.includes(sentence)){
      errorMessage = 'Sentence already exists';
    }else{
      storeSentences.push(sentence);
    }

    if (sentence === ''){
      errorMessage = 'Please enter a sentence';
    }

    const words = sentence.split(' ');
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

  //I am writing sentence here
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
    return storeSentences;
  }

  function getDetailsOfSentences(){
    let detailsOfSentences = storeSentences.forEach(sentence => {
      console.log(sentence);
      sentence = 'Last entered now';
      return sentence;
    });
    return detailsOfSentences;
  }
  function getErrorMessages(){
    return errorMessage;
  }
  function getLengthOfWords(sentence) {
    //console.log(sentence);
    let lengthOfSentence = sentence.split(' ').length;
    //console.log(lengthOfSentence);
    if (sentence === ''){
      lengthOfSentence = 0;
    }
      
    return `Number of words in a sentence:  ${lengthOfSentence}`;
  }

  return {
    highliteLongWords,
    getLengthOfWords,
    hideShortWords,
    getErrorMessages,
    getDetailsOfSentences,
    showPreviousSentences
  };
}
