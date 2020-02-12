<template>
  <el-input
    v-model="inputValue"
    :placeholder="imputPlaceholder"
    :size="sizeInput"
    @input="sendInputValue"
  />
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.textValue
    };
  },
  props: {
    textValue: String,
    sizeInput: String,
    imputPlaceholder: String
  },
  methods: {
    sendInputValue() {
      this.$emit("saveInputValue", this.inputValue);
    }
  }
};
</script>

<style>
</style>