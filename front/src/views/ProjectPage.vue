<template>
    <div class="home">
      <PageHeader />
      <ProjectInfo :title="title" :projectType="projectType" :description="description" :finishedChapter="finishedChapter" />
      <ProjectStatistics />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PageHeader from '@/components/PageHeader.vue'
  import ProjectInfo from '@/components/ProjectInfo.vue'
  import ProjectStatistics from '@/components/ProjectStatistics.vue'
  
  export default {
    name: 'AddProject',
    components: {
      PageHeader,
      ProjectInfo,
      ProjectStatistics,
    },
    data() {
      return {
        title: 'Cette fille',
        projectType: 'Roman',
        description: 'Description, thèmes, logline, blabla...',
        finishedChapter: 12,
      }
    },
  }
  </script>
  