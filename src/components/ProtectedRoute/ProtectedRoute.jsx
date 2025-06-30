import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/config';

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
