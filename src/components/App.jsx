import user from './Profile/user.json'
import data  from './Statistics/data.json'
import Profile from './Profile/user-profile'; 
import StatisticsList from './StatisticsList/StatisticsList';
// import { data } from '../data/users'
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';

const App = () => {
  return (
    <>
      {/* <User
        user={data[0]}
      />
      <UsersList
        users={data}
      
      /> */}
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
 
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes} />
      
      <StatisticsList
        title="Upload stats"
        stats={data} />
         
      <StatisticsList stats={data} />
    </>
  );
};

export default App;