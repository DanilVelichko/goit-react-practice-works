
import { data } from '../data/users'
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';

const App = () => {
  return (
    <>
      <User
        user={data[0]}
      />
      <UsersList
        users={data}
      
      />

    </>
  );
};

export default App;