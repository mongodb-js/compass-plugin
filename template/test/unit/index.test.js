const expect = require('chai').expect;
const {{pascalcase name}}Store = require('../lib/stores');

describe('{{pascalcase name}}Store', function() {
  beforeEach(function() {
    // reset the store to initial values
    {{pascalcase name}}Store.setState({{pascalcase name}}Store.getInitialState());
  });

  it('should have an initial state of {status: \'enabled\'}', function() {
    expect({{pascalcase name}}Store.state.status).to.be.equal('enabled');
  });

  describe('toggleStatus()', function() {
    it('should switch the state to {status: \'disabled\'}', function() {
      {{pascalcase name}}Store.toggleStatus();
      expect({{pascalcase name}}Store.state.status).to.be.equal('disabled');
    });

    it('should switch the state back to {status: \'enabled\'} when used a second time', function() {
      {{pascalcase name}}Store.toggleStatus();
      {{pascalcase name}}Store.toggleStatus();
      expect({{pascalcase name}}Store.state.status).to.be.equal('enabled');
    });
  });
});
