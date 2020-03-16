<template lang="pug">
  div.timer {{time.minutes}}:{{time.seconds}}
</template>

<script>
import {store} from '../../store'

export default {
  name: 'Timer',
  computed: {
    time: function() {
      let allSeconds = store.time;
      let minutes = Math.floor(allSeconds / 60);
      let seconds = allSeconds % 60;
      return {minutes, seconds}
    }
  }
}
</script>

<style>
  .timer{
    text-align: center;
    font-size: 40px;
    color: #9aceff;
  }
</style>