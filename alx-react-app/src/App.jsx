import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </>
  );
}

export default App;

import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <>
      <WelcomeMessage />
    </>
  );
}

export default App;
