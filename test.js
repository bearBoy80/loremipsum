import loremIpsum from './index.js';

console.log('\n=== Words (10 words) ===');
console.log(loremIpsum.generateWords(10));

console.log('\n=== Capitalized Words (5 words) ===');
console.log(loremIpsum.generateWords(5, true));

console.log('\n=== Bytes (approximately 50 bytes) ===');
console.log(loremIpsum.generateBytes(50));
console.log(`Actual bytes: ${Buffer.byteLength(loremIpsum.generateBytes(50))}`);

console.log('\n=== Sentences (2 sentences) ===');
console.log(loremIpsum.generateSentences(2));

console.log('\n=== Paragraphs (2 paragraphs) ===');
console.log(loremIpsum.generateParagraphs(2));

console.log('\n=== Bullet List (3 items) ===');
console.log(loremIpsum.generateList(3, 'bullet'));

console.log('\n=== Numbered List (3 items) ===');
console.log(loremIpsum.generateList(3, 'number'));
