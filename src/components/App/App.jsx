//import { useState } from 'react';
//import { Section } from 'components/Section/Section';
//import { Form } from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Contacts } from 'components/Contacts/Contacts';
//import { Filter } from 'components/Contacts/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'components/Home/Home';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
//import { selectIsLoggedIn } from 'redux/auth/selectors';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
//import { redirect } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (error) {
    return <p>Sorry, something went wrong :( </p>;
  } else if (isRefreshing) {
    return <p>Refreshing...</p>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterForm />} />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<LoginForm />} />}
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    );
  }
};

/* <Route
          path="/contacts"
          element={
            <Section title="Contacts">
              <Filter />
              <Contacts />
            </Section>
          }
        /> */
