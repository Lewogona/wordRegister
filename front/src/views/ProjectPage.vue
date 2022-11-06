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
    :logline="project.logline" 
    :numberOfChapters="(project.chapters && project.chapters.length) || 0"
    :displayDeleteMessage="displayDeleteMessage" />
    <ProjectStatistics />
    <b-modal 
      ref="confirm" 
      id="modal-1" 
      title="Confirmer la suppression du projet ?"
      @ok="deleteProject">
      <p class="my-4">Attention : tout projet supprimé ne pourra pas être récupéré.</p>
    </b-modal>
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
  methods: {
    // Display the confirmation modal
    displayDeleteMessage() {
      this.$refs["confirm"].toggle()
    },
    // Delete a user using their id and redirect to signup page after clearing the localStorage
    async deleteProject() {
      await axios.delete("projects/" + this.$route.params.id);
      this.$router.push("/allprojects");
    }
  }
}
  </script>
  