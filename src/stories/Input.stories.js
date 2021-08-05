import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Input';

storiesOf('Input', module)
  .add('Input - Without value - Placeholder', () => (
    <div style={{ backgroundColor: '#242424', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Input placeholder="Placeholder" value="" name="input" />
    </div>
  ))
  .add('Input - with value', () => (
    <div style={{ backgroundColor: '#242424', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Input placeholder="Placeholder" value="Some value" name="input" />
    </div>
  ));
