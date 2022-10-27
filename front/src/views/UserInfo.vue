<template>
  <div class="home">
    <PageHeader />
    <UserProfile />
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
  }
}
</script>
