import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { FormSection } from 'components/RegisterForm/RegisterForm.styled';
import { FormStyled } from 'components/Form/Form.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
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
    <FormSection>
      <h2>Log In</h2>
      <FormStyled onSubmit={handleLogIn}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </FormStyled>
      <ToastContainer autoClose={2000} />
    </FormSection>
  );
}
