import { wcswidth, wcwidth } from 'simple-wcswidth';

describe('Example: Simple', () => {
  it(`Simple`, function () {
    // Basic character width tests
    expect(wcswidth('Yes 重要')).toBe(8);
    expect(wcswidth('请你')).toBe(4);
    expect(wcswidth('Hi')).toBe(2);

    // Emoji tests
    expect(wcswidth('👋 Hello')).toBe(8);
    expect(wcswidth('😊 你好')).toBe(7);
    expect(wcswidth('🌟')).toBe(2);

    // Mixed character tests
    expect(wcswidth('Hello 世界')).toBe(10);
    expect(wcswidth('123 你好')).toBe(8);
    expect(wcswidth('A 中 B')).toBe(6);

    // Special characters
    expect(wcswidth('★☆')).toBe(2);
    expect(wcswidth('→←')).toBe(2);
    expect(wcswidth('①②③')).toBe(3);

    // Numbers and symbols
    expect(wcswidth('12345')).toBe(5);
    expect(wcswidth('!@#$%')).toBe(5);
    expect(wcswidth('123 你好!')).toBe(9);

    // Empty and space tests
    expect(wcswidth('')).toBe(0);
    expect(wcswidth(' ')).toBe(1);
    expect(wcswidth('  ')).toBe(2);

    // Long string tests
    expect(wcswidth('Hello World 你好世界')).toBe(20);
    expect(wcswidth('1234567890 一二三四五')).toBe(21);
  });
});

describe('wcwidth', () => {
  it('should return correct width for ASCII characters', () => {
    expect(wcwidth('a'.codePointAt(0)!)).toBe(1);
    expect(wcwidth('Z'.codePointAt(0)!)).toBe(1);
    expect(wcwidth('0'.codePointAt(0)!)).toBe(1);
    expect(wcwidth(' '.codePointAt(0)!)).toBe(1);
    expect(wcwidth('!'.codePointAt(0)!)).toBe(1);
  });

  it('should return correct width for CJK characters', () => {
    expect(wcwidth('你'.codePointAt(0)!)).toBe(2);
    expect(wcwidth('界'.codePointAt(0)!)).toBe(2);
    expect(wcwidth('漢'.codePointAt(0)!)).toBe(2);
    expect(wcwidth('日'.codePointAt(0)!)).toBe(2);
  });

  it('should return correct width for emoji', () => {
    expect(wcwidth('😊'.codePointAt(0)!)).toBe(1);
    expect(wcwidth('👋'.codePointAt(0)!)).toBe(1);
    expect(wcwidth('🌟'.codePointAt(0)!)).toBe(1);
    expect(wcwidth('👍'.codePointAt(0)!)).toBe(1);
  });

  it('should return 0 for combining marks', () => {
    // U+0301: COMBINING ACUTE ACCENT
    expect(wcwidth(0x0301)).toBe(0);
    // U+20DD: COMBINING ENCLOSING CIRCLE
    expect(wcwidth(0x20dd)).toBe(0);
  });

  it('should return correct value for control characters', () => {
    expect(wcwidth(0x00)).toBe(0);
    expect(wcwidth(0x07)).toBe(-1);
    expect(wcwidth(0x1b)).toBe(-1);
  });

  it('should return 0 for empty string', () => {
    expect(wcwidth(undefined as any)).toBe(0);
  });
});
