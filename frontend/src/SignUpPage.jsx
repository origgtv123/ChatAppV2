import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    axios.post('http://localhost:3001/signup', { username, password })
      .then((response) => {
        localStorage.setItem('username', username);
        localStorage.setItem('secret', response.data);
        history.push('/chats');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Sign up 👋</div>
        <div className="form-subtitle">Create a new account</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="auth-label">Password</div>
          <input
            className="auth-input"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="auth-button" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
  
};

export default SignupPage;
