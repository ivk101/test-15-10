import React from 'react';
import styles from './menu.css';
import { DropdownTest } from '../../../DropdownTest';
import { MenuItemsList } from './MenuItemsList';
import { MenuIcon } from '../../../../Icons'; 

import { IconTest } from '../../../IconTest';
import { EIcons } from '../../../IconTest/IconTest';

export function Menu() {
  return (
  	<div className={styles.menu}>
    <DropdownTest 
      button = { 
        <button className={styles.menuButton}>
          <IconTest name={EIcons.menu}
                    width={'20'}
                    height={'5'} />
        </button> 
      }
    >
    <div className={styles.dropdown}>
      <MenuItemsList postId='1234'/>
      <button className={styles.closeButton}>
        Закрыть
      </button>
    </div>
    </DropdownTest>    
  	</div>
  );
}
