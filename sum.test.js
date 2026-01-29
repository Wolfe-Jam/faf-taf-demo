/**
 * Simple test suite for faf-taf-demo
 * Demonstrates .taf (Testing Activity Feed) tracking
 */

describe('Math Operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(3 * 4).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(10 / 2).toBe(5);
  });
});

describe('String Operations', () => {
  test('concatenates strings', () => {
    expect('hello' + ' ' + 'world').toBe('hello world');
  });

  test('string length', () => {
    expect('faf-taf-demo'.length).toBe(12);
  });
});

describe('Array Operations', () => {
  test('array includes element', () => {
    expect(['claim', 'audit', 'receipt']).toContain('receipt');
  });

  test('array length', () => {
    expect([1, 2, 3, 4, 5]).toHaveLength(5);
  });
});
