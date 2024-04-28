import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './ChatArea.module.scss';
import UserContext from '../../contexts/userContext';

function ChatArea({ chat }) {
  const [{ user }, dispatch] = useContext(UserContext);

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
        <ul className={styles.messageList}>
          {chat.messages.map((m) => {
            const styleMessageItem = classNames(styles.messageItem, {
              [styles.own]: m.author?._id === user?._id,
            });

            return (
              <li key={m._id} className={styleMessageItem}>
                <h3 className={styles.author}>{m.author?.firstName}</h3>
                <p className={styles.text}>{m.text}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}

export default ChatArea;
