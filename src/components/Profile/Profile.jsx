import css from './Profile.module.css';

export default function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.userCard}>
        <img className={css.userImg} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.userText}>{tag}</p>
        <p className={css.userText}>{location}</p>
      </div>
      <ul className={css.userList}>
        <li className={css.userListItem}>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.userListItem}>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li className={css.userListItem}>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
