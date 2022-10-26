<template>
  <div class="home">
    <PageHeader />
    <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'AllProjects',
  components: {
    PageHeader,
    ProjectList,
  }
}
</script>
