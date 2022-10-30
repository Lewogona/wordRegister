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
        <b-button type="submit" variant="primary">Valider</b-button>
      </b-form>
      <b-form-group label="Mots écrits durant cette session :">
        <b-form-input class="form" readonly></b-form-input>
      </b-form-group>
      <p id="congratz" v-if="submitted">Félicitations !</p>
    </div>
  </template>
  
  <script>
  import axios from "../services/axios-service"

  export default {
    name: 'NewSessionForm',
    props: {
      projects: Array,
      events: Array,
      newchap: Array,
    },
    data() {
      return {
        submitted: false,
      }
    },
    computed: {
      // Retrieve the user with their info
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      //
      redirection() {
        this.$router.push("/")
      },
      async sendProject() {
        this.submitted = true;
        await axios.post("projects/", {
          // userId: this.currentUser.userId,
          // title: this.title,
          // type: this.type,
          // chapter: this.chapter,
          // description: this.description,
          // genre: this.genre,
          // theme: this.theme,
          // logline: this.logline
        })
        setTimeout(this.redirection, 1000)
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