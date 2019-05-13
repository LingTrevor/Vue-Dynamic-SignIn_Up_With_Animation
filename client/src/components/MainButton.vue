<template>
  <button>{{ buttonTitle }}</button>
</template>

<script>
export default {
  props: {
    buttonTitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
button {
  border-radius: 30px;
  border: $primary-border-line;
  background: $color-primary-dark;
  color: $color-primary-green;
  font-size: 12px;
  font-weight: bolder;
  padding: 12px 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 100ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}
</style>
