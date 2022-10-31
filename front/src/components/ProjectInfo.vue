<template>
  <div>
    <b-card :title="title" tag="article" class="project_card">
      <b-card-text>
        Type de projet : {{ type }}
      </b-card-text>
      <b-card-text>
        Description : {{ description }}
      </b-card-text>
      <b-card-text v-if="displayOnProjectPage">
        Genre : {{ genre }}
      </b-card-text>
      <b-card-text v-if="displayOnProjectPage">
        Thèmes : {{ theme }}
      </b-card-text>
      <b-card-text v-if="displayOnProjectPage">
        Logline : {{ logline }}
      </b-card-text> 
      <b-card-text v-if="displayOnProjectPage">
        Chapitres finis : {{ finishedChapters }}
      </b-card-text>
      <b-button @click="goToProjectPage" v-if="displayOnAllProject" variant="primary" size="sm" class="button_card stretched-link">Plus de détails</b-button>
    </b-card>
  </div>
</template>
    
<script>
  export default {
    name: 'ProjectInfo',
    props: {
      title: String,
      type: String,
      description: String,
      genre: String,
      theme: String,
      logline: String,
      finishedChapters: Number,
      id: String,
    },
    data() {
      return {
      }
    },
    computed: {
      displayOnProjectPage() {
        return !["/allprojects"].includes(this.$router.currentRoute.path)
      },
      displayOnAllProject() {
        return ["/allprojects"].includes(this.$router.currentRoute.path)
      },
    },
    methods: {
      //go to the project page
      goToProjectPage() {
        this.$router.push(`/project/${this.id}`)
      }
    },
  }
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project_card {
  width: 80%;
  margin: auto;
  border: var(--primary) solid 2px;
  box-shadow: 3px 5px rgba(180, 150, 170, 0.3);
  margin-bottom: 10px;
}

.button_card {
  float: right;
}
</style>