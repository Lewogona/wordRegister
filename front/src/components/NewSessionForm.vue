<template>
    <div>
      <b-form @submit.prevent="sendSession">
        <b-form-group label="Quel projet ?*">
          <b-form-select class="form" :options="projectOptions" v-model="projectId" ></b-form-select>  
        </b-form-group>
        <b-form-group label="Quel type d'évènement ?*">
          <b-form-select class="form" :options="events" v-model="event"></b-form-select>
        </b-form-group>
        <b-form-group label="Nouveau fichier ?*">
          <b-form-radio-group name="newchap" :options="newchap" v-model="isNewChap" buttons button-variant="outline-primary" size="lg"></b-form-radio-group>
        </b-form-group>
        <b-form-group v-if="isNewChap">
          <b-form-input class="form" :value="`Chapitre ${chapterLength + 1}`" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Quel chapitre ?*" v-if="isNewChap === false">
          <b-form-select name="chapters" :options="chapterOptions" v-model="chapter" class="form"></b-form-select>
        </b-form-group>
        <b-form-group label="Nombre total de mots dans le fichier :*">
          <b-form-input class="form" v-model="totalFileWord" type="number"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Valider</b-button>
      </b-form>
      <b-form-group v-if="submitted" label="Mots écrits durant cette session :">
        <b-form-input class="form" :value="`${sessionWord}`" readonly></b-form-input>
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
        projectId: '',
        event: '',
        isNewChap: undefined,
        chapter: NaN,
        totalFileWord: undefined,
        submitted: false,
        sessionWord: 0,
      }
    },
    computed: {
      // Retrieve the user with their info
      currentUser() {
        return this.$store.state.auth.user;
      },
      projectOptions() {
        return this.projects.map(project => ({ value: project._id, text: `[${project.type}] ${project.title}` }))
      },
      chapterOptions() {
        return this.projects.find(project => project._id === this.projectId).chapters.map((_, i) => ({ value: i, text: `Chapitre ${i+1}` }))
      },
      chapterLength() {
        return this.projects.find(project => project._id === this.projectId).chapters.length
      },
    },
    methods: {
      //
      redirection() {
        this.$router.push("/")
      },
      async sendSession() {

        this.submitted = true;
        
        setTimeout(this.redirection, 2000)
        
        // Get the project with its id
        const response = await axios.get("projects/" + this.projectId);
        const chapters = response.data.chapters;
        if (!this.isNewChap) {
          this.sessionWord = this.totalFileWord - chapters[this.chapter]
        } else {
          this.chapter = this.chapterLength + 1
          this.sessionWord = this.totalFileWord
        }

        await axios.post("sessions/", {
          userId: this.currentUser.userId,
          projectId: this.projectId,
          event: this.event,
          chapter: this.chapter,
          totalSessionWord: this.sessionWord,
        })

        await axios.put("projects/chapter/" + this.projectId, {
          chapter: this.chapter,
          totalFileWord: this.totalFileWord,
        })
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