<template>
  <div class="home">
    <PageHeader />
    <NewProjectForm :newproject="newproject" :chap="chap" />
  </div>
</template>

<script>
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
      newproject: [
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
    }
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
