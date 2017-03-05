import getPropGroups from '../src/getPropGroups';
import meaningfulCSSProps from '../src/meaningfulCSSProps';

describe('getPropGroups', () => {

  it(' should split props', () => {
    const props = {
      borderWidth: 1,
      paddingVertical: 1,
      fontSize: 1,
      marginHorizontal: 2,
      lineHeight: undefined,
      style: { top: 1, right: 1, opacity: .5 },
      onClick: () => {},
      isotope: ['opacity']
    };

    const result = getPropGroups(props, 15, 'rem', meaningfulCSSProps, false);

    ['borderWidth', 'paddingTop', 'paddingBottom', 'fontSize', 'top', 'right', 'marginLeft', 'marginRight'].forEach(key => expect(result.classProps[key]).toBeDefined());

    expect(Object.keys(result.styles)).toEqual(['opacity']);

    expect(Object.keys(result.rest)).toEqual(['onClick']);
  })
});