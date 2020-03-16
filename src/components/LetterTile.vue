<template lang="pug">
div.letter-tiles
  button.letter-tile.button(
    v-for="(letter, index) in shuffleWord"
    :key="index"
    :class="{'letter-tile_hide': store.hiddenLetters.includes(index)}" 
    @click="enterLetter(letter, index)"
  ) {{letter}}
</template>

<script>
import {store} from '../../store';

export default {
  name: 'LetterTile',
  props: ['shuffleWord'],
  data(){
    return{
      store
    }
  },
  methods: {
    enterLetter: function(letter, index) {
      store.hiddenLetters.push(index);
      store.setWord(letter);
    }
  }
}
</script>

<style lang="scss">
  .letter-tile {
    width: 60px;
    height: 60px;
    &_hide{
      display: none;
    }
  }
</style>