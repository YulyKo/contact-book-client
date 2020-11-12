<template>
  <div>
    <label :for="id">{{ labelText }}</label>
    <input
      v-model="inputData"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      required>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  // props: {
  //   id: String,
  //   type: String,
  //   placeholder: String,
  //   labelText: String,
  //   value: String || Date,
  // },
  props: ['value', 'id', 'type', 'placeholder', 'labelText'],
  computed: {
    inputData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
