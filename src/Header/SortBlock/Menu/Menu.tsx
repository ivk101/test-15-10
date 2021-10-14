import React from 'react';
import styles from './menu.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}><a href="" className={`${styles.link} ${styles.link_active}`}>Просмотренное</a></li>
        <li className={styles.item}><a href="" className={styles.link}>Сохраненное</a></li>
        <li className={styles.item}><a href="" className={styles.link}>Мои посты</a></li>
        <li className={styles.item}><a href="" className={styles.link}>Прокоментированное</a></li>
      </ul>
    </div>
  );
}
