import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisterClick = e => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;

    const credentials = {
      name: formElements.name.value,
      email: formElements.email.value,
      password: formElements.password.value,
    };

    dispatch(register(credentials));
  };

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleRegisterClick}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};
