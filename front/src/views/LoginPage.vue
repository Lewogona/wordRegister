<template> 
  <div>
    <img id="logo" src='../assets/logo.png' alt='logo'/>
    <b-card
      style="width: 50%; margin: auto; border: none;">
      <b-form @submit.prevent="handleLogin">
        <b-form-group label="Pseudo">
          <b-form-input v-model="user.pseudo" type="text" required></b-form-input>  
        </b-form-group>
        <b-form-group label="Mot de passe">
          <b-form-input v-model="user.password" type="password" required></b-form-input>  
        </b-form-group>
        <p text-variant="danger">{{ messageError }}</p>
        <b-button type="submit" variant="primary">Se connecter</b-button>
        <p>Vous n'avez pas de compte ? </p>
        <b-link id="link" href="#/signup">Inscrivez-vous ici !</b-link>
      </b-form>

    </b-card>
  </div>
</template>

<script>
import User from '../models/user';

// @ is an alias to /src
export default {
  name: 'LoginPage',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      messageError: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    // Check if the user's pseudo and password are valid
    async handleLogin() {
      if (this.user.pseudo && this.user.password) {
        try {
          await this.$store.dispatch('auth/login', this.user);
          this.$router.push('/');
        } catch (error) {
          console.log(error);
          this.messageError = error.response.data.error;
        }
      } else this.messageError = "Pseudo ou mot de passe manquant"
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