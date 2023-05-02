import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogIn = e => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const credentials = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    dispatch(login(credentials));
  };

  return (
    <section>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </section>
  );
};
