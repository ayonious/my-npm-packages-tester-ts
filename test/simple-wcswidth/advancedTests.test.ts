import { wcswidth, wcwidth } from 'simple-wcswidth';
import { expect } from '@jest/globals';

describe('Advanced wcswidth tests', () => {
  it('should handle complex mixed character strings', () => {
    // Complex strings with multiple character types
    expect(wcswidth('Hello 你好 こんにちは 안녕하세요')).toBe(32);
    expect(wcswidth('1234 汉字 カタカナ 한글')).toBe(23);
    expect(wcswidth('Mixed: ABC123 汉字 カタカナ 한글')).toBe(32);
    expect(wcswidth('Symbols: ★☆→←♠♣♥♦')).toBe(17);
  });

  it('should handle emoji sequences correctly', () => {
    // Single emoji
    expect(wcswidth('😊')).toBe(2);
    expect(wcswidth('👍')).toBe(2);
    
    // Multiple emoji
    expect(wcswidth('😊👍🎉')).toBe(6);
    
    // Emoji with text
    expect(wcswidth('Hello 😊')).toBe(8);
    expect(wcswidth('👍 Good job!')).toBe(12);
    
    // Emoji with CJK characters
    expect(wcswidth('你好 👍')).toBe(7);
    expect(wcswidth('👍 你好')).toBe(7);
  });

  it('should handle zero-width characters correctly', () => {
    // Zero-width space (U+200B)
    const zeroWidthSpace = '\u200B';
    expect(wcswidth(zeroWidthSpace)).toBe(0);
    expect(wcswidth(`Hello${zeroWidthSpace}World`)).toBe(10);
    
    // Zero-width joiner (U+200D)
    const zeroWidthJoiner = '\u200D';
    expect(wcswidth(zeroWidthJoiner)).toBe(0);
    expect(wcswidth(`A${zeroWidthJoiner}B`)).toBe(2);
    
    // Combining characters
    const combiningCharacter = '\u0301'; // Combining acute accent
    expect(wcswidth(combiningCharacter)).toBe(0);
    expect(wcswidth(`e${combiningCharacter}`)).toBe(1); // é
    expect(wcswidth(`Hello e${combiningCharacter} World`)).toBe(13);
  });

  it('should handle special Unicode blocks correctly', () => {
    // Mathematical symbols
    expect(wcswidth('∑∫∂∇')).toBe(4);
    
    // Currency symbols
    expect(wcswidth('$€£¥')).toBe(4);
    
    // Technical symbols
    expect(wcswidth('⌘⌥⇧⌃')).toBe(4);
    
    // Box drawing characters
    expect(wcswidth('┌─┐│┘└')).toBe(6);
    
    // Block elements
    expect(wcswidth('█▓▒░')).toBe(4);
  });

  it('should handle strings with control characters', () => {
    // ASCII control characters
    expect(wcswidth('\u0007')).toBe(-1); // Bell
    expect(wcswidth('\u001B')).toBe(-1); // Escape
    
    // Strings with control characters
    expect(wcswidth('Hello\u0007World')).toBe(-1);
    expect(wcswidth('\u001BHello')).toBe(-1);
    
    // Null character (special case)
    expect(wcswidth('\u0000')).toBe(0);
    expect(wcswidth('Hello\u0000World')).toBe(10);
  });

  it('should handle edge cases', () => {
    // Empty string
    expect(wcswidth('')).toBe(0);
    
    // Only spaces
    expect(wcswidth(' ')).toBe(1);
    expect(wcswidth('   ')).toBe(3);
    
    // Very long string
    const longString = 'A'.repeat(1000);
    expect(wcswidth(longString)).toBe(1000);
    
    // Mixed long string
    const mixedLongString = 'A'.repeat(500) + '你'.repeat(500);
    expect(wcswidth(mixedLongString)).toBe(1500); // 500 + (500 * 2)
  });
});

describe('Advanced wcwidth tests', () => {
  it('should handle various Unicode character categories', () => {
    // Latin characters
    expect(wcwidth('A'.codePointAt(0)!)).toBe(1);  // Latin capital letter
    expect(wcwidth('z'.codePointAt(0)!)).toBe(1);  // Latin small letter
    
    // Cyrillic characters
    expect(wcwidth('Б'.codePointAt(0)!)).toBe(1);  // Cyrillic capital letter
    expect(wcwidth('я'.codePointAt(0)!)).toBe(1);  // Cyrillic small letter
    
    // Greek characters
    expect(wcwidth('Ω'.codePointAt(0)!)).toBe(1);  // Greek capital letter
    expect(wcwidth('α'.codePointAt(0)!)).toBe(1);  // Greek small letter
    
    // CJK Unified Ideographs
    expect(wcwidth('中'.codePointAt(0)!)).toBe(2);  // Chinese character
    expect(wcwidth('日'.codePointAt(0)!)).toBe(2);  // Japanese kanji
    expect(wcwidth('한'.codePointAt(0)!)).toBe(2);  // Korean Hangul
    
    // Hiragana and Katakana
    expect(wcwidth('あ'.codePointAt(0)!)).toBe(2);  // Hiragana
    expect(wcwidth('ア'.codePointAt(0)!)).toBe(2);  // Katakana
    
    // Emoji
    expect(wcwidth('😊'.codePointAt(0)!)).toBe(1);  // Emoji (note: might be 2 in some implementations)
    
    // Symbols
    expect(wcwidth('→'.codePointAt(0)!)).toBe(1);  // Arrow symbol
    expect(wcwidth('♥'.codePointAt(0)!)).toBe(1);  // Heart symbol
  });

  it('should handle control characters and special values', () => {
    // Control characters (C0 and C1)
    for (let i = 0; i < 32; i++) {
      if (i === 0) {
        expect(wcwidth(i)).toBe(0);  // NULL is special case
      } else {
        expect(wcwidth(i)).toBe(-1);  // Other C0 controls
      }
    }
    
    // DEL
    expect(wcwidth(127)).toBe(-1);
    
    // C1 controls
    for (let i = 128; i < 160; i++) {
      expect(wcwidth(i)).toBe(-1);
    }
    
    // Invalid values
    expect(wcwidth(-1)).toBe(-1);  // Negative values return -1 in this implementation
    expect(wcwidth(undefined as any)).toBe(0);  // Undefined should return 0
    expect(wcwidth(null as any)).toBe(-1);  // Null returns -1 in this implementation
  });
}); 