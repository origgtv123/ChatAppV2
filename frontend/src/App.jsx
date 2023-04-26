import { useState } from 'react';
import AuthPage from './AuthPage.jsx';
import ChatsPage from './ChatsPage.jsx';
import "./App.css"


function App() {
  const [user, setUser] = useState(undefined);

  const onAuth = (user) => {
    setUser(user);
  };

  if (!user) {
    return <AuthPage onAuth={onAuth} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
