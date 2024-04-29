import classNames from 'classnames';
import React from 'react';
import { getChat } from '../../../api';
import styles from './ChatItem.module.scss';
import ChatLogo from '../../ChatLogo';

const clickHandler = (setChat, chatId) => {
  getChat(chatId).then((res) => setChat(res.data.data));
};

function ChatItem({
  chat: { _id, isPrivate, name, messages, coverImage: imgUrl },
  chatId,
  setChat
}) {
  const lastMsg = messages.slice(-1)[0];
  const { author: { firstName, lastName }, text } = lastMsg || { author: {}};

  const chatItemStyle = classNames(styles.chatItem, {
    [styles.active]: _id === chatId,
  });

  return (
    <li key={_id} className={chatItemStyle} onClick={() => clickHandler(setChat, _id)}>
      <section className={styles.chatInfo}>
        <ChatLogo chat={{ name, imgUrl }} />
        <div>
          <h2 className={styles.chatHeader}>{name}</h2>
          {text && (
            <p className={styles.lastMessage}>
              {firstName} {lastName}: {text}
            </p>
          )}
        </div>
      </section>
    </li>
  );
}

export default ChatItem;
