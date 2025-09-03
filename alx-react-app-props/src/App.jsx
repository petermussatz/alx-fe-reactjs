import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // import the context

function App() {
  //  this is your user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    //  wrap your app with the Provider and pass value
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
