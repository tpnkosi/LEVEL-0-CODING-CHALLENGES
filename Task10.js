function printCommonCharacters(word1, word2) {
    
    const word1Letters = word1.toLowerCase().split("");
    const word2Letters = word2.toLowerCase().split("");
    let commonCharacters = [];
    for(let i = 0; i < word1Letters.length; i++) {
        if(word2Letters.includes(word1Letters[i]) && commonCharacters.includes(word1Letters[i])) {
            //pass
        } else if(word2Letters.includes(word1Letters[i])) {
            commonCharacters.push(word1Letters[i]);
        }
    }
    return `Common letters: ${commonCharacters}`;
}

console.log(printCommonCharacters("house","computers"));
