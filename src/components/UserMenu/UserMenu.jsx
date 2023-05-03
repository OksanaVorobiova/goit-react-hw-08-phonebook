import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { UserBar } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <UserBar>
      <p>Welcome, {isLoggedIn ? user.name : 'Anonymus'} </p>
      {isLoggedIn && (
        <button type="submit" onClick={handleLogOut}>
          Logout
        </button>
      )}
    </UserBar>
  );
};
