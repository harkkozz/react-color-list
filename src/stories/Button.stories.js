import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('Button - Example', () => <Button buttonText="Click me" onButtonClick={() => action('clicked')('Button clicked')} />)
  .add('Button - Submit', () => (
    <form
      onSubmit={e => {
        e.preventDefault();
        action('submit')('submitted');
      }}
    >
      <Button buttonText="Submit" buttonType="submit" />
    </form>
  ));
