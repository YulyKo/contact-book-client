import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://localhost:8080';
const GET_ALL_CONTACTS_URL = `${API_URL}/contacts`;
const POST_CONTACT_URL = `${API_URL}/contacts`;
const PUT_CONTACT_URL = `${API_URL}/contacts`;
const DELETE_CONTACT_URL = `${API_URL}/contacts`;

export default createStore({
  state: {
    contacts: [],
    contactForEdit: {
      name: '',
      phone: '',
      dateOfBirth: '',
    },
  },
  getters: {
    getAllContacts(state) { return state.contacts; },
    getContactForEdit(state) { return state.contactForEdit; },
  },
  mutations: {
    setAllContacts(state, contacts) {
      state.contacts = contacts;
    },
    setContactToState(state, contact) {
      state.contacts.push(contact);
    },
    setUpdatedContactToState(state, updatedContact) {
      for (let index = 0; index < state.contacts.length; index += 1) {
        if (state.contacts[index].id === updatedContact.id) {
          state.contacts[index] = updatedContact;
        }
      }
    },
    setContactForEdit(state, id) {
      // state.contactForEdit = contactForEdit;
      for (let index = 0; index < state.contacts.length; index += 1) {
        if (state.contacts[index].id === +id) {
          state.contactForEdit.name = state.contacts[index].name;
          state.contactForEdit.phone = state.contacts[index].phone;
          state.contactForEdit.dateOfBirth = state.contacts[index].dateOfBirth;
        }
      }
    },
    removeContactFromState(state, id) {
      for (let index = 0; index < state.contacts.length; index += 1) {
        if (state.contacts[index].id === +id) {
          state.contacts.splice(index, 1);
        }
      }
    },
  },
  actions: {
    GET_ALL_CONTACT_FROM_API({ commit }) {
      axios.get(GET_ALL_CONTACTS_URL)
        .then((resp) => {
          commit('setAllContacts', resp.data);
        });
    },
    POST_CONTACT_TO_API({ commit }, contact) {
      axios.post(POST_CONTACT_URL, contact)
        .then(() => {
          commit('setContactToState', contact);
        });
    },
    UPDATE_CONTACT_DATA({ commit }, updatedContact) {
      axios.put(`${PUT_CONTACT_URL}/${updatedContact.id}`, updatedContact)
        .then(() => {
          commit('setUpdatedContactToState', updatedContact);
        });
    },
    GET_CONTACT_BY_ID({ commit }, id) {
      commit('setContactForEdit', id);
    },
    DELETE_CONTACT_FROM_API({ commit }, id) {
      axios.delete(`${DELETE_CONTACT_URL}/${id}`)
        .then(() => {
          commit('removeContactFromState', id);
        });
    },
  },
  modules: {
  },
});
