import { useState } from "react";
import AuthPage from './AuthPage.jsx';
import ChatsPage from './ChatsPage.jsx';



import "./App.css";


function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;