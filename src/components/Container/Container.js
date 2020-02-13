import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);

export default Container;
