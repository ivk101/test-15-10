import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { Comments } from './Comments/Comments';
import { SocialButtons } from './SocialButtons/SocialButtons';

export function Controls() {
  return (
  	<div className={styles.controls}>
  	    <KarmaCounter />
  	    <Comments />
  	    <SocialButtons />
  	</div>
  );
}
