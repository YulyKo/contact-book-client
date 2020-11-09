import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://localhost:8080';
const GET_ALL_CONTACTS_URL = `${API_URL}/contacts`;

export default createStore({
  state: {
    contacts: null,
  },
  mutations: {
    setAllContacts(state, contacts) {
      state.contacts = contacts;
    },
    getAllcontacts(state) { return state.contacts; },
  },
  actions: {
    GET_ALL_CONTACT_FROM_API({ commit }) {
      axios.get(GET_ALL_CONTACTS_URL)
        .then((resp) => {
          commit('setAllContacts', resp.data);
        });
    },
  },
  modules: {
  },
});
