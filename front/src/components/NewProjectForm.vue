<template>
  <div>
    <b-form @submit.prevent="sendProject">
      <b-form-group label="Titre :*">
        <b-form-input type="text" v-model="project.title" class="form" required></b-form-input>
      </b-form-group>
      <b-form-group label="Quel type de projet :*">
        <b-form-select class="form" :options="projectType" v-model="project.type" required></b-form-select>  
      </b-form-group>
      <b-form-group label="Y aura-t-il des chapitres ? (différents fichiers)*">
        <b-form-radio-group name="chap" :options="chap" v-model="project.chapter" buttons button-variant="outline-primary" size="lg" required></b-form-radio-group>
      </b-form-group>      
      <b-form-group label="Nombre de chapitres finis :" v-if="project.chapter && displayOnCreate">
        <b-form-input type="number" v-model="project.finishedChapters" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Ajouter une description :">
        <b-form-textarea v-model="project.description" class="form"></b-form-textarea>
      </b-form-group>
      <b-form-group label="Genre :">
        <b-form-input v-model="project.genre" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Thèmes :">
        <b-form-input v-model="project.theme" class="form"></b-form-input>
      </b-form-group>
      <b-form-group label="Logline :">
        <b-form-input v-model="project.logline" class="form"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">{{displayOnCreate ? "Créer !" : "Modifier"}}</b-button>
    </b-form>
    
    <p id="be-brave" v-if="submitted && displayOnCreate">Courage !</p>
    <p id="be-brave" v-if="submitted && !displayOnCreate">Projet mis à jour</p>
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
        project: {
          userId: "",
          title: "",
          type: "",
          chapter: undefined,
          finishedChapters: NaN,
          description: "",
          genre: "",
          theme: "",
          logline: "",
        },
        submitted: false,
      }
    },
    async mounted() {
      if (this.$route.params.id) {
        const response = await axios.get("projects/" + this.$route.params.id);
        this.project = { ...response.data };
      }
    },
    computed: {
      // Retrieve the user with their info
      currentUser() {
        return this.$store.state.auth.user;
      },
      displayOnCreate() {
        return ["/addproject"].includes(this.$router.currentRoute.path)
      },
    },
    methods: {
      //validate form and redirect
      redirection() {
        this.$router.push("/allprojects")
      },
      async sendProject() {
        this.submitted = true;
        if (!this.$route.params.id) await axios.post("projects/", { ...this.project, userId: this.currentUser.userId });
        else await axios.put(`projects/${this.$route.params.id}`, { ...this.project, userId: this.currentUser.userId });

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