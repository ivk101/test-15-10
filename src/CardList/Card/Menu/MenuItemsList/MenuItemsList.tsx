import React from 'react';
import styles from './menuitemslist.css';
import { Text } from '../Text';

// import { SaveIcon } from '../../../../../Icons';
// import { ShareIcon } from '../../../../../Icons';
// import { HideIcon } from '../../../../../Icons';
// import { CommentIcon } from '../../../../../Icons';
// import { ComplaintIcon } from '../../../../../Icons';

import { IconTest } from '../../../../IconTest';
import { EIcons } from '../../../../IconTest/IconTest';

interface IMenuItemsListProps { 
	postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
	return (
		<ul className={styles.menuitemslist}>
		<li className={styles.item}
		    onClick={ () => console.log(postId)}>		    
		    <IconTest name={EIcons.comment}
                      width={'15'}
                      height={'15'} />
			<Text size={12}>Комментарии</Text>
		</li>
		<li className={styles.item}>
            <IconTest name={EIcons.share}
                      width={'12'}
                      height={'14'} />
            <Text size={12}>Поделиться</Text>
        </li>
        <li className={styles.item}>
            <IconTest name={EIcons.hide}
                      width={'14'}
                      height={'14'} />
            <Text size={12}>Скрыть</Text>
        </li>
        <li className={styles.item}>
            <IconTest name={EIcons.save}
                      width={'14'}
                      height={'14'}/>
            <Text size={12}>Сохранить</Text>
        </li>
        <li className={styles.item}>        
            <IconTest name={EIcons.complaint}
                      width={'14'}
                      height={'14'} />
            <Text size={12}>Пожаловаться</Text>
        </li>
		</ul>
		)
}