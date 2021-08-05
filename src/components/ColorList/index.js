import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import Button from '../Button';

const ColorList = ({ list, tableActionButtonText, handleTableRowAction }) => (
  <table>
    <thead>
      <tr>
        <th className="table-header-item">Color</th>
        <th className="table-header-item">Name</th>
        <th className="table-header-item">Hexa</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {list.map(i => (
        <tr key={i.id} className="table-row">
          <td className="color-box" style={{ backgroundColor: i.code }} />
          <td className="color-content">{i.name}</td>
          <td className="color-content color-hexa">{i.code}</td>
          <td className="color-content color-hexa">
            <Button buttonText={tableActionButtonText} onButtonClick={() => handleTableRowAction(i.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

ColorList.defaultProps = {
  list: []
};

ColorList.propTypes = {
  list: PropTypes.array
};

export default ColorList;
