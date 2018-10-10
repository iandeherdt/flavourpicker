import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ onClick, imageSource, text, selected }) {
  return (
    <div 
      className={styles.buttonContainer} 
      
      onClick={onClick}>
      <button className={styles.button} 
        style={{ 
          backgroundImage: `url(${imageSource})`
        }}>
        <span className={styles.text}>{text}</span>
        <FontAwesome className={styles.icon} name="question-circle" />

      </button>
      
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Button;
