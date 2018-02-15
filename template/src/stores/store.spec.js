import store from 'stores';

describe('{{pascalcase name}}Store [Store]', () => {
  it('should have an initial state of {status: \'enabled\'}', () => {
    expect(store.getState().status).to.be.equal('enabled');
  });
});
