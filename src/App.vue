<template>
  <div id="app">
    <Game />
    <Message />
    <RecordTable />
  </div>
</template>

<script>
import Game from './components/Game'
import Message from './components/Message'
import RecordTable from './components/RecordTable'
import {store} from '../store'

export default {
  name: 'App',
  components: {
    Game,
    Message,
    RecordTable
  },
  data() {
    return{
      alreadyUsedNumbers: [],
      store,
      word: 'слово'
    }
  },
  mounted(){
    store.startGame()
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

*{
  font-family: "Roboto Slab";
  margin: 0;
  padding: 0;
}

body{
  width: 100%;
  height: 100%;
  background: #4a69bb;
  overflow: hidden;
}
#app{
  background: #4a69bb
}
.button{
  background: #9aceff;
  border: none;
  border-radius: 10px;
  margin: 10px;
  color: #550a46;
  box-shadow: 0 0 5px 1px rgba(0,0,0,.5);
  outline: none;
  font-size: 24px;
  &:active{
    background: #617be3;
    box-shadow: none;
  }
}

.popup{
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #ffffff;
  border-radius: 10px;
  min-width: 40%;
  padding: 10px;
  &_visible{
    display: block;
  }
  &__title{
    text-align: center;
    color: #550a46;
  }
  &__button{
    border: 1px solid #550a46;
    border-radius: 10px;
    background: none;
    padding: 10px 20px;
    margin: 10px;
    color: #550a46;
    cursor: pointer;
    outline: none;
    &:active{
      background: #617be3;
      border-color: #617be3;
      color: #fff;
    }
  }
}
</style>
