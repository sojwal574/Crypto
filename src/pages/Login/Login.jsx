import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      } else {
        setLoading(false); // Now we can show the login form
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setSuccess('Logged in successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      setError('⚠️ ' + err.message);
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Checking auth status...</p>;
  }

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'lightgreen' }}>{success}</p>}
    </div>
  );
}

export default Login;
