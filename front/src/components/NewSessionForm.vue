<template>
    <div>
      <b-form>
        <b-form-group label="Quel projet ?">
          <b-form-select class="form" v-model="selected" :options="projets"></b-form-select>  
        </b-form-group>
        <b-form-group label="Quel type d'évènement ?">
          <b-form-select class="form" v-model="selected" :options="events"></b-form-select>
        </b-form-group>
        <b-form-group label="Nouveau chapitre ?">
          <b-form-radio-group id="newchap" v-model="selected" :options="newchap" name="newchap"></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Nombre total de mots dans le fichier">
          <b-form-input class="form"></b-form-input>
        </b-form-group>
        <b-button pill variant="primary">Valider</b-button>
      </b-form>
      <b-form-group label="Mots écrits durant cette session :">
        <b-form-input class="form" readonly></b-form-input>
      </b-form-group>
      <b-text id="congratz">Félicitations !</b-text>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewSessionForm',
    data() {
      return {
        selected: null,
        projets: [
          { value: null, text: ' ' },
          { value: 'a', text: '[Roman] Cette fille' },
          { value: 'b', text: '[Roman] Ossaïnha' },
          { value: 'c', text: '[Nouvelle] À travers la fenêtre'},
          { value: 'd', text: 'Autre...', disabled: true }
        ],
        events: [
          { value: null, text: ' ' },
          { value: 'a', text: 'Session normale' },
          { value: 'b', text: 'Word war 15' },
          { value: 'c', text: 'Word war 30' },
          { value: 'd', text: 'Autre...', disabled: true }
        ],
        newchap: [
          { text: 'Oui' },
          { text: 'Non' },
        ]
      }
    }
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