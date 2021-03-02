(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Options"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./resources/js/components/ui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services */ "./resources/js/components/ui/utils/services.js");
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
      games: ["Memoría", "Tetris", "Trivia"],
      selectedGame: null,
      message: null
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['changeReport']), {
    sentReport: function sentReport() {
      var _this = this;

      Object(_utils_services__WEBPACK_IMPORTED_MODULE_1__["reportStore"])({
        //Usuario probicional equisde
        idUsuario: 1,
        juego: this.selectedGame,
        mensaje: this.message
      }).then(function () {
        _this.changeReport();
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['reportDialog']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./resources/js/components/ui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services */ "./resources/js/components/ui/utils/services.js");
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
  data: function data() {
    return {
      dialog: true,
      passNew: null,
      passOld: null,
      snack: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["changeChanges"]), {
    cambiarData: function cambiarData() {
      var _this = this;

      if (this.$refs.form.validate()) {
        Object(_utils_services__WEBPACK_IMPORTED_MODULE_1__["resetPassword"])({
          actual: this.passOld,
          nueva: this.passNew
        }).then(function () {
          _this.changeChanges;
          window.location.href = '/';
          location.reload();
        })["catch"](this.snack = true);
      }
    }
  }),
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./resources/js/components/ui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services */ "./resources/js/components/ui/utils/services.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./resources/js/components/ui/node_modules/vuex/dist/vuex.esm.js");
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
  props: ['ruta'],
  data: function data() {
    return {
      dialog: true,
      snack: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])(['changeWarning']), {
    aceptar: function aceptar() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_utils_services__WEBPACK_IMPORTED_MODULE_1__["url"] + this.ruta.replace("/", '')).then(function () {
        window.location.href = '/';
        location.reload();
      })["catch"](this.snack = true);
    }
  }),
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Report */ "./resources/js/components/ui/src/components/Report.vue");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Warning */ "./resources/js/components/ui/src/components/Warning.vue");
/* harmony import */ var _components_UpdateData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpdateData */ "./resources/js/components/ui/src/components/UpdateData.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./resources/js/components/ui/node_modules/vuex/dist/vuex.esm.js");
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
  components: {
    Report: _components_Report__WEBPACK_IMPORTED_MODULE_0__["default"],
    Warning: _components_Warning__WEBPACK_IMPORTED_MODULE_1__["default"],
    Update: _components_UpdateData__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      settings: [],
      dialog: false,
      addReport: false,
      ruta: null
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])(['changeReport', 'changeWarning', 'changeChanges']), {
    eraseData: function eraseData() {
      this.ruta = '/partida/delete';
      this.changeWarning();
    },
    deleteData: function deleteData() {
      this.ruta = '/user/delete';
      this.changeWarning();
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])(['reportDialog', 'warningDialog', 'changesDialog']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592& ***!
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600px" },
      model: {
        value: _vm.reportDialog,
        callback: function($$v) {
          _vm.reportDialog = $$v
        },
        expression: "reportDialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Reportar Error")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.games,
                              label: "Seleccionar Juego*",
                              rules: [
                                function() {
                                  return (
                                    !!_vm.selectedGame ||
                                    "Este campo es obligatorio."
                                  )
                                }
                              ]
                            },
                            model: {
                              value: _vm.selectedGame,
                              callback: function($$v) {
                                _vm.selectedGame = $$v
                              },
                              expression: "selectedGame"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-textarea",
                            {
                              attrs: {
                                label: "Describir error*",
                                "no-resize": "",
                                rules: [
                                  function() {
                                    return (
                                      !!_vm.message ||
                                      "Este campo es obligatorio."
                                    )
                                  }
                                ]
                              },
                              model: {
                                value: _vm.message,
                                callback: function($$v) {
                                  _vm.message = $$v
                                },
                                expression: "message"
                              }
                            },
                            [_vm._v("\n              >")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", [_vm._v("*Campos obligatorios")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6" } },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.changeReport()
                                }
                              }
                            },
                            [_vm._v("Cancelar")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: { click: _vm.sentReport }
                            },
                            [_vm._v("Enviar")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
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
            [
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Actualizad datos")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nueva contraseña",
                                      type: "password",
                                      rules: [
                                        function() {
                                          return (
                                            (!!_vm.passNew &&
                                              _vm.passNew.length > 8) ||
                                            "Ingrese una contraseña valida."
                                          )
                                        }
                                      ]
                                    },
                                    model: {
                                      value: _vm.passNew,
                                      callback: function($$v) {
                                        _vm.passNew = $$v
                                      },
                                      expression: "passNew"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Contraseña actual",
                                      type: "password",
                                      rules: [
                                        function() {
                                          return (
                                            !!_vm.passOld ||
                                            "Este campo es obligatorio."
                                          )
                                        }
                                      ]
                                    },
                                    model: {
                                      value: _vm.passOld,
                                      callback: function($$v) {
                                        _vm.passOld = $$v
                                      },
                                      expression: "passOld"
                                    }
                                  })
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.cambiarData()
                                    }
                                  }
                                },
                                [_vm._v("Aceptar")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeChanges()
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { timeout: 2000 },
              model: {
                value: _vm.snack,
                callback: function($$v) {
                  _vm.snack = $$v
                },
                expression: "snack"
              }
            },
            [_vm._v(" \n      Parece que algo salio mal\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e& ***!
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "500" },
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
        { staticClass: "mx-auto" },
        [
          _c("v-card-title", [_vm._v("\n            ¡ADVERTENCIA!\n        ")]),
          _vm._v(" "),
          _c("v-card-subtitle", [
            _vm._v("Esta acción es irreversible, ¿estas seguro?.")
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
                  on: {
                    click: function($event) {
                      return _vm.aceptar()
                    }
                  }
                },
                [_vm._v("Aceptar")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.changeWarning()
                    }
                  }
                },
                [_vm._v("Cancelar")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: 2000 },
          model: {
            value: _vm.snack,
            callback: function($$v) {
              _vm.snack = $$v
            },
            expression: "snack"
          }
        },
        [_vm._v(" \n  Parece que algo salio mal\n")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        "v-list",
        { attrs: { subheader: "", "two-line": "" } },
        [
          _c("v-subheader", [_vm._v("Opciones de Usuario")]),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.changeChanges()
                }
              }
            },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [_vm._v("Actualizar datos")]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [_vm._v("Cambiar la contraseña")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.eraseData()
                }
              }
            },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [_vm._v("Borrar datos")]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm._v(
                      "\n            Reiniciar todo el progreso en todos los juegos de Chemistry For\n            Dummies (Acción irreversible)\n          "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.deleteData()
                }
              }
            },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [_vm._v("Eliminar cuenta")]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm._v(
                      "\n            Borrrar cuenta de usuario de Chemistry For Dummies (Acción\n            irreversible)\n          "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.warningDialog
            ? _c("Warning", { attrs: { ruta: _vm.ruta } })
            : _vm._e(),
          _vm._v(" "),
          _vm.changesDialog ? _c("Update") : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { flat: "", subheader: "", "two-line": "" } },
        [
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.changeReport()
                }
              }
            },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [_vm._v("Reportar Error")]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm._v("Reportar alguna anomalia en el sistema.")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.reportDialog ? _c("Report") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ui/src/components/Report.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Report.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=2d195592& */ "./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=2d195592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Report.vue?vue&type=template&id=2d195592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2d195592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/UpdateData.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/ui/src/components/UpdateData.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateData.vue?vue&type=template&id=3ff3941e& */ "./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e&");
/* harmony import */ var _UpdateData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateData.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/UpdateData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateData.vue?vue&type=template&id=3ff3941e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/UpdateData.vue?vue&type=template&id=3ff3941e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateData_vue_vue_type_template_id_3ff3941e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/components/Warning.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Warning.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Warning.vue?vue&type=template&id=6ab8252e& */ "./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e&");
/* harmony import */ var _Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Warning.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/components/Warning.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Warning.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Warning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Warning.vue?vue&type=template&id=6ab8252e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/components/Warning.vue?vue&type=template&id=6ab8252e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_6ab8252e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/src/views/Options.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ui/src/views/Options.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.vue?vue&type=template&id=91728cfc& */ "./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc&");
/* harmony import */ var _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/src/views/Options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=template&id=91728cfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/src/views/Options.vue?vue&type=template&id=91728cfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_91728cfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);