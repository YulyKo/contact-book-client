<template>
  <form @submit.prevent="update">
    {{ id }}
    {{ contactForEdit }}
    <section>
      <label for="newName">Name</label>
      <div>
        <input type="text"
               v-model="this.contactForEdit.name"
               id="newName">
      </div>
    </section>
    <section>
      <label for="newPhone">Phone</label>
      <div>
        <input type="text"
               v-model="this.contactForEdit.phone"
               id="newPhone">
      </div>
    </section>
    <section>
      <label for="newDate">Date of birth</label>
      <div>
        <input type="date"
               v-model="this.contactForEdit.dateOfBirth"
               id="newDate">
      </div>
    </section>
    <button type="submit">Save</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditForm',
  props: ['id'],
  computed: {
    ...mapGetters({
      contactForEdit: 'getContactForEdit',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('GET_CONTACT_BY_ID', this.id);
  },
  methods: {
    ...mapActions({
      updateContactData: 'UPDATE_CONTACT_DATA',
    }),
    update() {
      const data = {
        id: this.id,
        name: this.contactForEdit.name,
        phone: this.contactForEdit.phone,
        dateOfBirth: this.contactForEdit.dateOfBirth,
      };
      this.updateContactData(data);
      this.$router.push('/');
    },
  },
};
</script>
