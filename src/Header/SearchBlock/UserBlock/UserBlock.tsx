import React from 'react';
import { EColor, Text} from '../../../Text';
import styles from './userblock.css';
import { IconAnon } from '../../../../Icons';

// const CLIENT_ID: string|undefined = process.env.CLIENT_ID;
const HREF_FOR_AUTH2 = `https://www.reddit.com/api/v1/authorize?client_id=UwlA4ExVEvs6OUTr3eGvtA&response_type=token&state=random_string&redirect_uri=http://localhost:5000/auth/&scope=read submit identity`;

interface IUserBlockProps {
	avatarSearch?: string;
	username?: string;
}

export function UserBlock({ avatarSearch, username}: IUserBlockProps) {
	return (
		<a className={styles.userBox}
		 href={HREF_FOR_AUTH2}
    >
		<div className={styles.avatarBox}>
		{
			avatarSearch ?
			<img src={avatarSearch} alt="user avatar"
			className={styles.avatarImage} /> :
			<IconAnon />
		}
		</div>
		<div className={styles.username}>
		{/*<Break size={12} />*/}
		<Text size={20}
		      color={username ? EColor.black : EColor.grey99}>
		      {username || 'Aноним'}
		</Text>
		</div>
		</a>
	)
}