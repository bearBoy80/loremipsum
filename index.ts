class LoremIpsum {
    private words: string[];

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
     * @param count - Number of words to generate
     * @param capitalize - Capitalize first letter of each word
     * @returns Generated Lorem Ipsum text
     */
    generateWords(count: number = 10, capitalize: boolean = false): string {
        const result: string[] = [];
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
     * @param bytes - Approximate number of bytes to generate
     * @returns Generated Lorem Ipsum text
     */
    generateBytes(bytes: number = 100): string {
        let result = '';
        while (new TextEncoder().encode(result).length < bytes) {
            result += this.generateWords(1) + ' ';
        }
        // Trim to get closer to target byte size
        while (new TextEncoder().encode(result).length > bytes) {
            result = result.slice(0, -1);
        }
        return result.trim();
    }

    /**
     * Generate Lorem Ipsum text with specified number of sentences
     * @param count - Number of sentences to generate
     * @returns Generated Lorem Ipsum text
     */
    generateSentences(count: number = 3): string {
        const result: string[] = [];
        for (let i = 0; i < count; i++) {
            const wordsCount = Math.floor(Math.random() * 10) + 5; // 5-15 words per sentence
            const sentence = this.generateWords(wordsCount);
            result.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.');
        }
        return result.join(' ');
    }

    /**
     * Generate Lorem Ipsum text with specified number of paragraphs
     * @param count - Number of paragraphs to generate
     * @param withLineBreaks - Use line breaks between paragraphs
     * @returns Generated Lorem Ipsum text
     */
    generateParagraphs(count: number = 1, withLineBreaks: boolean = true): string {
        const result: string[] = [];
        for (let i = 0; i < count; i++) {
            const sentenceCount = Math.floor(Math.random() * 3) + 3; // 3-6 sentences per paragraph
            result.push(this.generateSentences(sentenceCount));
        }
        return result.join(withLineBreaks ? '\n\n' : ' ');
    }

    /**
     * Generate Lorem Ipsum text as a list
     * @param count - Number of list items
     * @param style - List style ('bullet', 'number', or 'none')
     * @returns Generated Lorem Ipsum list
     */
    generateList(count: number = 5, style: 'bullet' | 'number' | 'none' = 'bullet'): string {
        const items: string[] = [];
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

const loremIpsum: LoremIpsum = new LoremIpsum();
export default loremIpsum; 