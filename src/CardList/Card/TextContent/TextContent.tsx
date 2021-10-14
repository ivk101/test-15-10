import React from 'react';
import styles from './textcontent.css';
import { MetaData } from './MetaData/MetaData';
import { TextPreview } from './TextPreview/TextPreview';

export function TextContent() {
  return (
  	<div className={styles.textContent}>  		
  		<MetaData />
  		<TextPreview />
  	</div>
  );
}
