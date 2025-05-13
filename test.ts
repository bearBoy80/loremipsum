import loremIpsum from './index';

console.log('Testing LoremIpsum TypeScript Module\n');

// Test generateWords
console.log('1. Generate 5 words:');
console.log(loremIpsum.generateWords(5));
console.log('\n2. Generate 8 capitalized words:');
console.log(loremIpsum.generateWords(8, true));

// Test generateBytes
console.log('\n3. Generate approximately 50 bytes:');
const bytesText = loremIpsum.generateBytes(50);
console.log(bytesText);
console.log(`Actual bytes: ${new TextEncoder().encode(bytesText).length}`);

// Test generateSentences
console.log('\n4. Generate 2 sentences:');
console.log(loremIpsum.generateSentences(2));

// Test generateParagraphs
console.log('\n5. Generate 2 paragraphs with line breaks:');
console.log(loremIpsum.generateParagraphs(2, true));
console.log('\n6. Generate 2 paragraphs without line breaks:');
console.log(loremIpsum.generateParagraphs(2, false));

// Test generateList
console.log('\n7. Generate bullet list with 3 items:');
console.log(loremIpsum.generateList(3, 'bullet'));
console.log('\n8. Generate numbered list with 3 items:');
console.log(loremIpsum.generateList(3, 'number'));
console.log('\n9. Generate plain list with 3 items:');
console.log(loremIpsum.generateList(3, 'none'));

console.log('\nAll tests completed successfully.'); 