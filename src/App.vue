<template>
  <div id="app">
    <div class="cells">
      <WordCells :word="word"/>
    </div>
    <div class="letters">
      <LetterTile v-for="(letter, index) in shuffleWord" :key="index" :letter="letter"/>
      <button @click="resetWord">RESET</button>
       <button @click="startGame">TETD</button>
    </div>
    <div class="message">
      <h2>Вы выиграли! Повторить?”</h2>
      <button>Конечно</button>
      <button>Я уже устал</button>
    </div>
    <div class="table">
      <p>порядковый номер слово и время</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LetterTile from './components/LetterTile'
import WordCells from './components/WordCells'
import {store} from '../store'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default {
  name: 'App',
  components: {
    LetterTile,
    WordCells
  },
  data() {
    return{
      alreadyUsedNumbers: [],
      store,
      word: 'какое то слово'
    }
  },
  computed: {
    // word: function() {
    //   return 'ckjdj'
    // },
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
      return store.reset()
    },
        startGame: function(){
      let number = getRandomNumber(2, 1369);
      let t = this
      axios.get(`https://apidir.pfdo.ru/v1/directory-program-activities/${number}`)
      .then(function (response) {
        if(response.data.result_code === "FLSCS") {
      //alreadyUsedNumbers.push(number);
          console.log(response.data.data.name.toUpperCase());
          console.log(t)
          t.word = response.data.data.name.toUpperCase();
        } else {
          this.startGame()
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

//let number = getRandomNumber(2, 1369);
let number = 50;
console.log(number)

// function getNewWord(){

// }
axios.get(`https://apidir.pfdo.ru/v1/directory-program-activities/${number}`)
  .then(function (response) {
    // handle success
    if(response.data.result_code === "FLSCS") {
      //alreadyUsedNumbers.push(number);
      console.log(response.data.data.name.toUpperCase());
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

</script>

<style>

</style>
