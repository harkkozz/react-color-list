import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingSpinner from '../components/LoadingSpinner';

storiesOf('Loading Spinner', module).add('LoadingSpinner - With state', () => (
  <div style={{ backgroundColor: '#242424', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <LoadingSpinner isLoading />
  </div>
));
