const sentenceTransform = require("./index.js");

test('Transform a sentence', () => {
    expect(sentenceTransform.replaceWord('His get rich quick scheme.')).toBe('H1s g1t r2h q3k s4e.');
    expect(sentenceTransform.replaceWord('I don’t respect ;')).toBe('I d1n’t r4t ;')
})

test('returns last character of a word', () => {
    expect(sentenceTransform.getLastLetterWord("lastWorD")).toBe("D");
});