class LoremIpsum {
    constructor() {
        this.words = [
            'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
            'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
            'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna',
            'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis',
            'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi',
            'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis',
            'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'voluptate',
            'velit', 'esse', 'cillum', 'dolore', 'fugiat', 'nulla',
            'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat',
            'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
            'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
        ];
    }

    /**
     * Generate Lorem Ipsum text with specified number of words
     * @param {number} count - Number of words to generate
     * @param {boolean} [capitalize=false] - Capitalize first letter of each word
     * @returns {string} Generated Lorem Ipsum text
     */
    generateWords(count = 10, capitalize = false) {
        const result = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * this.words.length);
            let word = this.words[randomIndex];
            if (capitalize) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            result.push(word);
        }
        return result.join(' ');
    }

    /**
     * Generate Lorem Ipsum text with specified number of bytes
     * @param {number} bytes - Approximate number of bytes to generate
     * @returns {string} Generated Lorem Ipsum text
     */
    generateBytes(bytes = 100) {
        let result = '';
        while (Buffer.byteLength(result) < bytes) {
            result += this.generateWords(1) + ' ';
        }
        // Trim to get closer to target byte size
        while (Buffer.byteLength(result) > bytes) {
            result = result.slice(0, -1);
        }
        return result.trim();
    }

    /**
     * Generate Lorem Ipsum text with specified number of sentences
     * @param {number} count - Number of sentences to generate
     * @returns {string} Generated Lorem Ipsum text
     */
    generateSentences(count = 3) {
        const result = [];
        for (let i = 0; i < count; i++) {
            const wordsCount = Math.floor(Math.random() * 10) + 5; // 5-15 words per sentence
            const sentence = this.generateWords(wordsCount);
            result.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.');
        }
        return result.join(' ');
    }

    /**
     * Generate Lorem Ipsum text with specified number of paragraphs
     * @param {number} count - Number of paragraphs to generate
     * @param {boolean} [withLineBreaks=true] - Use line breaks between paragraphs
     * @returns {string} Generated Lorem Ipsum text
     */
    generateParagraphs(count = 1, withLineBreaks = true) {
        const result = [];
        for (let i = 0; i < count; i++) {
            const sentenceCount = Math.floor(Math.random() * 3) + 3; // 3-6 sentences per paragraph
            result.push(this.generateSentences(sentenceCount));
        }
        return result.join(withLineBreaks ? '\n\n' : ' ');
    }

    /**
     * Generate Lorem Ipsum text as a list
     * @param {number} count - Number of list items
     * @param {string} [style='bullet'] - List style ('bullet', 'number', or 'none')
     * @returns {string} Generated Lorem Ipsum list
     */
    generateList(count = 5, style = 'bullet') {
        const items = [];
        for (let i = 0; i < count; i++) {
            const wordsCount = Math.floor(Math.random() * 5) + 3; // 3-8 words per item
            const text = this.generateWords(wordsCount);
            let prefix = '';
            
            switch (style) {
                case 'bullet':
                    prefix = '• ';
                    break;
                case 'number':
                    prefix = `${i + 1}. `;
                    break;
                case 'none':
                default:
                    prefix = '';
            }
            
            items.push(prefix + text.charAt(0).toUpperCase() + text.slice(1));
        }
        return items.join('\n');
    }
}

const loremIpsum = new LoremIpsum();
export default loremIpsum;
