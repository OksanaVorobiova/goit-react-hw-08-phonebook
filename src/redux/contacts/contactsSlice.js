import { createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handlePending, handleRejected } from './constants';
import { isAnyOf } from '@reduxjs/toolkit';
import { logout } from 'redux/auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  /*reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        //state = { ...state, ...action.payload };
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },*/
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
        state.isLoading = false;
        state.error = null;
        //const index = state.items.findIndex(({ id }) => id === payload.id);
        //state.items.splice(index, 1);
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
