<template>
  <div class="form-container">
    <slot>No Slot Content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-container {
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 480px;
  width: 480px;
  max-width: 100%;
  padding: 10px 15px;
  margin: auto;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  position: relative;
}
</style>
