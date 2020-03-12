export const store = {
  currentWord: [],
  setWord(letter){
    console.log('enter')
    this.currentWord.push(letter);
  },
  reset(){
    console.log('reset', this.currentWord)
     this.currentWord = [];
  }
}