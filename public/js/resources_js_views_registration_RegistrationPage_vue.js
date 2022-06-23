"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_registration_RegistrationPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Registration",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['isLoading'])),
  data: function data() {
    return {
      title: 'Регистрация',
      user: {
        email: '',
        password: '',
        password2: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.user.email === '') {
        this.$store.commit('setDialog', {
          text: "Укажите почту.",
          isError: true
        });
        return;
      } else if (this.user.password === '') {
        this.$store.commit('setDialog', {
          text: "Укажите пароль.",
          isError: true
        });
        return;
      } else if (this.user.password.length < 6) {
        this.$store.commit('setDialog', {
          text: "Длина пароля должна быть минимум 6 символов.",
          isError: true
        });
        return;
      } else if (this.user.password2 === '') {
        this.$store.commit('setDialog', {
          text: "Укажите еще раз пароль.",
          isError: true
        });
        return;
      } else if (this.user.password2.length < 6) {
        this.$store.commit('setDialog', {
          text: "Длина пароля должна быть минимум 6 символов.",
          isError: true
        });
        return;
      } else if (this.user.password !== this.user.password2) {
        this.$store.commit('setDialog', {
          text: "Пароли не совпадают",
          isError: true
        });
        return;
      }

      var frmData = new FormData();
      frmData.append('email', this.user.email);
      frmData.append('password', this.user.password);
      this.$store.commit('setIsLoading', true);
      this.$store.commit('setDialog', {});
      axios.post("/api/user/reg", frmData).then(function (response) {
        if (response.data.error) {
          _this.$store.commit('setDialog', {
            text: response.data.error,
            isError: true
          });
        } else if (response.data.message === "Validation errors") {
          var errors = [response.data.data.email ? response.data.data.email.join(', ') : '', response.data.data.password ? response.data.data.password.join(', ') : ''];

          _this.$store.commit('setDialog', {
            text: errors.join(' '),
            isError: true
          });
        } else {
          _this.$store.commit('setDialog', {
            text: "Учетная запись зарегистрирована.",
            isError: false
          });

          _this.user = {
            email: '',
            password: '',
            password2: ''
          };

          _this.$router.push({
            name: 'auth'
          });
        }
      })["catch"](function (e) {
        _this.$store.commit('setDialog', {
          text: e.message,
          isError: true
        });
      })["finally"](function () {
        _this.$store.commit('setIsLoading', false);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-3 mb-4 text-center"
};
var _hoisted_2 = {
  "class": "col-6 offset-3"
};
var _hoisted_3 = {
  "class": "form-group"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Email", -1
/* HOISTED */
);

var _hoisted_5 = ["disabled"];
var _hoisted_6 = {
  "class": "form-group"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "pass"
}, "Пароль", -1
/* HOISTED */
);

var _hoisted_8 = ["disabled"];
var _hoisted_9 = {
  "class": "form-group"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "pass2"
}, "Еще раз пароль", -1
/* HOISTED */
);

var _hoisted_11 = ["disabled"];
var _hoisted_12 = {
  "class": "text-center"
};
var _hoisted_13 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "email",
    type: "email",
    "class": "form-control",
    disabled: _ctx.isLoading,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.user.email = $event;
    })
  }, null, 8
  /* PROPS */
  , _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "pass",
    type: "password",
    "class": "form-control",
    disabled: _ctx.isLoading,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.user.password = $event;
    })
  }, null, 8
  /* PROPS */
  , _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "pass2",
    type: "password",
    "class": "form-control",
    disabled: _ctx.isLoading,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.user.password2 = $event;
    })
  }, null, 8
  /* PROPS */
  , _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.password2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-dark",
    disabled: _ctx.isLoading
  }, "Зарегистрироваться", 8
  /* PROPS */
  , _hoisted_13)])])], 32
  /* HYDRATE_EVENTS */
  )])]);
}

/***/ }),

/***/ "./resources/js/views/registration/RegistrationPage.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/registration/RegistrationPage.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistrationPage_vue_vue_type_template_id_458f2e2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationPage.vue?vue&type=template&id=458f2e2f */ "./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f");
/* harmony import */ var _RegistrationPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationPage.vue?vue&type=script&lang=js */ "./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_lar_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_lar_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegistrationPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegistrationPage_vue_vue_type_template_id_458f2e2f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/registration/RegistrationPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationPage_vue_vue_type_template_id_458f2e2f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationPage_vue_vue_type_template_id_458f2e2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationPage.vue?vue&type=template&id=458f2e2f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/registration/RegistrationPage.vue?vue&type=template&id=458f2e2f");


/***/ })

}]);