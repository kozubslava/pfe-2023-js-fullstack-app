import React from 'react';
import styles from './ChatLogo.module.scss';

function ChatLogo({ chat: { name, imgUrl } }) {
  // const isImg = imgUrl;
  const isImg = false;
  return (
    <div className={styles.logo}>
      {isImg && <img src={imgUrl} alt={name}></img>}
      {!isImg && <p>{name[0].toUpperCase()}</p>}
    </div>
  );
}

export default ChatLogo;
