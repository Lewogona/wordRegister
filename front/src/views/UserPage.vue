<template>
  <div class="home">
    <PageHeader />
    <UserProfile :pseudo="user.pseudo" :numberOfProjects="projects.length" :totalNano="totalNano" />
  </div>
</template>

<script>
import axios from "../services/axios-service"

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserInfo',
  components: {
    PageHeader,
    UserProfile,
  },
  data() {
    return {
      projects: [],
      user: {},
      sessionsMonth: [],
    }
  },
  created() {
    axios.get("users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      }).catch(e => {
        console.error(e);
      })

    axios.get("projects")
      .then(response => {
        this.projects.push(...response.data);
      }).catch(e => {
        console.error(e);
      });

    axios.get("sessions/month")
      .then(response => {
        this.sessionsMonth.push(...response.data);
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
    },
    totalNano() {
      return this.sessionsMonth.reduce((totalWord, session) => {
        totalWord += session.totalSessionWord;
        return totalWord
      }, 0)
    },
  },
}
</script>
