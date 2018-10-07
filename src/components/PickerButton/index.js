import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({ onClick, imageSource, text }) {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <button className={styles.button}>
        <img className={styles.image} alt={imageSource} src={imageSource}></img>
        
        <p className={styles.text}>{text}</p>
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Button;
