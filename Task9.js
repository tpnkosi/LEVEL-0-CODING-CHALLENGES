function printVowels(word) {

    let letters = word.split("");
    let foundVowels = [];
    for(let i = 0; i < letters.length; i ++) {
        switch((letters[i]).toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if(foundVowels.includes(letters[i])) {
                    break;
                } else {
                    foundVowels.push(letters[i]);
                    break;
                }
        }
    }
    return "Vowels: " + foundVowels;
}

console.log(printVowels("umuzi"));