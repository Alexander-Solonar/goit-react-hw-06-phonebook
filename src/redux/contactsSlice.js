import { createSlice } from '@reduxjs/toolkit';
import defaultContacts from '../data/contacts.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    defaultContacts,
  },
  reducers: {
    addContact(state, action) {
      state.defaultContacts.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.defaultContacts = state.defaultContacts.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contact',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
