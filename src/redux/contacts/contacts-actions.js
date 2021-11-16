import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/add', (userName, userNumber) => ({
//   payload: {
//     id: uuidv4(),
//     name: userName,
//     number: userNumber,
//   },
// }));

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/find');
