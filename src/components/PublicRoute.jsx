import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRegistered } from 'redux/auth/selectors';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRegistered = useSelector(selectIsRegistered);

  /*if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  } else if (isRegistered) {
    return <Navigate to={redirectTo} />;
  } else {
    return Component;
  }*/

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
