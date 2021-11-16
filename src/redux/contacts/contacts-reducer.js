import axios from 'axios';

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  changeFilter,
} from './contacts-actions';

axios.defaults.baseURL = 'https://619362fcd3ae6d0017da852d.mockapi.io';

const initData = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const items = createReducer(initData(), {
  // [actions.addContact]: (state, { payload }) => {
  //   const contactsArr = [];
  //   state.forEach(el => {
  //     contactsArr.push(el.name, el.number);
  //   });

  //   if (contactsArr.includes(payload.number || payload.name.toLowerCase())) {
  //     alert('This person or number is already in contacts');
  //     return state;
  //   } else {
  //     localStorage.setItem('contacts', JSON.stringify([...state, payload]));
  //     return [...state, payload];
  //   }
  // },
  [addContactSuccess]: (state, { payload }) => {
    const contactsArr = [];
    state.forEach(el => {
      contactsArr.push(el.name, el.number);
    });

    if (contactsArr.includes(payload.number || payload.name.toLowerCase())) {
      alert('This person or number is already in contacts');
      return state;
    } else {
      localStorage.setItem('contacts', JSON.stringify([...state, payload]));
      return [...state, payload];
    }
  },
  [deleteContact]: (state, { payload }) => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(state.filter(({ id }) => id !== payload)),
    );
    return state.filter(({ id }) => id !== payload);
  },
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
