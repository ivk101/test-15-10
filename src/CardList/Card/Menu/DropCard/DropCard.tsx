import React from 'react';
import styles from './dropCard.css';

interface MenuProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
}

const NOOP = () => {};

export function DropCard({button, children, isOpen}: MenuProps) {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  React.useEffect( () => 
    setIsDropdownOpen(isOpen), [isOpen]);

  const handleOpen = () => {
      setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={styles.container}>
      <div onClick={ handleOpen }>
        {button}
      </div>
      { isDropdownOpen && (
        <div className = {styles.listContainer}>
          <div className = {styles.list} onClick = { () => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
