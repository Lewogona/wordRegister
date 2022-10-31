<template>
  <div class="home">
    <PageHeader />
    <NewSessionForm :projects="projects" :events="events" :newchap="newchap" />
  </div>
</template>

<script>
import axios from "../services/axios-service"

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import NewSessionForm from '@/components/NewSessionForm.vue'

export default {
  name: 'AddSession',
  components: {
    PageHeader,
    NewSessionForm,
  },
  data() {
    return{
      projects: [],
      events: [
        { value: null, text: ' ' },
        { value: 'normalsession', text: 'Session normale' },
        { value: 'ww15', text: 'Word war 15' },
        { value: 'ww30', text: 'Word war 30' },
        { value: 'd', text: 'Autre...', disabled: true }
      ],
      newchap: [
        { text: 'Oui', value: true },
        { text: 'Non', value: false },
      ],
    }
  },
  created() {
    // Get all projects
    axios.get("projects")
      .then(response => {
        this.projects.push(...response.data);
      }).catch(e => {
        console.error(e);
      });
  },
  mounted() {
    // The user has to be logged in to access this page
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  computed: {
    // Retrieve the user with their info
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
}
</script>
