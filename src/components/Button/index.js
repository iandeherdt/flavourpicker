import React from 'react';

import styles from './styles.css';

function Button({ children, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}

Button.propTypes = {
};

export default Button;
