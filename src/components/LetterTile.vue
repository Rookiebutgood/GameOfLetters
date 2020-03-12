<template>
  <button @click="enterLetter(letter)" :class={active}>
    {{letter}}
  </button>
</template>

<script>
import {store} from '../../store'
export default {
  name: 'LetterTile',
  props: ['letter'],
  data(){
    return{
      active: true
    }
  },
  methods: {
    enterLetter: function(letter) {
      this.active = false
      store.setWord(letter)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    background: grey;
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    color: yellow;
  }
</style>