import React from 'react';
import styles from './ChatList.module.scss';
import ChatItem from './ChatItem';

function ChatList({ chats = [], ...rest }) {
  return (
    <section className={styles.chatList}>
      {chats.length && (
        <ul>
          {chats.map((c) => (
            <ChatItem chat={c} {...rest} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ChatList;
