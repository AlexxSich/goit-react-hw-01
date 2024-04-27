import css from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.card}>
      <img className={css.cardImg} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          css.statusText,
          isOnline === true ? css.isOnline : css.isOffline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
