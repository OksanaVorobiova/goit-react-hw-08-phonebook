import { ContactList } from './Contacts.styled';
//import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/contactsSlice';
//import { useEffect } from 'react';
//import { useMemo } from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectVisibleContacts, selectLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Blocks } from 'react-loader-spinner';
import { Section } from 'components/Section/Section';
import { Filter } from './Filter/Filter';
import { Form } from 'components/Form/Form';

export default function Contacts() {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  // const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(contacts);
  }, [dispatch]);

  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
    // dispatch(fetchContacts());
  };

  if (isLoading) {
    return (
      <Section>
        <Blocks />
      </Section>
    );
  } else if (contacts.length > 0) {
    return (
      <Section>
        <Form />
        <Filter />
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" name="delete" id={id} onClick={handleClick}>
                Delete
              </button>
            </li>
          ))}
        </ContactList>
      </Section>
    );
  } else if (contacts.length === 0) {
    return (
      <Section>
        <Form />
        <Filter />
        <ContactList>
          <li>
            <p>No contacts here yet</p>
          </li>
        </ContactList>
      </Section>
    );
  }
}
