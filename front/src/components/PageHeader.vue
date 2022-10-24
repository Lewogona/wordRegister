<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Compteur de mots</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/">Accueil</b-nav-item>
        <b-nav-item href="#/nanographics">Graphiques</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Actions" right>
          <b-dropdown-item href="#/addsession">Ajouter session</b-dropdown-item>
          <b-dropdown-item href="#/addproject">Ajouter projet</b-dropdown-item>
          <b-dropdown-item href="#/addevent">Ajouter évènement</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Infos" right>
          <b-dropdown-item href="#/nanostatistics">Statistiques</b-dropdown-item>
          <b-dropdown-item href="#/allprojects">Projets</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Mon compte" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>