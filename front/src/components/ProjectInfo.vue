<template>
  <div>
    <b-card title="Cette fille" tag="article" class="project_card">
      <b-card-text>
        Type de projet : Roman
      </b-card-text>
      <b-card-text>
        Description du roman, thèmes, logline, ...
      </b-card-text>      
      <b-card-text>
        Chapitres finis : 12
      </b-card-text>
    </b-card>
  </div>
</template>
    
<script>
  export default {
    name: 'ProjectInfo',
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