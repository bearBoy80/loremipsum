import loremIpsum from './index.js';

describe('LoremIpsum Generator', () => {
    test('generateWords should generate specified number of words', () => {
        const words = loremIpsum.generateWords(5);
        expect(words.split(' ')).toHaveLength(5);
    });

    test('generateWords with capitalize should capitalize words', () => {
        const words = loremIpsum.generateWords(3, true);
        const allWordsCapitalized = words.split(' ').every(word => 
            word[0] === word[0].toUpperCase()
        );
        expect(allWordsCapitalized).toBe(true);
    });

    test('generateBytes should generate text with approximate byte length', () => {
        const text = loremIpsum.generateBytes(50);
        const byteLength = Buffer.byteLength(text);
        // Allow small variance due to trimming
        expect(byteLength).toBeLessThanOrEqual(50);
        expect(byteLength).toBeGreaterThan(45);
    });

    test('generateSentences should generate specified number of sentences', () => {
        const sentences = loremIpsum.generateSentences(3);
        const sentenceCount = sentences.split('. ').length;
        expect(sentenceCount).toBe(3);
    });

    test('generateParagraphs should generate specified number of paragraphs', () => {
        const paragraphs = loremIpsum.generateParagraphs(2, true);
        const paragraphCount = paragraphs.split('\n\n').length;
        expect(paragraphCount).toBe(2);
    });

    test('generateList should generate bullet list', () => {
        const list = loremIpsum.generateList(3, 'bullet');
        const lines = list.split('\n');
        expect(lines).toHaveLength(3);
        expect(lines.every(line => line.startsWith('• '))).toBe(true);
    });

    test('generateList should generate numbered list', () => {
        const list = loremIpsum.generateList(3, 'number');
        const lines = list.split('\n');
        expect(lines).toHaveLength(3);
        expect(lines[0]).toMatch(/^1\. /);
        expect(lines[1]).toMatch(/^2\. /);
        expect(lines[2]).toMatch(/^3\. /);
    });
});
