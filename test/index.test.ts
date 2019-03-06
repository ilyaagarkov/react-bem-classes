import * as BEM from '../src/index';

describe('BEM', () => {
  it('provides correct API', () => {
    expect(BEM).toMatchSnapshot();
  });
});
