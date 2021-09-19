/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */

<template>
  <label for="">{{label}}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: [String, Number],
      default: "",
    }
  },
  modelValue: {
    type: String,
    default: ""
  }

};
</script>

<style lang="css" scoped></style>
