<template>
  <div class="home">
    <PageHeader />
    <NewProjectForm :projectType="projectType" :chap="chap" :project="project" />
  </div>
</template>

<script>
import axios from "../services/axios-service"

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import NewProjectForm from '@/components/NewProjectForm.vue'

export default {
  name: 'AddProject',
  components: {
    PageHeader,
    NewProjectForm,
  },
  data() {
    return {
      projectType: [
          { value: null, text: ' ' },
          { value: 'roman', text: 'Roman' },
          { value: 'nouvelle', text: 'Nouvelle' },
          { value: 'scenario', text: 'Scénario'},
          { value: 'chanson', text: 'Chanson'},
          { value: 'e', text: 'Autre...', disabled: true }
        ],
        chap: [
          { text: 'Oui', value: true },
          { text: 'Non', value: false },
        ],
        project: {}
    }
  },
  async mounted() {
    // The user has to be logged in to access this page
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    // Get the project with its id
    const response = await axios.get("projects/" + this.$route.params.id);
    this.project = { ...response.data };
  },
  computed: {
    // Retrieve the user with their info
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
}
</script>
