import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({ children, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
