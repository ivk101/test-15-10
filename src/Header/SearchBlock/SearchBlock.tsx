import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock/UserBlock'
import Avatar from './avatar.jpg';
import Avatar_large from './avatar-large.jpg';

interface ISearchBlockProps {
    token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;  
}

export function SearchBlock({token}:ISearchBlockProps) {
     const [ data, setData ] = useState<IUserData>({});

  useEffect( () => {
      axios.get('https://oauth.reddit.com/api/v1/me', {
          headers: { Authorization: `bearer ${token}`}
      })
      .then(resp => {
        const userData = resp.data; 
        setData({
          name: userData.name,
          iconImg: userData.icon_img
        })
      }) 
      .catch(console.log)
  }, [token])

  return (
  	<div className={styles.searchBlock}>
{/*      <div className={styles.person}>
  	    <img src={Avatar} alt="Аватар" className={styles.avatar} />
        <img src={Avatar_large} alt="Аватар" className={styles.avatar_large} />
        <span className={styles.name}>Константин</span>
      </div>*/}
      <UserBlock avatarSearch={data.iconImg}
                 username={data.name}
      />
  		<input type="search" className={styles.searchForm} 
        placeholder="Поиск"
      />
  		<div className={styles.messageInfo}>
            <div className={styles.countMessage}>
                <span className={styles.countInformation}>4</span>
            </div>
  			<svg className={styles.letter} width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z" fill="#D9D9D9"/>
            </svg>
  		</div>
  	</div>
  );
}
