<template>
  <span>popup:</span>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// export default Vue.extend({
export default defineComponent({
  name: 'App',
  components: { HelloWorld }
})
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
