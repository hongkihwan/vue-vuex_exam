<template>
  <div id="Container-Main">
    <Main/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue';

export default {
  name: 'App',
  components: {
    Main
  },
}
</script>

<style>
.Container-Main {
  justify-content: center;
  display: flex;
}
</style>
