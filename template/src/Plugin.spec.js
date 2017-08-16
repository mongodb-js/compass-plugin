import React from 'react';
import { mount } from 'enzyme';
import { StoreConnector } from 'hadron-react-components';
import {{pascalcase name}}Plugin from './Plugin';

describe('{{pascalcase name}} [Plugin]', () => {
  let component;

  beforeEach((done) => {
    component = mount(<{{pascalcase name}}Plugin />);
    done();
  });

  afterEach((done) => {
    component = null;
    done();
  });

  it('should contain a <StoreConnector /> with a store prop', function() {
    expect(component.find(StoreConnector).first().props('store')).to.be.an('object');
  });
});
