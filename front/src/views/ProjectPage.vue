<template>
    <div class="home">
      <PageHeader />
      <ProjectInfo />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PageHeader from '@/components/PageHeader.vue'
  import ProjectInfo from '@/components/ProjectInfo.vue'
  
  export default {
    name: 'AddProject',
    components: {
      PageHeader,
      ProjectInfo,
    }
  }
  </script>
  