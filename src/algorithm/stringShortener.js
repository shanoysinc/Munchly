const encode = (num) => {
    const DICTIONARY =
        "abcdefghijklmnopqrstuvwuxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const base = DICTIONARY.length;
    let encoded = "";

    if (num === DICTIONARY[0]) {
        return DICTIONARY[0];
    }

    while (num > 0) {
        encoded += DICTIONARY[num % base];
        num = Math.floor(num / base);
    }

    return reverseWord(encoded);
}

const reverseWord = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}

export default encode