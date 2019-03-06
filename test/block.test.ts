import { block } from '../src/block';

const props = {
  className: 'ListUser',
};

describe('BEM / block', () => {
  it('returns correct "className" if only "blockName" specified', () => {
    const result = block({ props: {}, blockName: 'User' });

    expect(result).toEqual('User');
  });

  it('returns correct "className" if: "props.className" in place', () => {
    const result = block({ props, blockName: 'User' });

    expect(result).toEqual('ListUser User');
  });

  it('returns correct "className" with "passedModifiers"', () => {
    const result = block({
      props,
      blockName: 'User',
      passedModifiers: { isActive: true, size: 'huge' },
    });

    expect(result).toEqual('ListUser User User--isActive User--size-huge');
  });

  it('returns correct "className" with "props"', () => {
    const result = block({
      props: {
        ...props,
        isHidden: true,
        type: 'info',
      },
      blockName: 'User',
      allowedModifiers: ['isHidden', 'type'],
      passedModifiers: { isActive: true, size: 'huge' },
    });

    expect(result).toEqual('ListUser User User--isHidden User--type-info User--isActive User--size-huge');
  });

  it('ignores one of the "props" if it is not in the "allowedModifiers" list', () => {
    const result = block({
      props: {
        ...props,
        isHidden: true,
        type: 'info',
      },
      blockName: 'User',
      allowedModifiers: ['type'],
      passedModifiers: { isActive: true, size: 'huge' },
    });

    expect(result).toEqual('ListUser User User--type-info User--isActive User--size-huge');
  });
});
