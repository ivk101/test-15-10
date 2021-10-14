import React from 'react';
import styles from './sortblock.css';
import { DropdownMenu } from './DropdownMenu';


export function SortBlock() {
  return (
    <div>
  	  <div className={styles.sortBlock}>
  	    <DropdownMenu isOpen = {false} />
  	  </div>
    </div>
  );
}
