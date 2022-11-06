<template>
  <div>
    <b-card :title="title" tag="article" class="project_card">
      <b-card-text>
        Type de projet : {{ type }}
      </b-card-text>
      <b-card-text>
        Description : {{ description }}
      </b-card-text>
      <b-card-text v-if="!displayOnAllProject">
        Genre : {{ genre }}
      </b-card-text>
      <b-card-text v-if="!displayOnAllProject">
        Thèmes : {{ theme }}
      </b-card-text>
      <b-card-text v-if="!displayOnAllProject">
        Logline : {{ logline }}
      </b-card-text> 
      <b-card-text v-if="!displayOnAllProject">
        Nombre de chapitres : {{ numberOfChapters }}
      </b-card-text>
      <b-button @click="goToProjectPage" v-if="displayOnAllProject" variant="primary" size="sm" class="right stretched-link">Plus de détails</b-button>
      <b-button @click="displayDeleteMessage" v-if="!displayOnAllProject" variant="danger" size="sm" class="right" style="margin-top: 15px;">Supprimer</b-button>
      <b-button :href="`#/modifyproject/${$route.params.id}`" v-if="!displayOnAllProject" variant="primary" size="sm" class="right" style="margin-top: 15px; margin-right: 5px;">Modifier</b-button>
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
      numberOfChapters: Number,
      id: String,
      displayDeleteMessage: Function,
    },
    data() {
      return {
      }
    },
    computed: {
      displayOnAllProject() {
        return ["/allprojects"].includes(this.$router.currentRoute.path)
      },
    },
    methods: {
      // Retrieve the user with their info
      currentUser() {
        return this.$store.state.auth.user;
      },
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

.right {
  float: right;
}
</style>