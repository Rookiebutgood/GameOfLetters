<template lang="pug">
  div.word-cells
    div(
      class="word-cells__cell"
      v-for="(letter, index) in word"
      :key="index"
    ) {{inputLetters[index]}}
</template>

<script>
import {store} from '../../store'

export default {
  name: 'WordCells',
  props:['word'],
  computed:{
    inputLetters: function(){
      return store.currentWord
    }
  },
  watch: {
    inputLetters: function () {
      let inputLettersString = this.inputLetters.join('')
      if(inputLettersString == this.word){
        store.addTableRecord({word: this.word, time: store.time});
        store.showMessage();
        store.resetTimer();
        store.resetWord();
      }
    }
  },
}
</script>

<style lang="scss">

.word-cells{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__cell{
    border: none;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin: 10px;
    color: #9aceff;
    box-shadow: 0 0 5px 1px #9aceff;
    outline: none;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    display: inline-block;
  }
}
</style>