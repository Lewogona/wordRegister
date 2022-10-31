<template>
  <div>
    <b-form @submit.prevent="sendProject">
      <b-form-group label="Titre :*">
        <b-form-input type="text" v-model="title" class="form" required></b-form-input>
      </b-form-group>
      <b-form-group label="Quel type de projet :*">
        <b-form-select class="form" :options="projectType" v-model="type" required></b-form-select>  
      </b-form-group>
      <b-form-group label="Y aura-t-il des chapitres ? (différents fichiers)*">
        <b-form-radio-group name="chap" :options="chap" v-model="chapter" buttons button-variant="outline-primary" size="lg" required></b-form-radio-group>
      </b-form-group>      
      <b-form-group label="Nombre de chapitres finis :" v-if="chapter">
        <b-form-input type="number" v-model="finishedChapters" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Ajouter une description :">
        <b-form-textarea v-model="description" class="form"></b-form-textarea>
      </b-form-group>
      <b-form-group label="Genre :">
        <b-form-input v-model="genre" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Thèmes :">
        <b-form-input v-model="theme" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Logline :">
        <b-form-input v-model="logline" class="form"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Valider</b-button>
    </b-form>
    
    <p id="be-brave" v-if="submitted">Courage !</p>
  </div>
</template>
  
<script>
  import axios from "../services/axios-service"


  export default {
    name: 'NewProjectForm',
    props: {
      projectType: Array,
      chap: Array,
    },
    data() {
      return {
        userId: "",
        title: "",
        type: "",
        chapter: undefined,
        finishedChapters: NaN,
        description: "",
        genre: "",
        theme: "",
        logline: "",
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
      //validate form and redirect
      redirection() {
        this.$router.push("/allprojects")
      },
      async sendProject() {
        this.submitted = true;
        await axios.post("projects/", {
          userId: this.currentUser.userId,
          title: this.title,
          type: this.type,
          chapter: this.chapter,
          finishedChapters: this.finishedChapters,
          description: this.description,
          genre: this.genre,
          theme: this.theme,
          logline: this.logline
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

  #be-brave {
    font-size: 16px;
    color: var(--red)
  }
  </style>