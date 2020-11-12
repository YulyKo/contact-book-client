<template>
  <form @submit.prevent="submit">
    <input-vue
      v-model="name"
      id="name"
      type="text"
      plaseholder="Input name"
      labelText="Name"
    ></input-vue>
    <input-vue
      id="phone"
      type="text"
      plaseholder="Input phone"
      labelText="Phone"
      v-model="phone"></input-vue>
    <input-vue
      id="date"
      type="date"
      plaseholder=""
      labelText="Date of birdth"
      v-model="dateOfBirth"></input-vue>
      <input type="text" v-model="this.phone">
      <button-vue type="submit">Add course</button-vue>
      <section>
        {{ name }} | {{ phone }} | {{ dateOfBirth }}
      </section>
  </form>
</template>

<script>
import ButtonVue from './FormsElements/Button.vue';
import InputVue from './FormsElements/Input.vue';

export default {
  name: 'AddingForm',
  components: {
    inputVue: InputVue,
    buttonVue: ButtonVue,
  },
  data() {
    return {
      name: '',
      phone: '',
      dateOfBirth: '',
    };
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        phone: this.phone,
        dateOfBirth: this.dateOfBirth,
      };
      // eslint-disable-next-line no-console
      console.log(data);
    },
  },
};
</script>
