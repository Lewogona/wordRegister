<template>
  <div class="home">
    <PageHeader />
    <ProjectInfo 
    :id="project.id"
    :title="project.title" 
    :type="project.type" 
    :description="project.description" 
    :genre="project.genre"
    :theme="project.theme"
    :logline="project.logline" />
    <ProjectStatistics />
  </div>
</template>
  
<script>
import axios from "../services/axios-service"

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import ProjectStatistics from '@/components/ProjectStatistics.vue'

export default {
  name: 'AddProject',
  components: {
    PageHeader,
    ProjectInfo,
    ProjectStatistics,
  },
  data() {
    return {
      project: {},
    }
  },
  created() {
    // Get the project with its id
    axios.get("projects/" + this.$route.params.id)
      .then(response => {
        this.project = response.data;
      }).catch(e => {
        console.error(e);
      })
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
  