<template lang="pug">
div.letter-tiles
  button.letter-tiles__tile.button(
    v-for="(letter, index) in shuffleWord"
    :key="index"
    :class="{'letter-tiles__tile_hide': store.hiddenLetters.includes(index)}" 
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
  .letter-tiles{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &__tile{
      width: 60px;
      height: 60px;
      &_hide{
        display: none;
      }
    }
  }
</style>