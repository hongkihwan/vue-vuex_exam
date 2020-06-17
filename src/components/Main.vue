<template>
  <div >
    <div>
      <p>{{ $store.state.counter }} </p>
    </div>
    <div class="Container-Button">
      <button @click="addCounter" class="mr-3">+</button>
      <button @click="subCounter">-</button>
    </div>
    <div>
      <p>Store Getter Data : {{ getCounter }}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    addCounter() {
      this.$store.commit('addCounter');
    },
    subCounter() {
      this.$store.commit('subCounter');
    }
  },
  computed: {
    ...mapGetters([
      'getCounter'
    ])
  }
}
</script>

<style>
.Container-Title {
  display: flex;
  justify-content: center;
}
.Container-Button {
  margin-top: 15px;
  display: flex;
}
</style>