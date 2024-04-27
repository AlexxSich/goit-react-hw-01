import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
