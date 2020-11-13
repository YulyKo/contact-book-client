<template>
  <button type="button" @click="remove">Delete</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DeletingButton',
  props: ['id'],
  methods: {
    ...mapActions({
      deleteFromApi: 'DELETE_CONTACT_FROM_API',
    }),
    remove() {
      this.deleteFromApi(this.id);
    },
  },
};
</script>
