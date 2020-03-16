<template lang="pug">
  div.game
    div.game__timer
      Timer
    div.game__output
      WordCells(:word="word")
    div.game__input
      LetterTile(:shuffleWord="shuffleWord")
    div.game__reset
      button.game__reset-button.button(@click="resetWord") Сброс
</template>

<script>
import {store} from '../../store'
import LetterTile from './LetterTile'
import WordCells from './WordCells'
import Timer from './Timer'

export default {
  name: 'Game',
  components: {
    LetterTile,
    WordCells,
    Timer
  },
  computed: {
    word: function() {
      return store.word
    },
    shuffleWord: function(){
      let a = this.word.split(""),
      n = a.length;

      for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join('')
    }
  },
  methods:{
    resetWord: function() {
      return store.resetWord()
    }
  }
}
</script>

<style lang="scss">
  .game{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    max-width: 80%;
    &__input{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__reset{
      text-align: center
    }
    &__reset-button{
      padding: 10px 20px;
      text-transform: uppercase;
    }
  }
</style>