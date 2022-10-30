<template>
  <div class="home">
    <PageHeader />
    <NewSessionForm :projects="projects" :events="events" :newchap="newchap" />
  </div>
</template>

<script>
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
      projects: [
          { value: null, text: ' ' },
          { value: 'a', text: '[Roman] Cette fille' },
          { value: 'b', text: '[Roman] Ossaïnha' },
          { value: 'c', text: '[Nouvelle] À travers la fenêtre'},
          { value: 'd', text: 'Autre...', disabled: true }
        ],
        events: [
          { value: null, text: ' ' },
          { value: 'a', text: 'Session normale' },
          { value: 'b', text: 'Word war 15' },
          { value: 'c', text: 'Word war 30' },
          { value: 'd', text: 'Autre...', disabled: true }
        ],
        newchap: [
          { text: 'Oui', value: 'oui' },
          { text: 'Non', value: 'non' },
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
