import React from 'react';
import { getChat } from '../../api';
import styles from './ChatList.module.scss';

const clickHandler = (setChat, chatId) => {
  getChat(chatId).then((res) => setChat(res.data.data));
};

function ChatList({ chats = [], setChat }) {
  return (
    <section className={styles.chatList}>
      {chats.length && (
        <ul>
          {chats.map((c) => {
            const lastMsg = c.messages.slice(-1)[0];
            const {
              author: { firstName, lastName } = { firstName: '', lastName: '' },
              text = '',
            } = lastMsg || {};
            return (
              <li
                key={c._id}
                className={styles.chatItem}
                onClick={() => clickHandler(setChat, c._id)}
              >
                <section className={styles.chatInfo}>
                  <h2 className={styles.chatHeader}>{c.name}</h2>
                  {lastMsg && (
                    <p className={styles.lastMessage}>
                      {firstName} {lastName}: {text}
                    </p>
                  )}
                </section>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ChatList;
