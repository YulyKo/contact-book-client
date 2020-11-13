<template>
  <table border="1" style="width: 79vw;">
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Date of Birth</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(contact, id) in contacts" :key="id">
      <td>
        {{ contact.name }}
      </td>
      <td>
        {{ contact.phone }}
      </td>
      <td>
        {{ contact.dateOfBirth }}
      </td>
      <td>
        <router-link
          :to="`/edit/${contact.id}`">Edit</router-link>
        <delete-button :id="contact.id"></delete-button>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import DeletingButtonVue from './DeletingButton.vue';

export default {
  components: {
    deleteButton: DeletingButtonVue,
  },
  computed: {
    ...mapGetters({
      contacts: 'getAllContacts',
    }),
  },
  methods: {
    ...mapMutations({
      setContactForEdit: 'setContactForEdit',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('GET_ALL_CONTACT_FROM_API');
  },
};
</script>

<style lang="css">
  tr {
    text-align: center;
  }
</style>
