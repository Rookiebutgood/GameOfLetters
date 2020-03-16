<template lang="pug">
  div(
    class="message popup"
    :class="{popup_visible: store.isMessageVisible}"
  )
    h2.message__title.popup__title Вы выиграли! Повторить?
    div.message__actions
      button(
        class="message__button_continue popup__button"
        @click="startNewGame"
      ) Конечно!
      button.message__button_gameover.popup__button(@click="gameOver") Я уже устал
</template>

<script>
import {store} from '../../store'
export default {
  name: 'Message',
  data() {
    return {
      store
    }
  },
  methods: {
    startNewGame: function() {
      store.startGame()
    },
    gameOver: function() {
      store.gameOver()
    }
}
}
</script>

<style lang="scss">
  .message{
    &__actions{
      display: flex;
      justify-content: center;
    }
  }
</style>