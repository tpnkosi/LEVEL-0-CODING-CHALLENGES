function printVowels(word) {

    const letters = word.split("");
    let foundVowels = [];
    for(let i = 0; i < letters.length; i ++) {
        switch((letters[i]).toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if(foundVowels.includes(letters[i].toLowerCase())) {
                    break;
                } else {
                    foundVowels.push(letters[i].toLowerCase());
                    break;
                }
        }
    }
    console.log(`Vowels: ${foundVowels.join(", ")}`);
}

printVowels("Umuzi");