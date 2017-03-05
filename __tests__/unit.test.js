import unit, { Unit, units } from '../src/unit';

describe('unit', () => {
  test('should create new Unit instance with value property', () => {
    const u = unit(1);
    expect(u).toBeInstanceOf(Unit);
    expect(u.value === 1);
  })

  test('should return correct unit objects', () => {
    const u = unit(1);
    expect(u.px).toEqual({ value: 1, unit: 'px', __unit:  true })
    expect(u.rem).toEqual({ value: 1, unit: 'rem', __unit:  true })
    expect(u.v).toEqual({ value: 1, unit: '', __unit:  true })
  })

  test('shoud retrun string for correct concatenatiokn', () => {
    const u = unit(1.123);
    expect(u.toString()).toEqual('1.123');
  })

  test('shoud retrun number for correct manipulatios', () => {
    const u = unit('1.23');
    expect(u.toNumber() * 2.45).toEqual(3.0135);
  })
})