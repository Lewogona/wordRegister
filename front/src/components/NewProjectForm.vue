<template>
    <div>
      <b-form>
        <b-form-group label="Quel type de projet ?">
          <b-form-select class="form" :options="newprojets"></b-form-select>  
        </b-form-group>
        <b-form-group label="Titre :">
          <b-form-input class="form"></b-form-input>
        </b-form-group>
        <b-form-group label="Y aura-t-il des chapitres ? (différents fichiers)">
          <b-form-radio-group name="chap" :options="chap" buttons button-variant="outline-primary" size="lg"></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Ajouter une description ?">
          <b-form-textarea class="form"></b-form-textarea>
        </b-form-group>
        <b-button pill variant="primary">Valider</b-button>
      </b-form>
      <p id="be-brave">Courage !</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewProjectForm',
    data() {
      return {
        newprojets: [
          { value: null, text: ' ' },
          { value: 'a', text: 'Roman' },
          { value: 'b', text: 'Nouvelle' },
          { value: 'c', text: 'Scénario'},
          { value: 'd', text: 'Chanson'},
          { value: 'e', text: 'Autre...', disabled: true }
        ],
        chap: [
          { text: 'Oui', value: 'oui' },
          { text: 'Non', value: 'non' },
        ],
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

  #be-brave {
    font-size: 16px;
    color: var(--red)
  }
  </style>