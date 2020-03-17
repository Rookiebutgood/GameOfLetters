(function(e){function t(t){for(var s,i,a=t[0],c=t[1],l=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},n={app:0},o=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01d6":function(e,t,r){"use strict";var s=r("2909"),n=r.n(s);n.a},"04cd":function(e,t,r){},"1e92":function(e,t,r){"use strict";var s=r("04cd"),n=r.n(s);n.a},2909:function(e,t,r){},"560a":function(e,t,r){"use strict";var s=r("8c3e"),n=r.n(s);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s,n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Game"),r("Message"),r("RecordTable")],1)},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("div",{staticClass:"game__timer"},[r("Timer")],1),r("div",{staticClass:"game__output"},[r("WordCells",{attrs:{word:e.word}})],1),r("div",{staticClass:"game__input"},[r("LetterTile",{attrs:{shuffleWord:e.shuffleWord}})],1),r("div",{staticClass:"game__reset"},[r("button",{staticClass:"game__reset-button button",on:{click:e.resetWord}},[e._v("Сброс")])])])},c=[],l=(r("a15b"),r("ac1f"),r("1276"),r("99af"),r("caad"),r("b0c0"),r("2532"),r("bc3a")),u=r.n(l);function d(e,t){return Math.floor(Math.random()*(t-e))+e}var f={alreadyUsedNumbers:[],currentWord:[],word:"",recordTable:[],time:0,isRecordsVisible:!1,isMessageVisible:!1,isGameActive:!0,hiddenLetters:[],startGame:function(){var e=this;e.isMessageVisible=!1,e.isGameActive=!0,e.time=0;var t=d(2,1369);u.a.get("https://apidir.pfdo.ru/v1/directory-program-activities/".concat(t)).then((function(r){"FLSCS"!==r.data.result_code||e.alreadyUsedNumbers.includes(t)?e.startGame():(e.alreadyUsedNumbers.push(t),e.word=r.data.data.name.toUpperCase(),console.log("Подсказка:",e.word),f.startTimer())})).catch((function(e){console.log(e)}))},setWord:function(e){this.currentWord.push(e)},resetWord:function(){this.currentWord=[],this.hiddenLetters=[]},startTimer:function(){var e=this;s=setInterval((function(){e.isGameActive&&e.time++}),1e3)},resetTimer:function(){this.time=0,this.isGameActive=!1,clearInterval(s)},addTableRecord:function(e){var t=e.time,r=Math.floor(t/60),s=t%60,n="".concat(r,":").concat(s),o={index:this.recordTable.length+1,word:e.word,time:n};this.recordTable.push(o)},showMessage:function(){this.isMessageVisible=!0},sortRecords:function(e){f.recordTable.sort((function(t,r){if(!(t[e]>r[e]))return t[e]<r[e]?-1:0}))},gameOver:function(){this.time=0,this.isRecordsVisible=!0,this.isMessageVisible=!1}},_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"letter-tiles"},e._l(e.shuffleWord,(function(t,s){return r("button",{key:s,staticClass:"letter-tiles__tile button",class:{"letter-tiles__tile_hide":e.store.hiddenLetters.includes(s)},on:{click:function(r){return e.enterLetter(t,s)}}},[e._v(e._s(t))])})),0)},m=[],p={name:"LetterTile",props:["shuffleWord"],data:function(){return{store:f}},methods:{enterLetter:function(e,t){f.hiddenLetters.push(t),f.setWord(e)}}},b=p,v=(r("d32e"),r("2877")),h=Object(v["a"])(b,_,m,!1,null,null,null),g=h.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"word-cells"},e._l(e.word,(function(t,s){return r("div",{key:s,staticClass:"word-cells__cell"},[e._v(e._s(e.inputLetters[s]))])})),0)},C=[],y={name:"WordCells",props:["word"],computed:{inputLetters:function(){return f.currentWord}},watch:{inputLetters:function(){var e=this.inputLetters.join("");e==this.word&&(f.addTableRecord({word:this.word,time:f.time}),f.showMessage(),f.resetTimer(),f.resetWord())}}},T=y,O=(r("6c73"),Object(v["a"])(T,w,C,!1,null,null,null)),M=O.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"timer"},[e._v(e._s(e.time.minutes)+":"+e._s(e.time.seconds))])},j=[],x={name:"Timer",computed:{time:function(){var e=f.time,t=Math.floor(e/60),r=e%60;return{minutes:t,seconds:r}}}},L=x,k=(r("1e92"),Object(v["a"])(L,W,j,!1,null,null,null)),G=k.exports,R={name:"Game",components:{LetterTile:g,WordCells:M,Timer:G},computed:{word:function(){return f.word},shuffleWord:function(){for(var e=this.word.split(""),t=e.length,r=t-1;r>0;r--){var s=Math.floor(Math.random()*(r+1)),n=e[r];e[r]=e[s],e[s]=n}return e.join("")}},methods:{resetWord:function(){return f.resetWord()}}},V=R,$=(r("bb9a"),Object(v["a"])(V,a,c,!1,null,null,null)),E=$.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message popup",class:{popup_visible:e.store.isMessageVisible}},[r("h2",{staticClass:"message__title popup__title"},[e._v("Вы выиграли! Повторить?")]),r("div",{staticClass:"message__actions"},[r("button",{staticClass:"message__button_continue popup__button",on:{click:e.startNewGame}},[e._v("Конечно!")]),r("button",{staticClass:"message__button_gameover popup__button",on:{click:e.gameOver}},[e._v("Я уже устал")])])])},S=[],N={name:"Message",data:function(){return{store:f}},methods:{startNewGame:function(){f.startGame()},gameOver:function(){f.gameOver()}}},A=N,U=(r("560a"),Object(v["a"])(A,P,S,!1,null,null,null)),I=U.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"record-table popup",class:{popup_visible:e.store.isRecordsVisible}},[r("h2",{staticClass:"record-table__title popup__title"},[e._v("Таблица результатов")]),r("div",{staticClass:"record-table__header record-table__row"},[r("div",{staticClass:"record-table__header-item record-table__cell",on:{click:function(t){return e.sort("word")}}},[e._v("№")]),r("div",{staticClass:"record-table__header-item record-table__cell",on:{click:function(t){return e.sort("word")}}},[e._v("Слово")]),r("div",{staticClass:"record-table__header-item record-table__cell",on:{click:function(t){return e.sort("time")}}},[e._v("Время")])]),r("div",{staticClass:"record-table__body"},e._l(e.store.recordTable,(function(t,s){return r("div",{key:s,staticClass:"record-table__item record-table__row"},[r("div",{staticClass:"record-table__item-number record-table__cell"},[e._v(e._s(s+1))]),r("div",{staticClass:"record-table__item-word record-table__cell"},[e._v(e._s(t.word))]),r("div",{staticClass:"record-table__item-time record-table__cell"},[e._v(e._s(t.time))])])})),0)])},F=[],q={name:"RecordTable",data:function(){return{store:f}},methods:{sort:function(e){f.sortRecords(e)}}},z=q,B=(r("01d6"),Object(v["a"])(z,J,F,!1,null,null,null)),D=B.exports,H={name:"App",components:{Game:E,Message:I,RecordTable:D},data:function(){return{alreadyUsedNumbers:[],store:f,word:"слово"}},mounted:function(){f.startGame()}},K=H,Q=(r("5c0b"),Object(v["a"])(K,o,i,!1,null,null,null)),X=Q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},"6c73":function(e,t,r){"use strict";var s=r("dc0f"),n=r.n(s);n.a},"8c3e":function(e,t,r){},"9c0c":function(e,t,r){},bb9a:function(e,t,r){"use strict";var s=r("cbc5"),n=r.n(s);n.a},cbc5:function(e,t,r){},d32e:function(e,t,r){"use strict";var s=r("ec88"),n=r.n(s);n.a},dc0f:function(e,t,r){},ec88:function(e,t,r){}});
//# sourceMappingURL=app.c2ef57f5.js.map