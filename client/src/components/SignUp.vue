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
@import "../scss/_variables.scss";
form {
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  input {
    background: $color-primary-bg;
    border: none;
    padding: 10px 15px;
    margin: 10px 0;
    width: 100%;
    color: $color-primary-dark;

    &:focus {
      outline: none;
      border: $primary-border-line;
    }
  }

  .sign-link {
    position: absolute;
    top: 90%;
    width: 80%;
    margin: auto;

    a {
      text-decoration: none;
      color: $color-primary-dark;
      float: right;
      padding: 5px 15px;
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: bolder;
      transition: transform 100ms ease-in;
      cursor: pointer;

      &:hover {
        background: $color-primary-dark;
        color: $color-primary-green;
        border-radius: 30px;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
