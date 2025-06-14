import { wcswidth } from 'simple-wcswidth';

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
