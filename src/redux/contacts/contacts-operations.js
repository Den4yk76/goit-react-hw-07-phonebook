import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://619362fcd3ae6d0017da852d.mockapi.io';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(response => dispatch(fetchContactsSuccess(response.data)))
    .catch(err => dispatch(fetchContactsError(err)));
};

const addContact = (userName, userNumber) => dispatch => {
  dispatch(addContactRequest());

  const contact = { name: userName, number: userNumber };

  axios
    .post('/contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(err => dispatch(addContactError(err)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(err => dispatch(deleteContactError(err)));
};
export default { addContact, deleteContact, fetchContacts };
