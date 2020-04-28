(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GameID"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['points', 'status', 'game'],
  data: function data() {
    return {
      dialog: true
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['setGameTetrisOff']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('memoria', ['setGameMemoriaOff']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('trivia', ['setGameTriviaOff']), {
    getOut: function getOut() {
      this.dialog = false;

      switch (this.game) {
        case '1':
          break;

        case '2':
          this.setGameMemoriaOff();
          break;

        case '3':
          this.setGameTriviaOff();
          break;
      }
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['reportDialog']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_MemoriaGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MemoriaGame */ "./resources/js/components/ui/src/components/MemoriaGame.vue");
/* harmony import */ var _components_SelectLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SelectLevel */ "./resources/js/components/ui/src/components/SelectLevel.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      game: false,
      cantidad: 0
    };
  },
  components: {
    MemoriaGame: _components_MemoriaGame__WEBPACK_IMPORTED_MODULE_1__["default"],
    SelectLevel: _components_SelectLevel__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('memoria', ["setGameMemoriaOn", "setGameMemoriaOff"])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('memoria', ["gameMemoria"])),
  beforeMount: function beforeMount() {
    this.setGameMemoriaOff;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_GameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameOver */ "./resources/js/components/ui/src/components/GameOver.vue");
/* harmony import */ var _components_CartaMemoria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CartaMemoria */ "./resources/js/components/ui/src/components/CartaMemoria.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Vidas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Vidas */ "./resources/js/components/ui/src/components/Vidas.vue");
/* harmony import */ var _components_TimeBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeBar */ "./resources/js/components/ui/src/components/TimeBar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      elemets: [],
      cartas: [],
      time: 0,
      timeColor: "green darken-2",
      game: false,
      cardsActive: 0,
      anterior: null,
      difTime: 1.6666,
      gameOv: false,
      puntos: 0,
      status: false,
      cantCartas: 10,
      contadorCartas: 0
    };
  },
  components: {
    CartaMemoria: _components_CartaMemoria__WEBPACK_IMPORTED_MODULE_3__["default"],
    Vidas: _components_Vidas__WEBPACK_IMPORTED_MODULE_5__["default"],
    TimeBar: _components_TimeBar__WEBPACK_IMPORTED_MODULE_6__["default"],
    GameOver: _components_GameOver__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    console.log(this.levelMemoria - 1);
    this.getCards();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('memoria', ["setGameMemoriaOn", "setGameMemoriaOff"]), {
    getCards: function () {
      var _getCards = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/partida/store', {
                  idJuego: 2,
                  idUsuario: -1,
                  nivel: this.levelMemoria,
                  puntos: 0
                });

              case 2:
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/memorama/elementos').then(function (response) {
                  console.log(response.data);
                  _this.elemets = _this.chargeNElements(response.data);

                  _this.elemets.forEach(function (e) {
                    return e.state = false;
                  });

                  _this.begin();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCards() {
        return _getCards.apply(this, arguments);
      }

      return getCards;
    }(),
    chargeNElements: function chargeNElements(arr) {
      var result = [];
      var l = this.levelMemoria - 1;

      switch (l) {
        case 0:
          result = arr.filter(function (d) {
            return d.groupBlock == 'noble gas';
          });
          this.cantCartas = 6;
          return result;
          break;

        case 1:
          result = arr.filter(function (d) {
            return d.groupBlock == 'metalloid';
          });
          this.cantCartas = 7;
          return result;
          break;

        case 2:
          result = arr.filter(function (d) {
            return d.groupBlock == 'alkaline earth metal' || d.groupBlock == 'alkali metal';
          });
          this.cantCartas = 12;
          return result;

        case 3:
          var mel = arr.filter(function (d) {
            return d.groupBlock == 'transition metal';
          });
          var n = 0;

          while (n < 15) {
            var x = Math.floor(Math.random() * arr.length);

            if (result.indexOf(mel[x]) == -1) {
              result.push(mel[x]);
              n--;
            }
          }

          this.cantCartas = 15;
          return result;
          break;

        case 4:
          var n = 0;

          while (n < 20) {
            var x = Math.floor(Math.random() * arr.length);

            if (result.indexOf(arr[x]) == -1) {
              result.push(arr[x]);
              n--;
            }
          }

          this.cantCartas = 20;
          return result;
          break;
      }
    },
    //Se cargan los elementos traidos desde el BACK y se crea un arreglo con cada dato dos veces
    begin: function begin() {
      try {
        this.cartas = [];

        for (var i = 0; i < this.elemets.length; i++) {
          this.cartas.push({
            info: this.elemets[i],
            activa: false,
            id: i
          });
          this.cartas.push({
            info: this.elemets[i],
            activa: false,
            id: i + this.cantCartas
          });
        }

        this.shuffle(this.cartas);
      } catch (error) {
        console.log(error);
      }
    },
    //Empieza el juego
    startGameButton: function startGameButton() {
      //this.flipAllCards();
      this.flipAllCards();
      setTimeout(this.coverAllCards, 3000);
      setTimeout(this.oneSecond, 3000);
      setTimeout(this.enableGame, 3000); //this.oneSecond();
    },
    flipAllCards: function flipAllCards() {
      this.cartas.forEach(function (e) {
        e.activa = true;
      });
    },
    coverAllCards: function coverAllCards() {
      this.cartas.forEach(function (e) {
        if (!e.info.state) e.activa = false;
      });
    },
    enableGame: function enableGame() {
      this.game = true;
    },
    resetCards: function resetCards() {
      this.cardsActive = 0;
    },
    shuffle: function shuffle(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [a[j], a[i]];
        a[i] = _ref[0];
        a[j] = _ref[1];
      }

      return a;
    },
    flipCard: function flipCard(item) {
      if (this.game && !item.info.state && this.cardsActive != 2) {
        if (this.cardsActive == 0 && this.anterior != item) {
          this.anterior = item;
          item.activa = true;
          this.cardsActive = 1;
        } else if (this.cardsActive == 1 && this.anterior != item) {
          item.activa = true;
          this.cardsActive = 2;

          if (this.anterior.info.symbol == item.info.symbol) {
            // SI SI
            item.info.state = true;
            this.anterior.info.state = true;
            this.resetCards();
            this.contadorCartas++;
            this.puntos += Math.trunc(100 - this.time);
          } else {
            // SI NO
            setTimeout(this.coverAllCards, 500);
            setTimeout(this.resetCards, 500);
          }

          setTimeout(this.enableGame, 500);
        }
      }
    },
    gameEnded: function () {
      var _gameEnded = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.game = false;
                this.gameOv = true;
                clearInterval(this.interval);
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('partida/update/2', {
                  puntos: this.puntos,
                  nivel: this.levelMemoria,
                  estado: this.status,
                  progreso: Math.trunc(this.contadorCartas * 100 / this.elemets.length)
                }).then(function (e) {
                  return console.log('SUCCESS');
                })["catch"](function (e) {
                  console.log('ERROR');
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function gameEnded() {
        return _gameEnded.apply(this, arguments);
      }

      return gameEnded;
    }(),
    //Funciones que llevan el tiempo
    oneSecond: function oneSecond() {
      this.interval = setInterval(this.timer, 1000);
    },
    timer: function timer() {
      this.time += this.difTime;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('memoria', ["gameMemoria", "levelMemoria"])),
  watch: {
    time: function time(newTime) {
      if (newTime > 60) {
        this.timeColor = "amber darken-2";
      }

      if (newTime > 80) {
        this.timeColor = "red darken-3";
      }

      if (newTime >= 100) {
        this.gameEnded();
      }
    },
    contadorCartas: function contadorCartas(cc) {
      if (cc >= this.elemets.length) {
        this.status = true;
        this.gameEnded();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["game"],
  data: function data() {
    return {
      levels: []
    };
  },
  created: function created() {
    switch (this.game) {
      case "2":
        this.updateLevelDataMM();
        this.levels = this.nivelesMM;
        break;

      case "3":
        this.updateLevelDataTR();
        this.levels = this.nivelesTR;
        break;

      case "1":
        this.setGameTetrisOn();
        break;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('memoria', ['nivelesMM']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('trivia', ['nivelesTR'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["setGameTetrisOn"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('memoria', ['setGameMemoriaOn', 'setLevelMemoria']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('memoria', ['updateLevelDataMM']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('trivia', ['setGameTriviaOn', 'setLevelTrivia']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('trivia', ['updateLevelDataTR']), {
    /*     getProgress: async function(){
          await axios.get('/partida/all',{
             headers: {
               'X-Requested-With': 'XMLHttpRequest',
               'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
             }
            }).then(d => {
              const progress = d.data.filter(e => e.idJuego == this.game)
              for (let i = 0; i < progress.length; i++) {
                this.datosNivel[i].progreso = progress[i].puntos;
                this.datosNivel[i+1].status = progress[i].estado;
              }
              console.log(this.datosNivel)
            })
        }, */
    beginGame: function beginGame(dificultad) {
      switch (this.game) {
        case "2":
          this.setGameMemoriaOn();
          this.setLevelMemoria(dificultad);
          break;

        case "3":
          this.setGameTriviaOn();
          this.setLevelTrivia(dificultad);
          break;

        case "1":
          this.setGameTetrisOn();
          break;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SelectLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SelectLevel */ "./resources/js/components/ui/src/components/SelectLevel.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SelectLevel: _components_SelectLevel__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      niveles: [{
        progreso: 100,
        nombre: "Nuevo ingreso",
        icon: "mdi-account-tie",
        color: "red lighten-2",
        dificultad: 4,
        status: true
      }, {
        progreso: 0,
        nombre: "Probador de probetas",
        icon: "mdi-test-tube",
        color: "red lighten-2",
        dificultad: 8,
        status: true
      }, {
        progreso: 0,
        nombre: "pH-rofesional",
        icon: "mdi-beaker",
        color: "red lighten-1",
        dificultad: 12,
        status: false
      }, {
        progreso: 0,
        nombre: "Antoine Lavoisier",
        icon: "mdi-atom",
        color: "red darken-1",
        dificultad: 16,
        status: false
      }, {
        progreso: 0,
        nombre: "Michael Faraday",
        icon: "mdi-radioactive",
        color: "red darken-2",
        dificultad: 20,
        status: false
      }] //Estos datos deben venir de la base de datos:

    };
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["time", "color"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SelectLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SelectLevel */ "./resources/js/components/ui/src/components/SelectLevel.vue");
/* harmony import */ var _components_TriviaGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TriviaGame */ "./resources/js/components/ui/src/components/TriviaGame.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SelectLevel: _components_SelectLevel__WEBPACK_IMPORTED_MODULE_0__["default"],
    TriviaGame: _components_TriviaGame__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('trivia', ["gameTrivia"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Vidas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Vidas */ "./resources/js/components/ui/src/components/Vidas.vue");
/* harmony import */ var _components_TimeBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TimeBar */ "./resources/js/components/ui/src/components/TimeBar.vue");
/* harmony import */ var _components_GameOver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameOver */ "./resources/js/components/ui/src/components/GameOver.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: "",
      questions: [],
      pregunta: {},
      answerOp: [],
      message: "",
      progreso: 0,
      actual: null,
      lifes: 3,
      time: 0,
      interval: null,
      gameO: false,
      status: false,
      puntos: 0
    };
  },
  components: {
    Vidas: _components_Vidas__WEBPACK_IMPORTED_MODULE_2__["default"],
    TimeBar: _components_TimeBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    GameOver: _components_GameOver__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  created: function created() {
    this.init();
    this.getQuestion();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('trivia', ['levelTrivia'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('trivia', ["setGameTriviaOn", "setGameTriviaOff"]), {
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/partida/store', {
                  idJuego: 3,
                  idUsuario: -1,
                  nivel: this.levelTrivia,
                  puntos: 0
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    getQuestion: function () {
      var _getQuestion = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/trivia/respuestas').then(function (response) {
                  var perguntasLevel = response.data.filter(function (d) {
                    return d.pregunta.nivel == _this.levelTrivia;
                  });
                  _this.questions = _this.shuffle(perguntasLevel);
                  _this.actual = 0;

                  _this.newQuestion();

                  _this.oneSecond();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
                console.log(this.questions);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getQuestion() {
        return _getQuestion.apply(this, arguments);
      }

      return getQuestion;
    }(),
    newQuestion: function newQuestion() {
      var _this2 = this;

      var i = 0;
      this.answerOp = [];
      this.pregunta = this.questions[this.actual];
      this.title = this.pregunta.pregunta.pregunta;
      this.answerOp.push({
        id: this.pregunta.pregunta.id,
        respuesta: this.pregunta.respuesta
      });

      var _loop = function _loop() {
        var aux = Math.trunc(Math.random() * _this2.questions.length);

        if (!_this2.answerOp.find(function (e) {
          return e.id == _this2.questions[aux].id;
        })) {
          _this2.answerOp.push({
            id: _this2.questions[aux].idPregunta,
            respuesta: _this2.questions[aux].respuesta
          });

          i++;
        }
      };

      do {
        _loop();
      } while (i < 3);

      this.shuffle(this.answerOp);
    },
    resetGame: function resetGame() {
      this.lifes = 3;
      this.progreso = 0;
      this.time = 0;
    },
    responder: function responder(question, answer) {
      if (question.idPregunta == answer.id) {
        this.next();
      } else {
        this.lifes--;
        this.message = "INCORRECTO";
      }
    },
    reset: function reset() {
      this.progreso = 0;
      this.message = "";
    },
    next: function next() {
      this.puntos += 100 - this.time;
      this.progreso += 10;
      this.actual++;
      this.time = 0;
      this.message = "CORRECTO";
      if (this.progreso < 100) this.newQuestion();
    },
    oneSecond: function oneSecond() {
      this.interval = setInterval(this.timer, 1000);
    },
    timer: function timer() {
      this.time += 10;
    },
    gameEnded: function () {
      var _gameEnded = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.gameO = true;
                clearInterval(this.interval);
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('partida/update/3', {
                  puntos: this.puntos,
                  nivel: this.levelTrivia,
                  estado: this.status,
                  progreso: this.actual * 10
                }).then(function (e) {
                  return console.log('SUCCESS');
                })["catch"](function (e) {
                  console.log('ERROR');
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function gameEnded() {
        return _gameEnded.apply(this, arguments);
      }

      return gameEnded;
    }(),
    shuffle: function shuffle(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [a[j], a[i]];
        a[i] = _ref[0];
        a[j] = _ref[1];
      }

      return a;
    }
  }),
  watch: {
    progreso: function progreso(newProgress) {
      if (newProgress >= 100) {
        this.status = true;
        this.gameEnded();
      }
    },
    time: function time(newTime) {
      if (newTime >= 100) {
        this.gameEnded();
      }
    },
    lifes: function lifes(life) {
      if (life <= 0) {
        this.gameEnded();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["cantVidas"],
  data: function data() {
    return {};
  },
  created: function created() {
    console.log(this.cantVidas);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tetris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Tetris */ "./resources/js/components/ui/src/components/Tetris.vue");
/* harmony import */ var _components_Memoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Memoria */ "./resources/js/components/ui/src/components/Memoria.vue");
/* harmony import */ var _components_Trivia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Trivia */ "./resources/js/components/ui/src/components/Trivia.vue");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Game',
  components: {
    'tetris': _components_Tetris__WEBPACK_IMPORTED_MODULE_0__["default"],
    'memoria': _components_Memoria__WEBPACK_IMPORTED_MODULE_1__["default"],
    'trivia': _components_Trivia__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      gameLoaded: this.$route.params.id
    };
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.carta[data-v-7c384f34] {\r\n  margin: 20px;\r\n  border-radius: 5px;\r\n  border: 1px solid darkgray;\r\n  max-width: 150px;\r\n  min-width: 130px;\r\n  min-height: 210px;\n}\n.btn-game[data-v-7c384f34]{\r\n  margin: 0 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.answer-option[data-v-d7cc841a] {\r\n  margin: 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid darkgray;\r\n  background-color: lightblue;\r\n  max-width: 170px;\r\n  min-width: 130px;\r\n  min-height: 200px;\n}\n.answer-option[data-v-d7cc841a]:hover {\r\n  background-color: yellow;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.item.activa
    ? _c("div", [
        _c("p", [_vm._v(_vm._s(_vm.item.info.atomicNumber))]),
        _vm._v(" "),
        _c("p", { staticClass: "text-center display-1" }, [
          _vm._v(_vm._s(_vm.item.info.symbol))
        ]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.item.info.name))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.item.info.atomicMass))])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "400" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        { staticClass: "mx-auto", attrs: { "max-width": "400" } },
        [
          _c(
            "v-img",
            {
              staticClass: "white--text align-end",
              attrs: {
                height: "200px",
                src: _vm.status
                  ? __webpack_require__(/*! ../assets/win.jpg */ "./resources/js/components/ui/src/assets/win.jpg")
                  : __webpack_require__(/*! ../assets/gameOver.jpg */ "./resources/js/components/ui/src/assets/gameOver.jpg")
              }
            },
            [_c("v-card-title", [_vm._v("\n            GAME OVER\n        ")])],
            1
          ),
          _vm._v(" "),
          _vm.status
            ? _c("v-card-subtitle", [
                _vm._v("Felicidades! Has superado este nivel.")
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.status
            ? _c("v-card-subtitle", [
                _vm._v(
                  "Salsa tartara! Has fracasado este nivel 😢 intentalo de nuevo."
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v("\n          Puntuación: " + _vm._s(_vm.points) + "\n      ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "justify-end" },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.getOut }
                },
                [_vm._v("Salir")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("v-row", { attrs: { align: "center", justify: "center" } }, [
        _c(
          "h1",
          { staticClass: "display-2", staticStyle: { color: "#90A4AE" } },
          [_vm._v("MEMORIA")]
        )
      ]),
      _vm._v(" "),
      !_vm.gameMemoria
        ? _c("select-level", { attrs: { game: "2" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.gameMemoria ? _c("memoria-game") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _vm.game
        ? _c("time-bar", { attrs: { time: _vm.time, color: _vm.timeColor } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticStyle: { "margin-top": "4%" },
          attrs: { align: "center", justify: "center" }
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "btn-game",
              attrs: { fab: "", color: "primary" },
              on: { click: _vm.startGameButton }
            },
            [_c("v-icon", [_vm._v("mdi-play")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "btn-game",
              attrs: { fab: "", color: "error" },
              on: { click: _vm.setGameMemoriaOff }
            },
            [_c("v-icon", [_vm._v("mdi-backspace")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        _vm._l(_vm.cartas, function(item, i) {
          return _c(
            "v-col",
            {
              key: i,
              staticClass: "carta",
              style: [
                item.activa
                  ? { background: "#" + item.info.cpkHexColor }
                  : { background: "black" }
              ],
              attrs: { cols: "4", sm: "2" },
              on: {
                click: function($event) {
                  return _vm.flipCard(item)
                }
              }
            },
            [_c("carta-memoria", { attrs: { item: item } })],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _vm.gameOv
        ? _c("GameOver", {
            attrs: { points: _vm.puntos, status: _vm.status, game: "2" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", "offset-sm": "3" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-list",
                    [
                      _c("v-subheader", [_vm._v("Niveles:")]),
                      _vm._v(" "),
                      _vm._l(_vm.levels, function(item, i) {
                        return _c(
                          "div",
                          { key: i },
                          [
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-list-item",
                              {
                                attrs: { disabled: !item.status },
                                on: {
                                  click: function($event) {
                                    return _vm.beginGame(item.dificultad)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-list-item-icon",
                                  [
                                    _c("v-icon", {
                                      domProps: {
                                        textContent: _vm._s(item.icon)
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(_vm._s(item.nombre))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-progress-circular", {
                                  attrs: {
                                    value: item.progreso,
                                    rotate: "260",
                                    color: item.color
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("v-row", { attrs: { align: "center", justify: "center" } }, [
        _c(
          "h1",
          { staticClass: "display-2", staticStyle: { color: "#90A4AE" } },
          [_vm._v("TETRIS")]
        )
      ]),
      _vm._v(" "),
      _c("select-level", { attrs: { levels: _vm.niveles, game: "1" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { align: "center", justify: "center" } },
    [
      _c("v-progress-linear", {
        staticStyle: { "max-width": "800px" },
        attrs: {
          value: _vm.time,
          rounded: "",
          height: "10px",
          stream: "",
          "buffer-value": _vm.time,
          color: _vm.color
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticStyle: { margin: "0 30px" } },
    [
      _c("v-row", { attrs: { align: "center", justify: "center" } }, [
        _c(
          "h1",
          { staticClass: "display-2", staticStyle: { color: "#E57373" } },
          [_vm._v("TRIVIA")]
        )
      ]),
      _vm._v(" "),
      !_vm.gameTrivia ? _c("select-level", { attrs: { game: "3" } }) : _vm._e(),
      _vm._v(" "),
      _vm.gameTrivia ? _c("trivia-game") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("vidas", { attrs: { cantVidas: _vm.lifes } }),
      _vm._v(" "),
      _c("v-row", { attrs: { align: "center", justify: "center" } }, [
        _c("h2", [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticStyle: { margin: "50px 0" },
          attrs: { align: "center", justify: "center" }
        },
        _vm._l(_vm.answerOp, function(item, i) {
          return _c(
            "v-col",
            {
              key: i,
              staticClass: "answer-option",
              attrs: { cols: "4" },
              on: {
                click: function($event) {
                  return _vm.responder(_vm.pregunta, item)
                }
              }
            },
            [
              _c(
                "p",
                {
                  staticClass: "text-center",
                  staticStyle: { "margin-top": "70px" }
                },
                [_vm._v(_vm._s(item.respuesta))]
              )
            ]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("time-bar", { attrs: { time: _vm.time } }),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-5", attrs: { align: "center", justify: "center" } },
        [_c("h3", [_vm._v(_vm._s(_vm.message))])]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c("v-progress-linear", {
            staticStyle: { "max-width": "800px" },
            attrs: { value: _vm.progreso, rounded: "", height: "10px" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticStyle: { "margin-top": "4%" },
          attrs: { align: "center", justify: "center" }
        },
        [
          _c(
            "v-btn",
            { attrs: { color: "danger" }, on: { click: _vm.setGameTriviaOff } },
            [_vm._v("Salir")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.gameO
        ? _c("GameOver", {
            attrs: { points: _vm.puntos, status: _vm.status, game: "3" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-row",
        { attrs: { justify: "end" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "10", md: "3", lg: "3" } },
            [
              _c("v-row", [
                _c("h4", { staticClass: "text-center" }, [_vm._v("Vidas")])
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _vm.cantVidas > 0
                        ? _c("v-icon", { attrs: { color: "teal darken-2" } }, [
                            _vm._v("mdi-test-tube")
                          ])
                        : _c("v-icon", [_vm._v("mdi-test-tube-empty")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _vm.cantVidas > 1
                        ? _c("v-icon", { attrs: { color: "teal darken-2" } }, [
                            _vm._v("mdi-test-tube")
                          ])
                        : _c("v-icon", [_vm._v("mdi-test-tube-empty")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _vm.cantVidas > 2
                        ? _c("v-icon", { attrs: { color: "teal darken-2" } }, [
                            _vm._v("mdi-test-tube")
                          ])
                        : _c("v-icon", [_vm._v("mdi-test-tube-empty")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.gameLoaded, { tag: "v-container" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ui/src/assets/gameOver.jpg":
/*!************************************************************!*\
  !*** ./resources/js/components/ui/src/assets/gameOver.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/gameOver.jpg?54209937894bffe00bd2d8df16d492a7";

/***/ }),

/***/ "./resources/js/components/ui/src/assets/win.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/components/ui/src/assets/win.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/win.jpg?d069dc2f698441bcb54bed88301a0361";

/***/ }),

/***/ "./resources/js/components/ui/src/components/CartaMemoria.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/ui/src/components/CartaMemoria.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartaMemoria.vue?vue&type=template&id=a535f926& */ "./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926&");
/* harmony import */ var _CartaMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartaMemoria.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartaMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/CartaMemoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartaMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartaMemoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartaMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartaMemoria.vue?vue&type=template&id=a535f926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/CartaMemoria.vue?vue&type=template&id=a535f926&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartaMemoria_vue_vue_type_template_id_a535f926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/GameOver.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ui/src/components/GameOver.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameOver.vue?vue&type=template&id=e03b9c78& */ "./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78&");
/* harmony import */ var _GameOver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameOver.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GameOver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/GameOver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameOver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GameOver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/GameOver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameOver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GameOver.vue?vue&type=template&id=e03b9c78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/GameOver.vue?vue&type=template&id=e03b9c78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameOver_vue_vue_type_template_id_e03b9c78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/Memoria.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Memoria.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Memoria.vue?vue&type=template&id=7e9585bc& */ "./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc&");
/* harmony import */ var _Memoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Memoria.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Memoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Memoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Memoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Memoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Memoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Memoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Memoria.vue?vue&type=template&id=7e9585bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Memoria.vue?vue&type=template&id=7e9585bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Memoria_vue_vue_type_template_id_7e9585bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/MemoriaGame.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/ui/src/components/MemoriaGame.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true& */ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true&");
/* harmony import */ var _MemoriaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoriaGame.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& */ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MemoriaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c384f34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/MemoriaGame.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemoriaGame.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=style&index=0&id=7c384f34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_style_index_0_id_7c384f34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/MemoriaGame.vue?vue&type=template&id=7c384f34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemoriaGame_vue_vue_type_template_id_7c384f34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/SelectLevel.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/ui/src/components/SelectLevel.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectLevel.vue?vue&type=template&id=6e0f967a& */ "./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a&");
/* harmony import */ var _SelectLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectLevel.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/SelectLevel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectLevel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectLevel.vue?vue&type=template&id=6e0f967a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/SelectLevel.vue?vue&type=template&id=6e0f967a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectLevel_vue_vue_type_template_id_6e0f967a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/Tetris.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Tetris.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tetris.vue?vue&type=template&id=4479e7f7&scoped=true& */ "./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true&");
/* harmony import */ var _Tetris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tetris.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tetris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4479e7f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Tetris.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tetris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tetris.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Tetris.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tetris_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tetris.vue?vue&type=template&id=4479e7f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Tetris.vue?vue&type=template&id=4479e7f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tetris_vue_vue_type_template_id_4479e7f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/TimeBar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TimeBar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeBar.vue?vue&type=template&id=c5245ad0& */ "./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0&");
/* harmony import */ var _TimeBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeBar.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimeBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/TimeBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimeBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimeBar.vue?vue&type=template&id=c5245ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TimeBar.vue?vue&type=template&id=c5245ad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBar_vue_vue_type_template_id_c5245ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/Trivia.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Trivia.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trivia.vue?vue&type=template&id=27e1e361& */ "./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361&");
/* harmony import */ var _Trivia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trivia.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Trivia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Trivia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trivia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trivia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Trivia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trivia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trivia.vue?vue&type=template&id=27e1e361& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Trivia.vue?vue&type=template&id=27e1e361&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trivia_vue_vue_type_template_id_27e1e361___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/TriviaGame.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TriviaGame.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true& */ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true&");
/* harmony import */ var _TriviaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriviaGame.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& */ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TriviaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7cc841a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/TriviaGame.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TriviaGame.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=style&index=0&id=d7cc841a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_style_index_0_id_d7cc841a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/TriviaGame.vue?vue&type=template&id=d7cc841a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TriviaGame_vue_vue_type_template_id_d7cc841a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/Vidas.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Vidas.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vidas.vue?vue&type=template&id=de5016d6& */ "./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6&");
/* harmony import */ var _Vidas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vidas.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Vidas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Vidas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vidas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Vidas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Vidas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vidas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Vidas.vue?vue&type=template&id=de5016d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Vidas.vue?vue&type=template&id=de5016d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vidas_vue_vue_type_template_id_de5016d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/views/Game.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ui/src/views/Game.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=a1324c84& */ "./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84&");
/* harmony import */ var _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/views/Game.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Game.vue?vue&type=template&id=a1324c84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Game.vue?vue&type=template&id=a1324c84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_a1324c84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);