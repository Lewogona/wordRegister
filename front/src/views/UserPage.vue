<template>
  <div class="home">
    <PageHeader />
    <UserProfile :pseudo="pseudo" :projectNumber="projectNumber" :totalWord="totalWord" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserInfo',
  components: {
    PageHeader,
    UserProfile,
  },
  data() {
    return {
      pseudo: 'Lewogona',
      projectNumber: 3,
      totalWord: 12654,
    }
  },
}
</script>
