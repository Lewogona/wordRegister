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
  }
}
</script>
