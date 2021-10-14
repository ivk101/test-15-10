import React from 'react';
import styles from './preview.css';
import Prev_image from './prev_image_1.jpg';

export function Preview() {
  return (
  	  	<div className={styles.preview}>
  		    <img 
  		        className={styles.previewImg}
  		        src={Prev_image}
  		    />
  		</div>
  );
}
