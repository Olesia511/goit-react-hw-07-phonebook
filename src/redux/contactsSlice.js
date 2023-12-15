import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '12px',
  opacity: 0.9,
  borderRadius: '5px',
  messageMaxLength: 110,
  fontFamily: 'Quicksand',
  fontSize: '20px',
  closeButton: false,
  useIcon: false,
  failure: {
    background: '#251c1c',
    textColor: '#d6d0d0',
  },
});

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const doubleContact = state.contacts.find(el => {
          return (
            el.name.trim().toLowerCase() ===
            action.payload.name.trim().toLowerCase()
          );
        });

        if (doubleContact) {
          Notify.failure(`${action.payload.name} is already in contacts!`);
          return;
        }

        state.contacts.push(action.payload);
      },
      prepare(contact) {
        const { name, number } = contact;
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );

        state.contacts.splice(index, 1);
      },
    },

    filterContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
