import React from 'react';
import { mount } from 'enzyme';

import {{pascalcase name}} from 'components/{{name}}';
import ToggleButton from 'components/toggleButton';
import styles from './{{name}}.less';

describe('{{pascalcase name}} [Component]', () => {
  let component;
  let actions;

  beforeEach((done) => {
    actions = { toggleStatus: sinon.stub() };
    component = mount(<{{pascalcase name}} actions={actions} />);
    done();
  });

  afterEach((done) => {
    component = null;
    actions = null;
    done();
  });

  it('renders the correct root classname', () => {
    expect(component.find(`.${styles.root}`)).to.have.length(1);
  });

  it('should contain one <h2> tag', function() {
    expect(component.find('h2')).to.have.length(1);
  });

  it('should contain one <ToggleButton />', function() {
    expect(component.find(ToggleButton)).to.have.length(1);
  });

  it('should initially have prop {status: \'enabled\'}', function() {
    expect(component.prop('status')).to.equal('enabled');
  });
});
