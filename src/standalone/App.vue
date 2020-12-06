<template>
  <hello-world />
</template>

<script lang="ts">
// import Vue from 'vue'
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'

// export default Vue.extend({
export default defineComponent({
  name: 'App',
  components: { HelloWorld }
})
</script>
