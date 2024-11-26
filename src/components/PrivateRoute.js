import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);

  if (!token || user?.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute; 