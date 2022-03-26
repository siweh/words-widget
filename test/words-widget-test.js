describe('Words widgets', function(){
    const wordsList = WordsWidget();
    it('should get sentence entered', function(){
        let sentenceEntered = wordsList.highliteLongWords('This is my first sentence')
        assert.equal('This is my  <mark style="background-color:yellow">first</mark>   <mark style="background-color:yellow">sentence</mark> ', sentenceEntered)
    })

    it('should be able to get the number of words in a sentence', function(){
        wordsList.highliteLongWords('This is my second sentence');
        assert.equal('Number of words in a sentence:  5', wordsList.getLengthOfWords('This is my second sentence'))
    })

    it('should be able to hide words shorter than 5 character', function(){
        wordsList.highliteLongWords('This is my third sentence');
        assert.equal('    <mark>third</mark>   <mark>sentence</mark> ', wordsList.hideShortWords('This is my third sentence'))
    })

    // it('should be able to unhide the short words', function(){
    //     wordsList.highliteLongWords('I am writing a sentence here');
    //     assert.equal('I am <mark>writing</mark> a <mark>sentence</mark> here', wordsList.hideShortWords('I am writing a sentence here'))
    // })

    it('should return the last 5 sentences entered', function(){
        wordsList.highliteLongWords('This is the first edded sentence');
        wordsList.highliteLongWords('This is the second added sentence');
        wordsList.highliteLongWords('This is the third added sentence');
        assert.deepEqual(["This is my first sentence", "This is my second sentence", "This is my third sentence", "This is the first edded sentence", "This is the second added sentence","This is the third added sentence"], wordsList.showPreviousSentences())
    })

    it('should return an error saying Please enter a sentence if sentence is not entered', function(){
        wordsList.highliteLongWords('');
        assert.equal('Please enter a sentence', wordsList.getErrorMessages());
    });

    it('should return an error saying Sentence already exists if entered the same sentence', function(){
        wordsList.highliteLongWords('This is the first edded sentence');
        wordsList.highliteLongWords('This is the first edded sentence');
        assert.equal('Sentence already exists', wordsList.getErrorMessages());
    });
})