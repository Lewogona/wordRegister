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
          { value: 'a', text: 'Roman' },
          { value: 'b', text: 'Nouvelle' },
          { value: 'c', text: 'Scénario'},
          { value: 'd', text: 'Chanson'},
          { value: 'e', text: 'Autre...', disabled: true }
        ],
        chap: [
          { text: 'Oui', value: 'oui' },
          { text: 'Non', value: 'non' },
        ],
    }
  }
}
</script>
