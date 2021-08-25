import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ColorList from '../components/ColorList/List';
import { colors } from '../apis';

storiesOf('Color List', module).add('Color List - Example', () => (
  <div
    style={{
      backgroundColor: '#242424',
      color: 'white',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <ColorList
      list={colors}
      handleTableRowAction={val => action('table row action')(`table id: ${val}`)}
      tableActionButtonText="Table button"
    />
  </div>
));
