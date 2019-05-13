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
.slide-enter-active {
  animation: slide-in 2s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 1s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    // transform: translateX(150px);
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
@keyframes slide-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
}
</style>
