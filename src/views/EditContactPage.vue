<template>
  <section>
    <edit-form :id="$route.params.id"></edit-form>
  </section>
</template>

<script>
import EditFormVue from '@/components/forms/EditForm.vue';

export default {
  name: 'EditContactPage',
  components: {
    editForm: EditFormVue,
  },
};
</script>
