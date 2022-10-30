<template>
    <div>
      <b-form>
        <b-form-group label="Quel projet ?">
          <b-form-select class="form" :options="projects"></b-form-select>  
        </b-form-group>
        <b-form-group label="Quel type d'évènement ?">
          <b-form-select class="form" :options="events"></b-form-select>
        </b-form-group>
        <b-form-group label="Nouveau fichier ?">
          <b-form-radio-group name="newchap" :options="newchap" buttons button-variant="outline-primary" size="lg"></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Nombre total de mots dans le fichier">
          <b-form-input class="form"></b-form-input>
        </b-form-group>
        <b-button pill variant="primary">Valider</b-button>
      </b-form>
      <b-form-group label="Mots écrits durant cette session :">
        <b-form-input class="form" readonly></b-form-input>
      </b-form-group>
      <p id="congratz">Félicitations !</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewSessionForm',
    props: {
      projects: Array,
      events: Array,
      newchap: Array,
    },
    data() {
      return {
      }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .form {
    width: 300px;
    margin: auto;
  }

  #congratz {
    font-size: 16px;
    color: var(--red)
  }
  </style>