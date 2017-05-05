import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {{pascalcase name}}Component from '../src/components/{{slugcase name}}';
import Connected{{pascalcase name}}Component from '../src/components/';

storiesOf('{{pascalcase name}}Component', module)
  .add('connected to store', () => <Connected{{pascalcase name}}Component />)
  .add('enabled', () => <{{pascalcase name}}Component status="enabled" />)
  .add('disabled', () => <{{pascalcase name}}Component status="disabled" />);
