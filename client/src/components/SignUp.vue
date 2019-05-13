<template>
  <main-container>
    <form-container>
      <form>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <main-button buttonTitle="Sign Up"></main-button>
        <div class="sign-link">
          <a>Cancel</a>
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
