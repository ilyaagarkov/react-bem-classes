import { element } from '../src/element';

describe('BEM / element', () => {
  it('returns correct "className"', () => {
    const result = element({
      blockName: 'User',
      elementName: 'avatar',
    });

    expect(result).toEqual('User__avatar');
  });

  it('returns correct with "modifiers"', () => {
    const result = element({
      passedModifiers: {
        isActive: true,
        type: 'calm',
      },
      blockName: 'User',
      elementName: 'avatar',
    });

    expect(result).toEqual('User__avatar User__avatar--isActive User__avatar--type-calm');
  });
});
