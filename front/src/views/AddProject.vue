<template>
  <div class="home">
    <PageHeader />
    <NewProjectForm />
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
  }
}
</script>
