(function() {
var exports = {};
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4953);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3844);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function ResetPage() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: emailChecked,
    1: setEmailChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default())}/api/reset`, {
        email
      });
      setEmailChecked(true);
    } catch (error) {
      setErrorMsg((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(error));
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, emailChecked ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    icon: "mail",
    header: "Check Your Inbox",
    content: "Please check your inbox for further instructions",
    success: true
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    icon: "settings",
    header: "Reset Password",
    color: "teal"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    fluid: true,
    icon: "mail outline",
    type: "email",
    iconPosition: "left",
    label: "Email",
    placeholder: "Enter email address",
    name: "email",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: loading || email.length === 0,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "Submit"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ResetPage);

/***/ }),

/***/ 4953:
/***/ (function(module) {

const baseUrl =  false ? 0 : "https://sociabliss.onrender.com";
module.exports = baseUrl;

/***/ }),

/***/ 3844:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["Z"] = (catchErrors);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(754));
module.exports = __webpack_exports__;

})();