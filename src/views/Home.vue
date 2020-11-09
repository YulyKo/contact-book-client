<template>
  <div class="home">
    <contact-list></contact-list>
  </div>
</template>

<script>
import ContactsListVue from '@/components/ContactsList.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    contactList: ContactsListVue,
  },
};
</script>
