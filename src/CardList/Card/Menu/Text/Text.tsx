import React from 'react';
import styles from './text.css';

interface TextProps {
	size?: number;
	children?: string;
}

export function Text({children}: TextProps) {
	return (
		<a className={styles.link}>{children}</a>)
}