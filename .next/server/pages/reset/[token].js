(function() {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 2710:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4953);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3844);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TokenPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: newPassword,
    1: setNewPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    field1: "",
    field2: ""
  });
  const {
    field1,
    field2
  } = newPassword;
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (field1 !== field2) {
        return setErrorMsg("Passwords do not match");
      }

      await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/reset/token`, {
        password: field1,
        token: router.query.token
      });
      setSuccess(true);
    } catch (error) {
      setErrorMsg((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(error));
    }

    setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, success ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    attached: true,
    success: true,
    size: "large",
    header: "Password reset successfull",
    icon: "check",
    content: "Login Again",
    style: {
      cursor: "pointer"
    },
    onClick: () => router.push("/login")
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    attached: true,
    icon: "settings",
    header: "Reset Password",
    color: "teal"
  }), !success && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "New Password",
    placeholder: "Enter new Password",
    name: "field1",
    onChange: handleChange,
    value: field1,
    required: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "Confirm Password",
    placeholder: "Confirm new Password",
    name: "field2",
    onChange: handleChange,
    value: field2,
    required: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: field1 === "" || field2 === "" || loading,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "Reset"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenPage);

/***/ }),

/***/ 4953:
/***/ (function(module) {

const baseUrl = "http://localhost:3000";
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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2710));
module.exports = __webpack_exports__;

})();