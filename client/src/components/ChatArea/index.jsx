import React from 'react';
import styles from './ChatArea.module.scss';

function ChatArea({ chat }) {
  if (!chat)
    return (
      <article className={styles.chatAreaNoChat}>
        <p className={styles.selectChatMsg}>Select chat to start.</p>
      </article>
    );

  return (
    <article className={styles.chatArea}>
      <header className={styles.chatHeader}>
        <h2 className={styles.chatName}>{chat.name}</h2>
        <p>users: {chat.users.length}</p>
      </header>
      <section className={styles.messagesWrapper}>
        <ul>
          {chat.messages.map((m) => (
            <li key={m._id} className={styles.messages}>
              <h3 className={styles.author}>{m.author?.firstName}</h3>
              <p className={styles.text}>{m.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default ChatArea;
