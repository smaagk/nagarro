/**
 * @description 
 * This method will take String as input and return first char + number of unique chars between first and last + last
 * Smooth would become S3h
 * @param {string} sentence 
*/
const replaceWord = (sentence) => {
    const tokens = sentence.split((/\W/g)).filter(e =>  e);
    const separators = sentence.split(/\w/g);

    return sentenceTransformation(tokens, separators);
}

const sentenceTransformation = (tokens, separators) => {
    let newSentence = '';
    let separatorsArr = separators.filter((separator) => separator !== '');
    // creation of new word with the given criteria
    for (token in tokens) {
        newSentence += tokens[token].length > 2 ? newWord(tokens[token]) : tokens[token];
        newSentence += separatorsArr[token] !== undefined ? separatorsArr[token] : ''
    }

    return newSentence;
}

const getFirstLetterWord = (word) => {
    return word.split('')[0]
}

const countDiffentCharacter = (token) => {
    const set = new Set(token.split(''))

    return [...set].length
}

const getLastLetterWord = (word) => {
    return word.substr(word.length - 1);
}

const newWord = (oldWord) => {
    const middleWord = oldWord.substring(1, oldWord.length - 1);
    return `${getFirstLetterWord(oldWord)}${countDiffentCharacter(middleWord)}${getLastLetterWord(oldWord)}`
}

module.exports = {
    replaceWord,
    sentenceTransformation,
    getFirstLetterWord,
    countDiffentCharacter,
    getLastLetterWord,
    newWord
};