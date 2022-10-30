<template>
  <div class="home">
    <PageHeader />
    <WordTotals />
    <MenuElements />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import WordTotals from '@/components/WordTotals.vue'
import MenuElements from '@/components/MenuElements.vue'

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    WordTotals,
    MenuElements,
  }
}
</script>
