<template>
  <div class="home">
    <PageHeader />
    <h1>Ajouter un nouvel évènement</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'AddEvent',
  components: {
    PageHeader,
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
