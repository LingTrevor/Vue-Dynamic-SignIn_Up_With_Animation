<template>
  <main-container>
    <form-container>
      <form>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <main-button buttonTitle="Sign In"></main-button>
        <div class="sign-link">
          <a>Sign Up</a>
        </div>
      </form>
    </form-container>
  </main-container>
</template>

<script>
import MainContainer from "@/components/MainContainer";
import FormContainer from "@/components/FormContainer";
import MainButton from "@/components/MainButton";
export default {
  components: {
    MainContainer,
    FormContainer,
    MainButton
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_base.scss";
</style>
