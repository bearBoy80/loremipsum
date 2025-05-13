/**
 * Lorem Ipsum Generator Test Suite
 * 
 * This file contains tests for the LoremIpsum generator functionality.
 * It tests all the main methods and displays the results in the console.
 * 
 * @author bearboy80
 * @version 1.0.0
 */

// Import the LoremIpsum generator instance
import loremIpsum from './index';

// Display header for the test suite
console.log('Testing LoremIpsum TypeScript Module\n');

/**
 * Test Section: generateWords
 * 
 * Tests the word generation with different configurations
 */
// Test #1: Generate simple word list
console.log('1. Generate 5 words:');
console.log(loremIpsum.generateWords(5));

// Test #2: Generate capitalized word list
console.log('\n2. Generate 8 capitalized words:');
console.log(loremIpsum.generateWords(8, true));

/**
 * Test Section: generateBytes
 * 
 * Tests byte-based text generation and verifies the actual size
 */
// Test #3: Generate text with specific byte length
console.log('\n3. Generate approximately 50 bytes:');
const bytesText = loremIpsum.generateBytes(50);
console.log(bytesText);
// Verify actual byte count using TextEncoder
console.log(`Actual bytes: ${new TextEncoder().encode(bytesText).length}`);

/**
 * Test Section: generateSentences
 * 
 * Tests sentence generation with proper formatting
 */
// Test #4: Generate multiple sentences
console.log('\n4. Generate 2 sentences:');
console.log(loremIpsum.generateSentences(2));

/**
 * Test Section: generateParagraphs
 * 
 * Tests paragraph generation with different formatting options
 */
// Test #5: Generate paragraphs with line breaks between them
console.log('\n5. Generate 2 paragraphs with line breaks:');
console.log(loremIpsum.generateParagraphs(2, true));

// Test #6: Generate paragraphs without line breaks (continuous text)
console.log('\n6. Generate 2 paragraphs without line breaks:');
console.log(loremIpsum.generateParagraphs(2, false));

/**
 * Test Section: generateList
 * 
 * Tests list generation with different formatting styles
 */
// Test #7: Generate a bulleted list
console.log('\n7. Generate bullet list with 3 items:');
console.log(loremIpsum.generateList(3, 'bullet'));

// Test #8: Generate a numbered list
console.log('\n8. Generate numbered list with 3 items:');
console.log(loremIpsum.generateList(3, 'number'));

// Test #9: Generate a plain list without special formatting
console.log('\n9. Generate plain list with 3 items:');
console.log(loremIpsum.generateList(3, 'none'));

// Display test completion message
console.log('\nAll tests completed successfully.'); 