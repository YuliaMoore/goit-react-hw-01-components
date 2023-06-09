import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './Friends/FriendList';
import friends from './Friends/friends.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
