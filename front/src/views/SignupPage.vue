<template> 
  <div>
    <img id="logo" src='../assets/logo.png' alt='logo'/>
    <b-card
      style="width: 50%; margin: auto; border: none;">
      <b-form @submit.prevent="handleRegister">
        <b-form-group label="Pseudo">
          <b-form-input type="text" v-model="user.pseudo" required></b-form-input>
          <b-form-text>{{ error.pseudo }}</b-form-text>
        </b-form-group>
        <b-form-group label="Mot de passe">
          <b-form-input type="password" v-model="user.password" required></b-form-input>  
          <b-form-text style="font-size: 12px; text-align: left;">Votre mot de passe doit contenir au minimum 8 caractères dont un chiffre.</b-form-text>
          <b-form-text>{{ error.password }}</b-form-text>
        </b-form-group>
        <b-button type="submit" variant="primary">S'inscrire</b-button>
        <p>Déjà inscrit ?</p>
        <b-link id="link" href="#/login">Connectez-vous ici !</b-link>
      </b-form>

    </b-card>
  </div>
</template>

<script>
import User from '../models/user';

// @ is an alias to /src
export default {
  name: 'SignupPage',
  data() {
    return {
      user: new User("", ""),
      error: {
        pseudo: "",
        password: ""
      },
      messageError: ""
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
    },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods : {
    // Check if every input is valid
    validateForm() {
    const validatePseudo = this.validateInput("pseudo", /^[A-zÀ-ú-0-9]+$/, "Pseudo");
    const validatePassword = this.validateInput("password", /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Mot de passe");

    return validatePseudo && validatePassword
    },
    // Check each input with regex
    validateInput(element, regex, fieldName) {
      this.user[element] = this.user[element].trim();
      let match = this.user[element].match(regex)
      if (!match || this.user[element] !== match[0]) {
        this.error[element] = `${fieldName} non valide`;
        return false
      }

      this.error[element] = "";
      return true;
    },
    // When the form is valided, redirect to the login page
    handleRegister() {
      if (this.validateForm()) {
        this.$store.dispatch('auth/register', this.user).then(
          () => {
            this.$router.push('/login');
          },
          error => {
            this.messageError = error.response.data.error;
          }
        );
      }
    }
  }
}
</script>

<style>

#logo {
  width: 35%;
}

#link {
  color: var(--primary)
}
</style>