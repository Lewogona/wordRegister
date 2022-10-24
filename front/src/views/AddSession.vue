<template>
  <div class="home">
    <PageHeader />
    <NewSessionForm />
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
  }
}
</script>
