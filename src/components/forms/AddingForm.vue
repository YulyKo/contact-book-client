<template>
  <form @submit.prevent=submit>
    <section>
      <label for="name">Name</label>
      <div>
        <input type="text" id="name" v-model="name">
      </div>
    </section>
    <section>
      <label for="name">Phone</label>
      <div>
        <input type="text" id="name" v-model="phone">
      </div>
    </section>
    <section>
      <label for="name">Date of birth</label>
      <div>
        <input type="date" id="name" v-model="date">
      </div>
    </section>
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddingFrom',
  data() {
    return {
      name: '',
      phone: '',
      date: '',
    };
  },
  methods: {
    ...mapActions({
      postContactToAPI: 'POST_CONTACT_TO_API',
    }),
    submit() {
      const data = {
        name: this.name,
        phone: this.phone,
        dateOfBirth: new Date(this.date),
      };
      this.postContactToAPI(data);
      this.$router.push('/');
    },
  },
};
</script>
