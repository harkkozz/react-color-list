import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../components/Dialog';
import { action } from '@storybook/addon-actions';

storiesOf('Dialog', module).add('Button - Example', () => (
  <Dialog
    dialogTitle="Dialog"
    open
    message="Dialog content body"
    cancelAction={() => action('cancel action')('on cancel click')}
    okAction={() => action('ok (confirm) action')('on confirm clicked')}
  />
));
