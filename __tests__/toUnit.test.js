import toUnit from '../src/toUnit';
import unit from '../src/unit';

const BASE_FONT_SIZE: number = 16;

describe('toUnit',() => {

  it('plain value: should return value for unitless props', () => {
    const v = toUnit('opacity', .5, BASE_FONT_SIZE, 'px')
    expect(v).toEqual(.5)
  })

  it('plain value: should convert REM to PX in Native', () => {
    const v = toUnit('fontSize', 2, BASE_FONT_SIZE, 'rem', true)
    expect(v).toEqual(32)
  })

  it('plain value: should return PX in Native', () => {
    const v = toUnit('fontSize', 10, BASE_FONT_SIZE, 'px', true)
    expect(v).toEqual(10)
  })

  it('plain value: should return value with unit type for numbers in Web', () => {
    const v = toUnit('fontSize', 10, BASE_FONT_SIZE, 'px', false)
    expect(v).toEqual('10px')
  })

  it('plain value: should return provided value for strings in Web', () => {
    const v = toUnit('fontSize', 'test', BASE_FONT_SIZE, 'px', false)
    expect(v).toEqual('test')
  })

  describe('unit type: PX', () => {
    const u = unit(10).px;

    it('should return numeric value in Native', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', true);
      expect(v).toEqual(10);
    })

    it('should return value with unit type in Web', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', false);
      expect(v).toEqual('10px');
    })
  })

  describe('unit type: V', () => {
    const u = unit(10).v
    it('should return provided value in Native', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', true);
      expect(v).toEqual(10);
    })

    it('should return provided value in Web', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', false);
      expect(v).toEqual(10);
    })
  })

  describe('unit type: REM', () => {
    const u = unit(3).rem;

    it('should convert REM to PX in Native', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', true);
      expect(v).toEqual(48);
    })

    it('should return value with unit type in Web', () => {
      const v = toUnit('padding', u, BASE_FONT_SIZE, 'rem', false);
      expect(v).toEqual('3rem');
    })
  })

})