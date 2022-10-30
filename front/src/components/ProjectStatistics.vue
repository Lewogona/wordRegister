<template>
  <div>
    <div id="statistiques" class="project_card">
      <h1>Statistiques</h1>
    </div>
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