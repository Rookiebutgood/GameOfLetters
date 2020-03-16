<template lang="pug">
  div(
    class="record-table popup" :class="{popup_visible: store.isRecordsVisible}"
  )
    h2.record-table__title.popup__title Таблица результатов
    div.record-table__header.record-table__row
      div.record-table__header-item.record-table__cell(@click="sort('word')") №
      div.record-table__header-item.record-table__cell(@click="sort('word')") Слово
      div.record-table__header-item.record-table__cell(@click="sort('time')") Время
    div.record-table__body
      div(
        class="record-table__item record-table__row"
        v-for="(row, index) in store.recordTable" 
        :key="index"
      )
        div.record-table__item-number.record-table__cell {{index+1}}
        div.record-table__item-word.record-table__cell {{row.word}}
        div.record-table__item-time.record-table__cell {{row.time}}
</template>

<script>
import {store} from '../../store'

export default {
  name: 'RecordTable',
  data() {
    return{
      store
    }
  },
  methods: {
    sort: function(param) {
      store.sortRecords(param)
    }
  }
}
</script>

<style lang="scss">
  .record-table{
    &__row{
      display: flex;
      justify-content: space-between
    }
    &__cell{
      width: 33%;
    }
    &__header-item{
      cursor: pointer;
    } 
  }
</style>