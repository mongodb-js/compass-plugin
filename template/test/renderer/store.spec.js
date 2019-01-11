/*
 * Place tests that must run in a renderer context inside Electron here.
 *
 * Note: The tests below are just a copy of the store unit tests as an example.
 * More complex plugins will require actual renderer/integration tests to be
 * executed here.
 */

import store from 'stores';

describe('{{pascalcase name}}Store [Store]', () => {
  it('should have an initial state of {status: \'enabled\'}', () => {
    expect(store.state.status).to.equal('enabled');
  });
});
