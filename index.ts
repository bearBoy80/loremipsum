/**
 * Lorem Ipsum Generator
 * 
 * A TypeScript library for generating Lorem Ipsum placeholder text in various formats.
 * This module provides functionality to create words, sentences, paragraphs, and lists
 * with customizable options.
 * 
 * @author bearboy80
 * @version 1.0.0
 */

/**
 * LoremIpsum class
 * 
 * Provides methods to generate Lorem Ipsum text in different formats and lengths.
 */
class LoremIpsum {
    /**
     * Array of Lorem Ipsum words used for generating text
     */
    private words: string[];

    /**
     * Initializes the LoremIpsum generator with a standard set of Lorem Ipsum words
     */
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
     * 
     * Randomly selects words from the internal word list to create a string
     * of space-separated words.
     * 
     * @param count - Number of words to generate (default: 10)
     * @param capitalize - Whether to capitalize the first letter of each word (default: false)
     * @returns Generated Lorem Ipsum text as a string of words
     */
    generateWords(count: number = 10, capitalize: boolean = false): string {
        const result: string[] = [];
        for (let i = 0; i < count; i++) {
            // Select a random word from the words array
            const randomIndex = Math.floor(Math.random() * this.words.length);
            let word = this.words[randomIndex];
            
            // Capitalize the word if requested
            if (capitalize) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }
            result.push(word);
        }
        return result.join(' ');
    }

    /**
     * Generate Lorem Ipsum text with specified number of bytes
     * 
     * Creates text that is approximately the requested size in bytes.
     * This is useful when you need text of a specific size for testing.
     * 
     * @param bytes - Approximate number of bytes to generate (default: 100)
     * @returns Generated Lorem Ipsum text with the requested byte size
     */
    generateBytes(bytes: number = 100): string {
        let result = '';
        // Add words until we exceed the desired byte length
        while (new TextEncoder().encode(result).length < bytes) {
            result += this.generateWords(1) + ' ';
        }
        // Trim characters until we're under the desired byte length
        while (new TextEncoder().encode(result).length > bytes) {
            result = result.slice(0, -1);
        }
        return result.trim();
    }

    /**
     * Generate Lorem Ipsum text with specified number of sentences
     * 
     * Creates properly formatted sentences with capitalization and periods.
     * Each sentence contains a random number of words (between 5-15).
     * 
     * @param count - Number of sentences to generate (default: 3)
     * @returns Generated Lorem Ipsum text as a string of sentences
     */
    generateSentences(count: number = 3): string {
        const result: string[] = [];
        for (let i = 0; i < count; i++) {
            // Generate a random number of words for this sentence
            const wordsCount = Math.floor(Math.random() * 10) + 5; // 5-15 words per sentence
            const sentence = this.generateWords(wordsCount);
            // Capitalize first letter and add period
            result.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.');
        }
        return result.join(' ');
    }

    /**
     * Generate Lorem Ipsum text with specified number of paragraphs
     * 
     * Creates paragraphs containing multiple sentences. Each paragraph has
     * a random number of sentences (between 3-6).
     * 
     * @param count - Number of paragraphs to generate (default: 1)
     * @param withLineBreaks - Whether to separate paragraphs with newlines (default: true)
     * @returns Generated Lorem Ipsum text as a string of paragraphs
     */
    generateParagraphs(count: number = 1, withLineBreaks: boolean = true): string {
        const result: string[] = [];
        for (let i = 0; i < count; i++) {
            // Generate a random number of sentences for this paragraph
            const sentenceCount = Math.floor(Math.random() * 3) + 3; // 3-6 sentences per paragraph
            result.push(this.generateSentences(sentenceCount));
        }
        // Join paragraphs with line breaks or spaces depending on parameter
        return result.join(withLineBreaks ? '\n\n' : ' ');
    }

    /**
     * Generate Lorem Ipsum text as a list
     * 
     * Creates a list of items with optional formatting (bullet points or numbers).
     * Each list item contains a random number of words (between 3-8).
     * 
     * @param count - Number of list items (default: 5)
     * @param style - List style: 'bullet' for bullet points, 'number' for numbered list, 'none' for plain text (default: 'bullet')
     * @returns Generated Lorem Ipsum list as a newline-separated string
     */
    generateList(count: number = 5, style: 'bullet' | 'number' | 'none' = 'bullet'): string {
        const items: string[] = [];
        for (let i = 0; i < count; i++) {
            // Generate a random number of words for this list item
            const wordsCount = Math.floor(Math.random() * 5) + 3; // 3-8 words per item
            const text = this.generateWords(wordsCount);
            let prefix = '';
            
            // Apply the appropriate list style prefix
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
            
            // Capitalize first letter of each list item
            items.push(prefix + text.charAt(0).toUpperCase() + text.slice(1));
        }
        return items.join('\n');
    }
}

// Create a singleton instance of the LoremIpsum generator
const loremIpsum: LoremIpsum = new LoremIpsum();

/**
 * Export the instance as the default export
 * 
 * This allows users to import the LoremIpsum class as a default import
 * in their TypeScript or JavaScript files.
 */
export default loremIpsum; 