<template>
  <b-navbar id="head-page" toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#/">Compteur de mots</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/">Accueil</b-nav-item>
        <b-nav-item href="#/nanographics" disabled>Graphiques</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Actions" right>
          <b-dropdown-item href="#/addsession">Ajouter session</b-dropdown-item>
          <b-dropdown-item href="#/addproject">Ajouter projet</b-dropdown-item>
          <b-dropdown-item href="#/addevent" disabled>Ajouter évènement</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Infos" right>
          <b-dropdown-item href="#/nanostatistics" disabled>Statistiques</b-dropdown-item>
          <b-dropdown-item href="#/allprojects">Projets</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Mon compte" right>
          <b-dropdown-item href="#/userpage">Profil</b-dropdown-item>
          <b-dropdown-item @click="logOut">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'PageHeader',
  computed: {
    // Retrieve the user with their info
    currentUser() {
      return this.$store.state.auth.user;
    }
    },
  methods: {
    // log out and redirect to the login page
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#head-page {
  margin-bottom: 15px;
}
</style>