<template>
  <div class="home">
    <PageHeader />
    <ProjectStatistics />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'

import ProjectStatistics from '@/components/ProjectStatistics.vue'

export default {
  name: 'NanoGraphics',
  components: {
    PageHeader,
    ProjectStatistics
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
