<template>
  <div class="home">
    <PageHeader />
    <ProjectInfo v-for="project in projects" 
    :title="project.title" 
    :projectType="project.projectType" 
    :description="project.description" 
    :key="project.title" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'

export default {
  name: 'AllProjects',
  components: {
    PageHeader,
    ProjectInfo,
  },
  data() {
    return {
      projects: [
        {
          title: 'Cette fille',
          projectType: 'Roman',
          description: 'Description, thèmes, logline, blabla...',
        },
        {
          title: 'Ossaïnha',
          projectType: 'Roman',
          description: 'Description, thèmes, logline, blabla...',
        },
        {
          title: 'À travers la fenêtre',
          projectType: 'Nouvelle',
          description: 'Description, thèmes, logline, blabla...',
        },
      ]
    }
  }
}
</script>
