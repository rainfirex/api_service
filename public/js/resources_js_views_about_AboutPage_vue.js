"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_about_AboutPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header */ "./resources/js/components/Header.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "About",
  components: {
    Header: _components_Header__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    return {
      title: 'О приложении'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6a50242a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "mt-3 mb-4 text-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-6 offset-3\" data-v-6a50242a><h3 data-v-6a50242a>Backend</h3><div data-v-6a50242a><p class=\"ml-2\" data-v-6a50242a>Необходимо реализовать REST API интерфейс для работы с сущностью «оборудование».</p><table class=\"table\" data-v-6a50242a><thead data-v-6a50242a><tr data-v-6a50242a><td data-v-6a50242a>#</td><td data-v-6a50242a>Роут</td><td data-v-6a50242a>Действие</td></tr></thead><tbody data-v-6a50242a><tr data-v-6a50242a><td data-v-6a50242a>1</td><td data-v-6a50242a>GET:/api/equipment</td><td data-v-6a50242a>Вывод пагинированного списка оборудования с возможностью поиска путем указания query параметров советующим ключам ответа</td></tr><tr data-v-6a50242a><td data-v-6a50242a>2</td><td data-v-6a50242a>GET:/api/equipment/{id}</td><td data-v-6a50242a>Запрос данных по id</td></tr><tr data-v-6a50242a><td data-v-6a50242a>3</td><td data-v-6a50242a>POST:/api/equipment</td><td data-v-6a50242a>Создание новой(ых) записи(ей)</td></tr><tr data-v-6a50242a><td data-v-6a50242a>4</td><td data-v-6a50242a>PUT:/api/equipment/{id}</td><td data-v-6a50242a>Редактирование записи</td></tr><tr data-v-6a50242a><td data-v-6a50242a>5</td><td data-v-6a50242a>DELETE:/api/equipment/{id}</td><td data-v-6a50242a>Удаление записи</td></tr><tr data-v-6a50242a><td data-v-6a50242a>6</td><td data-v-6a50242a>GET:/api/equipment-type</td><td data-v-6a50242a>Вывод пагинированного списка типов оборудования с возможностью поиска путем указания query параметров советующим ключам ответа</td></tr></tbody></table><p data-v-6a50242a>Для хранения информации об оборудовании используется 2 таблицы в базе данных (использовать MySQL):</p><ol data-v-6a50242a><li data-v-6a50242a>«Тип оборудования» поля: код, наименование типа, маска серийного номера.</li><li data-v-6a50242a>«Оборудование» поля: код, код типа оборудования, серийный номер (уникальное поле), примечание.</li></ol><p data-v-6a50242a>При создании новых записей в поле «серийный номер» интерфейс принимает массив номеров каждый из которых валидируется на соответствие маске и отсутствие в таблице «оборудование» в качестве уникального ключа. Создание может быть как по одному объекту, так и коллекция (на входе json-массив).</p><p data-v-6a50242a>Если «серийный номер» не проходит валидацию, по нему формируется соответствующие сообщение, которое возвращает интерфейс, после обработки всего массива номеров.</p><table class=\"table\" data-v-6a50242a><thead data-v-6a50242a><tr data-v-6a50242a><td data-v-6a50242a>id</td><td data-v-6a50242a>Тип оборудования</td><td data-v-6a50242a>Маска SN</td></tr></thead><tbody data-v-6a50242a><tr data-v-6a50242a><td data-v-6a50242a>1</td><td data-v-6a50242a>TP-Link TL-WR74</td><td data-v-6a50242a>XXAAAAAXAA</td></tr><tr data-v-6a50242a><td data-v-6a50242a>2</td><td data-v-6a50242a>D-Link DIR-300</td><td data-v-6a50242a>NXXAAXZXaa</td></tr><tr data-v-6a50242a><td data-v-6a50242a>3</td><td data-v-6a50242a>D-Link DIR-300 S</td><td data-v-6a50242a>NXXAAXZXXX</td></tr></tbody></table><p data-v-6a50242a>Где:</p><ul data-v-6a50242a><li data-v-6a50242a>N – цифра от 0 до 9;</li><li data-v-6a50242a>A – прописная буква латинского алфавита;</li><li data-v-6a50242a>a – строчная буква латинского алфавита;</li><li data-v-6a50242a>X – прописная буква латинского алфавита либо цифра от 0 до 9;</li><li data-v-6a50242a>Z –символ из списка: “-“, “_”, “@”.</li></ul><h2 data-v-6a50242a>Обязательные требования:</h2><ol data-v-6a50242a><li data-v-6a50242a>использование фреймворка Laravel v.8+.</li><li data-v-6a50242a>наличие PHPDoc для всех методов</li><li data-v-6a50242a>использование Form Request Validation</li><li data-v-6a50242a>все запросы API должны быть авторизованы (проверка Bearer Authentication)</li><li data-v-6a50242a>все ответы API должны использовать API Resources &amp; Resource Collections</li><li data-v-6a50242a>вся бизнес-логика манипуляции с данными должна быть инкапсулирована в моделях и сервисном слое приложения (контроллеры должны быть плоскими)</li></ol><h2 data-v-6a50242a>Материалы для решения задачи:</h2><ul data-v-6a50242a><li data-v-6a50242a><a href=\"https://www.php.net/\" target=\"_blank\" data-v-6a50242a>PHP: https://www.php.net/</a></li><li data-v-6a50242a><a href=\"https://laravel.com/\" target=\"_blank\" data-v-6a50242a>Laravel https://laravel.com/</a></li><li data-v-6a50242a><a href=\"http://www.mysql.com/downloads/mysql/\" target=\"_blank\" data-v-6a50242a>MySQL Server (http://www.mysql.com/downloads/mysql/)</a></li><li data-v-6a50242a><a href=\"https://regex101.com/\" target=\"_blank\" data-v-6a50242a>regex101 (https://regex101.com/)</a></li></ul></div><h3 data-v-6a50242a>Frontend</h3><div data-v-6a50242a><p data-v-6a50242a>Для отображения сделать минимальное SPA-приложение с использованием Vue.js, работающее с разработанным API.</p><h2 data-v-6a50242a>Форма добавления записей, содержащая:</h2><ol data-v-6a50242a><li data-v-6a50242a>Список «Тип оборудования» (id типа) select.</li><li data-v-6a50242a>Поле «Серийные номера» input-text/textarea.</li><li data-v-6a50242a>Поле «Примечание» textarea</li><li data-v-6a50242a>Кнопка «Добавить».</li></ol><h2 data-v-6a50242a>Форма поиска, редактирования и удаления записей:</h2><ol data-v-6a50242a><li data-v-6a50242a>Поисковая строка input-text, для поиск по серийному номеру/примечанию.</li><li data-v-6a50242a>Поле «Код оборудования» (id) — input-text.</li><li data-v-6a50242a>Поле «Тип оборудования» (наименование) — input-text/select.</li><li data-v-6a50242a>Поле «Серийный номер» — input-text.</li><li data-v-6a50242a>Поле «Примечание» — input-text/textarea.</li><li data-v-6a50242a>Кнопки редактировать/сохранить/удалить в зависимости от выдранного режима (просмотр/редактирование).</li></ol><p class=\"mb-0\" data-v-6a50242a>В качестве ui kit можно использовать любой готовый фреймворк/библиотеку.</p><p class=\"mb-0\" data-v-6a50242a>Редактирование может быть реализовано как в целом всех полей, так и отдельными полями.</p><p class=\"mb-0\" data-v-6a50242a>Для всех форм обязательно наличие минимальной валидации данных на стороне клиента.</p></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  ), _hoisted_2]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p[data-v-6a50242a] {\n  text-indent: 30px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_style_index_0_id_6a50242a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_style_index_0_id_6a50242a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_style_index_0_id_6a50242a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/about/AboutPage.vue":
/*!************************************************!*\
  !*** ./resources/js/views/about/AboutPage.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutPage_vue_vue_type_template_id_6a50242a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=template&id=6a50242a&scoped=true */ "./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true");
/* harmony import */ var _AboutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=script&lang=js */ "./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js");
/* harmony import */ var _AboutPage_vue_vue_type_style_index_0_id_6a50242a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true */ "./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true");
/* harmony import */ var _var_www_lar_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_lar_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AboutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutPage_vue_vue_type_template_id_6a50242a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6a50242a"],['__file',"resources/js/views/about/AboutPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_template_id_6a50242a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_template_id_6a50242a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutPage.vue?vue&type=template&id=6a50242a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=template&id=6a50242a&scoped=true");


/***/ }),

/***/ "./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutPage_vue_vue_type_style_index_0_id_6a50242a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/about/AboutPage.vue?vue&type=style&index=0&id=6a50242a&lang=scss&scoped=true");


/***/ })

}]);