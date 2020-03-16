import axios from 'axios'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const store = {
  alreadyUsedNumbers: [],
  currentWord: [],
  word: '',
  recordTable: [],
  time: 0,
  isRecordsVisible: false,
  isMessageVisible: false,
  isGameActive: true,
  hiddenLetters: [],
  startGame: function(){  //начало игры, получение слова из апи
    let t = this
    t.isMessageVisible = false;
    t.isGameActive = true;
    t.time = 0;
    let number = getRandomNumber(2, 1369);
    axios.get(`https://apidir.pfdo.ru/v1/directory-program-activities/${number}`)
    .then(function (response) {
      if(response.data.result_code === "FLSCS" && !t.alreadyUsedNumbers.includes(number)) {
        t.alreadyUsedNumbers.push(number);
        t.word = response.data.data.name.toUpperCase();
        console.log('Подсказка:', t.word)
        store.startTimer();
      } else {
        t.startGame()
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  setWord(letter) { //ввод букв
    this.currentWord.push(letter);
  },
  resetWord() { //сброс букв
     this.currentWord = [];
     this.hiddenLetters = [];
  },
  startTimer(){ //запуск таймера
    let t = this
    setInterval(function() {
      if(t.isGameActive) {
        t.time++;
      }
     },1000)
  },
  resetTimer() {//сброс таймера при правильном слове
    this.time = 0;
    this.isGameActive = false;
  },
  addTableRecord(record) { //добавление записи с результатами игрока
    let oldTime = record.time;
    let minutes = Math.floor(oldTime / 60);
    let seconds = oldTime % 60;
    let formatTime = `${minutes}:${seconds}`;
    let formatRecord = {index: this.recordTable.length+1, word: record.word, time: formatTime };
    this.recordTable.push(formatRecord)
  },
  showMessage() { //показать сообщение о победе
    this.isMessageVisible = true;
  },
  sortRecords(param) { //сортировка значений таблицы
    store.recordTable.sort(function (a, b) {
      if (a[param] > b[param]) {
        return 
      }
      if (a[param] < b[param]) {
        return -1;
      }
      return 0;
    });
  },
  gameOver() { //окончание игры
    this.time = 0;
    this.isRecordsVisible = true;
    this.isMessageVisible = false;
  }
}