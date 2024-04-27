import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../userData.json';
import friendsData from '../friends.json';
import transactions from '../transactions.json';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1>React - Home Work #1</h1>
      <h2>Task #1 - User Profile</h2>
      <Profile data={userData} />

      <h2>Task #2 - Friend List</h2>
      <FriendList friends={friendsData} />

      <h2>Task #3 - Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}
