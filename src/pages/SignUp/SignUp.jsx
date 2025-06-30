import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("✅ handleSubmit triggered"); //  Add this line for debug

        setError('');
        setSuccess('');

        if (pass !== confirmPass) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            setSuccess("Account created successfully!");
            setEmail('');
            setPass('');
            setConfirmPass('');

            // ✅ Redirect to home after 1 sec
            setTimeout(() => {
              navigate('/');
            }, 1000);

        } catch (err) {
            setError("⚠️ " + err.message);
        }
    };


  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'lightgreen' }}>{success}</p>}
    </div>
  );
}

export default SignUp;
