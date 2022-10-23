<template>
  <div id="totals">
    <label for="totalDay" size="lg">Total mots du jour :</label>
    <b-form-input id="totalDay" value=" /1 666" readonly></b-form-input>
    <label for="totalNano" size="lg">Total mots du NaNoWriMo :</label>
    <b-form-input id="totalNano" value=" /50 000" readonly></b-form-input>
  </div>
</template>

<script>
export default {
  name: 'WordsTotal',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#totalDay, #totalNano {
  width: 200px;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}

#totals {
  margin-top: 20px;
}
</style>