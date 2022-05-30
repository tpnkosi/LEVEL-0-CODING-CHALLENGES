function printCommonCharacters(word1, word2) {
    
    const word1Letters = word1.toLowerCase().split("");
    const word2Letters = word2.toLowerCase().split("");
    let commonCharacters = [];
    for(let i = 0; i < word2Letters.length; i++) {
        if(word1Letters.includes(word2Letters[i]) && commonCharacters.includes(word2Letters[i])) {
            //pass
        } else if(word1Letters.includes(word2Letters[i])) {
            commonCharacters.push(word2Letters[i]);
        }
    }
    console.log(`Common letters: ${commonCharacters.join(", ")}`);
}

printCommonCharacters("house","computers");
