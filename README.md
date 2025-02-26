# loremipsum-generator

A simple, lightweight, and flexible Lorem Ipsum text generator for Node.js. Generate placeholder text in various formats including words, sentences, paragraphs, and lists.

Visit our website: [www.loremipsums.org](https://www.loremipsums.org)

## Features

- 🚀 Zero dependencies
- 📦 Lightweight (~2KB)
- 🔄 ESM and CommonJS support
- 🎯 Multiple output formats
- 💪 TypeScript friendly
- 🌐 Online generator available at [www.loremipsums.org](https://www.loremipsums.org)

## Installation

```bash
# Using npm
npm install @jackhunds/loremipsum-generator

# Using yarn
yarn add @jackhunds/loremipsum-generator

# Using pnpm
pnpm add @jackhunds/loremipsum-generator
```

## Usage

```javascript
// ESM
import lorem from '@jackhunds/loremipsum-generator';

// CommonJS
const lorem = require('@jackhunds/loremipsum-generator');

// Basic usage
const words = lorem.generateWords(5);
// => "lorem ipsum dolor sit amet"

// Generate capitalized words
const capitalizedWords = lorem.generateWords(3, true);
// => "Lorem Ipsum Dolor"

// Generate text with specific byte length
const bytes = lorem.generateBytes(50);
// => Text with approximately 50 bytes

// Generate sentences
const sentences = lorem.generateSentences(2);
// => "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."

// Generate paragraphs with line breaks
const paragraphs = lorem.generateParagraphs(2);
// => Two paragraphs separated by "\n\n"

// Generate paragraphs without line breaks
const continuousParagraphs = lorem.generateParagraphs(2, false);
// => Two paragraphs separated by space

// Generate bullet list
const bulletList = lorem.generateList(3, 'bullet');
// => • Lorem ipsum dolor
//    • Sit amet consectetur
//    • Adipiscing elit sed

// Generate numbered list
const numberedList = lorem.generateList(3, 'number');
// => 1. Lorem ipsum dolor
//    2. Sit amet consectetur
//    3. Adipiscing elit sed
```

## API Reference

### generateWords(count, capitalize?)
Generates Lorem Ipsum text with the specified number of words.
- `count`: Number of words to generate (default: 10)
- `capitalize`: Capitalize first letter of each word (default: false)

### generateBytes(bytes)
Generates Lorem Ipsum text with approximate byte length.
- `bytes`: Target number of bytes (default: 100)

### generateSentences(count)
Generates Lorem Ipsum text with the specified number of sentences.
- `count`: Number of sentences to generate (default: 3)

### generateParagraphs(count, withLineBreaks?)
Generates Lorem Ipsum text with the specified number of paragraphs.
- `count`: Number of paragraphs to generate (default: 1)
- `withLineBreaks`: Use line breaks between paragraphs (default: true)

### generateList(count, style?)
Generates Lorem Ipsum text as a list.
- `count`: Number of list items to generate (default: 5)
- `style`: List style ('bullet', 'number', or 'none') (default: 'bullet')

## Examples

### Creating a Blog Post Template

```javascript
const title = lorem.generateWords(5, true);
const excerpt = lorem.generateSentences(2);
const content = lorem.generateParagraphs(3);

const blogPost = {
    title,
    excerpt,
    content
};
```

### Generating UI Placeholder Content

```javascript
const menuItems = lorem.generateList(5, 'bullet');
const shortDescription = lorem.generateBytes(100);
const features = lorem.generateList(3, 'number');
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © 2025 [www.loremipsums.org](https://www.loremipsums.org)
