import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';
import Button from '../Button/Button';

const ColorList = ({ list, tableActionButtonText, handleTableRowAction }) => (
  <table>
    <thead>
      <tr>
        <th className={styles.tableHeaderItem}>Color</th>
        <th className={styles.tableHeaderItem}>Name</th>
        <th className={styles.tableHeaderItem}>Hexa</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {list.map(i => (
        <tr key={i.id} className={styles.tableRow}>
          <td className={styles.colorBox} style={{ backgroundColor: i.code }} />
          <td className={styles.colorContent}>{i.name}</td>
          <td className={`${styles.colorContent} ${styles.colorHexContainer}`}>{i.code}</td>
          <td className={`${styles.colorContent} ${styles.colorHexContainer}`}>
            <Button
              buttonText={tableActionButtonText}
              onButtonClick={() => handleTableRowAction(i.id)}
            />
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
