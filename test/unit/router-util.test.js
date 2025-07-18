const { resolvePath } = require('../../src/core/util');
const { stringifyQuery } = require('../../src/core/router/util');

// Suite
// -----------------------------------------------------------------------------
describe('router/util', () => {
  // resolvePath()
  // ---------------------------------------------------------------------------
  describe('resolvePath()', () => {
    test('resolvePath with filename', () => {
      const result = resolvePath('hello.md');

      expect(result).toBe('/hello.md');
    });

    test('resolvePath with ./', () => {
      const result = resolvePath('./hello.md');

      expect(result).toBe('/hello.md');
    });

    test('resolvePath with ../', () => {
      const result = resolvePath('test/../hello.md');

      expect(result).toBe('/hello.md');
    });
  });

  // stringifyQuery()
  // ---------------------------------------------------------------------------
  describe('stringifyQuery()', () => {
    test('preserves case of query values', () => {
      const result = stringifyQuery({ Foo: 'Bar' });

      expect(result).toBe('?Foo=Bar');
    });

    test('ignores specified keys', () => {
      const result = stringifyQuery({ foo: 'Bar', id: '123' }, ['id']);

      expect(result).toBe('?foo=Bar');
    });

    test('handles falsy values', () => {
      const result = stringifyQuery({ zero: 0, empty: '' });

      expect(result).toBe('?zero=0&empty=');
    });
  });
});
