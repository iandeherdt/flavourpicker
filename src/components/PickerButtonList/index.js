import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function PickerButtonList({ children }) {
  return (
    <div className={styles.list}>
      {children}
    </div>
  );
}

PickerButtonList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PickerButtonList;
