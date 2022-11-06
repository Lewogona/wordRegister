<template>
  <div>
    <div class="row">
      <b-link href="#/addsession" class="menu-elements">
        <b-icon-file-plus-fill font-scale="5" variant="primary"></b-icon-file-plus-fill>
        <p>Ajouter session</p>
      </b-link>
      <b-link href="#/addproject" class="menu-elements">
        <b-icon-folder-plus font-scale="5" variant="primary"></b-icon-folder-plus>
        <p>Ajouter projet</p>
      </b-link>
      <b-link href="#/addevent" class="menu-elements" disabled>
        <b-icon-calendar2-plus-fill font-scale="5"></b-icon-calendar2-plus-fill>
        <p>Ajouter évènement</p>
      </b-link>
    </div>
    <div class="row">
      <b-link href="#/nanostatistics" class="menu-elements" disabled>
        <b-icon-bar-chart-line-fill font-scale="5"></b-icon-bar-chart-line-fill>
        <p>Statistiques</p>
      </b-link>
      <b-link href="#/allprojects" class="menu-elements">
        <b-icon-book font-scale="5" variant="primary"></b-icon-book>
        <p>Projets</p>
      </b-link>
      <b-link href="#/nanographics" class="menu-elements">
        <b-icon-pie-chart-fill font-scale="5" variant="primary"></b-icon-pie-chart-fill>
        <p>Graphiques</p>
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuElements',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin: 0;
}

.menu-elements {
  width: 160px;
}

.disabled {
  color: var(--purple);
}
</style>