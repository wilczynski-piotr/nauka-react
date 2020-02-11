import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string.isRequired,
  }

  render() {

    const {title} = this.props;


    return (
      <section className={styles.component}>
        <span>{title}</span>
      </section>
    );
  }
}

export default Card;
