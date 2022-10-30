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
          <b-form-text style="font-size: 12px; text-align: left;">Votre mot de passe doit contenir au minimum 8 caractères dont un chiffre.</b-form-text>
        </b-form-group>
        <b-button type="submit" variant="primary">S'inscrire</b-button>
        <p>Déjà inscrit ?</p>
        <b-link id="link" href="#/login">Connectez-vous ici !</b-link>
      </b-form>

    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SignupPage',
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