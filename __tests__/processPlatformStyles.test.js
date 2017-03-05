import process from '../src/processPlatformStyles';

describe('processPlatformStyles', () => {
  it('should return undefined for native styles in web', () => {
    const v = process('aspectRatio', 2, false);
    expect(v).toEqual(undefined);
  });

  it('should return undefined for web styles in native', () => {
    const v = process('display', 'block', true);
    expect(v).toEqual(undefined);
  });

  it('should transform platform specific styles', () => {
    const v = process('marginVertical', 1, false);
    expect(v).toEqual([
      { name: 'marginTop', value: 1 },
      { name: 'marginBottom', value: 1 }
    ])
  })
});