<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Date of Birth</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(id, contact) in conntacts" :key="id">
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
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      courses: 'getAllContacts',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('GET_ALL_CONTACT_FROM_API');
  },
};
</script>

<style>

</style>
