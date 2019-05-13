<template>
  <transition name="slide" appear mode="out-in">
    <component :is="currentComponent" @click.native="changeView"></component>
  </transition>
</template>

<script>
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
export default {
  data() {
    return {
      currentComponent: SignIn
    };
  },
  components: {
    SignIn,
    SignUp
  },
  methods: {
    //That link helped me!
    //   https://stackoverflow.com/questions/41097909/dynamic-component-click-event-in-vue
    changeView(e) {
      if (e.target.text === "Sign Up") {
        this.currentComponent = SignUp;
      } else if (e.target.text === "Cancel") {
        this.currentComponent = SignIn;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_base.scss";
</style>
