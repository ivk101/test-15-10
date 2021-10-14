import React from 'react';
import styles from './card.css';

import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Controls } from './Controls';
import { Menu } from './Menu';

export function Card() {
  return (
  	<li className={styles.card}> 
      <div className={styles.first_column}> 		
        <TextContent />
  		  <Preview />  
      </div>  
      <div className={styles.second_column}>  
  		  <Menu />
  		  <Controls />  
      </div>    
  	</li>
  );
}
