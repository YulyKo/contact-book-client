<template>
  <button :type="type"><slot></slot></button>
</template>

<script>
export default {
  name: 'ButtonVue',
  props: {
    type: String,
    buttonText: String,
  },
};
</script>
