import React from 'react';
import styles from './cardlist.css';
import { Card } from './Card';

export function CardList() {
  return (
  	<ul className={styles.cardList}>
  	    <li><Card /></li>
  	</ul>
  );
}
