import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {{pascalcase name}}Component from '../src/components/{{name}}';

storiesOf('{{pascalcase name}}Component', module)
  .addWithInfo(
    'default',
    'Top-level component that is connected to the store.', () => (
    <{{pascalcase name}}Component />
  ));
