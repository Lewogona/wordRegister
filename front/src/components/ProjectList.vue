<template>
  <div>
    <b-card title="Cette fille" tag="article" class="project_card">
      <b-card-text>
        Type de projet : Roman
      </b-card-text>
      <b-card-text>
        Description du roman, thèmes, logline, ...
      </b-card-text>
      <b-button href="#/project" variant="primary" size="sm" class="button_card">Plus de détails</b-button>
    </b-card>
    <b-card title="Ossaïnha" tag="article" class="project_card">
      <b-card-text>
        Type de projet : Roman
      </b-card-text>
      <b-card-text>
        Description du roman, thèmes, logline, ...
      </b-card-text>
      <b-button href="#/project" variant="primary" size="sm" class="button_card">Plus de détails</b-button>
    </b-card>
    <b-card title="À travers la fenêtre..." tag="article" class="project_card">
      <b-card-text>
        Type de projet : Nouvelle
      </b-card-text>
      <b-card-text>
        Logline
      </b-card-text>
      <b-button href="#/project" variant="primary" size="sm" class="button_card">Plus de détails</b-button>
    </b-card>
  </div>
</template>
  
<script>
  export default {
    name: 'ProjectList',
    data() {
      return {
      }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project_card {
  width: 80%;
  margin: auto;
  border: var(--primary) solid 2px;
  box-shadow: 3px 5px rgba(180, 150, 170, 0.3);
  margin-bottom: 10px;
}

.button_card {
  float: right;
}
</style>