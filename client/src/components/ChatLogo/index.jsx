import React from 'react';
import styles from './ChatLogo.module.scss';

const testImgUrl =
  'https://res.cloudinary.com/teepublic/image/private/s--J8_UkaPQ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_eae0c7,e_outline:48/co_eae0c7,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1446195536/production/designs/141049_0.jpg';

function ChatLogo({ chat: { name, imgUrl } }) {
  const isImg = typeof imgUrl === 'string'; //TODO
  return (
    <div className={styles.logo}>
      {isImg && <img src={testImgUrl} alt={name} className={styles.logoImg} />}
      {!isImg && <p className={styles.logoText}>{name[0].toUpperCase()}</p>}
    </div>
  );
}

export default ChatLogo;
