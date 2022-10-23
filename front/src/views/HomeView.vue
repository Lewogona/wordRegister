<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PageHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    PageHeader
  }
}
</script>
