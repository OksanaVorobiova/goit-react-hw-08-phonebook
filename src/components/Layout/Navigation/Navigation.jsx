//import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navbar } from './Navigation.styled';
import { Page } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Navbar>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Page to="/contacts">Contacts</Page>
            </li>
          </>
        ) : (
          <>
            <li>
              <Page to="/register" onClick={e => console.log(e)}>
                Register
              </Page>
            </li>
            <li>
              <Page to="/login">Log In</Page>
            </li>
          </>
        )}
      </ul>
      <ul>
        <li>
          <Page to="/">Home</Page>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </Navbar>
  );
};
