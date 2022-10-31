<template>
  <div class="home">
    <PageHeader />
    <ProjectInfo v-for="project in projects" 
    :title="project.title" 
    :type="project.type" 
    :description="project.description" 
    :id="project._id"
    :key="project.title" />
  </div>
</template>

<script>
import axios from "../services/axios-service"

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'

export default {
  name: 'AllProjects',
  components: {
    PageHeader,
    ProjectInfo,
  },
  data() {
    return {
      projects: []
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
