function WordsWidget() {
  function getWords(words) {
    var passedWord = words.split(' ');
    let longWords = passedWord.filter((word) => {
      return word.length > 4;
    });

    // let longWords = [];

    // for (var i = 0; i < words.length; i++) {
    //   if (words[i].length > 4) {
    //     longWords.push(words[i]);
    //   }
    // }
    return longWords;
  }

  return {
    getWords,
  };
}
