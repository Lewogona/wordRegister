<template> 
  <div>
    <img id="logo" src='../assets/logo.png' alt='logo'/>
    <b-card
      style="width: 50%; margin: auto; border: none;">
      <b-form>
        <b-form-group label="Pseudo">
          <b-form-input></b-form-input>  
        </b-form-group>
        <b-form-group label="Mot de passe">
          <b-form-input type="password"></b-form-input>  
        </b-form-group>
        <b-button type="submit" variant="primary">Se connecter</b-button>
        <p>Vous n'avez pas de compte ? </p>
        <b-link id="link" href="#/signup">Inscrivez-vous ici !</b-link>
      </b-form>

    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'LoginPage',
  data() {
    return {}
  },
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