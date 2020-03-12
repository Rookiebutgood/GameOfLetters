<template>
  <div class="cells">
    <div class="cell" v-for="(letter, index) in word" :key="index">
      {{inputLetters[index]}}
    </div>
  </div>
</template>

<script>
import {store} from '../../store'
export default {
  name: 'WordCells',
  props:['word'],
  data(){
    return{
      inputLetters: store.currentWord
    }
  },
  watch: {
    inputLetters: function () {
      let inputLettersString = this.inputLetters.join('')
      if(inputLettersString == this.word){
        console.log('you R WINNER')
      }
      console.log('watch', this.inputLetters)
    }
  },
}
</script>

<style>
  div.cell{
    width: 10px;
    height: 10px;
    border: 1px solid red;
    margin: 0 10px;
    display: inline-block;
  }
</style>