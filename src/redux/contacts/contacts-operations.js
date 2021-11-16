import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://619362fcd3ae6d0017da852d.mockapi.io';

const addContact = (userName, userNumber) => dispatch => {
  const contact = { userName, userNumber };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactError(err)));
};

export default { addContact };
